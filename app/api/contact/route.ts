import { NextResponse } from "next/server";
import { Resend } from "resend";

import { contactSchema } from "@/content/contact";

/**
 * Contact form handler. Validates with the shared Zod schema and emails the
 * submission via Resend (RESEND_API_KEY, set in .env.local).
 *
 * If RESEND_API_KEY is missing (e.g. local dev without the key), submissions
 * are logged server-side and the form still returns success so the UX works.
 *
 * TODO before launch: swap FROM_ADDRESS to a sender on the ultra-pros.com
 * domain once it's verified in Resend (using Resend's shared onboarding
 * sender for now).
 */
const CONTACT_INBOX = "ultraprospeshawar@gmail.com"; // destination inbox for form leads
const FROM_ADDRESS = "Ultra Pros Website <onboarding@resend.dev>"; // TODO: verified ultra-pros.com sender

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 },
    );
  }

  const data = parsed.data;
  const body = [
    `Name:                 ${data.name}`,
    `Email:                ${data.email}`,
    `Phone:                ${data.phone || "—"}`,
    `Company:              ${data.company || "—"}`,
    `Service interested in: ${data.service}`,
    `Budget range:         ${data.budget}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No email provider configured yet — log and succeed (dev fallback).
    console.warn("[contact] RESEND_API_KEY not set — submission logged only:\n" + body);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: CONTACT_INBOX,
      replyTo: data.email,
      subject: `New consultation request from ${data.name}`,
      text: body,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("[contact] Resend send failed:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}

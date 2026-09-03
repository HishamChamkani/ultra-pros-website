import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

/**
 * Newsletter signup handler. Validates the email with Zod and adds the address
 * as a contact in a Resend Audience (RESEND_API_KEY + RESEND_AUDIENCE_ID, both
 * set in .env.local, server-side only, never exposed to the client).
 *
 * If either env var is missing (e.g. local dev without Resend configured), the
 * signup is logged server-side and still returns success so the UX works.
 */
const emailSchema = z.object({
  email: z.string().trim().email(),
});

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = emailSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }

  const { email } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  // Dev fallback: without Resend fully configured, log and succeed.
  if (!apiKey || !audienceId) {
    console.warn(
      `[newsletter] Resend not fully configured, signup logged only: ${email}`,
    );
    return NextResponse.json({ ok: true, subscribed: false });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });
    if (error) throw error;
    return NextResponse.json({ ok: true, subscribed: true });
  } catch (error) {
    console.error("[newsletter] Resend contact create failed:", error);
    return NextResponse.json(
      { error: "Couldn't subscribe you right now. Please try again." },
      { status: 502 },
    );
  }
}

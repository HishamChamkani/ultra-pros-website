"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  contactSchema,
  serviceOptions,
  budgetOptions,
  type ContactFormValues,
} from "@/content/contact";

type Status = "idle" | "submitting" | "success" | "error";

const inputBase =
  "h-11 w-full rounded-md border bg-white px-3 text-brand-navy placeholder:text-brand-text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-sm text-brand-error">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-brand-success/30 bg-brand-success/5 p-8">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-success/10 text-brand-success">
          <CheckCircle2 className="h-6 w-6" aria-hidden />
        </span>
        <div>
          <h3 className="font-heading text-xl font-bold text-brand-navy">
            Thanks — we&rsquo;ve got it.
          </h3>
          <p className="mt-2 text-brand-text-secondary">
            A strategist will get back to you within one business day. In a hurry?
            Book a consultation and grab a time directly.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="font-heading text-sm font-semibold text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const borderFor = (hasError: boolean) =>
    hasError ? "border-brand-error" : "border-brand-border";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {status === "error" ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-md border border-brand-error/30 bg-brand-error/5 p-4 text-sm text-brand-navy"
        >
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-error" aria-hidden />
          <span>
            Something went wrong sending your message. Please try again, or email
            us directly.
          </span>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-brand-navy">
            Name <span className="text-brand-error">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputBase, borderFor(!!errors.name))}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-navy">
            Email <span className="text-brand-error">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(inputBase, borderFor(!!errors.email))}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-brand-navy">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+92 300 0000000"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(inputBase, borderFor(!!errors.phone))}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>

        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-brand-navy">
            Company
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder="Company Inc."
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
            className={cn(inputBase, borderFor(!!errors.company))}
            {...register("company")}
          />
          <FieldError id="company-error" message={errors.company?.message} />
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-brand-navy">
            Service interested in <span className="text-brand-error">*</span>
          </label>
          <select
            id="service"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            className={cn(inputBase, borderFor(!!errors.service))}
            defaultValue=""
            {...register("service")}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="service-error" message={errors.service?.message} />
        </div>

        <div>
          <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-brand-navy">
            Budget range <span className="text-brand-error">*</span>
          </label>
          <select
            id="budget"
            aria-invalid={!!errors.budget}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            className={cn(inputBase, borderFor(!!errors.budget))}
            defaultValue=""
            {...register("budget")}
          >
            <option value="" disabled>
              Select a range…
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="budget-error" message={errors.budget?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-navy">
          Message <span className="text-brand-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your goals and what you're looking for…"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            "w-full rounded-md border bg-white px-3 py-2.5 text-brand-navy placeholder:text-brand-text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow",
            borderFor(!!errors.message),
          )}
          {...register("message")}
        />
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full sm:w-auto")}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

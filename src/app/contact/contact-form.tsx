"use client";

import { useActionState } from "react";
import { CheckCircle } from "lucide-react";
import { submitContact, type FormState } from "./actions";

const projectTypes = [
  "Business Website",
  "Landing Page",
  "Website Redesign",
  "Cloud Deployment",
  "Other",
] as const;

const budgetRanges = [
  "Under $2,000",
  "$2,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
] as const;

const initialState: FormState = { success: false, errors: {} };

const inputClass =
  "w-full h-10 px-3.5 text-sm rounded-md border border-border bg-surface text-fg placeholder:text-muted/60 focus:outline-none focus:border-border-hover transition-colors";

const selectClass = `${inputClass} appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 fill=%22none%22 stroke=%22%23888%22 stroke-width=%221.5%22><path d=%22m2 4 4 4 4-4%22/></svg>')] bg-[length:12px_12px] bg-[right_12px_center] bg-no-repeat pr-9 [&_option]:bg-surface [&_option]:text-fg`;

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState
  );

  if (state.success) {
    return (
      <div
        data-od-id="contact-success"
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
          <CheckCircle size={24} className="text-accent" />
        </div>
        <h2 className="text-xl font-semibold tracking-[-0.01em] text-fg mb-2">
          Thanks for reaching out.
        </h2>
        <p className="text-sm text-muted max-w-sm leading-relaxed">
          I&rsquo;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} data-od-id="contact-form" className="flex flex-col gap-5">
      <FormField label="Name" required error={state.errors.name}>
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </FormField>

      <FormField label="Email" required error={state.errors.email}>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </FormField>

      <FormField label="Project Type">
        <select name="projectType" defaultValue="" className={selectClass}>
          <option value="" disabled>
            Select a type
          </option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Budget Range">
        <select name="budget" defaultValue="" className={selectClass}>
          <option value="" disabled>
            Select a range
          </option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Message" required error={state.errors.message}>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project, goals, and timeline..."
          className={inputClass}
        />
      </FormField>

      <button
        type="submit"
        disabled={isPending}
        data-od-id="contact-submit"
        className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium tracking-[0.02em] rounded-md bg-accent text-white hover:bg-accent-hover transition-colors self-start mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

/* ---- Helpers ---- */

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium tracking-[0.02em] text-muted">
        {label}
        {required && (
          <span className="text-accent ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </span>
      {children}
      {error && (
        <span className="text-xs text-danger mt-0.5" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}

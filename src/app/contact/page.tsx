import type { Metadata } from "next";
import { Mail, Globe, Clock } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your project. I'll respond within 24–48 hours.",
  openGraph: {
    title: "Contact — Hann Chen",
    description:
      "Get in touch to discuss your project. I'll respond within 24–48 hours.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact — Hann Chen",
    description:
      "Get in touch to discuss your project. I'll respond within 24–48 hours.",
  },
};

export default function ContactPage() {
  return (
    <div
      data-od-id="contact-page"
      className="px-[--container-px] pt-24 pb-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        {/* ---- Header ---- */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-4">
            Contact
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg">
            Let&rsquo;s build something great together.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-lg leading-relaxed">
            Tell me about your project and I&rsquo;ll get back to you.
          </p>
        </div>

        {/* ---- Two Columns ---- */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
          {/* ---- Form ---- */}
          <ContactForm />

          {/* ---- Contact Info ---- */}
          <aside
            data-od-id="contact-info"
            className="lg:pt-10"
          >
            <div className="rounded-lg border border-border bg-surface p-6 space-y-6">
              <InfoRow icon={Mail} label="Email">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-muted hover:text-fg transition-colors"
                >
                  {CONTACT.email}
                </a>
              </InfoRow>

              <InfoRow icon={Globe} label="Location">
                <p className="text-sm text-muted">
                  {CONTACT.location}
                </p>
              </InfoRow>

              <InfoRow icon={Clock} label="Response Time">
                <p className="text-sm text-muted">
                  Within 24–48 hours
                </p>
              </InfoRow>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 w-8 h-8 rounded-md flex items-center justify-center bg-accent/10 text-accent shrink-0">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-xs font-medium tracking-[0.02em] text-muted mb-0.5">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}

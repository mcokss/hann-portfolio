import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, Target, RefreshCw, Cloud } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web solutions built with modern technology. Business websites, landing pages, redesigns, and cloud deployment.",
  openGraph: {
    title: "Services — Hann Chen",
    description:
      "Web solutions built with modern technology. Business websites, landing pages, redesigns, and cloud deployment.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Services — Hann Chen",
    description:
      "Web solutions built with modern technology. Business websites, landing pages, redesigns, and cloud deployment.",
  },
};

const serviceIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  "business-websites": Building2,
  "landing-pages": Target,
  "website-redesign": RefreshCw,
  "cloud-deployment": Cloud,
};

const serviceNumbers = ["01", "02", "03", "04"] as const;

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We discuss your goals, audience, and requirements to shape the right solution.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Creating clean, focused interfaces that prioritize clarity and user experience.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Developing with modern frameworks and AI tools to accelerate delivery.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "Your site goes live with clean handoff, documentation, and deployment support.",
  },
] as const;

export default function ServicesPage() {
  return (
    <div
      data-od-id="services-page"
      className="px-[--container-px] pt-24 pb-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        {/* ---- Header ---- */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-5">
            Services
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg max-w-2xl">
            Web solutions built with modern technology.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
            I help businesses and individuals create fast, modern websites
            with AI-assisted workflows.
          </p>
        </div>

        {/* ---- Service Cards ---- */}
        <section
          data-od-id="services-list"
          className="mb-[--section-gap] space-y-8"
        >
          {SERVICES.map((service, i) => {
            const Icon = serviceIcons[service.id];
            const num = serviceNumbers[i];
            return (
              <article
                key={service.id}
                id={service.id}
                data-od-id={`service-detail-${service.id}`}
                className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 p-6 sm:p-8 rounded-lg border border-border bg-surface"
              >
                {/* Number + Icon */}
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-4">
                  <span className="font-mono text-3xl font-semibold tracking-[-0.02em] text-accent/25 select-none tabular-nums">
                    {num}
                  </span>
                  {Icon && (
                    <div className="w-9 h-9 rounded-md flex items-center justify-center bg-accent/10 text-accent">
                      <Icon size={18} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold tracking-[-0.01em] text-fg mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <p className="text-xs font-medium tracking-[0.02em] text-muted uppercase mb-2">
                    Suitable for
                  </p>
                  <p className="text-sm text-fg/80 leading-relaxed mb-4">
                    {service.suitableFor}
                  </p>

                  <p className="text-xs font-medium tracking-[0.02em] text-muted uppercase mb-2">
                    Includes
                  </p>
                  <ul className="space-y-1.5">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-[0.35em] w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="md:flex md:flex-col md:justify-end">
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium tracking-[0.02em] text-accent hover:text-accent-hover transition-colors"
                  >
                    Discuss this service
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        {/* ---- My Process ---- */}
        <section
          data-od-id="services-process"
          className="mb-[--section-gap]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.01em] text-fg mb-8">
            My Process
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {processSteps.map((s) => (
              <div
                key={s.step}
                data-od-id={`svc-process-${s.step}`}
                className="flex flex-col gap-3 p-6 rounded-lg border border-border bg-surface"
              >
                <span className="font-mono text-3xl font-semibold tracking-[-0.02em] text-accent/25 select-none">
                  {s.step}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-[-0.01em] text-fg mb-1">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- CTA ---- */}
        <div
          data-od-id="services-cta"
          className="rounded-lg border border-border bg-surface px-6 py-10 sm:px-10 sm:py-14 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.01em] text-fg mb-3">
            Need a website?
          </h2>
          <p className="text-sm text-muted mb-6 max-w-sm mx-auto">
            Let&rsquo;s discuss your project.
          </p>
          <Link
            href="/contact"
            data-od-id="services-cta-button"
            className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium tracking-[0.02em] rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}

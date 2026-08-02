import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "I build modern websites with AI-powered workflows and modern web technologies.",
  openGraph: {
    title: "About — Hann Chen",
    description:
      "I build modern websites with AI-powered workflows and modern web technologies.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "About — Hann Chen",
    description:
      "I build modern websites with AI-powered workflows and modern web technologies.",
  },
};

const approachSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding goals, users, and requirements.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Creating clean interfaces focused on clarity and usability.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Using modern frameworks and AI tools to accelerate development.",
  },
  {
    step: "04",
    title: "Improve",
    description: "Iterating based on feedback and real usage.",
  },
] as const;

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "AI-assisted workflow",
  "Cloud deployment",
] as const;

export default function AboutPage() {
  return (
    <div
      data-od-id="about-page"
      className="px-[--container-px] pt-24 pb-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        {/* ---- Header ---- */}
        <div className="mb-16">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-5">
            About
          </p>

          <p className="text-sm text-muted mb-3">
            Hi, I&rsquo;m Hann.
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg max-w-2xl">
            Building modern websites with AI-powered workflows.
          </h1>

          <p className="mt-5 text-sm sm:text-base text-muted max-w-xl leading-relaxed">
            I create fast, modern websites using AI-assisted development
            workflows and modern web technologies.
          </p>
        </div>

        {/* ---- My Approach ---- */}
        <section
          data-od-id="about-approach"
          className="mb-[--section-gap]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.01em] text-fg mb-8">
            My Approach
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {approachSteps.map((s) => (
              <div
                key={s.step}
                data-od-id={`approach-${s.step}`}
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

        {/* ---- Technology ---- */}
        <section
          data-od-id="about-tech"
          className="mb-[--section-gap]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.01em] text-fg mb-6">
            Technology
          </h2>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center px-3 py-1.5 text-sm rounded-md border border-border bg-surface text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ---- CTA ---- */}
        <div
          data-od-id="about-cta"
          className="rounded-lg border border-border bg-surface px-6 py-10 sm:px-10 sm:py-14 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-semibold tracking-[-0.01em] text-fg mb-3">
            Have a project in mind?
          </h2>
          <p className="text-sm text-muted mb-6 max-w-sm mx-auto">
            Let&rsquo;s talk about what we can build together.
          </p>
          <Link
            href="/contact"
            data-od-id="about-cta-button"
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

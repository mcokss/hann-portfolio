import type { Metadata } from "next";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real projects and experiments built with modern web technologies.",
  openGraph: {
    title: "Work — Hann Chen",
    description:
      "Real projects and experiments built with modern web technologies.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Work — Hann Chen",
    description:
      "Real projects and experiments built with modern web technologies.",
  },
};

export default function WorkPage() {
  return (
    <div
      data-od-id="work-page"
      className="px-[--container-px] pt-24 pb-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        {/* ---- Header ---- */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-4">
            Work
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg">
            Selected Projects
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-lg leading-relaxed">
            Real projects and experiments built with modern web technologies.
          </p>
        </div>

        {/* ---- 3-Column Grid ---- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project) => (
            <article
              key={project.id}
              data-od-id={`work-card-${project.id}`}
              className="group flex flex-col rounded-lg border border-border bg-surface overflow-hidden hover:border-border-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <ProjectCard project={project} headingTag="h2" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

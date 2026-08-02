import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const statusStyle: Record<string, string> = {
  "In Progress": "bg-accent/15 text-accent border-accent/25",
  "Concept Project": "bg-surface-elevated text-fg/70 border-border",
  "AI Concept": "bg-accent/10 text-accent border-accent/20",
};

type Project = {
  id: string;
  title: string;
  status: string;
  category: string;
  description: string;
  tech: readonly string[];
  image: string;
};

type Props = {
  project: Project;
  headingTag?: "h2" | "h3";
};

export function ProjectCard({ project, headingTag = "h3" }: Props) {
  const Heading = headingTag;

  return (
    <>
      {/* ---- Image ---- */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-elevated">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* ---- Content ---- */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Badges row */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-[0.02em] rounded-full border bg-surface-elevated text-fg/75 border-border">
            {project.category}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-[0.02em] rounded-full border ${statusStyle[project.status]}`}
          >
            {project.status}
          </span>
        </div>

        {/* Title */}
        <Heading className="text-base sm:text-lg font-semibold tracking-[-0.01em] text-fg mb-2">
          {project.title}
        </Heading>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2 py-0.5 text-xs font-mono text-fg/75 rounded bg-surface-elevated border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          disabled
          title="Project details will be available soon."
          aria-label="Project details will be available soon."
          className="inline-flex items-center justify-center gap-1.5 w-full h-9 text-xs font-medium tracking-[0.02em] rounded-md border border-border text-muted cursor-not-allowed"
        >
          Coming Soon
          <ArrowUpRight size={12} />
        </button>
      </div>
    </>
  );
}

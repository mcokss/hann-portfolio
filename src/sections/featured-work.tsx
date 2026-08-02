"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { staggerFadeInUp } from "@/lib/animations";
import { ProjectCard } from "@/components/project-card";

const cardVariants = staggerFadeInUp(24, 0.1, 0.5);

export function FeaturedWork() {
  return (
    <section
      data-od-id="featured-work"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      className="px-[--container-px] py-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        {/* ---- Section Header ---- */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg">
            What I&rsquo;ve Built
          </h2>
          <p className="mt-3 text-sm text-muted max-w-lg">
            Honest projects — no fake client work. Each one represents real
            skills applied to real problems.
          </p>
        </div>

        {/* ---- 3-Column Grid ---- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FEATURED_PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              custom={i}
              variants={cardVariants}
              data-od-id={`project-card-${project.id}`}
              className="group flex flex-col rounded-lg border border-border bg-surface overflow-hidden hover:border-border-hover hover:-translate-y-0.5 transition-all duration-200"
            >
              <ProjectCard project={project} headingTag="h3" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

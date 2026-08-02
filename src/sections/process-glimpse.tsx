"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerFadeInUp } from "@/lib/animations";

const stepVariants = staggerFadeInUp(16, 0.12, 0.45);

export function ProcessGlimpse() {
  return (
    <section
      data-od-id="process-glimpse"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      className="px-[--container-px] py-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        {/* ---- Section Header ---- */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-4">
            How I Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg">
            Simple, Fast, Reliable
          </h2>
          <p className="mt-3 text-sm text-muted max-w-lg">
            A streamlined process powered by AI — from conversation to
            launch in three steps.
          </p>
        </div>

        {/* ---- Steps ---- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid sm:grid-cols-3 gap-8 sm:gap-12"
        >
          {/* Connecting line — desktop only */}
          <div className="hidden sm:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-border" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              custom={i}
              variants={stepVariants}
              data-od-id={`process-step-${step.step}`}
              className="relative flex flex-col items-start"
            >
              {/* Step number + dot */}
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-4xl sm:text-5xl font-semibold tracking-[-0.02em] text-accent/25 select-none">
                  {step.step}
                </span>
                {/* Dot on timeline */}
                <div className="hidden sm:block w-2 h-2 rounded-full bg-accent/40 ring-4 ring-accent/10" />
              </div>

              {/* Dot for mobile */}
              <div className="sm:hidden w-2 h-2 rounded-full bg-accent/40 ring-4 ring-accent/10 mb-4" />

              {/* Title */}
              <h3 className="text-lg font-semibold tracking-[-0.01em] text-fg mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerFadeInUp } from "@/lib/animations";

const fadeInUp = staggerFadeInUp(16, 0.1, 0.45);

export function FinalCTA() {
  return (
    <section
      data-od-id="final-cta"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      className="px-[--container-px] py-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative rounded-lg border border-border bg-surface px-6 py-14 sm:px-12 sm:py-20 lg:py-24 text-center overflow-hidden"
        >
          {/* Subtle top accent line — one decisive flourish */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-px bg-accent/40" />

          <motion.p
            custom={0}
            variants={fadeInUp}
            className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-5"
          >
            Let&rsquo;s Work Together
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeInUp}
            className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg max-w-2xl mx-auto"
          >
            Ready to build something great?
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeInUp}
            className="mt-4 text-sm sm:text-base text-muted max-w-lg mx-auto leading-relaxed"
          >
            No commitment, just a conversation. Tell me about your project
            and I&rsquo;ll show you what&rsquo;s possible with AI-powered
            development.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
          >
            <Link
              href="/contact"
              data-od-id="final-cta-primary"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium tracking-[0.02em] rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/work"
              data-od-id="final-cta-secondary"
              className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium tracking-[0.02em] rounded-md border border-border text-fg hover:border-border-hover hover:bg-surface transition-colors"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

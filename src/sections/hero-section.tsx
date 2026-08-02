"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerFadeInUp } from "@/lib/animations";

const fadeInUp = staggerFadeInUp(24, 0.1, 0.5);

export function HeroSection() {
  return (
    <section
      data-od-id="hero"
      className="relative min-h-screen flex items-center px-[--container-px] pt-16 overflow-hidden"
    >
      {/* ---- Background texture ---- */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,var(--accent-muted),transparent)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="0.5" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="w-full max-w-[--content-max] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
        {/* ---- Text Column ---- */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          <motion.p
            custom={0}
            variants={fadeInUp}
            data-od-id="hero-eyebrow"
            className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-6"
          >
            AI-Powered Web Studio
          </motion.p>

          <motion.h1
            custom={1}
            variants={fadeInUp}
            data-od-id="hero-headline"
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.02em] text-fg leading-[1.06] max-w-xl"
          >
            Create a powerful online presence with AI.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeInUp}
            className="mt-6 text-muted max-w-lg text-base sm:text-lg leading-relaxed"
          >
            I build fast, modern websites for businesses and entrepreneurs
            using AI-powered workflows.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 mt-10"
          >
            <Link
              href="/contact"
              data-od-id="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 h-11 px-6 text-sm font-medium tracking-[0.02em] rounded-md bg-accent text-white hover:bg-accent-hover transition-colors"
            >
              Start a Project
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/work"
              data-od-id="hero-cta-secondary"
              className="inline-flex items-center justify-center h-11 px-6 text-sm font-medium tracking-[0.02em] rounded-md border border-border text-fg hover:border-border-hover hover:bg-surface transition-colors"
            >
              View My Work
            </Link>
          </motion.div>
        </motion.div>

        {/* ---- Visual Column ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex items-center justify-center"
        >
          <AbstractVisual />
        </motion.div>
      </div>
    </section>
  );
}

function AbstractVisual() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square">
      {/* Outer frame */}
      <div className="absolute inset-4 rounded-2xl border border-border bg-surface/40 backdrop-blur-sm" />

      {/* Geometric shapes */}
      <svg
        viewBox="0 0 520 520"
        className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)]"
        aria-hidden="true"
      >
        {/* Large circle — top right */}
        <circle
          cx="380"
          cy="140"
          r="90"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
        <circle
          cx="380"
          cy="140"
          r="60"
          fill="none"
          stroke="var(--border)"
          strokeOpacity="0.5"
          strokeWidth="1"
        />

        {/* Small accent dot */}
        <circle cx="380" cy="140" r="3" fill="var(--accent)" />

        {/* Horizontal lines — bottom left */}
        <line
          x1="40"
          y1="370"
          x2="220"
          y2="370"
          stroke="var(--border)"
          strokeOpacity="0.6"
          strokeWidth="1"
        />
        <line
          x1="40"
          y1="390"
          x2="180"
          y2="390"
          stroke="var(--muted)"
          strokeOpacity="0.4"
          strokeWidth="1"
        />
        <line
          x1="40"
          y1="410"
          x2="160"
          y2="410"
          stroke="var(--muted)"
          strokeOpacity="0.3"
          strokeWidth="1"
        />

        {/* Diagonal line */}
        <line
          x1="320"
          y1="380"
          x2="460"
          y2="320"
          stroke="var(--accent)"
          strokeOpacity="0.15"
          strokeWidth="1"
        />

        {/* Corner accent bar */}
        <rect
          x="40"
          y="40"
          width="60"
          height="2"
          rx="1"
          fill="var(--accent)"
          fillOpacity="0.5"
        />
        <rect
          x="40"
          y="50"
          width="40"
          height="2"
          rx="1"
          fill="var(--muted)"
          fillOpacity="0.3"
        />
        <rect
          x="40"
          y="60"
          width="50"
          height="2"
          rx="1"
          fill="var(--muted)"
          fillOpacity="0.2"
        />

        {/* Small circle cluster — bottom right */}
        <circle cx="440" cy="400" r="20" fill="none" stroke="var(--border)" strokeWidth="1" />
        <circle cx="440" cy="400" r="8" fill="var(--accent)" fillOpacity="0.2" />
        <circle cx="440" cy="400" r="2" fill="var(--accent)" fillOpacity="0.6" />

        {/* Grid corner — top left */}
        <rect
          x="40"
          y="100"
          width="32"
          height="32"
          fill="none"
          stroke="var(--border)"
          strokeOpacity="0.3"
          rx="4"
        />
        <rect
          x="80"
          y="100"
          width="32"
          height="32"
          fill="none"
          stroke="var(--border)"
          strokeOpacity="0.3"
          rx="4"
        />
        <rect
          x="40"
          y="140"
          width="32"
          height="32"
          fill="none"
          stroke="var(--border)"
          strokeOpacity="0.3"
          rx="4"
        />
        <rect
          x="80"
          y="140"
          width="32"
          height="32"
          fill="var(--accent)"
          fillOpacity="0.08"
          rx="4"
        />
      </svg>

      {/* Accent glow spot */}
      <div className="absolute top-[25%] right-[25%] w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
    </div>
  );
}

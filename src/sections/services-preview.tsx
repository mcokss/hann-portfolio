"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Building2, Target, RefreshCw, Cloud, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { staggerFadeInUp } from "@/lib/animations";

const serviceIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  "business-websites": Building2,
  "landing-pages": Target,
  "website-redesign": RefreshCw,
  "cloud-deployment": Cloud,
};

const cardVariants = staggerFadeInUp(24, 0.08, 0.45);

export function ServicesPreview() {
  return (
    <section
      data-od-id="services-preview"
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
      className="px-[--container-px] py-[--section-gap]"
    >
      <div className="mx-auto max-w-[--content-max]">
        {/* ---- Section Header ---- */}
        <div className="mb-14">
          <p className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-4">
            What I Build
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] text-fg">
            Services
          </h2>
        </div>

        {/* ---- 2×2 Grid ---- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {SERVICES.map((service, i) => {
            const Icon = serviceIcons[service.id];
            return (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                data-od-id={`service-card-${service.id}`}
                className="group relative flex flex-col p-6 sm:p-8 rounded-lg border border-border bg-surface hover:border-border-hover hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Icon */}
                {Icon && (
                  <div className="mb-5 w-10 h-10 rounded-md flex items-center justify-center bg-accent/10 text-accent">
                    <Icon size={20} />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-fg mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed max-w-xs">
                  {service.description}
                </p>

                {/* Learn more link — visible on hover */}
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1.5 mt-5 text-xs font-medium text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Learn more
                  <ArrowRight size={12} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

import { SITE } from "@/lib/constants";

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE.name} — ${SITE.title}`,
    url: SITE.url,
    description: SITE.description,
    inLanguage: SITE.locale,
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    url: SITE.url,
    jobTitle: "AI-powered Web Developer",
    sameAs: ["https://github.com/hannchen"],
    knowsAbout: [
      "Web Development",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Cloud Deployment",
    ],
  },
] as const;

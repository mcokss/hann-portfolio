export const SITE = {
  name: "Hann Chen",
  title: "AI Web Studio",
  description:
    "I build high-performance websites for small businesses and entrepreneurs — faster, smarter, without the agency markup.",
  url: "https://hannchen.dev",
  locale: "en-US",
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
] as const;

export const SERVICES = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional websites that help businesses build trust and attract customers.",
    suitableFor: "Businesses that need a professional online presence.",
    includes: [
      "Responsive design",
      "Modern frontend development",
      "SEO-friendly structure",
      "Deployment support",
    ],
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    description:
      "High-converting landing pages designed for campaigns and products.",
    suitableFor: "Products, campaigns, and ideas that need a focused landing page.",
    includes: [
      "Conversion-focused layouts",
      "Responsive UI",
      "Fast loading performance",
    ],
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description:
      "Modernize existing websites with better UX and performance.",
    suitableFor: "Existing websites that need a modern refresh.",
    includes: [
      "UI improvement",
      "Performance optimization",
      "Modern technology migration",
    ],
  },
  {
    id: "cloud-deployment",
    title: "Cloud Deployment",
    description:
      "Deploy and optimize websites with modern cloud infrastructure.",
    suitableFor: "Projects that need reliable hosting setup.",
    includes: [
      "Deployment configuration",
      "Domain setup guidance",
      "Basic cloud integration",
    ],
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We discuss your goals, audience, and requirements. I ask the questions that shape the right solution.",
  },
  {
    step: "02",
    title: "Build",
    description:
      "I design and develop with AI acceleration — rapid iteration, pixel-perfect execution.",
  },
  {
    step: "03",
    title: "Launch",
    description:
      "Your site goes live. Clean handoff, documentation, and 30 days of support included.",
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    id: "ai-web-studio",
    title: "AI Web Studio Portfolio",
    status: "In Progress",
    category: "Personal Project",
    description:
      "Building a modern AI-powered web development portfolio using Next.js 16, React 19 and Tailwind CSS.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/projects/ai-web-studio.svg",
  },
  {
    id: "restaurant-landing",
    title: "Restaurant Landing Page",
    status: "Concept Project",
    category: "Landing Page",
    description:
      "A modern landing page concept for local restaurants focusing on conversion and mobile experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/restaurant-landing.svg",
  },
  {
    id: "business-concept",
    title: "Business Website Concept",
    status: "AI Concept",
    category: "Business Website",
    description:
      "A premium business website concept designed for small companies with a modern AI-assisted workflow.",
    tech: ["Next.js", "TypeScript", "Cloud Deployment"],
    image: "/projects/business-concept.svg",
  },
] as const;

export const CONTACT = {
  email: "hello@hannchen.dev",
  responseTime: "Within 24 hours",
  location: "Remote — working with clients worldwide",
} as const;

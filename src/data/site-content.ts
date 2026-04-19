import { featuredProjects } from "@/data/project-case-studies";

export const siteProfile = {
  name: "Ram Pravesh Singh",
  role: "Frontend Engineer",
  email: "praveshram1204@gmail.com",
  portfolio: "https://rampravesh-dev.vercel.app",
  linkedin: "https://linkedin.com/in/ram-pravesh-singh",
  github: "https://github.com/rampravesh19-96",
  resume: "/Ram_Pravesh_Frontend.pdf",
} as const;

export const heroContent = {
  eyebrow: "Frontend Engineer · 4+ Years Experience",
  name: siteProfile.name,
  role: "Frontend-first engineer crafting polished, scalable product experiences across web and mobile.",
  supportingText:
    "Specialized in React.js, React Native, Next.js, and TypeScript with a strong eye for product UX, frontend architecture, and production-ready delivery.",
  primaryCta: {
    label: "View Projects",
    href: "#work",
  },
  secondaryCta: {
    label: "Download Resume",
    href: siteProfile.resume,
  },
  highlights: ["React.js", "React Native", "Next.js", "TypeScript"],
  statCards: [
    {
      label: "Web Product Systems",
      value: "Storefronts, dashboards, and conversion-critical flows built with frontend depth",
    },
    {
      label: "Mobile UX Flows",
      value: "Booking, discovery, and app navigation designed for clarity on small screens",
    },
  ],
} as const;

export const proofPoints = [
  "4+ years building production-focused frontend interfaces",
  "React, Next.js, React Native, and TypeScript depth",
  "Web and mobile flows shaped for product clarity",
  "Reusable UI systems and frontend-first architecture",
] as const;

export const projects = featuredProjects;

export const experienceSnapshot = [
  {
    company: "Sachtech Solutions",
    period: "Recent",
    bullets: [
      "Owned frontend delivery across responsive product journeys with an emphasis on polish, clarity, and production readiness.",
      "Worked on reusable UI systems, async states, and high-value user flows such as booking, checkout, and account interaction patterns.",
    ],
  },
  {
    company: "HOI Travel Tech",
    period: "Prior",
    bullets: [
      "Contributed to travel-focused interfaces where search, selection, and transaction-style flows needed to feel fast and dependable.",
      "Supported feature delivery across frontend integrations, responsive layouts, and product surfaces that balanced usability with execution speed.",
    ],
  },
  {
    company: "Giottus Technology",
    period: "Earlier",
    bullets: [
      "Built production-facing frontend surfaces with attention to clean state management, trust-signaling UI, and reusable patterns.",
      "Strengthened implementation discipline around UI consistency, component reuse, and delivery quality in active product work.",
    ],
  },
] as const;

export const capabilityCards = [
  {
    title: "Frontend Engineering",
    description:
      "Production-minded React and Next.js interfaces shaped around usability, performance, and scalable component design.",
    items: ["React.js", "Next.js", "TypeScript", "State & data flow"],
  },
  {
    title: "Mobile Engineering",
    description:
      "Thoughtful React Native experiences with strong navigation structure, async UX states, and mobile-first interaction quality.",
    items: ["React Native", "Expo", "Navigation", "Gesture-rich UX"],
  },
  {
    title: "UI Architecture",
    description:
      "Systematic frontend foundations using reusable patterns, feature-oriented organization, and clean design primitives.",
    items: ["Design systems", "Feature modules", "Reusable UI", "Scalable structure"],
  },
  {
    title: "Supporting Integration",
    description:
      "Backend-aware frontend delivery with API integration, validation, async state handling, and pragmatic product implementation.",
    items: ["API integration", "Forms & validation", "Mock layers", "Collaboration"],
  },
] as const;

export const aboutContent = {
  title: "Built around frontend craft, product judgment, and scalable systems.",
  body: "I focus on interfaces that hold up under real product constraints. That means clear hierarchy, reliable interaction design, performance-minded implementation, and reusable frontend systems that make the product feel polished without making the codebase fragile.",
} as const;

export const contactLinks = {
  email: {
    label: "Email",
    href: `mailto:${siteProfile.email}`,
    value: siteProfile.email,
  },
  linkedin: {
    label: "LinkedIn",
    href: siteProfile.linkedin,
    value: "linkedin.com/in/ram-pravesh-singh",
  },
  github: {
    label: "GitHub",
    href: siteProfile.github,
    value: "github.com/rampravesh19-96",
  },
  portfolio: {
    label: "Portfolio",
    href: siteProfile.portfolio,
    value: "rampravesh-dev.vercel.app",
  },
  resume: {
    label: "Resume",
    href: siteProfile.resume,
    value: "Ram_Pravesh_Frontend.pdf",
  },
} as const;

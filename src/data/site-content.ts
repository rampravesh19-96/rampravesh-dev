import { featuredProjects } from "@/data/project-case-studies";

export const siteProfile = {
  name: "Ram Pravesh Singh",
  role: "Frontend Engineer",
  email: "praveshram1204@gmail.com",
  portfolio: "https://rampravesh-dev.vercel.app",
  linkedin: "https://www.linkedin.com/in/ram-pravesh-singh",
  github: "https://github.com/rampravesh19-96",
  leetcode: "https://leetcode.com/u/Mc2py9Qomi",
  resume: "/Ram_Pravesh_Frontend.pdf",
} as const;

export const heroContent = {
  eyebrow: "Frontend Engineer · 4+ Years Experience",
  name: siteProfile.name,
  role: "Frontend Engineer building production-ready React, Next.js, and React Native applications.",
  supportingText:
    "Frontend Engineer with 4+ years of experience building web and mobile applications using React.js, Next.js, React Native, TypeScript, and Tailwind CSS. I focus on reusable UI systems, API-driven product flows, authentication, checkout and booking journeys, performance, and release-ready frontend delivery.",
  primaryCta: {
    label: "View Projects",
    href: "#work",
  },
  secondaryCta: {
    label: "Download Resume",
    href: siteProfile.resume,
  },
  tertiaryCta: {
    label: "GitHub",
    href: siteProfile.github,
  },
  highlights: ["React.js", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "Expo"],
  statCards: [
    {
      label: "Frontend Systems",
      value:
        "Reusable UI architecture for dashboards, storefronts, authentication, and API-driven product journeys.",
    },
    {
      label: "Web + Mobile Delivery",
      value:
        "Checkout, booking, profile, support, and release workflows across Next.js and React Native applications.",
    },
  ],
} as const;

export const proofPoints = [
  "4+ years frontend experience",
  "10+ user-facing frontend flows across auth, checkout, booking, and account journeys",
  "Web + mobile production-style projects with React, Next.js, and React Native",
  "Google Play Console, Expo EAS, Chrome Web Store, and Vercel proof",
  "Open-source TypeScript and frontend tooling contributions",
] as const;

export const projects = featuredProjects;

export const experienceSnapshot = [
  {
    company: "Sachram Technologies",
    role: "Frontend Engineer",
    period: "Sep 2025 – Present",
    bullets: [
      "Built and shipped reusable React.js, Next.js, and React Native feature modules across multiple client-facing products.",
      "Developed responsive screens, reusable components, and feature flows for web and mobile applications.",
      "Integrated REST APIs, authentication flows, form validation, and business workflows.",
    ],
  },
  {
    company: "HOI Travel Tech",
    role: "Frontend Engineer",
    period: "Jul 2024 – Aug 2025",
    bullets: [
      "Built responsive travel booking journeys across search, results refinement, traveller capture, authentication, protected booking flow, and confirmation.",
      "Developed reusable UI components and frontend flows using React.js, Next.js, TypeScript, and Tailwind CSS.",
      "Integrated booking, payment, and fare recheck APIs.",
    ],
  },
  {
    company: "Giottus Technology Pvt Ltd",
    role: "Frontend Engineer",
    period: "Jan 2022 – Jun 2024",
    bullets: [
      "Built ecommerce journeys across search, product detail, cart, coupons, authentication, protected checkout, and post-order visibility.",
      "Created responsive and reusable frontend components for key commerce flows.",
      "Integrated checkout, payment, and order APIs.",
    ],
  },
] as const;

export const capabilityCards = [
  {
    title: "Frontend",
    description:
      "React-first delivery across responsive interfaces, reusable components, accessibility, and product-facing UI systems.",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Component Architecture",
      "Responsive UI",
      "Accessibility",
    ],
  },
  {
    title: "Frontend Architecture & State",
    description:
      "Scalable frontend patterns for feature modules, shared UI primitives, forms, validation, and predictable async state.",
    items: [
      "Zustand",
      "Redux Toolkit",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Feature-based Architecture",
      "Reusable UI Components",
    ],
  },
  {
    title: "Product Flows",
    description:
      "Implementation strength across transaction-sensitive user journeys where API coordination and UX clarity both matter.",
    items: [
      "Authentication",
      "Checkout Flow",
      "Booking Flow",
      "Order Management",
      "Payment Integration",
      "Fare Recheck",
      "Transaction-sensitive Workflows",
    ],
  },
  {
    title: "Performance & UX",
    description:
      "Performance-minded frontend execution focused on loading behavior, rendering efficiency, and stable user experience across devices.",
    items: [
      "Performance Optimization",
      "Code Splitting",
      "Lazy Loading",
      "Rendering Optimization",
      "Core Web Vitals",
      "Loading/Empty/Error States",
      "Mobile-first UX",
    ],
  },
  {
    title: "Mobile Development",
    description:
      "React Native and Expo delivery with navigation, secure storage, gesture-friendly UX, and release workflows for testing and store submission.",
    items: [
      "React Native",
      "Expo",
      "React Navigation",
      "Secure Storage",
      "Gesture-based Interactions",
      "EAS Build",
      "Google Play Console",
      "Play Store Testing Release",
    ],
  },
  {
    title: "Testing & Tooling",
    description:
      "Tooling and release discipline spanning linting, tests, Git workflows, CI, and deployment platforms used in frontend delivery.",
    items: [
      "Jest",
      "ESLint v9",
      "TypeScript Test Setup",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Vercel",
      "Netlify",
    ],
  },
] as const;

export const aboutContent = {
  title: "Built around reusable systems, reliable frontend delivery, and clear product flows.",
  body: "I focus on frontend work that is maintainable under real product constraints: reusable components, accessible UI, predictable state, practical performance improvements, and clean handling of auth, forms, checkout, booking, and release workflows.",
} as const;

export const openSourceContent = {
  eyebrow: "Open Source & Frontend Tooling",
  title: "Frontend Tooling & TypeScript Contributions",
  description:
    "Public contribution work that complements the portfolio with tooling, testing, and TypeScript-focused frontend proof.",
  profileLink: siteProfile.github,
  profileLabel: "GitHub Profile",
  contributions: [
    {
      title: "ESLint v9 React/TypeScript setup",
      href: "https://github.com/nikhilb2/simple_invoicing/pull/328",
      description:
        "Contributed ESLint v9 frontend tooling setup to an open-source React/TypeScript project, including flat config, lint script, and blocking lint error fixes.",
    },
    {
      title: "Jest TypeScript setup for Expo/React Native",
      href: "https://github.com/RYOITABASHI/Shelly/pull/26",
      description:
        "Set up Jest TypeScript test infrastructure for an open-source Expo/React Native project, including pnpm test script, Jest config, and pure TypeScript example tests.",
    },
    {
      title: "React accessibility package TypeScript migration",
      href: "https://github.com/KittyGiraudel/accessible-footnotes/pull/20",
      description:
        "Contributed to a React accessibility package TypeScript migration, including typed component props, TypeScript build configuration, and generated declaration handling.",
    },
  ],
  repositories: [
    {
      title: "Frontend Audit Extension",
      description:
        "Chrome extension codebase demonstrating content scripts, popup state handling, audit scoring, local history, and export workflows.",
      tags: ["React", "TypeScript", "Vite", "Manifest V3"],
    },
    {
      title: "Smart Ecommerce Platform & Admin Dashboard",
      description:
        "Next.js storefront plus admin dashboard work covering commerce flows, typed mock APIs, and reusable admin UI patterns.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
    },
    {
      title: "Smart Service Booking App",
      description:
        "React Native project demonstrating validated auth, booking orchestration, profile continuity, and Play Store-oriented mobile delivery.",
      tags: ["React Native", "Expo", "TypeScript", "Zustand"],
    },
  ],
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
  leetcode: {
    label: "LeetCode",
    href: siteProfile.leetcode,
    value: "leetcode.com/u/Mc2py9Qomi",
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

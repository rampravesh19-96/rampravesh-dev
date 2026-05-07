export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudySectionItem = {
  title: string;
  description: string;
};

export type CaseStudyPageContent = {
  slug:
    | "frontend-audit-extension"
    | "smart-ecommerce-platform"
    | "smart-service-booking-app";
  title: string;
  eyebrow: string;
  type: string;
  shortType: string;
  heroSummary: string;
  heroSupportingText: string;
  roleLabel: string;
  platformLabel: string;
  visualMode: "web" | "mobile";
  stack: readonly string[];
  homepagePreview: {
    src: string;
    alt: string;
    label: string;
  };
  mediaGallery: readonly {
    src: string;
    alt: string;
    label: string;
    caption: string;
  }[];
  summaryMetrics: readonly { label: string; value: string }[];
  overview: readonly string[];
  whatIBuilt: readonly CaseStudySectionItem[];
  flowSectionTitle: string;
  flowSectionDescription: string;
  journeyHighlights: readonly CaseStudySectionItem[];
  technicalSectionTitle: string;
  technicalHighlights: readonly CaseStudySectionItem[];
  decisionsSectionTitle: string;
  architectureDecisions: readonly CaseStudySectionItem[];
  whyItMatters: readonly string[];
  links: {
    live: ProjectLink;
    code: ProjectLink;
  };
  meta: {
    title: string;
    description: string;
  };
};

export type HomepageProject = {
  title: string;
  slug: string;
  positioning: string;
  type: string;
  proofLabel: string;
  stack: readonly string[];
  featureHighlights: readonly string[];
  preview: {
    src: string;
    alt: string;
    label: string;
  };
  links: {
    live: string;
    code: string;
    details?: string;
  };
  linkLabels?: {
    live?: string;
    code?: string;
    details?: string;
  };
};

export const projectCaseStudies = {
  "frontend-audit-extension": {
    slug: "frontend-audit-extension",
    title: "Frontend Audit Extension",
    eyebrow: "Extension Case Study",
    type: "Chrome Extension Frontend Tool",
    shortType: "Chrome Extension",
    heroSummary:
      "Production-style Chrome extension that analyzes live webpages for SEO, accessibility, image, and page structure issues using content scripts and browser APIs.",
    heroSupportingText:
      "This project demonstrates frontend engineering beyond standard web pages: popup UI states, content script execution, browser storage, export flows, and issue reporting designed for real audit workflows inside Chrome.",
    roleLabel: "Frontend Engineer",
    platformLabel: "React + Vite Chrome Extension",
    visualMode: "web",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Chrome Manifest V3",
      "Tailwind CSS",
      "Chrome Storage API",
      "Content Scripts",
    ],
    homepagePreview: {
      src: "/projects/ecommerce/ecommerce-admin-table.svg",
      alt: "Frontend Audit Extension preview block used as a neutral placeholder visual",
      label: "Chrome Web Store",
    },
    mediaGallery: [
      {
        src: "/projects/ecommerce/ecommerce-admin-table.svg",
        alt: "Frontend Audit Extension placeholder visual for audit dashboard style output",
        label: "Audit Results",
        caption: "Placeholder visual block used to keep the case study layout consistent without inventing screenshots.",
      },
      {
        src: "/projects/ecommerce/ecommerce-storefront-grid.svg",
        alt: "Frontend Audit Extension placeholder visual for multi-panel analysis states",
        label: "Popup States",
        caption: "Represents the extension focus on loading, empty, saved audit, error, and result states inside the popup UI.",
      },
      {
        src: "/projects/service-booking/service-booking-flow.svg",
        alt: "Frontend Audit Extension placeholder visual for structured issue workflows",
        label: "Issue Workflow",
        caption: "Used as a neutral visual block for severity-based recommendations, restricted-page handling, and export-ready issue lists.",
      },
      {
        src: "/projects/service-booking/service-booking-profile.svg",
        alt: "Frontend Audit Extension placeholder visual for persisted audit history",
        label: "Local History",
        caption: "Illustrates the extension's local history and repeat-audit workflow without claiming unavailable screenshots.",
      },
    ],
    summaryMetrics: [
      {
        label: "Browser API Scope",
        value: "Content scripts, Chrome storage, export actions, and stateful popup flows inside Manifest V3",
      },
      {
        label: "Frontend Breadth",
        value: "Scoring, issue grouping, restricted-page handling, and polished state management in one tool",
      },
      {
        label: "Public Proof",
        value: "Chrome Web Store listing plus public GitHub repository for direct recruiter verification",
      },
    ],
    overview: [
      "Frontend Audit Extension is positioned as a production-style browser extension that expands the portfolio beyond standard websites and mobile apps into browser tooling, audit workflows, and extension-specific frontend architecture.",
      "The project is grounded in real proof links: a public Chrome Web Store listing and a public GitHub repository. The emphasis is on content scripts, browser APIs, audit scoring, and UI states rather than invented business claims.",
    ],
    whatIBuilt: [
      {
        title: "Popup interface and result states",
        description:
          "A polished popup UI with loading, empty, error, saved audit, and result states to make extension usage feel complete rather than utilitarian.",
      },
      {
        title: "Audit analysis workflow",
        description:
          "Multi-category audit scoring across SEO, accessibility, images, and page structure with severity-based issue recommendations.",
      },
      {
        title: "Browser API integration",
        description:
          "Chrome Storage API and content script integration for local history, restricted-page handling, and page-level audit execution.",
      },
      {
        title: "Export-friendly reporting",
        description:
          "JSON and CSV export support for sharing audit findings beyond the extension itself.",
      },
    ],
    flowSectionTitle: "Audit Workflow Highlights",
    flowSectionDescription:
      "The strongest signal here is the combination of browser integration, analysis logic, and user-facing result states inside a compact extension experience.",
    journeyHighlights: [
      {
        title: "Live page analysis",
        description:
          "Content scripts analyze the current page for SEO, accessibility, image, and structure issues directly inside the browser context.",
      },
      {
        title: "Severity-based recommendations",
        description:
          "Issues are grouped and prioritized so the extension surfaces actionable problems instead of overwhelming the user with raw checks.",
      },
      {
        title: "Restricted-page handling",
        description:
          "The extension accounts for pages where audits cannot run normally, which improves credibility compared with a happy-path-only tool.",
      },
      {
        title: "Saved audits and exports",
        description:
          "Local history and JSON or CSV export flows make the tool useful beyond a single one-off scan.",
      },
    ],
    technicalSectionTitle: "Technical Highlights",
    technicalHighlights: [
      {
        title: "Manifest V3 frontend structure",
        description:
          "The codebase uses a modern React and Vite setup inside Chrome Manifest V3 constraints, balancing developer experience with extension runtime requirements.",
      },
      {
        title: "Content script and popup coordination",
        description:
          "The extension coordinates page analysis and popup display states cleanly so audit results remain understandable and predictable.",
      },
      {
        title: "State persistence with Chrome Storage API",
        description:
          "Saved audit history and related flows rely on browser-native storage rather than one-session-only state.",
      },
      {
        title: "Structured exports and UX states",
        description:
          "Export support and deliberate handling of loading, empty, error, and saved states strengthen the product quality of the extension.",
      },
    ],
    decisionsSectionTitle: "Extension UX and Frontend Decisions",
    architectureDecisions: [
      {
        title: "Tooling with a product mindset",
        description:
          "The extension is framed as a usable frontend product, not just a technical demo, which is why popup states and issue presentation matter so much.",
      },
      {
        title: "Actionable output over raw scanning",
        description:
          "Severity and category framing help the user understand what to fix first instead of reading an unstructured audit dump.",
      },
      {
        title: "Proof anchored in real distribution",
        description:
          "The Chrome Web Store listing gives stronger credibility than a local-only extension demo and shows distribution-oriented frontend delivery.",
      },
      {
        title: "Consistent portfolio treatment",
        description:
          "Even without bespoke screenshots, the project uses the same case study structure as the other flagship projects to keep the portfolio cohesive.",
      },
    ],
    whyItMatters: [
      "It expands the portfolio beyond websites into browser extension frontend engineering.",
      "It shows practical use of browser APIs, content scripts, local persistence, and structured UX states.",
      "It adds public Chrome Web Store proof that complements the web and mobile projects.",
    ],
    links: {
      live: {
        label: "View Chrome Web Store Listing",
        href: "https://chromewebstore.google.com/detail/frontend-audit-extension/epcflhhnpmdmngfaahodceklckhhoeil",
      },
      code: {
        label: "View Source Code",
        href: "https://github.com/rampravesh19-96/frontend-audit-extension",
      },
    },
    meta: {
      title: "Frontend Audit Extension Case Study | Ram Pravesh Singh",
      description:
        "Case study for a production-style Chrome extension that audits SEO, accessibility, image, and page structure issues using React and TypeScript.",
    },
  },
  "smart-ecommerce-platform": {
    slug: "smart-ecommerce-platform",
    title: "Smart Ecommerce Platform & Admin Dashboard",
    eyebrow: "Web Case Study",
    type: "Customer Storefront + Role-Based Admin Dashboard",
    shortType: "Web Platform",
    heroSummary:
      "Production-style ecommerce platform with a customer storefront and role-based admin dashboard covering product discovery, checkout, order lifecycle, and admin operations.",
    heroSupportingText:
      "Built with reusable frontend architecture for product discovery, product detail, cart, checkout, order history, protected customer flows, protected admin flows, create and edit workflows, typed mock API integrations, and AI-oriented dashboard insight cards.",
    roleLabel: "Frontend Engineer",
    platformLabel: "Next.js Web App",
    visualMode: "web",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "TanStack Table",
      "Recharts",
      "MSW",
      "Vercel",
    ],
    homepagePreview: {
      src: "/projects/ecommerce/ecommerce-dashboard-hero.svg",
      alt: "Smart Ecommerce platform preview showing storefront and admin dashboard surfaces",
      label: "Vercel Live Demo",
    },
    mediaGallery: [
      {
        src: "/projects/ecommerce/ecommerce-dashboard-hero.svg",
        alt: "Smart Ecommerce dashboard hero view",
        label: "Platform Overview",
        caption: "Customer storefront and admin dashboard presented as one coherent frontend system.",
      },
      {
        src: "/projects/ecommerce/ecommerce-storefront-grid.svg",
        alt: "Smart Ecommerce storefront product grid view",
        label: "Product Discovery",
        caption: "Product discovery and product detail surfaces shaped for reusable commerce UI patterns.",
      },
      {
        src: "/projects/ecommerce/ecommerce-admin-table.svg",
        alt: "Smart Ecommerce admin table and analytics view",
        label: "Admin Operations",
        caption: "Operational UI patterns for product workflows, order detail, and status-oriented dashboard work.",
      },
      {
        src: "/projects/ecommerce/ecommerce-checkout-flow.svg",
        alt: "Smart Ecommerce checkout and account flow preview",
        label: "Checkout & Orders",
        caption: "Cart, checkout, order success, and order history treated as one continuous ecommerce journey.",
      },
    ],
    summaryMetrics: [
      {
        label: "Commerce Scope",
        value: "Discovery, checkout, order history, and admin operations in one frontend system",
      },
      {
        label: "Implementation Depth",
        value: "Forms, tables, charts, protected flows, and typed mock API integrations",
      },
      {
        label: "Public Proof",
        value: "Vercel live demo plus public GitHub repository for direct recruiter verification",
      },
    ],
    overview: [
      "Smart Ecommerce Platform & Admin Dashboard mirrors the resume's ecommerce experience: product discovery, protected checkout, post-order visibility, admin workflows, and API-driven commerce interfaces.",
      "The case study is grounded in implementation quality and proof links rather than inflated outcomes. It combines customer and admin flows, reusable components, typed mock APIs, and a public Vercel deployment backed by source code.",
    ],
    whatIBuilt: [
      {
        title: "Customer commerce journeys",
        description:
          "Product discovery and product detail views, cart, checkout, order success, and order history built as connected customer-facing flows.",
      },
      {
        title: "Protected customer and admin flows",
        description:
          "Role-aware flow separation for customer and admin surfaces where authentication and operational access matter.",
      },
      {
        title: "Admin create and update workflows",
        description:
          "Admin product create and edit workflows, order detail views, status updates, and operational dashboard surfaces.",
      },
      {
        title: "Typed integration scaffolding",
        description:
          "Typed mock API integrations designed to support realistic async states, forms, and dashboard interactions during frontend delivery.",
      },
    ],
    flowSectionTitle: "Key Product Flows",
    flowSectionDescription:
      "The strongest signal comes from how ecommerce and admin journeys connect through reusable UI and protected flows.",
    journeyHighlights: [
      {
        title: "Discovery to purchase",
        description:
          "The storefront flow moves from product discovery and product detail into cart, checkout, and order success with clear continuity.",
      },
      {
        title: "Order lifecycle visibility",
        description:
          "Order history and order detail views extend the project beyond the conversion event into post-order frontend utility.",
      },
      {
        title: "Admin product workflows",
        description:
          "Product create and edit workflows demonstrate reusable form patterns and structured data handling in admin surfaces.",
      },
      {
        title: "Dashboard insight surfaces",
        description:
          "AI-powered dashboard cards and chart surfaces show how operational interfaces can stay informative without losing clarity.",
      },
    ],
    technicalSectionTitle: "Technical Highlights",
    technicalHighlights: [
      {
        title: "App Router and feature structure",
        description:
          "The architecture separates storefront and admin concerns while keeping shared primitives reusable across the platform.",
      },
      {
        title: "Form, table, and chart readiness",
        description:
          "React Hook Form, Zod, TanStack Table, and Recharts support data-heavy admin work and structured customer flows.",
      },
      {
        title: "Typed async workflow",
        description:
          "TanStack Query and MSW support typed mock API integrations for loading, empty, success, and operational states.",
      },
      {
        title: "Deployment proof",
        description:
          "The Vercel-hosted build provides direct public proof for web-focused frontend engineering work.",
      },
    ],
    decisionsSectionTitle: "Architecture and Frontend Decisions",
    architectureDecisions: [
      {
        title: "One product system across storefront and admin",
        description:
          "Customer and admin surfaces are treated as connected product areas rather than separate demos.",
      },
      {
        title: "Protected flows as a first-class concern",
        description:
          "Customer and admin experiences both assume authentication-sensitive behavior rather than purely static page design.",
      },
      {
        title: "Typed mock API-first delivery",
        description:
          "Mock integration scaffolding makes it easier to design realistic frontend states before backend wiring is complete.",
      },
      {
        title: "Proof over exaggerated claims",
        description:
          "The project emphasizes real links, implementation scope, and frontend architecture instead of invented impact metrics.",
      },
    ],
    whyItMatters: [
      "It shows frontend depth across customer storefront and admin operations, not just landing-page work.",
      "It demonstrates reusable UI systems, protected flows, and typed integration patterns aligned with resume experience.",
      "It adds Vercel-hosted proof for roles centered on React, Next.js, TypeScript, and ecommerce delivery.",
    ],
    links: {
      live: {
        label: "View Vercel Live Demo",
        href: "https://smart-ecommerce-admin.vercel.app/",
      },
      code: {
        label: "View Source Code",
        href: "https://github.com/rampravesh19-96/smart-ecommerce-admin",
      },
    },
    meta: {
      title: "Smart Ecommerce Platform Case Study | Ram Pravesh Singh",
      description:
        "Case study for a production-style ecommerce platform with storefront and admin dashboard architecture built using Next.js and TypeScript.",
    },
  },
  "smart-service-booking-app": {
    slug: "smart-service-booking-app",
    title: "Smart Service Booking App",
    eyebrow: "Mobile Case Study",
    type: "React Native Service Booking Experience",
    shortType: "Mobile App",
    heroSummary:
      "Production-style React Native service-booking app with validated auth, home discovery, search, category listing, service detail, reviews, and multi-step booking flow.",
    heroSupportingText:
      "Built with React Native, Expo, TypeScript, TanStack Query, Zustand, React Hook Form, Zod, Expo Secure Store, Expo Image, Reanimated, EAS Build, Google Play Console, and Play Store testing release workflow.",
    roleLabel: "Frontend Engineer",
    platformLabel: "React Native / Expo App",
    visualMode: "mobile",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Navigation",
      "TanStack Query",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Expo Secure Store",
      "Expo Image",
      "Reanimated",
      "EAS Build",
      "Google Play Console",
      "Play Store Testing Release",
    ],
    homepagePreview: {
      src: "/projects/service-booking/service-booking-home.svg",
      alt: "Smart Service Booking app preview showing discovery and booking screens",
      label: "Google Play Store",
    },
    mediaGallery: [
      {
        src: "/projects/service-booking/service-booking-home.svg",
        alt: "Smart Service Booking home and discovery screen",
        label: "Discovery Home",
        caption: "Home discovery, search, and category listing built for fast mobile browsing and service selection.",
      },
      {
        src: "/projects/service-booking/service-booking-detail.svg",
        alt: "Smart Service Booking service detail screen",
        label: "Service Detail",
        caption: "Service detail and review screens designed to support confident booking decisions on small screens.",
      },
      {
        src: "/projects/service-booking/service-booking-flow.svg",
        alt: "Smart Service Booking booking flow screen",
        label: "Booking Flow",
        caption: "Address selection, slot selection, booking summary, and mock payment UX treated as one connected booking journey.",
      },
      {
        src: "/projects/service-booking/service-booking-profile.svg",
        alt: "Smart Service Booking profile and history screen",
        label: "History & Profile",
        caption: "Booking history, cancel or reschedule flows, notifications, support, and profile continuity beyond the initial booking.",
      },
    ],
    summaryMetrics: [
      {
        label: "Flow Coverage",
        value: "Validated auth, discovery, booking, profile, support, and booking lifecycle continuity",
      },
      {
        label: "Release Workflow",
        value: "Expo EAS Build plus Google Play Console testing release path",
      },
      {
        label: "Public Proof",
        value: "Google Play Store listing plus public GitHub repository",
      },
    ],
    overview: [
      "Smart Service Booking App is a production-style React Native project that demonstrates mobile frontend ownership across validated auth, booking flow orchestration, account continuity, and release-oriented delivery.",
      "The proof is grounded in real public links: a Google Play Store listing and a public GitHub repository. The emphasis stays on mobile UX flow quality, form handling, state management, and release workflow credibility.",
    ],
    whatIBuilt: [
      {
        title: "Validated auth and onboarding flow",
        description:
          "Onboarding, login, OTP verification, and authenticated entry into the application shell.",
      },
      {
        title: "Discovery and service detail surfaces",
        description:
          "Home discovery, search, category listing, service detail, and reviews built for mobile-first decision making.",
      },
      {
        title: "Multi-step booking orchestration",
        description:
          "Address selection, slot selection, booking summary, and mock payment UX connected into one clear booking flow.",
      },
      {
        title: "Post-booking continuity",
        description:
          "Booking success, history, cancel or reschedule flows, profile, settings, notifications, and support screens.",
      },
    ],
    flowSectionTitle: "Booking Journey Highlights",
    flowSectionDescription:
      "The strongest signal here is the continuity from service discovery into booking and then into account-state support.",
    journeyHighlights: [
      {
        title: "Discovery and Smart Service Finder",
        description:
          "The app supports home discovery, search intent, categories, reviews, and AI-powered Smart Service Finder guidance.",
      },
      {
        title: "Address and slot selection",
        description:
          "Booking progression handles address and slot selection clearly so the service decision turns into a structured conversion flow.",
      },
      {
        title: "Booking summary and confirmation",
        description:
          "Summary, mock payment UX, and success states are designed as one uninterrupted booking journey.",
      },
      {
        title: "History, reschedule, and support",
        description:
          "History, cancel or reschedule flows, notifications, support, and profile routes make the app feel complete after the initial booking.",
      },
    ],
    technicalSectionTitle: "Technical Highlights",
    technicalHighlights: [
      {
        title: "Navigation and state architecture",
        description:
          "React Navigation, Zustand, and TanStack Query support structured app flows, persisted state, and backend-ready async data handling.",
      },
      {
        title: "Typed forms and validation",
        description:
          "React Hook Form and Zod support validated user input across auth and booking steps.",
      },
      {
        title: "Secure and release-oriented tooling",
        description:
          "Expo Secure Store, Expo Image, Reanimated, EAS Build, and Google Play Console workflow improve practical delivery credibility.",
      },
      {
        title: "Play Store as primary proof",
        description:
          "The Google Play Store listing provides stronger public proof than an internal build link and better matches recruiter expectations.",
      },
    ],
    decisionsSectionTitle: "Mobile UX and Frontend Decisions",
    architectureDecisions: [
      {
        title: "Mobile-first flow clarity",
        description:
          "Each step keeps the booking process understandable while still exposing the information needed to make a confident decision.",
      },
      {
        title: "User-intent-based navigation",
        description:
          "Auth, discovery, booking, history, support, and profile areas are structured around how users actually move through the app.",
      },
      {
        title: "Release-oriented framing",
        description:
          "The case study emphasizes Play Store and EAS release workflow proof instead of relying on build-only credibility.",
      },
      {
        title: "Full lifecycle coverage",
        description:
          "The app includes booking confirmation, history, and follow-up states so it reads as a complete product flow rather than a short demo.",
      },
    ],
    whyItMatters: [
      "It shows React Native frontend depth through full booking lifecycle coverage rather than isolated screens.",
      "It demonstrates mobile product flow quality, form handling, state orchestration, and release workflow discipline.",
      "It adds Google Play Store proof that complements the web and extension projects in the portfolio.",
    ],
    links: {
      live: {
        label: "View Google Play Store Listing",
        href: "https://play.google.com/store/apps/details?id=com.rampravesh.smartservicebookingapp",
      },
      code: {
        label: "View Source Code",
        href: "https://github.com/rampravesh19-96/smart-service-booking-mobile",
      },
    },
    meta: {
      title: "Smart Service Booking App Case Study | Ram Pravesh Singh",
      description:
        "Case study for a production-style React Native service booking app focused on validated flows, booking lifecycle quality, and Play Store-ready delivery.",
    },
  },
} as const satisfies Record<string, CaseStudyPageContent>;

export const projectCaseStudyList = [
  projectCaseStudies["frontend-audit-extension"],
  projectCaseStudies["smart-ecommerce-platform"],
  projectCaseStudies["smart-service-booking-app"],
];

export const featuredProjects = [
  {
    title: projectCaseStudies["frontend-audit-extension"].title,
    slug: projectCaseStudies["frontend-audit-extension"].slug,
    positioning: projectCaseStudies["frontend-audit-extension"].heroSummary,
    type: projectCaseStudies["frontend-audit-extension"].shortType,
    proofLabel: "Chrome Web Store",
    stack: projectCaseStudies["frontend-audit-extension"].stack,
    featureHighlights: [
      "Multi-category audit scoring",
      "Severity-based issue recommendations",
      "Restricted-page handling",
      "Local audit history with Chrome Storage API",
      "JSON/CSV report export",
      "Polished popup UI with loading, empty, error, saved audit, and result states",
    ],
    preview: projectCaseStudies["frontend-audit-extension"].homepagePreview,
    links: {
      live: projectCaseStudies["frontend-audit-extension"].links.live.href,
      code: projectCaseStudies["frontend-audit-extension"].links.code.href,
      details: `/projects/${projectCaseStudies["frontend-audit-extension"].slug}`,
    },
    linkLabels: {
      live: "Chrome Web Store",
      code: "GitHub",
      details: "Case Study",
    },
  },
  {
    title: projectCaseStudies["smart-ecommerce-platform"].title,
    slug: projectCaseStudies["smart-ecommerce-platform"].slug,
    positioning: projectCaseStudies["smart-ecommerce-platform"].heroSummary,
    type: projectCaseStudies["smart-ecommerce-platform"].shortType,
    proofLabel: "Vercel Live Demo",
    stack: projectCaseStudies["smart-ecommerce-platform"].stack,
    featureHighlights: [
      "Product discovery and product detail views",
      "Cart, checkout, order success, and order history",
      "Protected customer and admin flows",
      "Admin product create/edit workflows",
      "Admin order detail and status updates",
      "Typed mock API integrations",
      "AI-powered dashboard insight cards",
    ],
    preview: projectCaseStudies["smart-ecommerce-platform"].homepagePreview,
    links: {
      live: projectCaseStudies["smart-ecommerce-platform"].links.live.href,
      code: projectCaseStudies["smart-ecommerce-platform"].links.code.href,
      details: `/projects/${projectCaseStudies["smart-ecommerce-platform"].slug}`,
    },
    linkLabels: {
      live: "Vercel Live Demo",
      code: "GitHub",
      details: "Case Study",
    },
  },
  {
    title: projectCaseStudies["smart-service-booking-app"].title,
    slug: projectCaseStudies["smart-service-booking-app"].slug,
    positioning: projectCaseStudies["smart-service-booking-app"].heroSummary,
    type: projectCaseStudies["smart-service-booking-app"].shortType,
    proofLabel: "Google Play Store",
    stack: projectCaseStudies["smart-service-booking-app"].stack,
    featureHighlights: [
      "Validated auth and onboarding flow",
      "Home discovery, search, category listing, and service detail",
      "Address selection and slot selection",
      "Booking summary and mock payment UX",
      "Booking success, booking history, cancel/reschedule flows",
      "Profile/settings, notifications, and support screens",
      "AI-powered Smart Service Finder",
      "Released through Google Play Console testing using Expo EAS Build and Play Store release workflow",
    ],
    preview: projectCaseStudies["smart-service-booking-app"].homepagePreview,
    links: {
      live: projectCaseStudies["smart-service-booking-app"].links.live.href,
      code: projectCaseStudies["smart-service-booking-app"].links.code.href,
      details: `/projects/${projectCaseStudies["smart-service-booking-app"].slug}`,
    },
    linkLabels: {
      live: "Google Play Store",
      code: "GitHub",
      details: "Case Study",
    },
  },
] as const satisfies readonly HomepageProject[];

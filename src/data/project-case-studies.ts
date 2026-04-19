export type ProjectLink = {
  label: string;
  href: string;
};

export type CaseStudySectionItem = {
  title: string;
  description: string;
};

export type CaseStudyPageContent = {
  slug: "smart-ecommerce-platform" | "smart-service-booking-app";
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

export const projectCaseStudies = {
  "smart-ecommerce-platform": {
    slug: "smart-ecommerce-platform",
    title: "Smart Ecommerce Platform with Admin Dashboard",
    eyebrow: "Web Case Study",
    type: "Storefront + Admin Dashboard",
    shortType: "Web Platform",
    heroSummary:
      "A premium ecommerce case study built to show how a polished storefront and a serious admin dashboard can live inside one frontend system.",
    heroSupportingText:
      "The emphasis is frontend depth: reusable UI systems, responsive commerce surfaces, filters, forms, tables, protected flows, and AI-oriented dashboard cards that feel product-ready instead of decorative.",
    roleLabel: "Frontend Engineer",
    platformLabel: "Next.js Web App",
    visualMode: "web",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "MSW"],
    homepagePreview: {
      src: "/projects/ecommerce/ecommerce-dashboard-hero.svg",
      alt: "Smart Ecommerce platform preview showing storefront and admin dashboard surfaces",
      label: "Storefront + Admin",
    },
    mediaGallery: [
      {
        src: "/projects/ecommerce/ecommerce-dashboard-hero.svg",
        alt: "Smart Ecommerce dashboard hero view",
        label: "Homepage Hero",
        caption: "A premium commerce landing surface introducing storefront depth and admin utility in one product story.",
      },
      {
        src: "/projects/ecommerce/ecommerce-storefront-grid.svg",
        alt: "Smart Ecommerce storefront product grid view",
        label: "Storefront Grid",
        caption: "Catalog-focused browsing with editorial spacing, product cards, and clear discovery hierarchy.",
      },
      {
        src: "/projects/ecommerce/ecommerce-admin-table.svg",
        alt: "Smart Ecommerce admin table and analytics view",
        label: "Admin Table",
        caption: "Operational dashboard patterns built around data tables, chart context, and AI-oriented insights.",
      },
      {
        src: "/projects/ecommerce/ecommerce-checkout-flow.svg",
        alt: "Smart Ecommerce checkout and account flow preview",
        label: "Checkout Flow",
        caption: "Purchase progression and account continuity framed as part of a realistic commerce journey.",
      },
    ],
    summaryMetrics: [
      {
        label: "Frontend Focus",
        value: "Storefront UX and admin tooling designed as one coherent frontend system",
      },
      {
        label: "System Depth",
        value: "Reusable shells, route groups, tables, charts, and form-ready workflows",
      },
      {
        label: "Product Lens",
        value: "Premium product framing without pretending to be a fabricated business success story",
      },
    ],
    overview: [
      "Smart Ecommerce Platform was built as a premium frontend case study to demonstrate how a modern commerce experience can extend from product discovery on the customer side to operational clarity on the admin side.",
      "The goal was not to claim a fully launched business product. The goal was to show strong frontend architecture, thoughtful UI structure, and the ability to design scalable product surfaces that can grow into real implementation work.",
    ],
    whatIBuilt: [
      {
        title: "Customer storefront surface",
        description:
          "Structured routes for browsing, product discovery, cart, checkout, account areas, and purchase-oriented user journeys.",
      },
      {
        title: "Admin dashboard foundation",
        description:
          "A command-center style backend surface covering analytics, products, orders, customers, inventory, promotions, reviews, and settings.",
      },
      {
        title: "Reusable UI patterns",
        description:
          "Shared layouts, shells, cards, tables, and mock-ready component surfaces intended for repeated product use instead of one-off page building.",
      },
      {
        title: "Protected and data-heavy flows",
        description:
          "Auth-oriented route separation, form-ready flows, filtering surfaces, and table-based interfaces suited to serious operational tooling.",
      },
    ],
    flowSectionTitle: "Key Product Flows",
    flowSectionDescription:
      "The value of this project comes from how the product surfaces connect together rather than from one isolated screen.",
    journeyHighlights: [
      {
        title: "Storefront browsing and discovery",
        description:
          "The public-facing experience is structured around category exploration, product detail, cart progression, checkout intent, and account continuity.",
      },
      {
        title: "Admin product operations",
        description:
          "The dashboard side is designed for catalog management, inventory review, and product operations through scalable table and panel patterns.",
      },
      {
        title: "Analytics and AI-oriented insights",
        description:
          "Insight cards and analytics surfaces communicate how operational dashboards can expose performance signals and AI-assisted merchandising cues.",
      },
      {
        title: "Responsive cross-surface consistency",
        description:
          "Both customer and admin experiences are treated as one product system with consistent structure, spacing, and reusable interaction language.",
      },
    ],
    technicalSectionTitle: "Technical Highlights",
    technicalHighlights: [
      {
        title: "App Router structure",
        description:
          "Route groups and segmented layout strategy help separate storefront, auth, and admin concerns while keeping the codebase product-oriented.",
      },
      {
        title: "Server-state ready scaffolding",
        description:
          "TanStack Query and MSW support a frontend-first workflow where async states and realistic data boundaries can be designed before full backend integration.",
      },
      {
        title: "Form and dashboard readiness",
        description:
          "The stack selection supports serious product surfaces like validation, tables, charts, and complex CRUD-oriented admin flows.",
      },
      {
        title: "Type-safe scaling",
        description:
          "TypeScript-first structure keeps shared models, utilities, services, and feature modules aligned as the product surface area grows.",
      },
    ],
    decisionsSectionTitle: "Architecture and Frontend Decisions",
    architectureDecisions: [
      {
        title: "Feature-oriented organization over page sprawl",
        description:
          "The structure favors reusable feature modules and shared primitives so storefront and dashboard surfaces can evolve without duplication.",
      },
      {
        title: "Mock-first development for better UI quality",
        description:
          "By preparing data handlers and mock service layers early, the frontend can be designed around realistic loading, empty, and operational states.",
      },
      {
        title: "Dashboard UX built for scale",
        description:
          "Tables, filters, charts, and admin navigation patterns were chosen to show operational clarity rather than decorative dashboard aesthetics.",
      },
      {
        title: "A product-level system, not disconnected screens",
        description:
          "The strongest frontend signal here is the way customer and admin flows coexist in one coherent product architecture.",
      },
    ],
    whyItMatters: [
      "It shows the ability to build beyond landing pages and into serious product interface territory.",
      "It demonstrates frontend architecture thinking through route organization, shared systems, and operational UI depth.",
      "It communicates readiness for roles that value React, Next.js, TypeScript, admin tooling, and polished product execution.",
    ],
    links: {
      live: {
        label: "View Live Platform",
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
        "Case study for a production-style ecommerce frontend with storefront and admin dashboard architecture built using Next.js and TypeScript.",
    },
  },
  "smart-service-booking-app": {
    slug: "smart-service-booking-app",
    title: "Smart Service Booking App",
    eyebrow: "Mobile Case Study",
    type: "React Native Booking Experience",
    shortType: "Mobile App",
    heroSummary:
      "A mobile-first React Native case study centered on service discovery, booking flow clarity, and the kind of navigation discipline expected in a serious product app.",
    heroSupportingText:
      "The experience is intentionally structured around validated auth, search and discovery, service detail, booking progression, history, cancel or reschedule states, notifications, support, and a Smart Service Finder pattern.",
    roleLabel: "Frontend Engineer",
    platformLabel: "React Native / Expo App",
    visualMode: "mobile",
    stack: ["React Native", "Expo", "TypeScript", "React Navigation", "Reanimated", "Zustand"],
    homepagePreview: {
      src: "/projects/service-booking/service-booking-home.svg",
      alt: "Smart Service Booking app preview showing discovery and booking screens",
      label: "Discovery + Booking",
    },
    mediaGallery: [
      {
        src: "/projects/service-booking/service-booking-home.svg",
        alt: "Smart Service Booking home and discovery screen",
        label: "Discovery Home",
        caption: "Home and discovery surfaces designed to help mobile users move quickly into the right service flow.",
      },
      {
        src: "/projects/service-booking/service-booking-detail.svg",
        alt: "Smart Service Booking service detail screen",
        label: "Service Detail",
        caption: "Service decision screens that balance information density with mobile clarity.",
      },
      {
        src: "/projects/service-booking/service-booking-flow.svg",
        alt: "Smart Service Booking booking flow screen",
        label: "Booking Flow",
        caption: "Address, slot, summary, and payment progression treated as one streamlined conversion journey.",
      },
      {
        src: "/projects/service-booking/service-booking-profile.svg",
        alt: "Smart Service Booking profile and history screen",
        label: "Profile + History",
        caption: "History, support, and settings views help the app feel complete beyond the happy path.",
      },
    ],
    summaryMetrics: [
      {
        label: "Mobile Focus",
        value: "End-to-end booking UX designed specifically for mobile flow quality",
      },
      {
        label: "Interaction Depth",
        value: "Onboarding, auth, booking draft, history, profile, and modal-based support patterns",
      },
      {
        label: "Frontend Signal",
        value: "Shows strong navigation design and app-structured thinking beyond isolated screens",
      },
    ],
    overview: [
      "Smart Service Booking App was designed as a mobile-first case study to show how a service marketplace experience can feel structured, clear, and trustworthy across the full booking journey.",
      "The focus here is not inflated business claims. The focus is the frontend quality of the app itself: navigation design, state handling, booking steps, and the kind of UX sequencing expected in a serious React Native product.",
    ],
    whatIBuilt: [
      {
        title: "Validated onboarding and auth flow",
        description:
          "A mobile entry sequence covering onboarding, login, OTP verification, and the transition into the main application shell.",
      },
      {
        title: "Service discovery and detail surfaces",
        description:
          "Home, search, category listing, and service detail screens built to support decision-making on a small screen without losing clarity.",
      },
      {
        title: "Booking flow orchestration",
        description:
          "Address selection, slot picking, booking summary, payment method, and success screens treated as one smooth multi-step journey.",
      },
      {
        title: "Post-booking account experience",
        description:
          "Booking history, detail views, cancel and reschedule patterns, notifications, profile, settings, and support routes.",
      },
    ],
    flowSectionTitle: "Booking Journey Highlights",
    flowSectionDescription:
      "The strongest mobile work here is the flow continuity from discovery to service completion support.",
    journeyHighlights: [
      {
        title: "Search and Smart Service Finder",
        description:
          "Discovery is not reduced to a single list. The app structure supports search intent, categories, and filtered movement toward the right service.",
      },
      {
        title: "Service decision to booking conversion",
        description:
          "The journey from service detail to address, slot, summary, and payment is designed as a coherent mobile funnel rather than disconnected pages.",
      },
      {
        title: "Booking trust after confirmation",
        description:
          "History, detail, cancel, and reschedule states help the app feel complete and trustworthy after the initial conversion moment.",
      },
      {
        title: "Support and profile continuity",
        description:
          "Notifications, help, settings, and profile routes give the application the depth of a real app ecosystem instead of a demo-only shell.",
      },
    ],
    technicalSectionTitle: "Technical Highlights",
    technicalHighlights: [
      {
        title: "Navigation architecture for real app scale",
        description:
          "Root stacks, auth flows, tab shells, nested routes, and modal patterns were chosen to reflect how serious mobile products are structured.",
      },
      {
        title: "Theme and token discipline",
        description:
          "Shared theme tokens for spacing, typography, radius, shadows, and colors make the app easier to scale without visual drift.",
      },
      {
        title: "State and async readiness",
        description:
          "Zustand and TanStack Query prepare the app for booking draft persistence, session state, and backend-connected service data.",
      },
      {
        title: "Mobile interaction polish",
        description:
          "Reanimated, gesture tooling, and Expo-native utilities support the kind of touch-first experience expected from a strong React Native build.",
      },
    ],
    decisionsSectionTitle: "Mobile UX and Navigation Decisions",
    architectureDecisions: [
      {
        title: "Flows designed for small-screen clarity",
        description:
          "Each step is structured to keep cognitive load low while still exposing the information needed to make a booking decision confidently.",
      },
      {
        title: "Navigation built around user intent",
        description:
          "The separation of auth, app shell, booking journeys, and modals reflects how users actually move through a service-booking product.",
      },
      {
        title: "Account depth beyond the happy path",
        description:
          "By including booking history, reschedule, cancel, and support patterns, the app demonstrates a more complete product mindset.",
      },
      {
        title: "Architecture that can absorb real data later",
        description:
          "The scaffolding supports progression from polished prototype structure to real implementation without needing to rebuild core flow logic.",
      },
    ],
    whyItMatters: [
      "It highlights React Native strength through full user-journey design, not just individual screens.",
      "It shows product-minded thinking around booking confidence, mobile usability, and navigation clarity.",
      "It positions the work well for roles that value cross-platform frontend ownership and high-quality app UX.",
    ],
    links: {
      live: {
        label: "View Demo Build",
        href: "https://expo.dev/accounts/rams1996/projects/smart-service-booking-app/builds/c8f269e2-efea-41a3-93b3-964b241c956c",
      },
      code: {
        label: "View Source Code",
        href: "https://github.com/rampravesh19-96/smart-service-booking-mobile",
      },
    },
    meta: {
      title: "Smart Service Booking App Case Study | Ram Pravesh Singh",
      description:
        "Case study for a production-style React Native service booking app focused on mobile UX, navigation flow, and booking lifecycle design.",
    },
  },
} as const satisfies Record<string, CaseStudyPageContent>;

export const projectCaseStudyList = Object.values(projectCaseStudies);

export const featuredProjects = projectCaseStudyList.map((project) => ({
  title: project.title,
  slug: project.slug,
  positioning: project.heroSummary,
  type: project.shortType,
  stack: project.stack.slice(0, 4),
  preview: project.homepagePreview,
  links: {
    live: project.links.live.href,
    code: project.links.code.href,
    details: `/projects/${project.slug}`,
  },
})) as readonly {
  title: string;
  slug: string;
  positioning: string;
  type: string;
  stack: readonly string[];
  preview: {
    src: string;
    alt: string;
    label: string;
  };
  links: {
    live: string;
    code: string;
    details: string;
  };
}[];

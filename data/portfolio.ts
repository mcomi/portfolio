export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  problem: string;
  role: string;
  approach: string[];
  impact: string[];
  stack: string[];
  learned: string;
  accent: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Manuel Comi",
  location: "Mexico City, Mexico",
  email: "mcomi@hotmail.com",
  github: "https://github.com/mcomi",
  linkedin: "https://www.linkedin.com/in/mcomix/?locale=en_US",
  headline:
    "Senior Frontend Engineer building scalable product experiences with React, Next.js and AI.",
  subheadline:
    "I modernize complex frontend platforms into reusable, maintainable systems across micro frontends, design systems, editorial products, subscription flows and enterprise delivery pipelines.",
  availability:
    "Open to Senior, Lead, Staff-level and AI Product Frontend roles with international teams.",
};

export const organizations = [
  "Harvard Business Review",
  "Harvard Business Publishing",
  "UNAM / Filmoteca",
  "Enterprise product teams",
];

export const bring = [
  {
    title: "Frontend architecture in real product systems",
    text: "Migration work, micro frontends, SSR, reusable UI, API integration and long-term maintainability inside enterprise environments.",
  },
  {
    title: "Design-system and component-library craft",
    text: "Reusable components, Storybook documentation, composition patterns, accessibility and collaboration with design and product.",
  },
  {
    title: "Product-minded delivery",
    text: "A practical eye for business-critical UX, revenue flows, tracking, QA, deployment, feature flags and team velocity.",
  },
  {
    title: "AI experience implementation",
    text: "Conversational interfaces, recommendation surfaces, loading states, transparency patterns and frontend integration with AI-backed services.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "hbr-frontend-modernization",
    title: "HBR Frontend Modernization",
    eyebrow: "Enterprise frontend architecture",
    summary:
      "Modernization work for Harvard Business Review, supporting the migration from monolithic applications into scalable React and Next.js micro frontends.",
    context:
      "Harvard Business Review operates in a large enterprise ecosystem with established editorial, subscription and product workflows. The frontend modernization effort required moving legacy functionality into newer micro frontend applications while preserving business behavior and improving developer experience.",
    problem:
      "Legacy surfaces were harder to evolve, duplicated UI patterns across teams and made delivery slower than it needed to be. New product work needed a cleaner frontend architecture without disrupting existing services.",
    role:
      "I contributed as a senior frontend engineer, implementing React and Next.js features, shaping reusable components, integrating APIs, reviewing pull requests and collaborating with distributed teams in English.",
    approach: [
      "Built and migrated product surfaces in React and Next.js with a focus on maintainability and production readiness.",
      "Worked within a micro frontend ecosystem, integrating existing APIs, providers, shared libraries and environment configuration.",
      "Used component composition and clear data boundaries to reduce duplication across product pages.",
      "Supported technical decisions through code reviews, implementation notes and collaboration with backend, product and QA teams.",
    ],
    impact: [
      "Supported the migration from monolith-oriented frontend work into a more scalable micro frontend platform.",
      "Improved maintainability by moving repeated UI behavior into reusable implementation patterns.",
      "Helped teams ship modern editorial and product experiences without breaking critical enterprise workflows.",
    ],
    stack: ["React", "Next.js", "TypeScript", "JavaScript", "Micro frontends", "APIs", "Feature flags"],
    learned:
      "Modernization succeeds when architecture choices stay close to product reality: legacy behavior, analytics, deployment and team workflows matter as much as the new component code.",
    accent: "blue",
  },
  {
    slug: "hbr-component-library-design-system",
    title: "HBR Component Library / Design System",
    eyebrow: "Internal npm package and reusable UI",
    summary:
      "Creation and maintenance of reusable HBR components documented in Storybook and shared across micro frontends through an internal npm package.",
    context:
      "Multiple HBR product surfaces needed consistent UI behavior, visual quality and faster implementation. A shared component library helped teams avoid rebuilding the same patterns in isolated applications.",
    problem:
      "Without a reliable shared library, component inconsistencies and duplicated implementation details can slow teams down and weaken the user experience.",
    role:
      "I built reusable components, documented behavior in Storybook, collaborated with design/product and paid close attention to accessibility, props, composition and styling boundaries.",
    approach: [
      "Implemented reusable React components with clear props and predictable composition.",
      "Used Storybook as a development, documentation and review surface for shared UI.",
      "Balanced design consistency with the flexibility needed by different micro frontend teams.",
      "Kept styling maintainable with component-level boundaries and responsive behavior.",
    ],
    impact: [
      "Enabled reusable UI patterns across HBR applications.",
      "Improved developer experience by making common components easier to discover and validate.",
      "Helped preserve consistency across product and editorial surfaces.",
    ],
    stack: ["React", "Storybook", "Internal npm package", "CSS Modules", "SCSS", "Accessibility", "Design systems"],
    learned:
      "The best component libraries are not just collections of UI. They encode product decisions, collaboration habits and the small constraints that make teams faster.",
    accent: "green",
  },
  {
    slug: "hbr-executive-strategy-lab",
    title: "HBR Executive / Strategy Lab",
    eyebrow: "Premium editorial product experience",
    summary:
      "Next.js pages, layouts and modules for HBR Executive experiences, including Strategy Lab Beta and editorial flows for professional audiences.",
    context:
      "HBR Executive experiences serve a premium audience and require editorial polish, clear information architecture, responsive layouts and reliable integration with core providers and tracking.",
    problem:
      "New Executive surfaces needed to fit within existing micro frontend constraints while delivering modern product UX and editorial quality.",
    role:
      "I implemented pages, layouts and modules in Next.js, integrated user/content providers, worked with DataLayer tracking and collaborated with product, UX and backend contributors.",
    approach: [
      "Implemented responsive Next.js pages with SSR patterns such as getServerSideProps when appropriate.",
      "Integrated UserProvider, ContentProvider and shared core components into new modules.",
      "Built layouts with CSS Modules and SCSS, matching Figma intent across desktop and mobile.",
      "Connected tracking and DataLayer behavior so product interactions remained measurable.",
    ],
    impact: [
      "Helped deliver premium Executive experiences inside existing HBR frontend architecture.",
      "Supported new product modules without fragmenting shared UI patterns.",
      "Improved the path from editorial/product requirements to maintainable implementation.",
    ],
    stack: ["Next.js", "React", "getServerSideProps", "CSS Modules", "SCSS", "DataLayer", "Content APIs"],
    learned:
      "Premium editorial product work rewards precision: spacing, data shape, responsive behavior and analytics details all affect trust.",
    accent: "purple",
  },
  {
    slug: "hbr-ai-advisor-experience",
    title: "HBR AI Advisor Experience",
    eyebrow: "AI product frontend",
    summary:
      "Frontend work for AI-powered advisory experiences involving conversational UI, recommendations, loading states and data flows from AI-backed services.",
    context:
      "AI Advisor initiatives explored ways to help users find relevant answers, content and recommendations through a conversational product experience.",
    problem:
      "AI interfaces need more than a chat box. They need understandable states, useful recommendation surfaces, resilient async behavior and trust-building UX.",
    role:
      "I worked on frontend experiences and components for AI-backed flows, collaborating with UX, product and backend teams while considering loading, recommendation and feature-flagged behavior.",
    approach: [
      "Built UI patterns for chat-like interactions, advisor workspaces, recommendation cards and progressive response states.",
      "Integrated frontend flows with data returned from AI-related services.",
      "Considered streaming and EventSource/SSE patterns where useful for response behavior.",
      "Used feature flags and careful state design to support experimentation and rollout.",
    ],
    impact: [
      "Positioned AI functionality as a product experience with clear user value, not just a technical integration.",
      "Improved the frontend foundation for recommendation, transparency and async response patterns.",
      "Supported collaboration across product, UX and backend during a fast-evolving AI initiative.",
    ],
    stack: ["React", "Next.js", "AI UX", "Conversational UI", "Feature flags", "SSE/EventSource exploration", "APIs"],
    learned:
      "AI product UI needs to communicate uncertainty, usefulness and progress. The frontend has a major role in making generated experiences feel trustworthy.",
    accent: "orange",
  },
  {
    slug: "paywall-piano-migration",
    title: "Paywall / Piano Migration",
    eyebrow: "Revenue-critical frontend migration",
    summary:
      "Migration and debugging work around a Piano-powered paywall moving from monolithic behavior into micro frontend architecture.",
    context:
      "Subscription and paywall behavior is sensitive because it affects revenue, analytics, user experience and business reporting.",
    problem:
      "Paywall logic needed to move into a modern frontend context without losing correct trigger behavior, tracking or performance characteristics.",
    role:
      "I helped migrate and debug paywall behavior, investigated stop-rate and latency issues and coordinated technical findings with product and business stakeholders.",
    approach: [
      "Integrated Piano behavior into micro frontend contexts while preserving business-critical flows.",
      "Investigated trigger timing, latency and unexpected behavior around paywall presentation.",
      "Checked analytics and event behavior so business teams could trust the migration.",
      "Collaborated with product and business partners around sensitive monetization behavior.",
    ],
    impact: [
      "Supported migration of a revenue-sensitive feature into modern frontend architecture.",
      "Helped reduce risk around analytics, user experience and subscription behavior.",
      "Connected frontend debugging work directly to business-critical outcomes.",
    ],
    stack: ["React", "Next.js", "Piano", "Analytics", "Micro frontends", "Performance debugging"],
    learned:
      "Revenue-critical frontend work requires a different level of care: every timing issue, event and edge case can become a business problem.",
    accent: "red",
  },
  {
    slug: "error-pages-mfe-s3-deployment",
    title: "Error Pages MFE + S3 Deployment",
    eyebrow: "Frontend infrastructure and delivery",
    summary:
      "Micro frontend/static deployment work for error pages using Next.js, AWS S3, CloudFront, Jenkins and QA deployment workflows.",
    context:
      "Error pages are part of the production experience and need reliable assets, predictable deployment, cache behavior and coordination with surrounding frontend systems.",
    problem:
      "Static assets and error page deployment required careful configuration around assetPrefix/basePath, S3 sync behavior, QA validation, backup and rollback.",
    role:
      "I worked across frontend implementation and delivery details, debugging deployment behavior and coordinating with other MFEs and shared libraries.",
    approach: [
      "Implemented static Next.js output patterns for error page surfaces.",
      "Configured assets and paths for S3 and CloudFront delivery.",
      "Debugged aws s3 sync output and deployment artifact behavior.",
      "Supported Jenkins QA workflows, backup and rollback considerations.",
    ],
    impact: [
      "Helped standardize frontend delivery for static production surfaces.",
      "Improved deployment reliability for assets and error pages.",
      "Demonstrated frontend ownership beyond UI implementation into CI/CD and cloud delivery.",
    ],
    stack: ["Next.js", "AWS S3", "CloudFront", "Jenkins", "Static assets", "assetPrefix", "basePath"],
    learned:
      "Frontend production quality includes what happens after build: artifact shape, cache behavior, QA paths and rollback strategy all matter.",
    accent: "cyan",
  },
  {
    slug: "template-library-mvp2",
    title: "Template Library / MVP2 Components",
    eyebrow: "Complex UI component architecture",
    summary:
      "Reusable React components for a Template Library experience, including grids, filtering, action bars, dialogs, drawers, renderers and viewer surfaces.",
    context:
      "The Template Library work required a maintainable UI architecture for browsing, managing, viewing and editing reusable templates.",
    problem:
      "A component-heavy product area can become hard to reason about unless state, rendering responsibilities and service integration are clearly separated.",
    role:
      "I implemented modular components such as TemplateLibraryGrid, FiltersToolbar, TemplateActionsBar, NameCellRenderer, TagRenderer, SelectFolderDialog, FoldersSelect, Snackbar, Viewer, DrawerTemplateInfo and TemplateInfoDialog.",
    approach: [
      "Separated grid, action, dialog, renderer and viewer responsibilities into focused components.",
      "Handled UI states for selection, filtering, feedback, navigation and template details.",
      "Integrated components with service data while keeping rendering logic readable.",
      "Designed for reuse and future product expansion rather than one-off screens.",
    ],
    impact: [
      "Created a clearer frontend foundation for template administration workflows.",
      "Improved maintainability in a UI with many states and interaction paths.",
      "Supported product development by making complex surfaces easier to extend.",
    ],
    stack: ["React", "TypeScript", "Component architecture", "Data grids", "Dialogs", "Service integration"],
    learned:
      "Complex UI becomes manageable when components own one job, data contracts are explicit and state transitions are visible.",
    accent: "blue",
  },
  {
    slug: "editorial-layout-system-herozone",
    title: "Editorial Layout System / HeroZone",
    eyebrow: "Frontend craft and responsive composition",
    summary:
      "Responsive editorial layouts using HeroZone, ContentCard variants and normalized content data from provider integrations.",
    context:
      "Editorial pages need to support multiple content compositions while staying faithful to design and readable across breakpoints.",
    problem:
      "A boolean-heavy component API can become brittle as editorial variants grow. The layout system needed scalable variants and reliable mobile behavior.",
    role:
      "I implemented responsive HeroZone and ContentCard patterns, using variants such as featured, compact, mobile-primary and mobile-thumbnail-right.",
    approach: [
      "Used variant-based component APIs instead of stacking boolean flags.",
      "Normalized API responses through ContentProvider-style data shaping.",
      "Matched Figma layouts with mobile-first CSS Modules and SCSS.",
      "Built responsive breakpoints that preserve editorial hierarchy and content scannability.",
    ],
    impact: [
      "Improved reuse of editorial layout patterns.",
      "Made component behavior easier to extend as new variants appeared.",
      "Strengthened visual polish and responsive quality on content-heavy surfaces.",
    ],
    stack: ["Next.js", "React", "CSS Modules", "SCSS", "Responsive design", "ContentProvider", "Figma"],
    learned:
      "Frontend craft is architecture at a smaller scale: naming, variants, data shape and responsive rules decide whether a component ages well.",
    accent: "green",
  },
  {
    slug: "unam-filmoteca-digital-archive",
    title: "UNAM Filmoteca Digital Archive Systems",
    eyebrow: "Full-stack and infrastructure background",
    summary:
      "Systems for managing physical and digital film archive materials, including web apps, APIs, infrastructure, security, Docker and internal IT foundations.",
    context:
      "Before my recent HBR-focused work, I built and supported systems for Filmoteca de la UNAM, an important cultural institution managing film, posters, photos and digital preservation workflows.",
    problem:
      "Archive workflows needed stronger internal systems for cataloging, digital asset management, preservation support and operational reliability.",
    role:
      "I worked across full-stack development, infrastructure, APIs, security, Docker, DevOps and internal systems, helping strengthen the IT area around complex cultural archive needs.",
    approach: [
      "Built Java/web applications and REST APIs for internal management workflows.",
      "Supported infrastructure, security and deployment practices for institutional systems.",
      "Worked with physical and digital archive concepts including films, posters, photos and preservation materials.",
      "Created practical tooling for teams managing specialized cultural collections.",
    ],
    impact: [
      "Established a broad technical foundation across frontend, backend and infrastructure.",
      "Supported internal systems for a culturally significant archive environment.",
      "Built the autonomy and systems thinking that now informs my frontend architecture work.",
    ],
    stack: ["Java", "REST APIs", "Docker", "DevOps", "Security", "Digital asset management", "Infrastructure"],
    learned:
      "Working in institutional systems teaches patience, ownership and respect for operational detail. Those habits transfer directly into enterprise frontend work.",
    accent: "purple",
  },
];

export const featuredCaseSlugs = [
  "hbr-frontend-modernization",
  "hbr-component-library-design-system",
  "hbr-ai-advisor-experience",
  "paywall-piano-migration",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "SCSS",
      "CSS Modules",
      "Responsive Design",
      "Accessibility",
      "Performance",
    ],
  },
  {
    title: "Architecture",
    items: [
      "Micro frontends",
      "Component libraries",
      "Design systems",
      "SSR",
      "Static generation",
      "API integration",
      "Feature flags",
      "State management",
      "Reusable product systems",
    ],
  },
  {
    title: "Testing / Quality",
    items: [
      "Storybook",
      "Code reviews",
      "ESLint",
      "Prettier",
      "QA collaboration",
      "Pull request reviews",
      "Developer experience",
    ],
  },
  {
    title: "Infrastructure / Delivery",
    items: [
      "Jenkins",
      "Docker",
      "AWS S3",
      "CloudFront",
      "CI/CD pipelines",
      "Environment configuration",
      "Static deployments",
      "Rollback planning",
    ],
  },
  {
    title: "AI / Product",
    items: [
      "AI Advisor UX",
      "Conversational interfaces",
      "Recommendation UI",
      "Streaming/SSE exploration",
      "Feature-flagged rollout",
      "Analytics-aware UX",
      "Product collaboration",
    ],
  },
];

export const productSignals = [
  {
    title: "Business-critical product flows",
    summary:
      "Paywall migration, Piano integration, analytics behavior and subscription-sensitive UX where frontend decisions affect monetization, measurement and user experience.",
  },
  {
    title: "Premium editorial and executive experiences",
    summary:
      "HBR Executive, Strategy Lab Beta and editorial layout work where product quality depends on responsive craft, content modeling, tracking and trust with a professional audience.",
  },
  {
    title: "AI product UX",
    summary:
      "AI Advisor work focused on conversational interfaces, recommendations, progressive loading states, service integration and transparency patterns for generated experiences.",
  },
  {
    title: "Internal product modernization",
    summary:
      "Bundles, template library components and legacy migrations that turn older workflows into maintainable React modules with clearer state, forms, actions and service boundaries.",
  },
];

export const timeline = [
  {
    period: "2021 - Present",
    title: "Harvard Business Review / Harvard Business Publishing",
    text: "Frontend modernization, micro frontends, component libraries, Executive experiences, AI Advisor initiatives, paywall migration and CI/CD work through consulting engagements.",
  },
  {
    period: "Earlier foundation",
    title: "UNAM / Filmoteca",
    text: "Full-stack systems, infrastructure, digital asset management, DevOps and internal platforms for cultural archive operations.",
  },
  {
    period: "Professional product focus",
    title: "Business, UX and delivery alignment",
    text: "Product-minded frontend work across monetization, premium editorial experiences, AI-assisted interfaces, internal tools, analytics and production delivery.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getFeaturedCaseStudies() {
  return featuredCaseSlugs
    .map((slug) => getCaseStudy(slug))
    .filter((study): study is CaseStudy => Boolean(study));
}

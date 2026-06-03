export type CaseStudySection = {
  title: string;
  text?: string;
  items?: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  category: string;
  roleLabel: string;
  summary: string;
  whyMatters: string;
  context: string;
  problem: string;
  role: string;
  approach: string[];
  impact: string[];
  stack: string[];
  learned: string;
  accent: string;
  confidentiality: string;
  visual: {
    caption: string;
    steps: string[];
  };
  deepDive?: CaseStudySection[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export const profile = {
  name: "Manuel Comi",
  location: "Mexico City, Mexico",
  email: "mcomi@hotmail.com",
  github: "https://github.com/mcomi",
  linkedin: "https://www.linkedin.com/in/mcomix/?locale=en_US",
  resumePath: "/manuel-comi-resume.pdf",
  headline:
    "Senior Frontend Engineer modernizing product platforms with React, Next.js and AI-ready UX.",
  subheadline:
    "I work where frontend is more than the interface: architecture, shared components, data shape, analytics, rollout, performance, delivery and long-term maintainability.",
  availability:
    "Open to Senior, Lead, Staff-level and AI Product Frontend roles with remote or international teams.",
};

export const organizations = [
  "Harvard Business Review",
  "Harvard Business Publishing",
  "UNAM / Filmoteca",
  "Enterprise product teams",
];

export const currentFocus = [
  "AI product experiences",
  "React and Next.js platform work",
  "Frontend architecture and design systems",
  "Micro frontend modernization",
  "Product-led engineering with international teams",
];

export const githubActivityNote =
  "Most of my recent engineering work since 2021 has been delivered through private enterprise repositories and organization-managed GitHub accounts tied to work email identities. Because of that, my public GitHub profile does not fully represent my production contribution history. This portfolio focuses on case studies that summarize the systems, product surfaces and technical challenges I have worked on across React, Next.js, micro frontends, design systems, AI product UX and CI/CD. My public GitHub is used for selected demos, experiments and current technical interests.";

export const githubActivityShortNote =
  "Much of my recent production work lives in private enterprise repositories and organization-managed GitHub accounts. My public GitHub highlights selected demos, experiments and current technical interests.";

export const bring = [
  {
    title: "Modernization judgment",
    text: "I help move legacy frontend behavior into modern React and Next.js surfaces without ignoring the old system underneath: APIs, analytics, QA paths, release workflows and production constraints.",
  },
  {
    title: "Component and system thinking",
    text: "I build UI as reusable product infrastructure: components with clear composition, documented behavior, accessible states and styling boundaries that can survive across teams and micro frontends.",
  },
  {
    title: "Product-minded frontend delivery",
    text: "I pay attention to the business behavior behind the interface, especially subscription flows, tracking, editorial experiences, internal tools and the details that make product decisions measurable.",
  },
  {
    title: "AI product UX implementation",
    text: "I think about AI interfaces as product systems: progressive states, recommendation cards, trust cues, empty/error paths, feature flags and service integration, not just a chat surface.",
  },
  {
    title: "Enterprise collaboration",
    text: "I am comfortable working with product, UX, backend, QA and distributed engineering teams in English, turning ambiguity into implementation plans and production-ready UI.",
  },
  {
    title: "Frontend ownership beyond UI",
    text: "I can work through the delivery layer too: Jenkins, Docker, AWS S3, CloudFront, static artifacts, environment configuration, rollback concerns and deployment debugging.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "hbr-frontend-modernization",
    title: "HBR Frontend Modernization",
    eyebrow: "Enterprise frontend architecture",
    category: "Platform modernization",
    roleLabel: "Senior Frontend Engineer / Consultant",
    summary:
      "Modernization work for Harvard Business Review, supporting the move from monolithic frontend behavior into scalable React and Next.js micro frontends.",
    whyMatters:
      "Modernization only succeeds when new architecture respects existing services, analytics, QA workflows and release constraints. This work shows senior frontend judgment inside a real enterprise ecosystem.",
    context:
      "Harvard Business Review operates across editorial, subscription and product workflows with existing services and established production expectations. The modernization effort required moving product surfaces into newer micro frontend applications while keeping business behavior reliable.",
    problem:
      "Legacy frontend surfaces were harder to evolve, repeated UI behavior across teams and made new delivery slower than it needed to be. The challenge was not only to rebuild screens, but to move behavior safely into a more maintainable system.",
    role:
      "I contributed as a senior frontend engineer, implementing React and Next.js features, integrating APIs and providers, shaping reusable patterns, reviewing pull requests and collaborating with distributed teams in English.",
    approach: [
      "Built and migrated product surfaces in React and Next.js with attention to production behavior, not only visual parity.",
      "Worked within a micro frontend ecosystem, integrating existing APIs, shared providers, environment configuration and shared libraries.",
      "Used reusable component patterns and clear data boundaries to reduce duplicated implementation decisions.",
      "Balanced modernization tradeoffs with analytics, QA paths, release timing and compatibility with existing services.",
      "Supported technical decisions through pull request reviews, implementation notes and collaboration with backend, product and QA teams.",
    ],
    impact: [
      "Supported migration from monolithic frontend behavior into a more scalable micro frontend platform.",
      "Improved maintainability through reusable frontend patterns and clearer implementation boundaries.",
      "Helped teams ship modern editorial and product experiences without disrupting critical enterprise workflows.",
      "Reduced implementation risk by keeping analytics, provider integration and release workflows in view during migration work.",
    ],
    stack: ["React", "Next.js", "TypeScript", "JavaScript", "Micro frontends", "APIs", "Feature flags"],
    learned:
      "Modernization succeeds when architecture choices stay close to product reality: legacy behavior, analytics, deployment and team workflows matter as much as the new component code.",
    accent: "blue",
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted architecture view - no proprietary details",
      steps: ["Legacy surface", "MFE boundary", "Shared providers", "Reusable UI", "QA/release"],
    },
    deepDive: [
      {
        title: "Why the project mattered",
        text: "The work supported a shift from slower legacy behavior toward a frontend platform that could evolve through smaller product surfaces, clearer ownership and more reusable implementation patterns.",
      },
      {
        title: "Architecture tradeoffs",
        items: [
          "Preserve existing business behavior while moving UI into modern surfaces.",
          "Use shared components where consistency mattered, while allowing product-specific composition.",
          "Keep provider and API integration explicit so migrated pages remained testable and maintainable.",
          "Treat analytics and QA workflows as part of the architecture, not as follow-up tasks.",
        ],
      },
    ],
  },
  {
    slug: "hbr-component-library-design-system",
    title: "HBR Component Library / Design System",
    eyebrow: "Internal npm package and reusable UI",
    category: "Design systems",
    roleLabel: "Frontend Engineer / Component Library Contributor",
    summary:
      "Creation and maintenance of reusable HBR components documented in Storybook and shared across micro frontends through an internal npm package.",
    whyMatters:
      "A component library turns recurring product decisions into reusable infrastructure. It improves consistency, reduces duplicated work and gives teams a shared language for UI behavior.",
    context:
      "Multiple HBR product surfaces needed consistent UI behavior, visual quality and faster implementation. A shared component library helped teams avoid rebuilding the same patterns in isolated applications.",
    problem:
      "Without a reliable shared library, component inconsistencies and duplicated implementation details can slow teams down and weaken the user experience.",
    role:
      "I built reusable components, documented behavior in Storybook, collaborated with design/product and paid close attention to accessibility, props, composition and styling boundaries.",
    approach: [
      "Implemented reusable React components with clear props, predictable composition and responsive behavior.",
      "Used Storybook as a development, documentation and review surface for shared UI.",
      "Balanced design consistency with the flexibility needed by different micro frontend teams.",
      "Kept styling maintainable with component-level boundaries and accessibility-conscious states.",
    ],
    impact: [
      "Enabled reusable UI patterns across HBR applications.",
      "Improved developer experience by making common components easier to discover and validate.",
      "Helped preserve consistency across product and editorial surfaces.",
    ],
    stack: ["React", "Storybook", "Internal npm package", "CSS Modules", "SCSS", "Accessibility", "Design systems"],
    learned:
      "The best component libraries are not just collections of UI. They encode product decisions, collaboration habits and the small constraints that make teams faster.",
    accent: "teal",
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted component system view - no proprietary details",
      steps: ["Design intent", "Component API", "Storybook docs", "Internal package", "MFE reuse"],
    },
  },
  {
    slug: "hbr-executive-strategy-lab",
    title: "HBR Executive / Strategy Lab",
    eyebrow: "Premium editorial product experience",
    category: "Premium product UX",
    roleLabel: "Senior Frontend Engineer",
    summary:
      "Next.js pages, layouts and modules for HBR Executive experiences, including Strategy Lab Beta and editorial flows for professional audiences.",
    whyMatters:
      "Premium editorial products need trust, clarity and polish. The frontend has to connect content, layout, tracking and responsive behavior without making the experience feel heavy.",
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
    accent: "green",
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted premium content flow - no proprietary details",
      steps: ["Audience need", "Content provider", "Responsive layout", "Tracking", "Executive UX"],
    },
  },
  {
    slug: "hbr-ai-advisor-experience",
    title: "HBR AI Advisor Experience",
    eyebrow: "AI product frontend",
    category: "AI product UX",
    roleLabel: "Senior Frontend Engineer",
    summary:
      "Frontend work for AI-powered advisory experiences involving conversational UI, recommendations, loading states and data flows from AI-backed services.",
    whyMatters:
      "This work sits at the intersection of frontend architecture and AI product UX: making generated and recommended experiences feel useful, legible and trustworthy.",
    context:
      "AI Advisor initiatives explored ways to help users find relevant answers, content and recommendations through a conversational product experience.",
    problem:
      "AI interfaces need more than a chat box. They need understandable states, useful recommendation surfaces, resilient async behavior and trust-building UX.",
    role:
      "I worked on frontend experiences and components for AI-backed flows, collaborating with UX, product and backend teams while considering loading, recommendation and feature-flagged behavior.",
    approach: [
      "Built UI patterns for chat-like interactions, advisor workspaces, recommendation cards and progressive response states.",
      "Designed for empty, loading, error and generated-response states so the experience stayed understandable during async work.",
      "Integrated frontend flows with data returned from AI-related services.",
      "Considered streaming and EventSource/SSE patterns where useful for response behavior, framed as product and technical exploration where appropriate.",
      "Used feature flags and careful state design to support experimentation and rollout.",
    ],
    impact: [
      "Positioned AI functionality as a product experience with clear user value, not just a technical integration.",
      "Strengthened the frontend foundation for recommendation, transparency and async response patterns.",
      "Supported collaboration across product, UX and backend during a fast-evolving AI initiative.",
    ],
    stack: ["React", "Next.js", "AI UX", "Conversational UI", "Feature flags", "SSE/EventSource exploration", "APIs"],
    learned:
      "AI product UI needs to communicate uncertainty, usefulness and progress. The frontend has a major role in making generated experiences feel trustworthy.",
    accent: "purple",
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted AI advisor flow - no proprietary details",
      steps: ["User intent", "AI service response", "Progressive UI states", "Recommendation cards", "User action"],
    },
    deepDive: [
      {
        title: "Why AI product UX is different",
        text: "Generated experiences need to show progress, confidence and next actions. Users need to understand what is happening while the system is working and why a recommendation is useful once it appears.",
      },
      {
        title: "Interface states that mattered",
        items: [
          "Loading and progressive response states that avoid making the product feel stuck.",
          "Recommendation cards that turn generated output into usable product actions.",
          "Empty and error states that preserve user trust when the service cannot provide a useful answer.",
          "Workspace patterns that make the advisor feel like a product surface, not a detached widget.",
        ],
      },
    ],
  },
  {
    slug: "paywall-piano-migration",
    title: "Paywall / Piano Migration",
    eyebrow: "Revenue-critical frontend migration",
    category: "Monetization UX",
    roleLabel: "Senior Frontend Engineer",
    summary:
      "Migration and debugging work around a Piano-powered paywall moving from monolithic behavior into micro frontend architecture.",
    whyMatters:
      "Paywall behavior affects revenue, analytics trust, user experience and business reporting. This work shows frontend ownership of a sensitive product surface.",
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
      "Focused on reducing migration risk in a flow tied directly to subscriptions and reporting.",
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
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted paywall and analytics flow - no proprietary details",
      steps: ["Article context", "Paywall decision", "Piano trigger", "Analytics event", "Business reporting"],
    },
    deepDive: [
      {
        title: "Business-critical debugging",
        text: "The work required attention to stop-rate behavior, latency, trigger timing and event integrity because a small frontend difference could change what users saw and what business teams measured.",
      },
      {
        title: "Risk reduction focus",
        items: [
          "Preserve paywall behavior during architectural migration.",
          "Keep analytics events trustworthy for reporting.",
          "Coordinate findings with product and business stakeholders.",
          "Treat performance and timing as product concerns, not only engineering details.",
        ],
      },
    ],
  },
  {
    slug: "error-pages-mfe-s3-deployment",
    title: "Error Pages MFE + S3 Deployment",
    eyebrow: "Frontend infrastructure and delivery",
    category: "Production delivery",
    roleLabel: "Frontend Engineer with delivery ownership",
    summary:
      "Micro frontend/static deployment work for error pages using Next.js, AWS S3, CloudFront, Jenkins and QA deployment workflows.",
    whyMatters:
      "This case shows frontend ownership beyond UI: build output, static assets, deployment paths, QA environments, cache behavior and rollback planning.",
    context:
      "Error pages are part of the production experience and need reliable assets, predictable deployment, cache behavior and coordination with surrounding frontend systems.",
    problem:
      "Static assets and error page deployment required careful configuration around assetPrefix/basePath, S3 sync behavior, QA validation, backup and rollback.",
    role:
      "I worked across frontend implementation and delivery details, debugging deployment behavior and coordinating with other MFEs and shared libraries.",
    approach: [
      "Implemented static Next.js output patterns for error page surfaces.",
      "Configured assetPrefix and basePath behavior for static delivery through S3 and CloudFront.",
      "Debugged aws s3 sync output and deployment artifact behavior.",
      "Supported Jenkins QA workflows, backup and rollback considerations.",
      "Validated artifact shape so deployment behavior matched the expected QA and production paths.",
    ],
    impact: [
      "Helped standardize frontend delivery for static production surfaces.",
      "Improved deployment reliability for assets and error pages.",
      "Demonstrated frontend ownership beyond UI implementation into CI/CD and cloud delivery.",
    ],
    stack: ["Next.js", "AWS S3", "CloudFront", "Jenkins", "Static assets", "assetPrefix", "basePath"],
    learned:
      "Frontend production quality includes what happens after build: artifact shape, cache behavior, QA paths and rollback strategy all matter.",
    accent: "orange",
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted deployment flow - no proprietary details",
      steps: ["Build", "Static artifacts", "S3", "CloudFront", "Rollback"],
    },
    deepDive: [
      {
        title: "Delivery details",
        items: [
          "Static output and asset paths needed to match deployment expectations.",
          "S3 sync behavior had to be debugged at the artifact level.",
          "CloudFront and QA paths required careful validation.",
          "Backup and rollback planning were part of production readiness.",
        ],
      },
    ],
  },
  {
    slug: "template-library-mvp2",
    title: "Template Library / MVP2 Components",
    eyebrow: "Complex UI component architecture",
    category: "Internal product UI",
    roleLabel: "Frontend Engineer",
    summary:
      "Reusable React components for a Template Library experience, including grids, filtering, action bars, dialogs, drawers, renderers and viewer surfaces.",
    whyMatters:
      "Complex internal tools become maintainable when the UI is decomposed around clear responsibilities, explicit state and service boundaries.",
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
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted internal tool structure - no proprietary details",
      steps: ["Grid", "Filters", "Actions", "Dialogs", "Viewer"],
    },
  },
  {
    slug: "editorial-layout-system-herozone",
    title: "Editorial Layout System / HeroZone",
    eyebrow: "Frontend craft and responsive composition",
    category: "Editorial layout system",
    roleLabel: "Frontend Engineer",
    summary:
      "Responsive editorial layouts using HeroZone, ContentCard variants and normalized content data from provider integrations.",
    whyMatters:
      "Editorial frontend craft is architecture at a smaller scale: variants, data shape and responsive rules decide whether a component can evolve.",
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
    accent: "teal",
    confidentiality: "Private enterprise work - details abstracted for confidentiality.",
    visual: {
      caption: "Abstracted editorial composition view - no proprietary details",
      steps: ["Content model", "HeroZone", "Card variants", "Breakpoints", "Editorial page"],
    },
  },
  {
    slug: "unam-filmoteca-digital-archive",
    title: "UNAM Filmoteca Digital Archive Systems",
    eyebrow: "Full-stack and infrastructure background",
    category: "Full-stack foundation",
    roleLabel: "Full-stack / Infrastructure Engineer",
    summary:
      "Systems for managing physical and digital film archive materials, including web apps, APIs, infrastructure, security, Docker and internal IT foundations.",
    whyMatters:
      "This background explains the systems perspective behind my frontend work: production constraints, data models, security, infrastructure and operational ownership.",
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
    accent: "blue",
    confidentiality: "Institutional systems work - represented with non-confidential details.",
    visual: {
      caption: "Abstracted archive systems view - no proprietary details",
      steps: ["Archive workflow", "REST APIs", "Internal apps", "Infrastructure", "Preservation support"],
    },
  },
];

export const featuredCaseSlugs = [
  "hbr-frontend-modernization",
  "hbr-ai-advisor-experience",
  "paywall-piano-migration",
];

export const additionalCaseSlugs = [
  "error-pages-mfe-s3-deployment",
  "hbr-component-library-design-system",
  "hbr-executive-strategy-lab",
  "editorial-layout-system-herozone",
  "template-library-mvp2",
  "unam-filmoteca-digital-archive",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    description:
      "My daily frontend work is centered on React and Next.js product surfaces, with attention to responsive behavior, accessibility, performance and maintainable styling.",
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
    description:
      "I work comfortably in systems where frontend architecture has to respect legacy behavior, shared providers, API contracts, feature flags and micro frontend boundaries.",
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
    description:
      "Quality for me includes code review, documented component behavior, QA collaboration and implementation choices that make future changes easier to reason about.",
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
    description:
      "I can follow frontend work into delivery: Jenkins pipelines, Docker, S3/CloudFront deployments, environment configuration, static artifacts and rollback concerns.",
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
    description:
      "For AI product UX, I focus on useful states and trust-building flows: progressive loading, recommendations, feature-flagged rollout, service integration and analytics-aware behavior.",
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
    title: "Senior Frontend Engineer / Frontend Engineering Consultant",
    org: "Harvard Business Review / Harvard Business Publishing",
    meta: "Mexico / Remote / International teams",
    text: "Frontend modernization, micro frontends, component libraries, Executive experiences, AI Advisor initiatives, paywall migration and CI/CD work through consulting engagements.",
    bullets: [
      "Frontend modernization across React and Next.js product surfaces.",
      "Migration from monolithic frontend behavior into micro frontend architecture.",
      "Built and maintained reusable UI components and internal component systems.",
      "Worked on HBR Executive, Strategy Lab, AI Advisor, paywall/Piano migration, editorial layouts, error pages MFE and CI/CD workflows.",
      "Collaborated with product, UX, backend, QA and distributed engineering teams in English.",
      "Supported production-facing experiences involving analytics, feature flags, subscription behavior and enterprise delivery.",
    ],
  },
  {
    period: "Earlier foundation",
    title: "Full-stack / Infrastructure / Internal Systems",
    org: "UNAM / Filmoteca",
    meta: "Mexico City / Cultural archive systems",
    text: "Full-stack systems, infrastructure, digital asset management, DevOps and internal platforms for cultural archive operations.",
    bullets: [
      "Built Java/web applications and REST APIs for internal workflows.",
      "Worked with digital asset management concepts for physical and digital archive materials.",
      "Supported infrastructure, security, Docker, DevOps and internal systems.",
      "Helped strengthen IT foundations for a culturally significant archive environment.",
    ],
  },
];

export const productFocus = {
  period: "Professional product focus",
  title: "Business, UX and delivery alignment",
  text: "Product-minded frontend work across monetization, premium editorial experiences, AI-assisted interfaces, internal tools, analytics and production delivery.",
};

export const labs = [
  {
    title: "Portfolio",
    status: "Selected public work",
    summary:
      "The source code for this portfolio, built to present private enterprise work through clear case studies, structured content and recruiter-friendly storytelling.",
    stack: ["Next.js", "React", "TypeScript", "CSS Modules", "SEO"],
    href: "https://github.com/mcomi/portfolio",
  },
  {
    title: "AI Streaming Demo",
    status: "Coming soon",
    summary:
      "A small Next.js experiment exploring AI chat UX, streaming responses, loading states, error states and progressive rendering.",
    stack: ["Next.js", "TypeScript", "AI UX", "Streaming", "Frontend states"],
    href: "https://github.com/mcomi/ai-chat-streaming",
  },
  {
    title: "Component System Playground",
    status: "Coming soon",
    summary:
      "A focused React/Storybook playground for reusable UI components, accessibility patterns and scalable component APIs.",
    stack: ["React", "Storybook", "Design systems", "Accessibility"],
  },
  {
    title: "Frontend Architecture Notes",
    status: "Coming soon",
    summary:
      "Notes and examples around micro frontends, feature flags, design systems, CI/CD and frontend modernization.",
    stack: ["Micro frontends", "Feature flags", "CI/CD", "Architecture notes"],
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

export function getAdditionalCaseStudies() {
  return additionalCaseSlugs
    .map((slug) => getCaseStudy(slug))
    .filter((study): study is CaseStudy => Boolean(study));
}

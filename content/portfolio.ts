export type FeaturedProject = {
  name: string;
  repoUrl: string;
  description: string;
  role: string;
  stack: string[];
  problem: string;
  decisions: string[];
  outcome: string;
  learnings: string[];
};

export const profile = {
  name: "Ahmed Yassin Ahmed",
  headline:
    "Backend Engineer building reliable systems in Go, PostgreSQL, RabbitMQ, and workflow-heavy platforms.",
  summary: [
    "I am a Software Engineering student focused on backend engineering.",
    "My strongest work centers on API design, data modeling, background jobs, event-driven processing, and business workflow systems.",
    "I use React/Next.js and Flutter when needed, but my main strength is building backend systems that are clear, maintainable, and reliable.",
  ],
  social: {
    github: "https://github.com/Almichot-1",
    linkedin: "https://www.linkedin.com/in/ahmed-yassin-364b462b5/",
    email: "ahmedyasine230@gmail.com",
  },
  proofStrip: [
    "Go",
    "PostgreSQL",
    "RabbitMQ",
    "Workflow systems",
    "API design",
  ],
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Distributed Payment Processing System",
    repoUrl: "https://github.com/Almichot-1/distributed-payment-system",
    description:
      "Flagship backend project in Go focused on idempotent payment flows, explicit state transitions, reliable event publishing, and auditability.",
    role: "Designed and implemented as a backend systems project centered on reliability, clarity, and local reproducibility.",
    stack: ["Go", "Gin", "PostgreSQL", "RabbitMQ", "Docker"],
    problem:
      "Model payment workflows safely, prevent duplicate processing, and keep state changes and event publishing consistent in a system that is still easy to run and inspect locally.",
    decisions: [
      "Used idempotency keys and uniqueness constraints to prevent duplicate payment creation.",
      "Used explicit payment state transitions to keep processing rules and failure handling understandable.",
      "Applied a transactional outbox pattern so state updates and event publishing stay aligned.",
      "Separated payment, audit, and mock provider services and kept the system runnable with Docker-based local development.",
    ],
    outcome:
      "Produced a runnable multi-service backend with API documentation, health checks, integration tests, and a Dockerized local setup.",
    learnings: [
      "How reliability patterns shape API design, persistence rules, and background processing.",
      "Where service boundaries improve workflow clarity and where they add complexity.",
    ],
  },
  {
    name: "Maid Recruitment Platform",
    repoUrl: "https://github.com/Almichot-1/maid_recuritment",
    description:
      "Workflow-heavy recruitment platform with a Go backend that manages candidate lifecycle, approvals, agency collaboration, file handling, and admin operations.",
    role: "Led the backend workflow design and shipped the supporting Next.js product layer around it.",
    stack: ["Go", "Chi", "GORM", "PostgreSQL", "Next.js", "TypeScript"],
    problem:
      "Coordinate candidate intake, sharing, approvals, tracking, and partner collaboration across agencies and platform admins without letting business rules sprawl.",
    decisions: [
      "Structured the backend around handlers, services, repositories, and jobs to keep workflow logic maintainable.",
      "Used role-aware authentication and pairing-scoped access so agency collaboration stays controlled.",
      "Split runtime responsibilities across API, expiry worker, and admin setup commands for clearer business operations.",
      "Handled document uploads, OCR-assisted intake, CV generation, and SQL migrations as part of the workflow baseline.",
    ],
    outcome:
      "Delivered a recruitment business system with background jobs, role-based workflows, tests, and deployment-ready separation between API, worker, and frontend surfaces.",
    learnings: [
      "How complex business workflows stay maintainable when the backend boundaries are explicit.",
      "How backend workflow design shapes every user-facing step in a multi-actor product.",
    ],
  },
  {
    name: "Maid Showcase MVP (simple_flow)",
    repoUrl: "https://github.com/Almichot-1/simple_flow",
    description:
      "Backend-first MVP for recruitment profile showcasing with Go APIs, JWT authentication, role-based authorization, and agency-managed profile workflows.",
    role: "Scoped and shipped as an MVP with backend clarity prioritized over extra product surface area.",
    stack: ["Go", "Gin", "GORM", "PostgreSQL", "React", "Vite", "JWT"],
    problem:
      "Establish the minimum backend needed for admins, agencies, and employers to manage access and profile workflows safely.",
    decisions: [
      "Kept the architecture simple so authentication, authorization, and profile management stayed easy to reason about.",
      "Implemented JWT auth and role-based authorization for admin, agency, and employer flows.",
      "Used PostgreSQL with local Docker setup and separated backend/frontend apps to keep the MVP clean and extendable.",
    ],
    outcome:
      "Created a clean backend baseline for future workflow growth without overbuilding the product.",
    learnings: [
      "How to set MVP scope without dropping the core authorization rules that make the system usable.",
      "How a clean backend baseline makes later workflow expansion easier.",
    ],
  },
  {
    name: "Diaspora Delivery (P2P Delivery Platform)",
    repoUrl: "https://github.com/Almichot-1/p2p-delivery-platform",
    description:
      "Supporting product project showing end-to-end delivery in Flutter with Firebase-backed request, trip, chat, and notification flows.",
    role: "Built as an end-to-end coordination product, with Firebase handling the supporting backend layer.",
    stack: ["Flutter", "Dart", "Firebase Auth", "Firestore", "Firebase Messaging"],
    problem:
      "Coordinate delivery requests, traveler trips, messaging, and notifications in one mobile product without adding heavy operational overhead.",
    decisions: [
      "Used Firebase Auth, Firestore, and messaging services to support authentication, data flows, and notifications.",
      "Modeled request, trip, match, and chat flows so coordination logic stayed explicit in the product.",
      "Organized the Flutter app by features with BLoC and repository layers for clearer product maintenance.",
    ],
    outcome:
      "Produced a structured mobile codebase that shows Ahmed can ship the supporting product layer around coordination-heavy workflows.",
    learnings: [
      "How managed backend services can accelerate early product delivery.",
      "How to keep mobile product structure maintainable as coordination flows expand.",
    ],
  },
];

export const skills = {
  coreBackend: [
    "Go",
    "PostgreSQL",
    "RabbitMQ",
    "REST APIs",
    "Data modeling",
    "Authentication",
    "Role-based authorization",
    "Background jobs",
    "SQL migrations",
  ],
  supportingProductDelivery: [
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Firebase",
  ],
  engineeringFocus: [
    "API design",
    "Workflow systems",
    "Maintainability",
    "Clear architecture",
    "Business logic implementation",
  ],
};

export const aboutText = [
  "I care about building software that solves real workflow problems, not just demo features.",
  "Most of my work starts from backend design: data models, API boundaries, background jobs, authorization rules, and operational clarity.",
  "I enjoy architecture discussions when they are grounded in code, trade-offs, and delivery constraints.",
  "I can ship React/Next.js and Flutter when a project needs them, but backend engineering is where I do my best work.",
];

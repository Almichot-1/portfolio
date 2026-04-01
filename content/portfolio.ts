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
    "Software Engineering student building backend-focused full-stack systems with Go, Next.js, and Flutter.",
  summary: [
    "I am a Software Engineering student at Addis Ababa Science and Technology University.",
    "My strongest work is backend-oriented projects in Go, with practical full-stack delivery using React/Next.js and Flutter.",
    "I focus on clear architecture, honest trade-offs, and building software that can be understood, tested, and improved.",
  ],
  social: {
    github: "https://github.com/Almichot-1",
    linkedin: "https://www.linkedin.com/in/ahmed-yassin-364b462b5/",
    email: "ahmedyasine230@gmail.com",
  },
  proofStrip: [
    "Go",
    "React/Next.js",
    "Flutter",
    "Backend systems",
    "Software Engineering student",
  ],
};

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Distributed Payment Processing System",
    repoUrl: "https://github.com/Almichot-1/distributed-payment-system",
    description:
      "A Go microservices project for payment workflows with idempotency, state transitions, and event publishing.",
    role: "Designed and implemented as a personal backend systems project.",
    stack: ["Go", "Gin", "PostgreSQL", "RabbitMQ", "Docker"],
    problem:
      "Model payment flows safely and avoid duplicate processing while keeping the system understandable in local development.",
    decisions: [
      "Used idempotency keys and uniqueness constraints to prevent duplicate payment creation.",
      "Applied a transactional outbox pattern to keep state updates and event publishing aligned.",
      "Separated services (payment, audit, mock provider) to practice clear boundaries and message-driven flows.",
    ],
    outcome:
      "Resulted in a runnable multi-service system with API docs, health checks, and Docker-based local setup.",
    learnings: [
      "How reliability patterns affect API design and persistence rules.",
      "Where added service boundaries help clarity and where they add operational cost.",
    ],
  },
  {
    name: "Diaspora Delivery (P2P Delivery Platform)",
    repoUrl: "https://github.com/Almichot-1/p2p-delivery-platform",
    description:
      "A Flutter app with a Firebase backend for request-to-trip matching, messaging, and delivery coordination.",
    role: "Built as a full-stack product-focused project using Flutter and Firebase.",
    stack: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions (Node.js)",
    ],
    problem:
      "Create a practical workflow for coordinating delivery requests with traveler trips while keeping development fast and safe.",
    decisions: [
      "Used Firebase Emulator Suite to develop and test backend logic locally.",
      "Kept authorization concerns in rules and privileged logic in Cloud Functions.",
      "Organized Flutter code by features with separated state and service layers.",
    ],
    outcome:
      "Produced a documented product direction with architecture notes, local dev scripts, and feature scaffolding.",
    learnings: [
      "How serverless choices can speed delivery for early-stage products.",
      "How to structure Flutter codebases for maintainability as features grow.",
    ],
  },
  {
    name: "Maid Recruitment Platform",
    repoUrl: "https://github.com/Almichot-1/maid_recuritment",
    description:
      "A business workflow platform combining a Go backend with a Next.js frontend for agency and candidate operations.",
    role: "Built end-to-end with backend and frontend responsibilities.",
    stack: ["Go", "Chi", "GORM", "PostgreSQL", "Next.js", "TypeScript"],
    problem:
      "Support agency approval, candidate workflows, and admin operations with a clear data model and practical deployment targets.",
    decisions: [
      "Split runnable commands by responsibility (API, expiry worker, admin seeding).",
      "Used SQL migrations and environment-based setup for repeatable development.",
      "Built a separate frontend app for role-based workflows and admin tooling.",
    ],
    outcome:
      "Delivered a full-stack repo with health checks, worker processes, and deployment documentation.",
    learnings: [
      "How background jobs affect domain modeling in business applications.",
      "How to keep backend and frontend contracts manageable in one product.",
    ],
  },
  {
    name: "Maid Showcase MVP (simple_flow)",
    repoUrl: "https://github.com/Almichot-1/simple_flow",
    description:
      "An MVP for agency-led profile showcasing with Go APIs, JWT auth, and a React frontend.",
    role: "Implemented as a practical MVP to validate core workflows quickly.",
    stack: ["Go", "Gin", "GORM", "PostgreSQL", "React", "Vite", "JWT"],
    problem:
      "Ship a minimal but usable recruitment workflow with authentication, role control, and profile management.",
    decisions: [
      "Kept architecture simple to prioritize end-to-end delivery speed.",
      "Implemented role-based authorization for admin, agency, and employer flows.",
      "Documented local setup and security basics for safer handoff and testing.",
    ],
    outcome:
      "Created a working MVP baseline that can be iterated into richer product workflows.",
    learnings: [
      "How to choose scope for MVPs without losing maintainability.",
      "How to document security expectations even in early-stage projects.",
    ],
  },
];

export const skills = {
  usedInProjects: [
    "Go",
    "PostgreSQL",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "Firebase",
    "Docker",
  ],
  comfortableWith: [
    "REST API design",
    "JWT authentication",
    "SQL migrations",
    "Message queues (RabbitMQ)",
    "State management patterns",
    "Role-based authorization",
  ],
  currentlyLearning: [
    "Deeper distributed systems patterns",
    "Backend testing strategy at scale",
    "Production-grade observability practices",
  ],
};

export const aboutText = [
  "I care about building software that solves real workflow problems, not just demo features.",
  "Most of my work starts from backend design: data models, API boundaries, reliability concerns, and clear operational behavior.",
  "I enjoy architecture discussions when they are grounded in code, trade-offs, and delivery constraints.",
];

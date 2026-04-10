import { featuredProjects, profile, skills } from "@/content/portfolio";

export const resumeData = {
  name: profile.name,
  title: "Software Engineering Student | Backend Engineer",
  location: "Addis Ababa, Ethiopia",
  email: profile.social.email,
  github: profile.social.github,
  linkedin: profile.social.linkedin,
  summary:
    "Software Engineering student with project experience in backend engineering, API development, and workflow-heavy systems. Built applications in payments, recruitment, and coordination using Go, PostgreSQL, RabbitMQ, Next.js, Flutter, and Firebase.",
  education: [
    {
      institution: "Addis Ababa Science and Technology University",
      program: "BSc in Software Engineering",
      status: "Current student",
    },
  ],
  strengths: {
    coreBackend: skills.coreBackend,
    supportingProductDelivery: skills.supportingProductDelivery,
    engineeringFocus: skills.engineeringFocus,
  },
  selectedProjects: featuredProjects.map((project) => ({
    name: project.name,
    description: project.description,
    repoUrl: project.repoUrl,
    bullets: [project.problem, project.outcome],
  })),
};

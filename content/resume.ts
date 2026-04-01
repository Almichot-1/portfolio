import { featuredProjects, profile, skills } from "@/content/portfolio";

export const resumeData = {
  name: profile.name,
  title: "Software Engineering Student | Backend-Focused Full-Stack Builder",
  location: "Addis Ababa, Ethiopia",
  email: profile.social.email,
  github: profile.social.github,
  linkedin: profile.social.linkedin,
  summary:
    "Software Engineering student focused on backend-oriented full-stack development, with hands-on projects in Go, React/Next.js, Flutter, and business workflow systems.",
  education: [
    {
      institution: "Addis Ababa Science and Technology University",
      program: "BSc in Software Engineering",
      status: "Current student",
    },
  ],
  strengths: {
    usedInProjects: skills.usedInProjects,
    comfortableWith: skills.comfortableWith,
    currentlyLearning: skills.currentlyLearning,
  },
  selectedProjects: featuredProjects.map((project) => ({
    name: project.name,
    description: project.description,
    repoUrl: project.repoUrl,
    bullets: [project.problem, project.outcome],
  })),
};

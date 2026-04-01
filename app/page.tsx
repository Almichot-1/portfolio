import { Hero } from "@/components/sections/hero";
import { Systems } from "@/components/sections/systems";
import { ResumeSnapshot } from "@/components/sections/resume-snapshot";
import { TechStack } from "@/components/sections/tech-stack";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Systems />
      <ResumeSnapshot />
      <TechStack />
      <About />
      <Contact />
    </main>
  );
}

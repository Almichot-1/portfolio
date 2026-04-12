"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/portfolio";
import { resumeData } from "@/content/resume";
import { HeroScene } from "@/components/sections/hero-scene";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 px-4 pb-16 pt-28 md:pb-24 md:pt-36">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px circle at 10% -20%, rgba(35, 78, 120, 0.22), transparent 55%), radial-gradient(700px circle at 100% 0%, rgba(20, 44, 69, 0.2), transparent 50%)",
        }}
      />
      <motion.div
        className="absolute inset-0 -z-10 opacity-[0.2]"
        animate={{
          backgroundPosition: ["0px 0px", "80px 0px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_360px] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-muted-foreground">
              {profile.name}
            </p>
            <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-6xl">
              {profile.headline}
            </h1>
            <div className="mb-8 space-y-2 text-base text-muted-foreground md:text-lg">
              {profile.summary.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mb-10 flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#projects">View Backend Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume">Resume</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href={resumeData.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4" /> Open CV
                </a>
              </Button>
              <Button variant="ghost" asChild>
                <a href={resumeData.cvUrl} download={resumeData.cvFileName}>
                  <Download className="h-4 w-4" /> Download CV
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.social.email}`}
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </motion.div>

          <div className="space-y-5 md:max-w-[360px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.45 }}
            >
              <HeroScene />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.45 }}
              className="rounded-xl border border-border/80 bg-secondary/40 p-6"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Backend focus
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {profile.proofStrip.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

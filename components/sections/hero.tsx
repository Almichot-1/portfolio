"use client";

import { motion } from "framer-motion";
import { Download, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroScene } from "@/components/sections/hero-scene";
import { profile } from "@/content/portfolio";
import { resumeData } from "@/content/resume";

export function Hero() {
  return (
    <section className="px-4 pb-8 pt-24 md:pt-32">
      <div className="mx-auto max-w-6xl">
        <div className="panel-surface section-shell surface-grid px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.05fr)_420px] xl:items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <p className="section-kicker mb-4">{profile.name}</p>
              <h1 className="text-balance text-4xl font-semibold leading-[1.02] md:text-6xl">
                {profile.headline}
              </h1>

              <div className="mt-6 space-y-3 text-base text-muted-foreground md:text-lg">
                {profile.summary.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <a href="#projects">View Backend Work</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/resume">Resume</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={resumeData.cvUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4" /> Open CV
                  </a>
                </Button>
                <Button variant="ghost" asChild>
                  <a href={resumeData.cvUrl} download={resumeData.cvFileName}>
                    <Download className="h-4 w-4" /> Download CV
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-muted-foreground">
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

            <div className="grid gap-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.5 }}
              >
                <HeroScene className="h-[360px] md:h-[440px]" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.45 }}
                className="panel-surface rounded-[28px] p-5"
              >
                <p className="section-kicker mb-4">Backend Focus</p>
                <div className="flex flex-wrap gap-3">
                  {profile.proofStrip.map((item) => (
                    <span key={item} className="inline-chip text-sm text-slate-100">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

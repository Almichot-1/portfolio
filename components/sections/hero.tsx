"use client";

import { motion } from "framer-motion";
import { Download, FileText, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
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
                className="panel-surface relative min-h-[320px] overflow-hidden rounded-[30px] md:min-h-[420px]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_24%,rgba(240,209,170,0.25),transparent_22%),radial-gradient(circle_at_78%_20%,rgba(188,136,88,0.18),transparent_24%),radial-gradient(circle_at_58%_72%,rgba(165,193,180,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_40%)]" />
                <div className="absolute inset-6 rounded-[26px] border border-white/10" />
                <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-primary/20 bg-primary/10 blur-[2px]" />
                <div className="absolute right-10 top-14 h-40 w-40 rounded-full border border-white/10 bg-white/[0.03]" />
                <div className="absolute bottom-10 left-12 h-48 w-48 rounded-full border border-white/10 bg-[#a5c1b4]/10" />
                <div className="absolute bottom-10 right-10 h-28 w-28 rounded-3xl border border-primary/20 bg-[#bc8858]/10" />

                <div className="absolute bottom-8 left-8 right-8 space-y-4">
                  <p className="section-kicker">Backend Focus</p>
                  <div className="flex flex-wrap gap-3">
                    {profile.proofStrip.map((item) => (
                      <span key={item} className="inline-chip text-sm text-foreground">
                        <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16, duration: 0.45 }}
                className="panel-surface rounded-[28px] p-5"
              >
                <p className="section-kicker mb-4">Contact</p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>{profile.social.email}</p>
                  <p>Addis Ababa, Ethiopia</p>
                  <p>Backend engineering for workflow-heavy platforms.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

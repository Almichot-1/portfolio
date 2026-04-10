"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { resumeData } from "@/content/resume";

export function ResumeSnapshot() {
  return (
    <section id="resume" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Resume Snapshot</h2>
          <p className="max-w-3xl text-muted-foreground md:text-lg">
            Short recruiter summary of Ahmed&apos;s backend work. A detailed version is available on the dedicated resume page.
          </p>
        </motion.div>

        <Card>
          <CardContent className="grid gap-6 p-7 md:grid-cols-3">
            <div className="md:col-span-2">
              <h3 className="mb-3 text-lg font-semibold">Professional Summary</h3>
              <p className="text-muted-foreground">{resumeData.summary}</p>

              <h3 className="mb-3 mt-6 text-lg font-semibold">Education</h3>
              {resumeData.education.map((item) => (
                <p key={item.institution} className="text-muted-foreground">
                  {item.program} - {item.institution} ({item.status})
                </p>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-sm uppercase tracking-[0.15em] text-muted-foreground">
                  Contact
                </h3>
                <p className="text-sm text-muted-foreground">{resumeData.email}</p>
                <p className="text-sm text-muted-foreground">{resumeData.location}</p>
              </div>

              <Button asChild className="w-full justify-center">
                <a href="/resume">View Full Resume</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

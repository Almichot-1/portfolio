"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { resumeData } from "@/content/resume";

export function ResumeSnapshot() {
  return (
    <section id="resume" className="px-4 py-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="panel-surface section-shell surface-grid px-6 py-8 md:px-10 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <p className="section-kicker mb-4">Resume</p>
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Resume Snapshot</h2>
            <p className="max-w-3xl text-muted-foreground md:text-lg">
              Short recruiter summary of Ahmed&apos;s backend work. A detailed version is available on the dedicated resume page.
            </p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <Card>
              <CardContent className="grid gap-6 p-7 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-lg font-semibold">Professional Summary</h3>
                  <p className="text-muted-foreground">{resumeData.summary}</p>
                </div>

                <div>
                  <h3 className="mb-3 text-lg font-semibold">Education</h3>
                  <div className="space-y-2">
                    {resumeData.education.map((item) => (
                      <p key={item.institution} className="text-muted-foreground">
                        {item.program} - {item.institution} ({item.status})
                      </p>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="space-y-5 p-7">
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
                <Button variant="outline" asChild className="w-full justify-center">
                  <a href={resumeData.cvUrl} target="_blank" rel="noopener noreferrer">
                    Open PDF CV
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

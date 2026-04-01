"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { featuredProjects } from "@/content/portfolio";

export function Systems() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Featured Projects</h2>
          <p className="mb-10 max-w-3xl text-muted-foreground md:text-lg">
            Selected work with public code and concrete technical decisions. Project cards are scannable first, with deeper notes on demand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              layout
            >
              <Card className="border-border/80">
                <CardHeader>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="mb-2 text-xl md:text-2xl">{project.name}</CardTitle>
                      <p className="max-w-3xl text-sm text-muted-foreground md:text-base">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`Open ${project.name} repository`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground">{project.role}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="rounded-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="space-y-5">
                  <div>
                    <h3 className="mb-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">Problem</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                      {project.problem}
                    </p>
                  </div>

                  <AnimatePresence initial={false} mode="wait">
                    {expandedIndex === index ? (
                      <motion.div
                        key="expanded"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="grid gap-6 md:grid-cols-2"
                      >
                        <div>
                          <h3 className="mb-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                            Engineering Decisions
                          </h3>
                          <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
                            {project.decisions.map((decision) => (
                              <li key={decision} className="flex items-start gap-2">
                                <span className="mt-[7px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                <span>{decision}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="mb-2 text-sm uppercase tracking-[0.16em] text-muted-foreground">
                            Why It Matters
                          </h3>
                          <p className="mb-3 text-sm text-muted-foreground md:text-base">{project.outcome}</p>
                          <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
                            {project.learnings.map((learning) => (
                              <li key={learning} className="flex items-start gap-2">
                                <span className="mt-[7px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                <span>{learning}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>

                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    {expandedIndex === index ? (
                      <>
                        Show less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read case notes <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

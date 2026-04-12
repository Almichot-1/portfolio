"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink, PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuredProjects } from "@/content/portfolio";

export function Systems() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="projects" className="px-4 py-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="panel-surface section-shell surface-grid px-6 py-8 md:px-10 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <p className="section-kicker mb-4">Selected Work</p>
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Featured Projects</h2>
            <p className="max-w-3xl text-muted-foreground md:text-lg">
              Selected work ordered to show backend depth first, with public code and concrete engineering decisions behind each project.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {featuredProjects.map((project, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  layout
                >
                  <Card className="overflow-hidden">
                    <div className="grid xl:grid-cols-[290px_minmax(0,1fr)]">
                      <CardHeader className="border-b border-white/10 p-6 xl:border-b-0 xl:border-r">
                        <p className="section-kicker">
                          Project {String(index + 1).padStart(2, "0")}
                        </p>
                        <div className="space-y-4">
                          <div>
                            <CardTitle className="text-xl md:text-2xl">{project.name}</CardTitle>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                              {project.description}
                            </p>
                          </div>

                          <p className="text-sm text-muted-foreground">{project.role}</p>

                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-2 pt-2">
                            <Button size="sm" variant="outline" asChild>
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Repository <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                            {project.demoUrl ? (
                              <Button size="sm" variant="ghost" asChild>
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Watch Demo <PlayCircle className="h-4 w-4" />
                                </a>
                              </Button>
                            ) : null}
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6 p-6 md:p-8">
                        <div>
                          <h3 className="section-kicker mb-3">Problem</h3>
                          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                            {project.problem}
                          </p>
                        </div>

                        <AnimatePresence initial={false}>
                          {isExpanded ? (
                            <motion.div
                              key="expanded"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-6"
                            >
                              {project.demoEmbedUrl ? (
                                <div className="panel-surface overflow-hidden rounded-[24px]">
                                  <div className="aspect-video">
                                    <iframe
                                      src={project.demoEmbedUrl}
                                      title={`${project.name} demo video`}
                                      className="h-full w-full"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      allowFullScreen
                                      loading="lazy"
                                      referrerPolicy="strict-origin-when-cross-origin"
                                    />
                                  </div>
                                </div>
                              ) : null}

                              <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                  <h3 className="section-kicker mb-3">Engineering Decisions</h3>
                                  <ul className="space-y-3 text-sm text-muted-foreground md:text-base">
                                    {project.decisions.map((decision) => (
                                      <li key={decision} className="flex items-start gap-3">
                                        <span className="mt-[10px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                        <span>{decision}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h3 className="section-kicker mb-3">Why It Matters</h3>
                                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                                    {project.outcome}
                                  </p>
                                  <ul className="space-y-3 text-sm text-muted-foreground md:text-base">
                                    {project.learnings.map((learning) => (
                                      <li key={learning} className="flex items-start gap-3">
                                        <span className="mt-[10px] inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                                        <span>{learning}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          ) : null}
                        </AnimatePresence>

                        <button
                          onClick={() => setExpandedIndex(isExpanded ? null : index)}
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                        >
                          {isExpanded ? (
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
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowRight } from "lucide-react";

const notes = [
  {
    title: "Designing Idempotent APIs in Go",
    summary: "Patterns for duplicate request handling, safe retries, and keeping backend workflows predictable.",
    date: "2025-01",
    readTime: "8 min",
    slug: "designing-idempotent-apis-go",
  },
  {
    title: "Keeping Workflow States Explicit",
    summary: "Why business systems benefit from clear lifecycle states, transitions, and validation rules.",
    date: "2024-12",
    readTime: "6 min",
    slug: "keeping-workflow-states-explicit",
  },
  {
    title: "Background Jobs for Business Systems",
    summary: "How workers, expiry checks, and asynchronous processing support operational workflows.",
    date: "2024-11",
    readTime: "5 min",
    slug: "background-jobs-business-systems",
  },
  {
    title: "Role-Based Access in Multi-Actor Platforms",
    summary: "Structuring authorization so agencies, admins, and users can work inside clear boundaries.",
    date: "2024-10",
    readTime: "10 min",
    slug: "role-based-access-multi-actor-platforms",
  },
  {
    title: "What Makes a Good Backend MVP",
    summary: "How to scope authentication, authorization, and data models without overbuilding the first version.",
    date: "2024-09",
    readTime: "7 min",
    slug: "good-backend-mvp",
  },
  {
    title: "Model the Workflow Before the UI",
    summary: "Why backend design decisions usually determine whether a business product stays maintainable.",
    date: "2024-08",
    readTime: "9 min",
    slug: "model-workflow-before-ui",
  },
];

export function Notes() {
  return (
    <section id="notes" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Architecture Notes</h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Short notes on backend design, workflow systems, and practical implementation trade-offs.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {notes.map((note, index) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="group h-full cursor-pointer transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="mb-2 flex items-start gap-3">
                    <FileText className="mt-1 h-5 w-5 text-primary" />
                    <div className="flex-1">
                      <CardTitle className="mb-2 text-xl transition-colors group-hover:text-primary">
                        {note.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{note.date}</span>
                        <span>&bull;</span>
                        <span>{note.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{note.summary}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

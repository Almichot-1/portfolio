"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    title: "Workflow clarity first",
    description: "States, approvals, and handoffs should be explicit so business systems stay understandable.",
  },
  {
    title: "Data integrity matters",
    description: "Users can forgive rough edges, but they do not forgive broken records or inconsistent state.",
  },
  {
    title: "Explicit over clever",
    description: "Clear code and clear boundaries matter more than clever abstractions.",
  },
  {
    title: "Build what the workflow needs",
    description: "Start with the business rules, then add the supporting product surface that helps people use them.",
  },
];

export function Philosophy() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Engineering Philosophy
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Principles that guide backend and workflow design decisions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 font-mono">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

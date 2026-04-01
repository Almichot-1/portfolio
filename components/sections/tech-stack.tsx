"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/content/portfolio";

const skillGroups = [
  { title: "Used in projects", items: skills.usedInProjects },
  { title: "Comfortable with", items: skills.comfortableWith },
  { title: "Currently learning / exploring", items: skills.currentlyLearning },
];

export function TechStack() {
  return (
    <section className="border-y border-border/70 bg-secondary/20 px-4 py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Skills & Tools</h2>
          <p className="mb-10 max-w-3xl text-muted-foreground md:text-lg">
            Grouped by demonstrated usage level, so recruiters can quickly understand depth.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-primary">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

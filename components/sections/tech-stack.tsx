"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { skills } from "@/content/portfolio";

const skillGroups = [
  { title: "Core Backend", items: skills.coreBackend },
  { title: "Supporting Product Delivery", items: skills.supportingProductDelivery },
  { title: "Engineering Focus", items: skills.engineeringFocus },
];

export function TechStack() {
  return (
    <section className="px-4 py-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="panel-surface section-shell surface-grid px-6 py-8 md:px-10 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <p className="section-kicker mb-4">Technical Snapshot</p>
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Skills & Focus</h2>
            <p className="max-w-3xl text-muted-foreground md:text-lg">
              Backend depth first, supporting product delivery second, and working style kept explicit.
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
                    <p className="section-kicker mb-4">
                      0{index + 1}
                    </p>
                    <h3 className="mb-5 text-xl font-semibold text-slate-100">{group.title}</h3>
                    <ul className="space-y-3">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:text-base"
                        >
                          <span className="mt-[10px] inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

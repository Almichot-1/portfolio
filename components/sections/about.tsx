"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { aboutText } from "@/content/portfolio";

export function About() {
  return (
    <section id="about" className="px-4 py-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="panel-surface section-shell surface-grid px-6 py-8 md:px-10 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <p className="section-kicker mb-4">Working Approach</p>
            <h2 className="text-3xl font-semibold md:text-4xl">About</h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {aboutText.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
              >
                <Card className="h-full">
                  <CardContent className="space-y-4 p-6">
                    <p className="section-kicker">0{index + 1}</p>
                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{line}</p>
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

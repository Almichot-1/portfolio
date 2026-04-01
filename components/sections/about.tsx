"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { aboutText } from "@/content/portfolio";

export function About() {
  return (
    <section id="about" className="px-4 py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="mb-8 text-3xl font-semibold md:text-4xl">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.06 }}
        >
          <Card>
            <CardContent className="space-y-5 p-8 text-base leading-relaxed md:text-lg">
              {aboutText.map((line) => (
                <p key={line} className="text-muted-foreground">
                  {line}
                </p>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

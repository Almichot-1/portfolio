"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-8 space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                I'm a backend-heavy full-stack engineer with a focus on building distributed systems that handle real-world failure scenarios.
              </p>
              
              <p className="text-muted-foreground">
                My background combines self-taught exploration with formal computer science education. I gravitate toward backend challenges—concurrency, data consistency, observability—but I'm comfortable across the stack when needed.
              </p>
              
              <p className="text-muted-foreground">
                I believe in systems over frameworks. The right architecture matters more than the latest tool. I optimize for maintainability, debuggability, and operational simplicity.
              </p>
              
              <p className="text-muted-foreground">
                When I'm not writing Go or designing service boundaries, I'm reading postmortems, exploring distributed systems papers, or contributing to open source.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

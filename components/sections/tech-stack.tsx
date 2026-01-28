"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const techStack = {
  Languages: ["Go", "TypeScript", "Java", "Python"],
  Backend: ["Gin", "Fiber", "gRPC", "REST"],
  Messaging: ["Kafka", "RabbitMQ", "Redis Streams"],
  Databases: ["PostgreSQL", "Redis", "MongoDB"],
  Observability: ["Prometheus", "Grafana", "OpenTelemetry", "Jaeger"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "Flutter"],
  DevOps: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"],
};

export function TechStack() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg mb-12">
            Tools chosen for production reliability, not resume padding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-primary font-mono">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {tech}
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

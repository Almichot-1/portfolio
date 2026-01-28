"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, ArrowRight } from "lucide-react";

const notes = [
  {
    title: "Why Sagas Beat Distributed Transactions",
    summary: "Exploring compensating transactions, failure recovery, and why 2PC doesn't scale in microservices.",
    date: "2025-01",
    readTime: "8 min",
    slug: "sagas-vs-distributed-transactions",
  },
  {
    title: "Designing Idempotent APIs in Go",
    summary: "Practical patterns for handling duplicate requests, idempotency keys, and state reconciliation.",
    date: "2024-12",
    readTime: "6 min",
    slug: "idempotent-apis-go",
  },
  {
    title: "When NOT to Use Microservices",
    summary: "Monoliths aren't evil. Understanding when distributed complexity outweighs the benefits.",
    date: "2024-11",
    readTime: "5 min",
    slug: "when-not-microservices",
  },
  {
    title: "RabbitMQ vs Kafka: Operational Reality",
    summary: "Beyond the marketing: actual operational trade-offs, failure modes, and when to choose each.",
    date: "2024-10",
    readTime: "10 min",
    slug: "rabbitmq-vs-kafka",
  },
  {
    title: "Circuit Breakers in Production",
    summary: "Implementing resilience patterns in Go: timeouts, retries, and graceful degradation.",
    date: "2024-09",
    readTime: "7 min",
    slug: "circuit-breakers-production",
  },
  {
    title: "Event Sourcing: The Good Parts",
    summary: "Audit trails, time travel debugging, and replay—without the complexity overhead.",
    date: "2024-08",
    readTime: "9 min",
    slug: "event-sourcing-good-parts",
  },
];

export function Notes() {
  return (
    <section id="notes" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Architecture Notes
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Engineering insights from building systems that don't break.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <FileText className="w-5 h-5 text-primary mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {note.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{note.date}</span>
                        <span>•</span>
                        <span>{note.readTime}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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

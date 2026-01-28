"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const systems = [
  {
    title: "Distributed Payment Processing System",
    problem: "Processing high-volume financial transactions with zero data loss and guaranteed idempotency across service boundaries.",
    architecture: [
      "Event-driven architecture with Kafka",
      "Transactional Outbox pattern for atomicity",
      "Idempotency keys with Redis deduplication",
      "Circuit breakers for external payment gateways",
      "Saga orchestration for multi-step workflows",
    ],
    decisions: [
      "Chose Kafka over RabbitMQ for event replay capabilities",
      "Implemented optimistic locking to prevent double-charging",
      "Used PostgreSQL advisory locks for distributed coordination",
    ],
    failures: [
      "Network partitions: Graceful degradation with eventual consistency",
      "Gateway timeouts: Retry with exponential backoff + jitter",
      "Database failures: Read replicas with automatic failover",
    ],
    tradeoffs: [
      "Consistency over availability during payment confirmation",
      "Higher latency (p99: 800ms) for guaranteed correctness",
      "Increased operational complexity for zero data loss",
    ],
    tech: ["Go", "Kafka", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/Almichot-1/payment-system",
  },
  {
    title: "Peer-to-Peer Delivery Platform",
    problem: "Coordinating real-time delivery state across drivers, customers, and restaurants with partial failure tolerance.",
    architecture: [
      "State machine for order lifecycle management",
      "WebSocket connections with heartbeat monitoring",
      "Event sourcing for audit trail and replay",
      "Geospatial indexing with PostGIS",
      "Rate limiting per user tier",
    ],
    decisions: [
      "State machines prevent invalid transitions (e.g., delivered → preparing)",
      "Event sourcing enables dispute resolution and analytics",
      "Separate read/write models (CQRS) for performance",
    ],
    failures: [
      "Driver disconnection: State persisted, reconnection resumes",
      "Concurrent updates: Optimistic concurrency control",
      "Location service outage: Fallback to last known position",
    ],
    tradeoffs: [
      "Event sourcing adds storage overhead but enables time travel",
      "WebSocket connections increase server load vs polling",
      "Real-time updates prioritized over battery efficiency",
    ],
    tech: ["Go", "WebSocket", "PostgreSQL", "PostGIS", "Redis"],
    github: "https://github.com/Almichot-1/delivery-platform",
  },
  {
    title: "Auth & Identity Service",
    problem: "Secure, scalable authentication with session management, rate limiting, and token refresh without database bottlenecks.",
    architecture: [
      "JWT access tokens (short-lived, 15min)",
      "Refresh tokens (long-lived, stored in Redis)",
      "Token rotation on refresh",
      "Rate limiting with sliding window (Redis)",
      "Password hashing with Argon2id",
    ],
    decisions: [
      "Stateless JWTs reduce database load for auth checks",
      "Redis for session cache with TTL-based expiration",
      "Separate auth service enables reuse across microservices",
    ],
    failures: [
      "Redis failure: Graceful degradation to database sessions",
      "Token theft: Rotation invalidates old refresh tokens",
      "Brute force: Exponential backoff + account lockout",
    ],
    tradeoffs: [
      "JWT size vs database queries (chose larger tokens)",
      "Refresh token rotation adds complexity but improves security",
      "Redis dependency vs pure stateless (chose hybrid)",
    ],
    tech: ["Go", "JWT", "Redis", "PostgreSQL", "Argon2"],
    github: "https://github.com/Almichot-1/auth-service",
  },
];

export function Systems() {
  return (
    <section id="systems" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Systems
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Production-grade architectures designed for failure.
          </p>
        </motion.div>

        <div className="space-y-12">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl">{system.title}</CardTitle>
                    <a
                      href={system.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {system.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Problem
                    </h4>
                    <p className="text-muted-foreground">{system.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Architecture
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {system.architecture.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-1">→</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Key Decisions
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {system.decisions.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Failure Scenarios
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {system.failures.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-1">⚠</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-2">
                      Trade-offs
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      {system.tradeoffs.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-primary mt-1">⇄</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

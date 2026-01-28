"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* F1 Racing Track Background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor)",
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
        }}
      />

      {/* F1 Speed Lines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 10px, currentColor 10px, currentColor 12px)",
        }}
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1],
              type: "spring",
              stiffness: 100
            }}
            className="flex-shrink-0"
          >
            <motion.div 
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20"
              whileHover={{ 
                scale: 1.05, 
                rotate: 5,
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* F1 Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <Image
                src="/profile.jpg"
                alt="Ahmed Yassin"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center md:text-left"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                textShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
              }}
            >
              Ahmed Yassin
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Backend-Heavy Full-Stack Engineer
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Specializing in Go · Microservices · Distributed Systems
            </motion.p>

            <motion.p 
              className="text-base md:text-lg text-muted-foreground/80 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              I architect and build high-throughput backend systems with a focus on fault tolerance, 
              data consistency, and operational simplicity. Experience spans payment processing, 
              real-time coordination, and identity management at scale.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, x: 5 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild className="relative overflow-hidden group">
                  <a href="#systems">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    View Systems
                  </a>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, x: 5 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" asChild className="relative overflow-hidden group">
                  <a href="#contact">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    Get in Touch
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex gap-6 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a
                href="https://github.com/Almichot-1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Github className="w-5 h-5" />
                </motion.div>
                <span className="text-sm">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ahmed-yassin-364b462b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.div>
                <span className="text-sm">LinkedIn</span>
              </motion.a>
              <motion.a
                href="mailto:ahmedyasine230@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>
                <span className="text-sm">Email</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}

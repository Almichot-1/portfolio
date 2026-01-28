"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      // Using Web3Forms - free email service
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_KEY", // Get free key from web3forms.com
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        
        // Reset after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError("Failed to send message. Please try email directly.");
      }
    } catch (err) {
      setError("Failed to send message. Please try email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* F1 Track Lines */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "repeating-linear-gradient(90deg, currentColor 0px, currentColor 2px, transparent 2px, transparent 30px)",
        }}
      />
      
      {/* F1 Checkered Flag Pattern */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 opacity-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "repeating-conic-gradient(#fff 0% 25%, transparent 0% 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(59, 130, 246, 0)",
                "0 0 20px rgba(59, 130, 246, 0.5)",
                "0 0 20px rgba(59, 130, 246, 0)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Let's Build Something Great
          </motion.h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Open to backend-focused roles, distributed systems work, and serious engineering collaboration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="hover:shadow-xl hover:shadow-primary/10 transition-all relative overflow-hidden group">
              {/* Speed Line Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2 }}
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                }}
              />
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" }}
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" }}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" }}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* F1 Boost Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={isSubmitting ? { x: "100%" } : {}}
                      transition={{ duration: 0.6, repeat: isSubmitting ? Infinity : 0 }}
                    />
                    
                    {submitted ? (
                      <>
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          ✓
                        </motion.span>
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                  
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-red-400 text-center"
                    >
                      {error}
                    </motion.p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <Card className="hover:shadow-xl hover:shadow-primary/10 transition-all">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
                <div className="space-y-4">
                  <motion.a
                    href="https://github.com/Almichot-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group relative overflow-hidden"
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Speed Trail */}
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <div>
                      <div className="font-medium">GitHub</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                        @Almichot-1
                      </div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="https://www.linkedin.com/in/ahmed-yassin-364b462b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group relative overflow-hidden"
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                        Connect professionally
                      </div>
                    </div>
                  </motion.a>
                  
                  <motion.a
                    href="mailto:ahmedyasine230@gmail.com"
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all group relative overflow-hidden"
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                        ahmedyasine230@gmail.com
                      </div>
                    </div>
                  </motion.a>
                </div>
              </CardContent>
            </Card>

            {/* Response Time Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card className="bg-primary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-primary rounded-full"
                    />
                    <span className="font-semibold">Fast Response Time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Usually respond within 24 hours. Let's build something amazing together! 🚀
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

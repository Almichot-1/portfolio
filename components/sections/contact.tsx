"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { profile } from "@/content/portfolio";

type ContactState = "idle" | "submitting" | "success" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export function Contact() {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";
  const canSubmitForm = accessKey.trim().length > 0;

  const [state, setState] = useState<ContactState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const socials = useMemo(
    () => [
      {
        label: "GitHub",
        href: profile.social.github,
        icon: Github,
        hint: "Public code and projects",
      },
      {
        label: "LinkedIn",
        href: profile.social.linkedin,
        icon: Linkedin,
        hint: "Professional profile",
      },
      {
        label: "Email",
        href: `mailto:${profile.social.email}`,
        icon: Mail,
        hint: profile.social.email,
      },
    ],
    []
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmitForm) {
      setState("error");
      setErrorMessage("Contact form is not configured yet. Please use email directly.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setState("submitting");
    setErrorMessage("");

    try {
      formData.append("access_key", accessKey);
      formData.append("subject", "Portfolio Contact Message");
      formData.append("from_name", profile.name);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setState("success");
        form.reset();
      } else {
        setState("error");
        setErrorMessage("Message could not be sent. Please use email directly.");
      }
    } catch {
      setState("error");
      setErrorMessage("Message could not be sent. Please use email directly.");
    }
  };

  return (
    <section id="contact" className="px-4 py-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="panel-surface section-shell surface-grid px-6 py-8 md:px-10 md:py-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="mb-10"
          >
            <p className="section-kicker mb-4">Contact</p>
            <h2 className="mb-3 text-3xl font-semibold md:text-4xl">Contact</h2>
            <p className="max-w-2xl text-muted-foreground md:text-lg">
              Open to internship, junior, and freelance opportunities. The fastest path is email or LinkedIn.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-7">
                <h3 className="mb-4 text-xl font-semibold">Send a message</h3>

                {!canSubmitForm ? (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-muted-foreground">
                    Form is currently disabled until NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is set.
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none ring-primary focus:ring-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none ring-primary focus:ring-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 outline-none ring-primary focus:ring-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={state === "submitting" || !canSubmitForm}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-[0_18px_40px_rgba(34,211,238,0.2)] disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    {state === "submitting" ? "Sending..." : "Send message"}
                  </button>

                  {state === "success" ? (
                    <p className="text-sm text-emerald-400">Message sent successfully.</p>
                  ) : null}
                  {state === "error" ? <p className="text-sm text-red-400">{errorMessage}</p> : null}
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-7">
                <h3 className="mb-4 text-xl font-semibold">Direct channels</h3>
                <div className="space-y-3">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="panel-surface flex items-center justify-between rounded-[22px] p-4 hover:border-primary/30"
                      >
                        <span className="inline-flex items-center gap-3 text-sm text-slate-100">
                          <Icon className="h-4 w-4" />
                          {social.label}
                        </span>
                        <span className="text-xs text-muted-foreground">{social.hint}</span>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

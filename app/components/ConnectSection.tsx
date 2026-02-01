"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Image from "next/image";

type Props = {
  name?: string;
  headline?: string;
  blurb?: string;
  linkedinUrl?: string;
  email?: string;
};

const ConnectSection = ({
  name = "Khawaja Showzib",
  headline = "Next.js Frontend Developer | Scalable Web Apps | UI/UX with React, TypeScript, Tailwind",
  blurb = `Your thoughts and questions are always welcome feel free to drop me a message if you need assistance or want to discuss a project. I’d love to hear from you!`,
  linkedinUrl = "#",
  email = "hello@example.com",
}: Props) => {
  return (
    <section
      id="contact"
      className="relative md:py-28 py-10 bg-bg-main overflow-hidden"
    >
      {/* soft background glow */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.14),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(34,211,238,0.12),transparent_45%)]" /> */}

      <div className="relative container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-xs tracking-[0.22em] text-text-muted uppercase">
              Get in touch
            </div>

            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold text-text-main leading-tight">
              Let&apos;s Connect
            </h2>

            <p className="mt-6 max-w-xl md:text-lg text-text-muted leading-relaxed">
              {blurb}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-95 transition md:w-fit w-full"
              >
                <Mail size={18} />
                Email Me
                <ArrowUpRight size={16} className="opacity-90" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={linkedinUrl}
                target={linkedinUrl !== "#" ? "_blank" : undefined}
                rel={linkedinUrl !== "#" ? "noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border-main text-text-main hover:bg-bg-card transition md:w-fit w-full"
              >
                <Linkedin size={18} className="text-accent" />
                Connect on LinkedIn
                <ArrowUpRight size={16} className="opacity-80" />
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT: LinkedIn-style card */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative"
          >
            {/* glow */}
            <div className="absolute -inset-8 rounded-3xl dark:bg-primary/10 bg-accent/10 blur-3xl" />

            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              className="relative max-w-lg ml-auto rounded-2xl overflow-hidden border border-border-main bg-bg-card shadow-xl"
            >
              {/* top bar */}
              <div className="px-5 py-4 bg-black">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span className="text-xl">Linked</span>
                  <span className="inline-flex items-center justify-center rounded bg-white text-black font-bold px-1">
                    in
                  </span>
                </div>
              </div>

              {/* card body */}
              <div className="p-6">
                <div className="flex items-start gap-4 flex-wrap">
                  {/* avatar (simple gradient circle) */}
                  <div className="w-16 aspect-square overflow-hidden rounded-full">
                    <Image
                      src={"/images/linkedin.jpeg"}
                      alt="linkedin"
                      height={100}
                      width={100}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="text-lg font-semibold text-text-main">
                      {name}
                    </div>
                    <div className="mt-1 text-sm text-text-muted">
                      {headline}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    href={linkedinUrl}
                    target={linkedinUrl !== "#" ? "_blank" : undefined}
                    rel={linkedinUrl !== "#" ? "noreferrer" : undefined}
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-black text-white font-medium
                    hover:opacity-95 transition w-full sm:w-auto"
                  >
                    <Linkedin size={18} />
                    Connect on LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;

"use client";

import { motion } from "framer-motion";
import { Briefcase, Mail } from "lucide-react";

const container: any = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: any = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const codeBlock: any = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.1 },
  },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-bg-main overflow-hidden isolate">
      {/* Background glow (animated) */}
      <div className="absolute -top-40 -left-40 w-200 aspect-square dark:bg-primary/20 bg-white/20 rounded-full blur-3xl -z-10" />

      <div className="relative container mx-auto px-5 md:px-0 md:pt-48 pt-32 md:pb-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Badge */}
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-lg md:text-sm text-xs text-text-main"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Senior Frontend Developer • 5+ Years Experience
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-3xl sm:text-5xl xl:text-6xl font-bold text-text-main leading-tight"
          >
            Build Interfaces with{" "}
            <span className="text-primary">Precision</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl md:text-lg text-text-muted"
          >
            I’m{" "}
            <span className="text-text-main font-medium">Khawaja Showzib</span>,
            a Senior Frontend Developer with 5+ years of experience building
            scalable, high-performance web applications using React, Next.js,
            and modern UI architectures.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-4 flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition md:w-fit w-full"
            >
              <Briefcase size={18} />
              View My Work
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border-main text-text-main bg-bg-card transition hover:bg-bg-main/40 md:w-fit w-full"
            >
              <Mail size={18} className="text-accent" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-12 flex gap-8 text-sm text-text-muted flex-wrap"
          >
            <div>
              <span className="block text-lg font-semibold text-text-main">
                5+
              </span>
              Years Experience
            </div>
            <div>
              <span className="block text-lg font-semibold text-text-main">
                20+
              </span>
              Projects Delivered
            </div>
            <div>
              <span className="block text-lg font-semibold text-text-main">
                Frontend
              </span>
              Focused
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CODE BLOCK */}
        <motion.div
          variants={codeBlock}
          initial="hidden"
          animate="show"
          whileHover={{ rotate: 0.4, y: -4 }}
          transition={{ type: "spring", stiffness: 140, damping: 16 }}
          className="relative"
        >
          {/* Glow */}
          <motion.div
            className="absolute -inset-6 rounded-3xl dark:bg-accent/20 bg-black/5 blur-3xl"
            animate={{ opacity: [0.55, 0.85, 0.6] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative bg-bg-card border border-border-main rounded-2xl overflow-hidden shadow-xl">
            {/* Fake window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-main">
              <motion.span
                className="w-3 h-3 rounded-full bg-red-500/80"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="w-3 h-3 rounded-full bg-yellow-500/80"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
              />
              <motion.span
                className="w-3 h-3 rounded-full bg-green-500/80"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
              <span className="ml-4 text-sm text-text-muted font-mono">
                showzib.tsx
              </span>
            </div>

            {/* Code */}
            <pre className="p-6 text-sm leading-relaxed font-mono text-text-main overflow-x-auto">
              <code>
                <span className="text-primary">const</span> Developer = {"{"}
                {"\n"}
                {"  "}name:{" "}
                <span className="text-accent">"Khawaja Showzib"</span>,{"\n"}
                {"  "}role:{" "}
                <span className="text-accent">"Senior Frontend Developer"</span>
                ,{"\n"}
                {"  "}experience:{" "}
                <span className="text-accent">"5+ Years"</span>,{"\n"}
                {"  "}skills: [{"\n"}
                {"    "}
                <span className="text-accent">"React"</span>,{"\n"}
                {"    "}
                <span className="text-accent">"Next.js"</span>,{"\n"}
                {"    "}
                <span className="text-accent">"TypeScript"</span>,{"\n"}
                {"    "}
                <span className="text-accent">"Tailwind CSS"</span>,{"\n"}
                {"    "}
                <span className="text-accent">"REST APIs"</span>,{"\n"}
                {"  "}],{"\n"}
                {"  "}mission: <span className="text-primary">async</span> (){" "}
                =&gt; {"{"}
                {"\n"}
                {"    "}buildScalableApps();{"\n"}
                {"    "}integrateSystems();{"\n"}
                {"    "}optimizePerformance();{"\n"}
                {"\n"}
                {"    "}
                <span className="text-primary">return</span>{" "}
                <span className="text-accent">
                  "Robust Frontends Delivered 🚀"
                </span>
                ;{"\n"}
                {"  "},{"\n"}
                {"  "}availability:{" "}
                <span className="text-accent">"Open to Opportunities"</span>,
                {"\n"}
                {"};"}
              </code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Building2, Calendar, ArrowUpRight } from "lucide-react";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
};

const experience = [
  {
    role: "Frontend Developer",
    company: "Digital Gravity",
    period: "Jul 2023 — Present",
    summary:
      "Building scalable, content-driven web applications and dynamic frontend systems using modern React and Next.js architecture.",
    bullets: [
      "Develop responsive, cross-browser applications using React.js, Next.js, and TypeScript",
      "Integrated Strapi CMS with Next.js for scalable, content-driven platforms",
      "Implemented API integrations and authentication systems for secure applications",
      "Collaborated with designers and stakeholders to transform mockups into interactive interfaces",
      "Worked closely with backend teams to ensure smooth data flow and feature integration",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "LathranSoft",
    period: "Jan 2023 — May 2023",
    summary:
      "Focused on frontend integrations, performance improvements, and delivering high-quality UI modules for product platforms.",
    bullets: [
      "Led frontend API integrations for seamless backend communication",
      "Converted Figma designs into pixel-perfect, user-friendly modules",
      "Contributed to multiple Greetr product modules, improving performance and usability",
      "Participated in agile sprints and daily stand-ups to align with product goals",
    ],
  },
  {
    role: "Frontend & WordPress Developer",
    company: "Unit52",
    period: "Nov 2021 — Jan 2023",
    summary:
      "Delivered modern, responsive WordPress websites with strong performance and accessibility standards.",
    bullets: [
      "Developed responsive WordPress websites using custom themes and Elementor",
      "Ensured performance optimization and cross-browser compatibility",
      "Translated client requirements into scalable website structures",
    ],
  },
  {
    role: "Frontend Developer",
    company: "GetGoal Solutions",
    period: "Dec 2020 — Oct 2021",
    summary:
      "Built responsive front-end layouts and custom WordPress solutions for diverse client projects.",
    bullets: [
      "Created mobile-responsive frontend layouts for client websites",
      "Implemented UI enhancements with cross-browser compatibility",
      "Developed custom WordPress websites aligned with branding and functionality needs",
    ],
  },
];

/* Animations */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item: any = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="relative md:py-28 py-10 bg-bg-main">
      <div className="container mx-auto px-5 md:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">
            Experience & Journey
          </h2>
          <p className="mt-4 md:text-lg text-text-muted">
            A quick timeline of my professional path — focused on scalable UI
            systems, integrations, and logic-driven products.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border-main/70" />

          <div className="space-y-10">
            {experience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className={`relative grid grid-cols-1 sm:grid-cols-2 gap-8 items-start`}
                >
                  {/* Dot */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-7 w-4 h-4 rounded-full bg-primary shadow-[0_0_30px_rgba(99,102,241,0.35)] md:inline-block hidden"
                  />

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 160, damping: 18 }}
                    className={`group bg-bg-card border border-border-main rounded-2xl p-6
                    dark:hover:border-accent/30 hover:border-primary/30
                      ${isLeft ? "sm:col-start-1 sm:pr-10" : "sm:col-start-2 sm:pl-10"}
                    `}
                  >
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted">
                      <span className="inline-flex items-center gap-2">
                        <Briefcase size={16} className="text-accent" />
                        {exp.role}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Building2 size={16} className="text-accent" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        {exp.period}
                      </span>
                    </div>

                    <p className="mt-4 text-text-main font-medium">
                      {exp.summary}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-text-muted">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/80 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Empty spacer for alternating layout */}
                  <div
                    className={`hidden sm:block ${isLeft ? "sm:col-start-2" : "sm:col-start-1"}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

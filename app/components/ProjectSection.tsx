"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Code2,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge?: string;
  icon?: React.ElementType;
};

const projects: Project[] = [
  {
    title: "University of Sharjah — Enterprise Web Platform",
    badge: "Enterprise Scale",
    description:
      "Contributed to the frontend architecture of the University of Sharjah’s large-scale digital platform, a multilingual system with 16,000+ dynamic pages serving students, faculty, and global visitors.",
    highlights: [
      "Built reusable core components used across thousands of pages",
      "Handled large-scale dynamic content structures with maintainable patterns",
      "Implemented multilingual support (English & Arabic) including RTL layouts",
      "Ensured consistency, performance, and scalability across the platform",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Custom CSS Framework",
      "Multilingual (EN / AR)",
    ],
    liveUrl: "https://www.sharjah.ac.ae/",
  },
  {
    title: "DIFC Admin & Web Platform",
    badge: "Enterprise System",
    description:
      "Frontend development for the DIFC ecosystem, including the public website and secured internal admin dashboard panels supporting financial, operational, and community services.",
    highlights: [
      "Built complex dashboard panels for financial and operational KPIs",
      "Implemented Role & Permission Management with full CRUD operations",
      "Enabled granular role-based access control (RBAC) across admin modules",
      "Developed reusable, scalable UI components for enterprise use",
      "Worked on secure, logic-heavy flows with protected routes and permissions",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Custom CSS Framework",
      "RBAC / Permissions",
      "Charts & Data Visualization",
    ],
    liveUrl: "https://www.difc.com/",
  },
  {
    title: "Beyond Developments — Real Estate Ecosystem",
    badge: "Enterprise Dashboard",
    description:
      "Contributed to the frontend of broker and customer dashboard systems for Beyond Developments a design driven real estate brand under the Omniyat Group. The dashboards power a large real estate ecosystem supporting property postings, customer interactions, and financial workflows.",
    highlights: [
      "Built complex broker interfaces for property listings, commission management, and sales interactions",
      "Developed customer panels with property browsing, purchase workflows, and account management",
      "Implemented advanced invoice creation and financial status tracking modules",
      "Handled integration of dynamic real estate data with secure, role-based frontend access",
      "Collaborated on scalable component libraries used across multiple dashboard screens",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "ANTD & Custom CSS Framework",
      "REST APIs",
      "Secure RBAC",
      "Dynamic State Management",
    ],
    liveUrl: "https://beyonddevelopments.ae/",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp: any = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative md:py-28 py-10 bg-bg-main">
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
            Selected Projects
          </h2>
          <p className="mt-4 md:text-lg text-text-muted">
            A few projects that reflect my strengths in scalable frontend
            systems, complex integrations, and logic-heavy UI.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, idx) => {
            const Icon = p.icon ?? Code2;

            return (
              <motion.article
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="group relative overflow-hidden rounded-2xl border border-border-main bg-bg-card
                dark:hover:border-accent/30 hover:border-primary/30"
              >
                {/* Subtle top gradient */}
                <div className="absolute -top-40  w-full h-[500px] dark:bg-primary/25 bg-accent/20 rounded-full blur-3xl" />

                <div className="relative p-6">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-text-main">
                          {p.title}
                        </h3>
                        {/* {p.badge ? (
                          <span className="inline-flex mt-1 text-xs px-2 py-1 rounded-full border border-accent/30 bg-accent/10 text-text-main/90">
                            {p.badge}
                          </span>
                        ) : null} */}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-2">
                      {p.liveUrl ? (
                        <motion.a
                          href={p.liveUrl}
                          target="_blank"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className="inline-flex items-center justify-center w-10 h-10 rounded-lg border dark:border-accent/10 border-primary/10 
                          dark:text-text-main hover:bg-primary transition hover:text-white"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      ) : null}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-text-muted leading-relaxed">
                    {p.description}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2 text-sm text-text-muted">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/80 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stack tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full border border-border-main text-text-main/90 bg-bg-main/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="mt-7 flex items-center justify-between">
                    <Link
                      href={p.liveUrl ?? "#contact"}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium dark:text-accent text-primary hover:opacity-90 transition"
                    >
                      View details <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

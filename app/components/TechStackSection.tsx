"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Database, GitBranch, Paintbrush } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Frontend Core",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "TanStack Query",
    ],
  },
  {
    icon: Layers,
    title: "Styling & UI",
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "Bootstrap",
      "Tailwind CSS",
      "MUI",
      "Ant Design",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    icon: Database,
    title: "Data & Integrations",
    skills: [
      "REST APIs",
      "Strapi (Headless CMS)",
      "WordPress",
      "Postman",
      "Role-Based Access",
    ],
  },
  {
    icon: GitBranch,
    title: "Engineering & Workflow",
    skills: [
      "Git",
      "Responsive Design",
      "Cross-Browser Compatibility",
      "Performance Optimization",
    ],
  },
  {
    icon: Paintbrush,
    title: "Design Collaboration",
    skills: ["Figma", "Adobe XD", "UI/UX Collaboration"],
  },
];

/* Animations */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const card: any = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TechStackSection = () => {
  return (
    <section className="relative md:py-28 py-10 bg-bg-main overflow-hidden">
      <div className="container mx-auto px-5 md:px-0">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl md:mb-16 mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">
            Tech Stack
          </h2>
          <p className="mt-4 text-text-muted md:text-lg">
            Tools and technologies I use to build scalable, high-performance web
            applications.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={i}
                variants={card}
                whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative bg-bg-card border border-border-main rounded-2xl p-6
                dark:hover:border-accent/30 hover:border-primary/30"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl
                             bg-primary/10 text-primary mb-5"
                >
                  <Icon size={22} />
                </motion.div>

                <h3 className="text-xl font-semibold text-text-main mb-4">
                  {cat.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.08 }}
                      className="text-xs px-2.5 py-1 rounded-full border border-border-main
                                 text-text-main/90 bg-bg-main/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;

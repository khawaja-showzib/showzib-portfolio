"use client";

import { Layers, Plug, Zap, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Layers,
    title: "Scalable Frontend Architecture",
    description:
      "I design frontend architectures that scale with product growth, focusing on maintainability, predictable state, and clean separation of concerns.",
  },
  {
    icon: Plug,
    title: "API & System Integrations",
    description:
      "Strong experience integrating complex REST APIs, handling edge cases, data transformations, and implementing business logic on the frontend.",
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    description:
      "I build fast and responsive interfaces by optimizing rendering, minimizing re-renders, and focusing on real-world performance.",
  },
  {
    icon: Code2,
    title: "Clean UI with Strong Logic",
    description:
      "I bridge clean, intuitive UI with complex logic ensuring a seamless user experience without sacrificing performance or code quality.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: any = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HowIBuildProducts = () => {
  return (
    <section className="relative md:py-28 py-10 bg-bg-main">
      <div className="container mx-auto px-5 md:px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-main">
            How I Build Products
          </h2>
          <p className="mt-4 text-text-muted md:text-lg">
            My approach focuses on scalability, strong logic, and building
            frontend systems that are reliable, performant, and easy to evolve.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="group relative bg-bg-card border border-border-main rounded-2xl p-6
                           transition dark:hover:border-accent/30 hover:border-primary/30"
              >
                {/* Icon with micro-interaction */}
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center w-12 h-12 rounded-xl
                             bg-primary/10 text-primary mb-5"
                >
                  <Icon size={22} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-text-main mb-3">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowIBuildProducts;

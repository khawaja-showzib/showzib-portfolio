"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  X,
  Linkedin,
  Sparkles,
} from "lucide-react";

type Testimonial = {
  name: string;
  title: string;
  relation: string;
  date?: string;
  quote: string; // short
  fullQuote: string; // full for modal
  company?: string;
  linkedinUrl?: string; // optional
};

const testimonials: Testimonial[] = [
  {
    name: "Zohair Hasan Rizvi",
    title: "SQA Engineer",
    company: "Digital Gravity",
    relation: "Worked together on the same team",
    date: "Nov 11, 2025",
    quote:
      "An incredibly talented Next.js & frontend developer — fast, responsive, user-friendly interfaces and strong performance optimization.",
    fullQuote: `I highly recommend Showzib, an incredibly talented Next.js and frontend developer. Having worked with them, I can confidently say they are a key asset to any team.

Showzib is a master at creating fast, responsive, and user-friendly interfaces. Their expertise in Next.js, combined with a deep understanding of modern frontend technologies, allows them to build high-quality web applications that deliver exceptional user experiences. They’re also highly skilled in optimizing performance, ensuring the smoothest possible performance across all devices.

What I truly admire about Showzib is their attention to detail, strong problem-solving abilities, and dedication to writing clean, maintainable code. They are also great at collaborating with cross-functional teams, always bringing a positive attitude and valuable insights to every project.

If you’re looking for a skilled and reliable Next.js and frontend developer, I wholeheartedly recommend Showzib. They will definitely exceed your expectations!`,
  },
  {
    name: "Syed Khizer",
    title: "Front-End Developer (React / Next.js)",
    relation: "Showzib was senior (didn't manage directly)",
    date: "Oct 24, 2025",
    quote:
      "Professional, creative, and dedicated — consistently delivers high-quality work and brings positive energy to the team.",
    fullQuote: `I had the pleasure of working with Showzib on several projects, and I was always impressed by his professionalism, creativity, and dedication. He consistently delivers high-quality work and brings positive energy to the team. Showzib is a reliable team player who goes the extra mile to ensure tasks are completed efficiently and effectively. It’s been great collaborating with him, and I highly recommend him for any future opportunities.`,
  },
  {
    name: "Farzeen Zainab",
    title: "Frontend Specialist",
    relation: "Showzib was senior (didn't manage directly)",
    date: "Oct 17, 2025",
    quote:
      "One of the most dependable developers — strong logic, calm problem-solving, and always ready to help and share knowledge.",
    fullQuote: `I’ve had the chance to work with Showzib, and he’s genuinely one of the most dependable developers I’ve come across. He has a solid grasp of logic, building, and programming, and it really shows in the way he approaches problems calmly, structuredly, and efficiently.

He’s also great at understanding both the technical and practical sides of a project, which makes working with him smooth and productive. On top of that, he’s the kind of teammate who’s always ready to help and share knowledge.`,
  },
  {
    name: "Ferhaj Khan",
    title: "QA Specialist",
    relation: "Worked together on the same team",
    date: "Oct 14, 2025",
    quote:
      "Delivers projects on time — hardworking and enthusiastic developer in search of excellence.",
    fullQuote: `It has been my pleasure to work with Showzib, he has the ability to deliver project on time. Hard working enthusiastic developer in search of excellence.`,
  },
  {
    name: "Hammad Ahmed",
    title: "Senior Portal Consultant",
    relation: "Worked together on the same team",
    date: "Oct 14, 2025",
    quote:
      "Talented and reliable — turns complex challenges into elegant, high-performing solutions with clean, scalable code.",
    fullQuote: `I had the absolute pleasure of working with Showzib at Digital Gravity, and I can confidently say he’s one of the most talented and reliable Frontend Developers I’ve ever worked with. His command over React and Next.js is simply outstanding — he has a rare ability to turn even the most complex technical challenges into elegant, high-performing solutions.

Showzib isn’t just a developer; he’s a problem-solver, a team player, and someone who naturally uplifts the people around him. His passion for clean, scalable code and pixel-perfect UI consistently raised the standard for the entire team. There were several occasions where he resolved critical issues that others struggled with, and he did it with calm confidence and professionalism.

If you’re looking for someone who combines technical brilliance, creativity, and an incredible work ethic, Showzib is exactly the kind of developer every team dreams of having.`,
  },
];

// ===== Motion helpers =====
const fadeUp: any = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  return ((i % len) + len) % len;
}

export default function TestimonialsSection() {
  const items = useMemo(() => testimonials, []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [open, setOpen] = useState<null | number>(null);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const t = setInterval(
      () => setIndex((v) => clampIndex(v + 1, items.length)),
      6000,
    );
    return () => clearInterval(t);
  }, [paused, items.length]);

  const active = items[index];

  return (
    <section
      id="testimonials"
      className="relative md:py-28 py-10 bg-bg-main overflow-hidden"
    >
      {/* subtle animated background */}
      {/* <motion.div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-primary/15 blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, 20, -10, 0],
          opacity: [0.55, 0.8, 0.6],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      {/* <motion.div
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full bg-accent/15 blur-3xl"
        animate={{
          x: [0, -30, 20, 0],
          y: [0, -20, 10, 0],
          opacity: [0.45, 0.75, 0.55],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      <div className="relative container mx-auto px-5 md:px-0">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border-main bg-bg-card/40 text-text-main/90 text-sm">
            <Sparkles size={16} className="text-accent" />
            Recommendations from colleagues
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-text-main">
            Testimonials
          </h2>
          <p className="mt-4 md:text-lg text-text-muted">
            Feedback from people I’ve worked with — focused on performance,
            reliability, and real-world delivery.
          </p>
        </motion.div>

        {/* carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* progress bar */}
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="text-sm text-text-muted">
              <span className="text-text-main font-semibold">{index + 1}</span>
              <span className="mx-2">/</span>
              {items.length}
            </div>

            <div className="relative h-1 w-full max-w-[520px] rounded-full bg-border-main/60 overflow-hidden">
              <motion.div
                key={index}
                className="absolute inset-y-0 left-0 rounded-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border-main bg-bg-card text-text-main hover:bg-bg-main transition"
                onClick={() => setIndex((v) => clampIndex(v - 1, items.length))}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border-main bg-bg-card text-text-main hover:bg-bg-main transition"
                onClick={() => setIndex((v) => clampIndex(v + 1, items.length))}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* main card */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-2xl border border-border-main bg-bg-card md:p-7 p-4
                       shadow-[0_0_50px_rgba(125,211,252,0.1)]"
          >
            {/* top glow */}
            <div className="absolute inset-0 dark:bg-primary/15 bg-accent/20 rounded-full blur-3xl" />

            {/* <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.22),transparent_60%),radial-gradient(circle_at_75%_0%,rgba(34,211,238,0.18),transparent_55%)]" /> */}

            <div className="relative">
              <div className="flex md:items-start items-end justify-between gap-6 flex-wrap md:flex-row flex-col-reverse">
                <div>
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 18,
                      }}
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0"
                    >
                      <Quote size={22} />
                    </motion.div>

                    <div>
                      <div className="text-lg font-semibold text-text-main">
                        {active.name}
                      </div>
                      <div className="text-sm text-text-muted">
                        {active.title}
                        {active.company ? ` • ${active.company}` : ""}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 text-xs text-text-muted">
                    {active.relation}
                    {active.date ? ` • ${active.date}` : ""}
                  </div>
                </div>

                {/* optional LinkedIn button if you later add URLs */}
                <button
                  className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-border-main bg-bg-main/20
                             text-text-main hover:bg-bg-main transition"
                  onClick={() => setOpen(index)}
                >
                  Read full <ChevronRight size={16} className="opacity-80" />
                </button>
              </div>

              <p className="mt-6 text-text-main leading-relaxed text-[15px]">
                “{active.quote}”
              </p>

              {/* dots */}
              <div className="mt-7 flex flex-wrap gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === index
                        ? "w-8 bg-accent"
                        : "w-2.5 bg-border-main/80 hover:bg-border-main"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* mini list (click to jump) */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((t, i) => (
              <motion.button
                key={t.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIndex(i)}
                className={`text-left rounded-xl border p-4 transition ${
                  i === index
                    ? "border-primary/40 bg-bg-card shadow-[0_0_30px_rgba(99,102,241,0.10)]"
                    : "border-border-main bg-bg-card/60 hover:border-border-main/90"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-text-main">
                      {t.name}
                    </div>
                    <div className="text-xs text-text-muted">
                      {t.title}
                      {t.company ? ` • ${t.company}` : ""}
                    </div>
                  </div>
                  <span className="text-xs text-text-muted">
                    {t.date ?? ""}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* modal */}
        <AnimatePresence>
          {open !== null && (
            <motion.div
              className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(null)}
            >
              <motion.div
                className="w-full max-w-3xl rounded-2xl border border-border-main bg-bg-card p-6 md:p-7 relative max-h-[80dvh] overflow-auto"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 18, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setOpen(null)}
                  className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border-main
                             text-text-main hover:bg-bg-main transition"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="flex items-start justify-between gap-6 md:mt-16 mt-6 flex-wrap md:flex-row flex-col-reverse">
                  <div>
                    <div className="text-xl font-semibold text-text-main">
                      {items[open].name}
                    </div>
                    <div className="text-sm text-text-muted mt-1">
                      {items[open].title}
                      {items[open].company ? ` • ${items[open].company}` : ""}
                    </div>
                    <div className="text-xs text-text-muted mt-2">
                      {items[open].relation}
                      {items[open].date ? ` • ${items[open].date}` : ""}
                    </div>
                  </div>

                  {/* Optional LinkedIn URL (add later) */}
                  {items[open].linkedinUrl ? (
                    <a
                      href={items[open].linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-border-main
                                 text-text-main hover:bg-bg-main transition"
                    >
                      <Linkedin size={16} className="text-accent" />
                      View on LinkedIn
                    </a>
                  ) : (
                    <div className="text-xs text-text-muted flex items-center gap-2">
                      <Linkedin size={14} className="text-accent" />
                      Recommendation
                    </div>
                  )}
                </div>

                <div className="mt-6 whitespace-pre-line text-[15px] leading-relaxed text-text-main">
                  {items[open].fullQuote}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

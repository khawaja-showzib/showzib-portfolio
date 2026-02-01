"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* blur layer */}
      <div className="absolute inset-0 backdrop-blur-xl border-b border-border-main" />

      <div className="relative container mx-auto px-5 md:px-0 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-text-main font-semibold"
        >
          <span className="text-2xl">
            <span
              className={`${theme === "dark" ? "text-accent" : "text-primary"} font-extrabold`}
            >
              KS
            </span>
            <span className="text-text-muted">.</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative px-4 py-2 text-sm text-text-muted hover:text-text-main transition"
            >
              {item.label}
              <span className="absolute left-4 right-4 -bottom-[6px] h-[2px] bg-primary/0 hover:bg-primary/70 transition rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* CTA */}
          <a
            href="#contact"
            className="items-center justify-center px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:opacity-90 transition"
          >
            Let’s Talk
          </a>

          {/* Theme toggle */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -1 }}
            onClick={toggleTheme}
            className="inline-flex cursor-pointer items-center justify-center w-10 h-10 rounded-lg border border-border-main bg-bg-card text-text-main hover:bg-bg-main/40 transition"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {/* Prevent hydration flicker */}
            {!mounted ? (
              <div className="w-5 h-5 opacity-0" />
            ) : theme === "dark" ? (
              <Sun size={18} className="text-accent" />
            ) : (
              <Moon size={18} className="text-primary" />
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";

import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  name?: string;
  linkedinUrl?: string;
  email?: string;
};

const Footer = ({
  name = "Khawaja Showzib",
  linkedinUrl = "#",
  email = "hello@example.com",
}: Props) => {
  return (
    <footer className="relative mt-20 border-t border-border-main bg-bg-main">
      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-sm text-text-muted">
            © {new Date().getFullYear()}{" "}
            <span className="text-text-main font-medium">{name}</span>. Built
            with precision.
          </div>

          {/* Center — Socials */}
          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ y: -2 }}
              href={`mailto:${email}`}
              className="p-2 rounded-lg border border-border-main text-text-main hover:bg-bg-card transition"
            >
              <Mail size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-border-main text-text-main hover:bg-bg-card transition"
            >
              <Linkedin size={18} />
            </motion.a>
          </div>

          {/* Right — Back to top */}
          <motion.button
            whileHover={{ y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-main transition"
          >
            Back to top
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

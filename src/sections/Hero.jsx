import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 sm:px-8 lg:px-12"
    >
      <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {profile.name.split(" ")[0]} <span className="text-gradient">{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-2 font-mono text-sm uppercase tracking-[0.3em] text-ink-muted sm:text-base"
        >
          <Sparkles size={14} className="text-accent-cyan" />
          {profile.role}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-8 max-w-2xl text-balance text-lg text-ink-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#contact" className="btn-primary">
            Hire Me <ArrowRight size={16} />
          </a>
          <a href="#projects" className="btn-secondary">
            View Projects
          </a>
          <a
            href={profile.resumeUrl}
            className="btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            <Download size={16} /> Resume
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-ink-muted backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-ink"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-ink-muted backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent-cyan/40 hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
        </motion.div>

        {/* Floating scroll indicator */}
        <div className="mt-20 flex justify-center">
          <div className="h-10 w-6 rounded-full border border-white/15 p-1">
            <motion.div
              className="h-2 w-1 rounded-full bg-gradient-to-b from-accent-cyan to-accent-violet"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ marginInline: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

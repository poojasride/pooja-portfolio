import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { projects, projectCategories } from "../data/portfolio.js";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <SectionTitle
        eyebrow="04 — Projects"
        title="Selected"
        accent="work"
        description="A few things I've built recently."
      />

      {/* Filter pills */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => {
          const active = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                active
                  ? "border-accent-cyan/50 bg-white/[0.06] text-ink"
                  : "border-white/10 bg-white/[0.02] text-ink-muted hover:text-ink"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass glass-hover group flex flex-col p-6"
            >
              {/* Top bar */}
              <div className="mb-5 flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan transition group-hover:scale-110">
                  <FolderGit2 size={18} />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-dim">
                  {project.category}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-ink">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>

              {/* Tech */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-ink-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-6 flex items-center gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] py-2 text-xs font-medium text-ink-muted transition hover:border-accent-cyan/40 hover:text-ink"
                >
                  <Github size={14} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet py-2 text-xs font-semibold text-bg transition hover:opacity-90"
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

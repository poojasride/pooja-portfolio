import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { profile } from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-bg-soft/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:px-8 md:flex-row lg:px-12">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet font-display font-bold text-bg">
            PS
          </span>
          <p className="text-sm text-ink-muted">
            © {year} {profile.name}. Built with{" "}
            <Heart size={12} className="inline text-accent-violet" /> using React + Tailwind.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg border border-white/10 p-2 text-ink-muted transition hover:border-accent-cyan/40 hover:text-ink"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg border border-white/10 p-2 text-ink-muted transition hover:border-accent-cyan/40 hover:text-ink"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-lg border border-white/10 p-2 text-ink-muted transition hover:border-accent-cyan/40 hover:text-ink"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

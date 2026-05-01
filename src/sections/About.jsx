import { Code2, MapPin, Mail } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { about, profile } from "../data/portfolio.js";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="01 — About" title="Engineer who ships" accent="clean code" />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Bio card */}
        <Reveal className="lg:col-span-2">
          <div className="glass glass-hover h-full p-8 sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan">
                <Code2 size={18} />
              </span>
              <h3 className="font-display text-xl font-semibold">
                Professional Summary
              </h3>
            </div>
            <p className="whitespace-pre-line text-base leading-relaxed text-ink-muted">
              {about.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-ink-muted">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-accent-cyan" />
                {profile.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail size={14} className="text-accent-violet" />
                {profile.email}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Highlight stats */}
        <Reveal delay={0.1}>
          <div className="grid h-full grid-cols-2 gap-4">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="glass glass-hover flex flex-col justify-between p-6"
              >
                <p className="font-display text-3xl font-bold text-gradient">
                  {h.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-wider text-ink-muted">
                  {h.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

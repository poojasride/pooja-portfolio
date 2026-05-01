import { Briefcase, MapPin, Calendar } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { experience } from "../data/portfolio.js";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle
        eyebrow="03 — Experience"
        title="Work"
        accent="timeline"
        description="Companies I've helped build for."
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-cyan/50 via-accent-violet/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <ul className="space-y-12">
          {experience.map((job, i) => {
            const leftSide = i % 2 === 0;
            return (
              <li key={job.company} className="relative">
                {/* Dot */}
                <span className="absolute left-4 top-3 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full border-2 border-bg bg-gradient-to-br from-accent-cyan to-accent-violet shadow-glow md:left-1/2" />

                <Reveal
                  delay={i * 0.05}
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    leftSide ? "md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <article className="glass glass-hover p-6 sm:p-7">
                    <div className="mb-3 flex items-center gap-2 text-xs text-ink-muted">
                      <Calendar size={12} />
                      <span className="font-mono">{job.period}</span>
                      <span>•</span>
                      <MapPin size={12} />
                      <span>{job.location}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {job.role}
                    </h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-gradient">
                      <Briefcase size={13} /> {job.company}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-accent-cyan" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

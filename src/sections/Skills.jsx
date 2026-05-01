import { motion } from "framer-motion";
import { Server, Layout, Database, Cloud } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { skills } from "../data/portfolio.js";

// Map data icon names to lucide components
const iconMap = { Server, Layout, Database, Cloud };

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle
        eyebrow="02 — Skills"
        title="My"
        accent="tech stack"
        description="Categorised tools and frameworks I use day-to-day."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((group, i) => {
          const Icon = iconMap[group.icon] ?? Server;
          return (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="glass glass-hover h-full p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-lg font-semibold">
                    {group.category}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {group.items.map((s, idx) => (
                    <li key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="text-ink">{s.name}</span>
                        <span className="font-mono text-xs text-ink-muted">
                          {s.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.1,
                            delay: 0.1 + idx * 0.05,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

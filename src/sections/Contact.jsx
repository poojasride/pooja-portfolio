import { useState } from "react";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { profile } from "../data/portfolio.js";

const channels = [
  { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: Linkedin, label: "LinkedIn", value: "poojasri-s-developer", href: profile.linkedin },
  { Icon: Github, label: "GitHub", value: "poojasride", href: profile.github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // Frontend-only demo submit. Wire to your backend / EmailJS / Formspree later.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="section">
      <SectionTitle
        eyebrow="05 — Contact"
        title="Let's build"
        accent="something"
        description="Have a project in mind or a role to fill? My inbox is always open."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Channels */}
        <Reveal className="lg:col-span-2">
          <div className="glass h-full p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold">Reach me directly</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Prefer a quick chat? Pick any channel below.
            </p>

            <ul className="mt-6 space-y-3">
              {channels.map(({ Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-accent-cyan/40 hover:bg-white/[0.05]"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20 text-accent-cyan">
                      <Icon size={16} />
                    </span>
                    <span className="flex-1">
                      <span className="block text-[11px] uppercase tracking-widest text-ink-dim">
                        {label}
                      </span>
                      <span className="block text-sm text-ink">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glass flex h-full flex-col gap-5 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
              <Field
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-ink-muted">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Tell me about your project…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-ink outline-none transition placeholder:text-ink-dim focus:border-accent-cyan/50 focus:bg-white/[0.04]"
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="btn-primary w-full sm:w-fit sm:self-end"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : (
                <>
                  Send message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-wider text-ink-muted">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-white/[0.02] p-3 text-sm text-ink outline-none transition placeholder:text-ink-dim focus:border-accent-cyan/50 focus:bg-white/[0.04]"
      />
    </div>
  );
}

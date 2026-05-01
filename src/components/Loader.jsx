import { motion } from "framer-motion";

/** Brief premium loader shown on first paint */
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-bg">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent-cyan/30" />
          <span className="absolute inset-2 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-muted">
          Loading portfolio
        </p>
      </motion.div>
    </div>
  );
}

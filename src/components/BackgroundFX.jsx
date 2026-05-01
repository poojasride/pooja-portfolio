import { motion } from "framer-motion";

/**
 * Animated dark background:
 *  - Static grid mask
 *  - Two soft floating gradient orbs (cyan + violet) for glassmorphism depth
 */
export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      {/* Cyan orb */}
      <motion.div
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-accent-cyan/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Violet orb */}
      <motion.div
        className="absolute bottom-0 right-0 h-[480px] w-[480px] rounded-full bg-accent-violet/20 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

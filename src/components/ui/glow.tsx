import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

type GlowButtonProps = {
  label: string;
};

export default function GlowButton({ label }: GlowButtonProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      className="relative px-6 py-3 rounded-xl bg-accent text-foreground font-semibold overflow-hidden border border-accent cursor-pointer"
    >
      {/* Lumière */}
      <motion.span
        className="pointer-events-none absolute inset-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              120px circle at ${mouseX}px ${mouseY}px,
              oklch(0.534 0.25 301.4),
              transparent 70%
            )
          `,
        }}
      />

      {/* Texte */}
      <span className="relative z-10">{label}</span>
    </motion.button>
  );
}

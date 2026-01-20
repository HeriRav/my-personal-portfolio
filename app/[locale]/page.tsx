"use client";

import { useI18n } from "@/locales/client";
import { Input } from "@/src/components/ui/input";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import GlowButton from "@/src/components/ui/glow";
import { useTheme } from "../../src/hooks/useTheme";
import { Button } from "@/src/components/ui/button";

const SPACE_COLORS = [
  // "#ff1744",
  // "#f50057",
  // "#d500f9",
  // "#651fff",
  // "#2979f3",
  // "#00b0ff",
  // "#00e5ff",
  // "#1de9b6",
  // "#00e676",
  // "#76ff03",
  "#8a2be2", // Primary color
];

const SKY_COLORS = [
  // "#87CEEB", // Morning sky (light blue)
  // "#FFB347", // Sunrise (orange)
  "#87CEEB", // Mid-morning (sky blue)
  "#00BFFF", // Noon (deep sky blue)
  // "#FFD700", // Afternoon (golden)
  // "#FF6347", // Sunset (tomato red)
  // "#FF4500", // Dusk (orange red)
  // "#191970", // Early night (midnight blue)
  // "#000033", // Night (dark blue)
  // "#1a1a2e", // Late night (very dark blue)
];

export default function Home() {
  const t = useI18n();

  const { theme, toggleTheme } = useTheme();

  const COLORS = theme === "light" ? SKY_COLORS : SPACE_COLORS;

  const color = useMotionValue(COLORS[0]);
  const backgroundImage =
    theme === "light"
      ? useMotionTemplate`
      radial-gradient(
        25% 50% at 90% 0%,
        #FFD700 25%,
        ${color}
      )
    `
      : useMotionTemplate`
      radial-gradient(
        125% 125% at 50% 0%,
        #020617 50%,
        ${color}
      )
    `;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 50,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  return (
    <motion.div
      className="flex flex-col min-h-screen items-center justify-center gap-y-8"
      style={{
        backgroundImage,
      }}
    >
      <h1 className="flex font-bold text-center text-7xl text-transparent! bg-clip-text bg-linear-to-b md:bg-linear-to-r from-primary dark:from-foreground md:from-30% lg:from-40% 2xl:from-50% to-secondary dark:to-accent z-10">
        Heritiana
      </h1>
      <div className="relative mx-auto w-1/2 min-w-80 max-w-120 z-10">
        <Input
          className="py-6 rounded-full bg-accent dark:bg-white/20 border border-transparent hover:bg-accent/70 dark:hover:bg-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
          value="Heritiana Raveloson"
          readOnly
        />
        <div className="absolute flex items-center gap-x-2 top-1/2 -translate-y-1/2 right-2 transition">
          <Link
            href="/portfolio"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Search size={20} />
          </Link>
          <Button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-foreground hover:border-[#184392] hover:bg-[#184392] hover:text-white hover:dark:border-[#FFD700] hover:dark:text-[#FFD700] hover:dark:bg-transparent transition cursor-pointer"
            variant={"ghost"}
          >
            {theme === "light" ? `🌙 ${t("dark")}` : `☀️ ${t("light")}`}
          </Button>
        </div>
      </div>
      <Link
        href="/portfolio"
        className="cursor-pointer rounded-md font-semibold text-base z-10"
      >
        <GlowButton label={t("search")} />
      </Link>

      <div className="absolute inset-0 z-0">
        <Canvas className="hidden dark:flex">
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.div>
  );
}

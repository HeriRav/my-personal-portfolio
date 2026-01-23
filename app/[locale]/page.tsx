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
import { useEffect, useState } from "react";
import GlowButton from "@/src/components/ui/glow";
import { useTheme } from "../../src/hooks/useTheme";
import { Button } from "@/src/components/ui/button";
import SunScene from "@/src/components/three/sun";
import MoonScene from "@/src/components/three/moon";
import Loading from "./loading";

const SKY_COLORS = [
  // "#87CEEB", // Morning sky (light blue)
  // "#FFB347", // Sunrise (orange)
  // "#87CEEB", // Mid-morning (sky blue)
  // "#00BFFF", // Noon (deep sky blue)
  // "#FFD700", // Afternoon (golden)
  // "#FF6347", // Sunset (tomato red)
  // "#FF4500", // Dusk (orange red)
  // "#191970", // Early night (midnight blue)
  // "#000033", // Night (dark blue)
  // "#1a1a2e", // Late night (very dark blue)
  "#FFF6E5",
  "#FFE0B2",
  "#D8CFC4",
];

const SPACE_COLORS = [
  // "#8a2be2", // Primary color
  "#747474",
  "#909090",
  "#ababab",
  "#cccccc",
  "#f6f6f6",
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  const t = useI18n();

  const { theme, toggleTheme } = useTheme();

  const COLORS = theme === "light" ? SKY_COLORS : SPACE_COLORS;

  const sun = theme === "light" ? "-translate-x-full" : "translate-x-full";
  const moon = theme === "dark" ? "translate-x-full" : "-translate-x-full";

  const sunPosition =
    theme === "light" ? "translate-x-0 translate-y-0" : `${sun} translate-y-48`;

  const moonPosition =
    theme === "dark" ? "translate-x-0 translate-y-0" : `${moon} translate-y-48`;

  const color = useMotionValue(COLORS[0]);
  const backgroundImage =
    theme === "light"
      ? useMotionTemplate`
      radial-gradient(
        80% 80% at 50% 0%,
        #00BFFF 25%,
        ${color}
      )
    `
      : useMotionTemplate`
      radial-gradient(
        150% 150% at 50% 0%,
        #020617 50%,
        ${color}
      )
    `;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 30,
      repeat: Infinity,
      repeatType: "mirror",
    });
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <motion.div
      className="relative flex flex-col min-h-screen items-center justify-center gap-y-8"
      style={{
        backgroundImage,
      }}
    >
      <h1 className="flex font-bold text-center text-7xl text-transparent! bg-clip-text bg-linear-to-b md:bg-linear-to-r from-primary dark:from-foreground md:from-30% lg:from-40% 2xl:from-50% to-secondary dark:to-accent z-10">
        Heritiana
      </h1>
      <div className="relative mx-auto w-1/2 min-w-80 max-w-120 z-10">
        <Input
          className="py-6 rounded-full bg-accent dark:bg-white/20 border border-transparent hover:bg-accent/70 dark:hover:bg-accent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
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

      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Stars */}
        <Canvas
          className={`
            absolute inset-0
            transition-all duration-1000 ease-in-out
            ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>

        {/* 🌙 Moon */}
        <div
          className={`
            absolute -top-50 xl:-top-60 3xl:-top-80 z-0 transition-all duration-1000 ease-in-out transform-gpu ${moonPosition}
            ${theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          <MoonScene />
        </div>

        {/* ☀️ Sun */}
        <div
          className={`
            absolute -top-50 xl:-top-60 3xl:-top-80 z-0 transition-all duration-1000 ease-in-out transform-gpu ${sunPosition}
            ${theme === "light" ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          <SunScene />
        </div>
      </div>
    </motion.div>
  );
}

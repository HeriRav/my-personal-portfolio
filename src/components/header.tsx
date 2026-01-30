"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { LogIn, Search, User, UserPlus, X } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";
import { LocaleSelect } from "@/app/[locale]/LocaleSelect";
import { useI18n } from "@/locales/client";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  const t = useI18n();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-background/90 backdrop-blur border-b"
            : "bg-transparent"
        }
      `}
      >
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:px-8 w-full gap-x-8 py-4">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-primary dark:from-foreground from-30% lg:from-40% 2xl:from-50% to-secondary dark:to-accent">
            <Link href="/">Heritiana</Link>
          </h1>

          <div className="relative w-80 md:w-120 2xl:w-150">
            <Input
              className="py-6 rounded-full bg-accent border border-transparent hover:bg-accent/70 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
              value="Heritiana Raveloson"
              readOnly
            />
            <Link
              href="/portfolio"
              className="absolute right-4 top-1/2 -translate-y-1/2
               text-muted-foreground hover:text-primary transition"
            >
              <Search size={20} />
            </Link>
          </div>

          <div className="ml-auto hidden lg:flex items-center gap-3">
            {/* Langue Dropdown */}
            <LocaleSelect />

            {/* Mode Clair/Sombre */}
            <Button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-foreground hover:border-[#184392] hover:bg-[#184392] hover:dark:border-[#FFD700] hover:dark:bg-transparent transition cursor-pointer"
              variant={"ghost"}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </Button>

            {/* Boutons se connecter et s'inscrire */}
            <Button variant="ghost" asChild className="dark:hover:bg-white/20">
              <Link href="/login">
                <LogIn size={16} />
                {t("login.title")}
              </Link>
            </Button>

            <Button
              asChild
              className="dark:bg-foreground hover:dark:bg-foreground/80 transition"
            >
              <Link href="/register">
                <UserPlus size={16} />
                {t("register.title")}
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* MOBILE AUTH FAB */}
      <div className="lg:hidden fixed bottom-6 right-6 z-99">
        <div className="relative">
          {/* Options */}
          {open && (
            <div
              className="absolute right-0 bottom-full mb-3
                      flex flex-col gap-2 items-end
                      animate-in fade-in zoom-in"
            >
              {isVisible && (
                <button
                  className="flex flex-col lg:hidden w-full px-4 py-2 rounded-full bg-primary text-light-grey shadow-lg cursor-pointer hover:scale-105 transition"
                  onClick={scrollToTop}
                >
                  &#129033;
                </button>
              )}
              {/* Langue */}
              <div className="w-full hover:scale-105 transition-all">
                <LocaleSelect />
              </div>
              {/* Mode clair/sombre */}
              <button
                onClick={toggleTheme}
                className="flex flex-col items-center gap-2 px-4 py-2 rounded-full bg-background border border-[#184392] text-[#184392] dark:border-[#FFD700] dark:text-[#FFD700] text-sm cursor-pointer w-full hover:scale-105 transition"
              >
                {theme === "light" ? "🌙 Dark" : "☀️ Light"}
              </button>
              {/* Auth Buttons */}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-background border border-foreground shadow-md text-sm whitespace-nowrap w-full hover:scale-105 transition"
              >
                <LogIn size={16} />
                {t("login.title")}
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                     bg-primary border border-primary dark:bg-foreground text-primary-foreground shadow-md text-sm whitespace-nowrap w-full hover:scale-105 transition"
              >
                <UserPlus size={16} />
                {t("register.title")}
              </Link>
            </div>
          )}

          {/* FAB Button */}
          <Button
            onClick={() => setOpen(!open)}
            className="w-12 h-12 md:h-15 md:w-15 rounded-full bg-primary text-primary-foreground
                 flex items-center justify-center shadow-lg transition
                 hover:scale-105 cursor-pointer"
          >
            {open ? <X /> : <User />}
          </Button>
        </div>
      </div>
    </>
  );
}

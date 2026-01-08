"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Search } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-background/90 backdrop-blur border-b border-dark-accent/30"
            : "bg-transparent"
        }
      `}
    >
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:px-8 w-full gap-x-8 py-4">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-b md:bg-linear-to-r from-primary md:from-30% lg:from-40% 2xl:from-50% to-secondary dark:text-white">
          <Link href="/">Heritiana</Link>
        </h1>

        <div className="relative w-80 md:w-120 2xl:w-150">
          <Input
            className="rounded-full bg-accent border border-dark-accent hover:bg-accent/70 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
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
      </div>
    </header>
  );
}

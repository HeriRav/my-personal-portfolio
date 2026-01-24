"use client";

import { useI18n } from "@/locales/client";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const t = useI18n();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex gap-x-1">
        <Link href="/portfolio" className="hover:underline">
          {t("home")}
        </Link>
        <p>&gt; {t("about")}</p>
      </div>
      Still in progress...
    </div>
  );
}

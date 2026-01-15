"use client";

import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { useI18n } from "@/locales/client";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const t = useI18n();

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
    isVisible && (
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={scrollToTop}
            className="hidden lg:flex fixed bottom-2 right-2 md:bottom-4 md:right-4 px-3 py-2 lg:px-4 lg:py-3 bg-primary text-light-grey rounded-full shadow-lg hover:bg-primary/80 transition-all duration-300 z-98 cursor-pointer"
          >
            &#129033;
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{t("top")}</p>
        </TooltipContent>
      </Tooltip>
    )
  );
}

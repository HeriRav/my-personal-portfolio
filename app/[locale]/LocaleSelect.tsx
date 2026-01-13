"use client";

import { useState } from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";
import enFlag from "@/public/icons/enFlag";
import frFlag from "@/public/icons/frFlag";
import { Button } from "@/src/components/ui/button";

type Locale = "en" | "fr";

const languages: {
  code: Locale;
  label: string;
  Flag: React.FC<React.SVGProps<SVGSVGElement>>;
}[] = [
  { code: "en", label: "English", Flag: enFlag },
  { code: "fr", label: "Français", Flag: frFlag },
];

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();
  const [open, setOpen] = useState(false);

  const currentLang = languages.find((l) => l.code === locale)!;

  const handleChange = (lang: Locale) => {
    changeLocale(lang);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      <Button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2 border border-dark-accent dark:border-white bg-white dark:bg-dark-accent rounded-full hover:bg-accent dark:hover:bg-background transition cursor-pointer text-foreground flex items-center gap-2"
      >
        <currentLang.Flag />
        <span>{currentLang.code.toUpperCase()}</span>
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-background border rounded-md shadow-md flex flex-col z-50">
          {languages.map(({ code, label, Flag }) => (
            <button
              key={code}
              onClick={() => handleChange(code)}
              className="px-4 py-2 hover:bg-muted hover:dark:bg-black text-left cursor-pointer flex items-center gap-2"
            >
              <Flag />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

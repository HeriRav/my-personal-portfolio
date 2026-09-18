"use client";

import { useI18n, useScopedI18n } from "@/locales/client";

export function ContactForm() {
  const t = useI18n();
  const contactT = useScopedI18n("contact");

  return (
    <div className="flex flex-col gap-4 w-full items-center justify-center">
      Placeholder
    </div>
  );
}

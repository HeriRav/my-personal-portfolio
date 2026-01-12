"use client";

import { useI18n } from "@/locales/client";
import Link from "next/link";

export default function Page() {
  const t = useI18n();

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

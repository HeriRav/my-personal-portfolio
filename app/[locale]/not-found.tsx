"use client";

// app/[local]/not-found.tsx
import { useI18n } from "@/locales/client";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  const t = useI18n();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-foreground/20">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">
          {t("not_found.title")}
        </h2>
        <p className="mt-2 text-foreground/60 sm:text-lg">
          {t("not_found.description")}
        </p>
        <Link href="/portfolio">
          <Button className="mt-6 cursor-pointer" variant="default">
            {t("not_found.return_home")}
          </Button>
        </Link>
      </div>
      <div className="mt-10">
        {/* Illustration optionnelle */}
        <svg
          className="w-96 h-96 mx-auto text-foreground/20"
          fill="none"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="250"
            cy="250"
            r="200"
            stroke="currentColor"
            strokeWidth="20"
          />
          <path
            d="M150 150 L350 350 M350 150 L150 350"
            stroke="currentColor"
            strokeWidth="20"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

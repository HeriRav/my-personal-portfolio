"use client";

import { useEffect, useState } from "react";
import { Progress } from "@/src/components/ui/progress";
import { useI18n } from "@/locales/client";

export default function Loading() {
  const [progress, setProgress] = useState(10);

  const t = useI18n();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev;
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Progress value={progress} className="transition-all duration-300 w-75" />
      <p className="text-sm text-muted-foreground">{t("loading")}</p>
    </div>
  );
}

"use client";

import Link from "next/link";
import { AcademicResumeCard } from "./academic/academic-resume-card";
import { ProfessionalResumeCard } from "./professional/professional-resume-card";
import { useI18n, useScopedI18n } from "@/locales/client";
import ParticleBackground from "@/src/components/ui/particle-background";

export default function Page() {
  const t = useI18n();
  const landingT = useScopedI18n("landing");

  return (
    <div className="flex flex-col">
      <div className="z-10">
        <ParticleBackground />
      </div>
      <div className="flex text-xs md:text-lg text-foreground font-semibold gap-x-1 py-4 z-20">
        <Link href="/portfolio" className="hover:underline">
          {t("home")}
        </Link>
        <p>&gt; {landingT("search_result.resume.title")}</p>
      </div>
      <div className="lg:flex items-center justify-center 3xl:justify-start space-y-8 lg:space-y-0 md:gap-x-8 z-20">
        <ProfessionalResumeCard />

        <AcademicResumeCard />
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { AcademicResumeCard } from "./academic/academic-resume-card";
import { ProfessionalResumeCard } from "./professional/professional-resume-card";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex text-lg text-foreground font-semibold gap-x-1 py-4">
        <Link href="/portfolio" className="hover:underline">
          Home
        </Link>
        <p>&gt; Resume</p>
      </div>
      <div className="lg:flex items-center justify-center 3xl:justify-start space-y-8 lg:space-y-0 md:gap-x-8">
        <AcademicResumeCard />

        <ProfessionalResumeCard />
      </div>
    </div>
  );
}

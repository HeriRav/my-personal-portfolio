"use client";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/src/components/ui/alert-dialog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import Link from "next/link";
import { AcademicResumeCard } from "./academic/academic-resume-card";
import { ProfessionalResumeCard } from "./professional/professional-resume-card";
import { useI18n, useScopedI18n } from "@/locales/client";
import ParticleBackground from "@/src/components/ui/particle-background";
import { FileUser } from "lucide-react";
import { Button } from "@/src/components/ui/button";
const en = "/download/en/Heritiana Raveloson(en).pdf";
const fr = "/download/fr/Heritiana Raveloson(fr).pdf";

export default function Page() {
  const t = useI18n();
  const landingT = useScopedI18n("landing");
  const resumeT = useScopedI18n("resume");

  const isEn = resumeT("language") === "en";

  const resumeUrl = isEn ? en : fr;
  const fileName = isEn
    ? "CV Heritiana RAVELOSON(en).pdf"
    : "CV Heritiana RAVELOSON(fr).pdf";

  return (
    <div className="flex flex-col">
      <div className="z-10">
        <ParticleBackground />
      </div>

      <Breadcrumb className="pt-4 pb-12 z-20">
        <BreadcrumbList className="text-xs md:text-lg text-foreground font-semibold">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/portfolio" className="hover:underline">
                {t("home")}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>
              {landingT("search_result.resume.title")}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col justify-center text-center mb-12 z-20">
        <h1 className="text-4xl font-bold text-foreground border-6 border-foreground p-4 w-fit mx-auto mb-4">
          {resumeT("title")}
        </h1>
        <h2 className="text-2xl text-foreground/70 text-center mb-2">
          {resumeT("description")}
        </h2>
        <h3 className="text-xl text-foreground/50 text-center mb-8">
          {resumeT("sub_description")}
        </h3>

        {/* Download CV */}
        <div className="flex justify-center gap-4">
          <AlertDialog>
            {/* Bouton principal */}
            <AlertDialogTrigger asChild>
              <Button className="px-4 py-8 flex items-center gap-2 cursor-pointer">
                <FileUser />
                {resumeT("download")}
              </Button>
            </AlertDialogTrigger>

            {/* Dialog */}
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{resumeT("download")} ?</AlertDialogTitle>
                <AlertDialogDescription>
                  {resumeT("confirm", { 0: isEn ? "english" : "française" })}
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel className="cursor-pointer">
                  {resumeT("cancel")}
                </AlertDialogCancel>

                {/* Confirmation = téléchargement */}
                <AlertDialogAction asChild>
                  <Link href={resumeUrl} download={fileName}>
                    {resumeT("download")}
                  </Link>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div className="lg:flex items-center justify-center 3xl:justify-start space-y-8 lg:space-y-0 md:gap-x-8 z-20">
        <ProfessionalResumeCard />

        <AcademicResumeCard />
      </div>
    </div>
  );
}

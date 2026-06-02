import { getI18n, getScopedI18n } from "@/locales/server";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import PageNavigation from "@/src/components/ui/page-navigation";
import ParticleBackground from "@/src/components/ui/particle-background";
import { Briefcase } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const t = await getI18n();
  const landingT = await getScopedI18n("landing");
  const resumeT = await getScopedI18n("resume.professional");
  const academicT = await getScopedI18n("resume.academic");

  const companyKeys = [0, 1, 2, 3, 4, 5] as const;
  const timeline = companyKeys.map((index) => ({
    year: resumeT(`company.${index}.date` as const),
    title: resumeT(`company.${index}.title` as const),
    institution: resumeT(`company.${index}.function` as const),
    contract: resumeT(`company.${index}.contract` as const),
    description: resumeT(`company.${index}.description` as const),
    techno: resumeT(`company.${index}.techno` as const),
    side: index % 2 === 0 ? "left" : "right",
  }));

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
            <BreadcrumbLink asChild>
              <Link href="/portfolio/resume" className="hover:underline">
                {landingT("search_result.resume.title")}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>{resumeT("title")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="text-center mb-16 z-20">
        <h1 className="text-4xl font-bold text-foreground italic underline underline-offset-4">
          {resumeT("description")}
        </h1>
      </div>

      <div className="relative z-20">
        {/* Ligne centrale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-secondary via-primary/70 to-primary"></div>

        {/* Cercle de début */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-lg"></div>

        {/* Éléments de la timeline */}
        <div className="space-y-12 pt-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center ${
                item.side === "left" ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              <div
                className={`w-full lg:w-5/12 text-center lg:text-left ${
                  item.side === "left" ? "lg:pr-8" : "lg:pl-8"
                }`}
              >
                <div className="bg-background rounded-lg shadow-lg p-6 hover:shadow-xl hover:dark:shadow-black transition-shadow duration-300 border border-slate-200">
                  <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-foreground font-medium mb-3">
                    {item.institution}
                  </p>

                  <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                    <span className="text-sm font-semibold text-secondary">
                      {item.contract} •{" "}
                      <span className="text-foreground/80">{item.year}</span>
                    </span>
                  </div>

                  <p className="text-foreground/60 text-sm">
                    {item.description
                      .split("\n")
                      .filter(Boolean)
                      .map((sentence, index) => (
                        <span key={index}>
                          {sentence.trim()}
                          <br />
                        </span>
                      ))}
                  </p>

                  <div className="h-px w-full bg-linear-to-r from-transparent via-dark-accent to-transparent dark:bg-linear-to-r dark:from-transparent dark:via-foreground dark:to-transparent my-6"></div>

                  <div>
                    <span className="font-semibold text-foreground">
                      {resumeT("techno_used")}
                    </span>{" "}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.techno.split(",").map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary/10 border border-secondary rounded-full text-sm text-foreground/80"
                        >
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-linear-to-br from-secondary to-primary border-4 border-white shadow-lg z-10" />
            </div>
          ))}
        </div>

        {/* Cercle de fin */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg"></div>
      </div>

      <PageNavigation
        right={{
          href: "/portfolio/resume/academic",
          label: academicT("title"),
        }}
      />
    </div>
  );
}

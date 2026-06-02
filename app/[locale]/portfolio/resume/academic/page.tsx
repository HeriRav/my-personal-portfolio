import { getI18n, getScopedI18n } from "@/locales/server";
import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/src/components/ui/card";
import ParticleBackground from "@/src/components/ui/particle-background";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import PageNavigation from "@/src/components/ui/page-navigation";

export default async function Page() {
  const t = await getI18n();
  const landingT = await getScopedI18n("landing");
  const resumeT = await getScopedI18n("resume.academic");
  const professionalT = await getScopedI18n("resume.professional");

  const timeline = [
    {
      year: resumeT("master.year"),
      title: resumeT("master.title"),
      institution: resumeT("master.institution"),
      description: resumeT("master.description"),
      side: "left",
    },
    {
      year: resumeT("bachelor.year"),
      title: resumeT("bachelor.title"),
      institution: resumeT("bachelor.institution"),
      description: resumeT("bachelor.description"),
      side: "right",
    },
  ];

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

      <Card className="relative px-4 py-6 md:px-6 z-20">
        {/* Ligne verticale */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-border md:left-8" />

        <div className="flex flex-col gap-8">
          {timeline.map((item, index) => (
            <div key={index} className="relative flex gap-4 md:gap-6">
              {/* Point */}
              <div className="relative z-10 flex items-start pt-2">
                <span className="w-3.5 h-3.5 rounded-full bg-secondary ring-4 ring-background" />
              </div>

              {/* Carte */}
              <CardContent className="w-full rounded-xl border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:dark:shadow-black">
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-secondary md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm font-semibold text-secondary">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-base md:text-xl font-bold text-primary mb-1">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-foreground font-medium mb-2">
                  {item.institution}
                </p>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </div>
          ))}
        </div>
      </Card>

      {/* <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-linear-to-b from-secondary via-primary/70 to-primary"></div>

        <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-secondary border-4 border-white shadow-lg"></div>

        <div className="space-y-12 pt-8">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center ${
                item.side === "left" ? "lg:justify-start" : "lg:justify-end"
              }`}
            >
              <div
                className={`w-full lg:w-5/12 ${
                  item.side === "left"
                    ? "lg:pr-8 lg:text-left text-center"
                    : "lg:pl-8 lg:text-left text-center"
                }`}
              >
                <div className="bg-background rounded-lg shadow-lg p-6 hover:shadow-xl hover:dark:shadow-black transition-shadow duration-300 border border-slate-200">
                  <div
                    className={`flex items-center gap-2 mb-2 justify-center lg:justify-${
                      item.side === "left" ? "start" : "start"
                    }`}
                  >
                    <GraduationCap className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold text-secondary">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {item.institution}
                  </p>
                  <p className="text-foreground/60 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-linear-to-br from-secondary to-primary border-4 border-white shadow-lg z-10"></div>
            </div>
          ))}
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg"></div>
      </div> */}

      <PageNavigation
        left={{
          href: "/portfolio/resume/professional",
          label: professionalT("title"),
        }}
      />
    </div>
  );
}

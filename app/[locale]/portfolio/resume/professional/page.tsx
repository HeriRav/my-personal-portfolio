import { getI18n, getScopedI18n } from "@/locales/server";
import ParticleBackground from "@/src/components/ui/particle-background";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  const t = await getI18n();
  const landingT = await getScopedI18n("landing");
  const resumeT = await getScopedI18n("resume.professional");

  const timeline = [
    {
      year: resumeT("company.0.date"),
      title: resumeT("company.0.title"),
      institution: resumeT("company.0.function"),
      description: resumeT("company.0.description"),
      side: "left",
    },
    {
      year: resumeT("company.1.date"),
      title: resumeT("company.1.title"),
      institution: resumeT("company.1.function"),
      description: resumeT("company.1.description"),
      side: "right",
    },
    {
      year: resumeT("company.2.date"),
      title: resumeT("company.2.title"),
      institution: resumeT("company.2.function"),
      description: resumeT("company.2.description"),
      side: "left",
    },
    {
      year: resumeT("company.3.date"),
      title: resumeT("company.3.title"),
      institution: resumeT("company.3.function"),
      description: resumeT("company.3.description"),
      side: "right",
    },
    {
      year: resumeT("company.4.date"),
      title: resumeT("company.4.title"),
      institution: resumeT("company.4.function"),
      description: resumeT("company.4.description"),
      side: "left",
    },
    {
      year: resumeT("company.5.date"),
      title: resumeT("company.5.title"),
      institution: resumeT("company.5.function"),
      description: resumeT("company.5.description"),
      side: "right",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="z-10">
        <ParticleBackground />
      </div>
      <div className="flex text-xs md:text-lg text-foreground font-semibold gap-x-1 pt-4 pb-12 z-20">
        <Link href="/portfolio" className="hover:underline">
          {t("home")}
        </Link>
        <Link href="/portfolio/resume" className="hover:underline">
          &gt; {landingT("search_result.resume.title")}
        </Link>
        <p>&gt; {resumeT("title")}</p>
      </div>

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
              {/* Bloc de contenu */}
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

              {/* Point sur la ligne */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-linear-to-br from-secondary to-primary border-4 border-white shadow-lg z-10"></div>
            </div>
          ))}
        </div>

        {/* Cercle de fin */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg"></div>
      </div>
    </div>
  );
}

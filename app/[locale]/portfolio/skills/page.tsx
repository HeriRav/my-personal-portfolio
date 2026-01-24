"use client";

import { useI18n, useScopedI18n } from "@/locales/client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/src/components/ui/breadcrumb";
import Link from "next/link";
import Frontend from "./assets/frontend";
import Backend from "./assets/backend";
import Database from "./assets/database";
import Version from "./assets/version";
import Cicd from "./assets/cicd";
import Tools from "./assets/tools";
import SkillCard from "./skill-card";

export default function Page() {
  const t = useI18n();
  const landingT = useScopedI18n("landing");
  const skillT = useScopedI18n("skills");

  const skills = [
    {
      icon: <Frontend />,
      titleKey: "frontend.title",
      techKey: "frontend.tech",
    },
    {
      icon: <Backend />,
      titleKey: "backend.title",
      techKey: "backend.tech",
    },
    {
      icon: <Database />,
      titleKey: "database.title",
      techKey: "database.tech",
    },
    {
      icon: <Version />,
      titleKey: "version.title",
      techKey: "version.tech",
    },
    {
      icon: <Cicd />,
      titleKey: "cicd.title",
      techKey: "cicd.tech",
    },
    {
      icon: <Tools />,
      titleKey: "tools.title",
      techKey: "tools.tech",
    },
  ] as const;

  return (
    <div className="flex flex-col">
      <Breadcrumb className="pt-4 pb-12">
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
              {landingT("search_result.skills.title")}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col gap-6 mx-auto py-8">
        <h1 className="text-4xl font-bold text-foreground text-center border-6 border-foreground p-4 w-fit mx-auto mb-4">
          {skillT("title")}
        </h1>

        <h2 className="text-2xl text-foreground/70 text-center mb-2">
          {skillT("description")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map(({ icon, titleKey, techKey }) => (
            <SkillCard
              key={titleKey}
              icon={icon}
              title={skillT(titleKey)}
              tech={skillT(techKey)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

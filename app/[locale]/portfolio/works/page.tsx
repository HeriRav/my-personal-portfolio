"use client";

import { useI18n, useScopedI18n } from "@/locales/client";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/src/components/ui/breadcrumb";
import Link from "next/link";
import yta from "./assets/eto.png";
import acm from "./assets/tca.png";
import ia_1 from "./assets/samysamy.png";
import ia_2 from "./assets/miharyket.png";
import ia_2_mobile from "./assets/miharyket-mobile.png";
import blender from "./assets/blender.png";
import blender_mobile from "./assets/blender-mobile.png";
import zeno from "./assets/zeno.png";
import zeno_mobile from "./assets/zeno-mobile.jpg";
import portfolio_fr from "./assets/portfolio(fr).png";
import portfolio_en from "./assets/portfolio(en).png";
import portfolio_fr_mobile from "./assets/portfolio(fr)-mobile.png";
import portfolio_en_mobile from "./assets/portfolio(en)-mobile.png";
import WorkSection from "./components/work-section";
import { StaticImageData } from "next/image";
import WorkLink from "./components/work-link";

type WorkLink = {
  href: string;
  label: string;
  download?: boolean;
};

type Work = {
  name: string;
  type: string;
  description: string;
  techno: string;
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  links?: WorkLink[];
};

export default function Page() {
  const t = useI18n();
  const landingT = useScopedI18n("landing");
  const workT = useScopedI18n("works");

  const isEn = workT("language") === "en";

  const pcUrl = isEn ? portfolio_en : portfolio_fr;
  const mobileUrl = isEn ? portfolio_en_mobile : portfolio_fr_mobile;

  const works: Work[] = [
    {
      name: workT("projects.yta.title"),
      type: workT("projects.yta.type"),
      description: workT("projects.yta.description"),
      techno: workT("projects.yta.techno"),
      desktopSrc: yta,
      mobileSrc: yta,
    },
    {
      name: workT("projects.acm.title"),
      type: workT("projects.acm.type"),
      description: workT("projects.acm.description"),
      techno: workT("projects.acm.techno"),
      desktopSrc: acm,
      mobileSrc: acm,
    },
    {
      name: workT("projects.ia_1.title"),
      type: workT("projects.ia_1.type"),
      description: workT("projects.ia_1.description"),
      techno: workT("projects.ia_1.techno"),
      desktopSrc: ia_1,
      mobileSrc: ia_1,
      links: [
        {
          href: "https://github.com/MendrikaRajaonarison/Samysamy",
          label: workT("projects.ia_1.link_1_desc"),
        },
      ],
    },
    {
      name: workT("projects.ia_2.title"),
      type: workT("projects.ia_2.type"),
      description: workT("projects.ia_2.description"),
      techno: workT("projects.ia_2.techno"),
      desktopSrc: ia_2,
      mobileSrc: ia_2_mobile,
      links: [
        {
          href: "https://github.com/HeriRav/Miharyket-FrontEnd",
          label: workT("projects.ia_2.link_1_desc"),
        },
        {
          href: "https://github.com/randrianiaina/mihary-back",
          label: workT("projects.ia_2.link_2_desc"),
        },
      ],
    },
    {
      name: workT("projects.blender.title"),
      type: workT("projects.blender.type"),
      description: workT("projects.blender.description"),
      techno: workT("projects.blender.techno"),
      desktopSrc: blender,
      mobileSrc: blender_mobile,
      links: [
        {
          href: "/download/blender/donut.blend",
          label: workT("projects.blender.link_1_desc"),
          download: true,
        },
      ],
    },
    {
      name: workT("projects.zeno.title"),
      type: workT("projects.zeno.type"),
      description: workT("projects.zeno.description"),
      techno: workT("projects.zeno.techno"),
      desktopSrc: zeno,
      mobileSrc: zeno_mobile,
      links: [
        {
          href: "https://zeno-inno.com/",
          label: workT("projects.zeno.link_1_desc"),
        },
      ],
    },
    {
      name: workT("projects.portfolio.title"),
      type: workT("projects.portfolio.type"),
      description: workT("projects.portfolio.description"),
      techno: workT("projects.portfolio.techno"),
      desktopSrc: pcUrl,
      mobileSrc: mobileUrl,
      links: [
        {
          href: "https://github.com/HeriRav/my-portfolio",
          label: workT("projects.portfolio.link_1_desc"),
        },
        {
          href: "https://heritiana-raveloson.vercel.app/",
          label: workT("projects.portfolio.link_2_desc"),
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col">
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
              {landingT("search_result.works.title")}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col gap-6 mx-auto py-8">
        <h1 className="text-4xl font-bold text-foreground text-center border-6 border-foreground p-4 w-fit mx-auto mb-4">
          {workT("title")}
        </h1>

        <h2 className="text-2xl text-foreground/70 text-center mb-2">
          {workT("description")}
        </h2>

        {works.map((work, index) => (
          <WorkSection
            key={work.name}
            desktopSrc={work.desktopSrc}
            mobileSrc={work.mobileSrc}
            reverse={index % 2 !== 0}
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">{work.name}</h3>
              <span className="text-sm text-secondary uppercase tracking-wide opacity-70">
                {work.type}
              </span>
              <p className="text-base text-ring leading-relaxed">
                {work.description}
              </p>
              <p className="text-sm flex flex-wrap gap-2">
                {work.techno.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 border border-primary rounded-full text-sm text-foreground/80"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </p>
              {work.links && work.links.length > 0 && (
                <div className="flex flex-col w-fit gap-2 pt-2">
                  {work.links.map((link) => (
                    <WorkLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      download={link.download}
                    />
                  ))}
                </div>
              )}
            </div>
          </WorkSection>
        ))}
      </div>
    </div>
  );
}

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
import Lenis from "lenis";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const t = useI18n();
  const aboutT = useScopedI18n("about_page");

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
    };
  }, []);

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
            <BreadcrumbPage>{aboutT("title")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      Still in progress...
    </div>
  );
}

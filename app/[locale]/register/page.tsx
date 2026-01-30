"use client";

import { useI18n } from "@/locales/client";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/src/components/ui/breadcrumb";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import { useEffect } from "react";

export default function Page() {
  const t = useI18n();

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
    <div className="flex mx-auto lg:items-center justify-center h-screen bg-linear-to-tl from-secondary via-emerald-500 to-teal-600 dark:bg-linear-to-br dark:from-secondary dark:via-emerald-800 dark:to-teal-900 gap-4 px-10 md:px-40 lg:px-20 xl:px-40 py-8 overflow-hidden">
      <motion.div
        className="flex flex-col mx-auto"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <Breadcrumb className="pt-2 pb-8 z-20">
          <BreadcrumbList className="text-white text-xs md:text-base font-semibold">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link
                  href="/portfolio"
                  className="hover:text-white/80 hover:underline"
                >
                  {t("home")}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">
                {t("register.title")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Card className="bg-white/10 backdrop-blur-lg px-4 py-8 rounded-lg shadow-xl dark:shadow-black h-150 w-fit md:w-120 justify-center">
          <CardContent>
            <h1 className="text-white text-4xl font-bold">
              {t("register.title")}
            </h1>
          </CardContent>
          <CardContent className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-2">
              <p className="text-white">{t("register.username")}</p>
              <Input
                className="bg-white/10 backdrop-blur-lg py-6 placeholder:text-white border border-transparent hover:bg-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
                placeholder={t("register.username_placeholder")}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-white">{t("register.email")}</p>
              <Input
                className="bg-white/10 backdrop-blur-lg py-6 placeholder:text-white border border-transparent hover:bg-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
                placeholder={t("register.email_placeholder")}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-white">{t("register.password")}</p>
              <Input
                className="bg-white/10 backdrop-blur-lg py-6 placeholder:text-white border border-transparent hover:bg-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
                placeholder={t("register.password_placeholder")}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-white">{t("register.confirm")}</p>
              <Input
                className="bg-white/10 backdrop-blur-lg py-6 placeholder:text-white border border-transparent hover:bg-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
                placeholder={t("register.confirm_placeholder")}
              />
            </div>
            <div className="mx-auto">
              <Button
                className="cursor-pointer text-white py-5"
                variant={"secondary"}
              >
                {t("register.title")}
              </Button>
            </div>
            <p className="mx-auto">
              <span className="text-accent">{t("register.signin")} </span>
              <Link href="/login" className="text-white hover:underline">
                {t("login.title")}
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

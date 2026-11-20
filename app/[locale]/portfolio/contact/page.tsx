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
import ContactForm from "./components/contact-form";
import { Contact, Globe, MapPinned, PhoneCall } from "lucide-react";
import PageNavigation from "@/src/components/ui/page-navigation";

export default function Page() {
  const t = useI18n();
  const contactT = useScopedI18n("contact");
  const workT = useScopedI18n("works");

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
            <BreadcrumbPage>{contactT("title")}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-4xl font-bold text-foreground text-center border-6 border-foreground p-4 w-fit mx-auto mb-4">
        {contactT("title")}
      </h1>

      <h2 className="text-2xl text-foreground/70 text-center mb-2">
        {contactT("description")}
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 mt-6 border-4 p-8">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h1 className="text-primary text-2xl font-bold">
            {contactT("contact_me")}
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="flex text-secondary items-center gap-2">
              <MapPinned />
              <p className="text-lg font-semibold">{contactT("location")}</p>
            </h2>
            <h3 className="text-lg">{contactT("my_location")}</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="flex text-secondary items-center gap-2">
              <Contact />
              <p className="text-secondary text-lg font-semibold">
                {contactT("email")}
              </p>
            </h2>
            <h3 className="text-lg">{contactT("my_email")}</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="flex text-secondary items-center gap-2">
              <PhoneCall />
              <p className="text-secondary text-lg font-semibold">
                {contactT("phone")}
              </p>
            </h2>
            <h3 className="text-lg">{contactT("my_phone")}</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="flex text-secondary items-center gap-2">
              <Globe />
              <p className="text-secondary text-lg font-semibold">
                {contactT("network")}
              </p>
            </h2>
            <div className="flex items-center justify-center gap-x-2">
              <a
                href="https://www.linkedin.com/in/heritiana-raveloson-564347236/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline hover:text-primary transition-colors duration-100"
              >
                {contactT("linkdin")}
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://github.com/HeriRav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg underline hover:text-primary transition-colors duration-100"
              >
                {contactT("github")}
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>

      <PageNavigation
        left={{
          href: "/portfolio/works",
          label: workT("title"),
        }}
      />
    </div>
  );
}

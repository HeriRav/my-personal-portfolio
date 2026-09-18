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
import { ContactForm } from "./contact-form";
import { Contact, MapPinned, PhoneCall } from "lucide-react";

export default function Page() {
  const t = useI18n();
  const contactT = useScopedI18n("contact");

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

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 mt-6 border-4 p-8">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <h1 className="text-primary text-2xl font-bold">
            {contactT("contact_me")}
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex text-secondary items-center gap-2">
              <MapPinned />
              <h2 className="text-lg font-semibold">{contactT("location")}</h2>
            </p>
            <h3 className="text-lg">{contactT("my_location")}</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex text-secondary items-center gap-2">
              <Contact />
              <h2 className="text-secondary text-lg font-semibold">
                {contactT("email")}
              </h2>
            </p>
            <h3 className="text-lg">{contactT("my_email")}</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="flex text-secondary items-center gap-2">
              <PhoneCall />
              <h2 className="text-secondary text-lg font-semibold">
                {contactT("phone")}
              </h2>
            </p>
            <h3 className="text-lg">{contactT("my_phone")}</h3>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

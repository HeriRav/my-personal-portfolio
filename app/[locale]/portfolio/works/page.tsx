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
import { Card, CardContent } from "@/src/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import yta from "./assets/eto.png";
import acm from "./assets/tca.png";
import ia_1 from "./assets/samysamy.png";
import ia_2 from "./assets/miharyket.png";
import blender from "./assets/blender.png";
import zeno from "./assets/zeno.png";
import zeno_mobile from "./assets/zeno-mobile.jpg";
import portfolio_fr from "./assets/portfolio(fr).png";
import portfolio_en from "./assets/portfolio(en).png";
import DeviceMockup from "./ui/device-mockup";

export default function Page() {
  const t = useI18n();
  const landingT = useScopedI18n("landing");
  const workT = useScopedI18n("works");

  const isEn = workT("language") === "en";

  const workUrl = isEn ? portfolio_en : portfolio_fr;

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

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-y-5 lg:gap-x-10 py-8 bg-transparent">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col"
          >
            <DeviceMockup desktopSrc={zeno} mobileSrc={zeno_mobile} />
          </motion.div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo
            maxime doloremque debitis, a fuga quas consequuntur quae minima.
            Nulla fuga labore minus nemo sequi modi doloribus ratione et quis?
          </div>
        </div>

        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-y-5 lg:gap-x-10 py-8 bg-transparent">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            architecto nulla mollitia alias quibusdam harum? Est iure nostrum
            quisquam, quidem numquam id, odio tempore nemo quos, sint nulla
            molestias vitae!
          </div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col"
          >
            <DeviceMockup desktopSrc={blender} mobileSrc={blender} />
          </motion.div>
        </div>

        <div className="flex flex-col w-full items-center">
          <Card className="py-0 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={yta}
                alt="eto.mg"
                className="opacity-80 w-full h-full object-cover hover:opacity-100 transition-all duration-300"
              />
            </div>
            <CardContent></CardContent>
          </Card>
          <Card className="py-0 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={acm}
                alt="TCA"
                className="opacity-80 w-full h-full object-cover hover:opacity-100 transition-all duration-300"
              />
            </div>
            <CardContent></CardContent>
          </Card>
          <Card className="py-0 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={ia_1}
                alt="Samy Samy"
                className="opacity-80 w-full h-full object-cover hover:opacity-100 transition-all duration-300"
              />
            </div>
            <CardContent></CardContent>
          </Card>
          <Card className="py-0 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={ia_2}
                alt="Samy Samy"
                className="opacity-80 w-full h-full object-cover hover:opacity-100 transition-all duration-300"
              />
            </div>
            <CardContent></CardContent>
          </Card>
          <Card className="py-0 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={blender}
                alt="Samy Samy"
                className="opacity-80 w-full h-full object-cover hover:opacity-100 transition-all duration-300"
              />
            </div>
            <CardContent></CardContent>
          </Card>
          <Card className="py-0 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={zeno}
                alt="Samy Samy"
                className="opacity-80 w-full h-full object-cover hover:opacity-100 transition-all duration-300"
              />
            </div>
            <CardContent></CardContent>
          </Card>
          <Card className="py-0 overflow-hidden">
            <div className="overflow-hidden">
              <Image
                src={workUrl}
                alt="Portfolio"
                className="opacity-80 w-full h-full object-cover hover:opacity-100 transition-all duration-300"
              />
            </div>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

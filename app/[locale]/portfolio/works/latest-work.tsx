import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import latest from "./assets/zeno.png";
import { getScopedI18n } from "@/locales/server";

export async function LatestProject() {
  const landingT = await getScopedI18n("landing.works");

  return (
    <Card className="hidden gap-0 xl:flex border dark:border-black rounded-3xl overflow-hidden w-62.5 p-0 hover:bg-accent transition-colors duration-150 cursor-default">
      <CardContent className="p-0 border-b">
        <div className="sm:border-r overflow-hidden h-36 bg-accent border-none">
          <Image
            src={latest}
            alt={""}
            className="w-full h-full object-cover object-top"
            fetchPriority="low"
            loading="eager"
          />
        </div>
      </CardContent>
      <CardContent className="flex flex-col p-4 h-full">
        <h5 className="text-primary dark:text-foreground font-bold text-lg truncate">
          {landingT("latest")}
        </h5>
        <h6 className="text-secondary dark:text-foreground/80 font-semibold truncate">
          {landingT("title")}
        </h6>
        <p className="text-sm font-light line-clamp-3">
          {landingT("description")}
        </p>
        <Link
          href="/portfolio/works"
          className="mt-auto ml-auto hover:underline hover:text-primary transition-all duration-150"
        >
          {landingT("view")}
        </Link>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ph_1 from "@/public/images/placeholder_1.jpg";
import { getScopedI18n } from "@/locales/server";

export async function LatestProject() {
  const landingT = await getScopedI18n("landing.works");

  return (
    <Card className="hidden xl:flex border dark:border-black rounded-3xl overflow-hidden w-62.5 p-0 hover:bg-accent transition-colors duration-150 cursor-default">
      <CardContent className="p-0">
        <div className="sm:border-r overflow-hidden">
          <Image
            src={ph_1}
            alt={""}
            className="w-full h-full object-cover hover:scale-120 transition-all duration-300"
            fetchPriority="low"
          />
        </div>
        <div className="flex flex-col p-4 pb-4">
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
            className="mt-auto ml-auto hover:underline pt-1"
          >
            {landingT("view")}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

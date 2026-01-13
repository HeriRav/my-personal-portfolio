import { getScopedI18n } from "@/locales/server";
import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";

export async function AboutMe() {
  const landingT = await getScopedI18n("landing.biography");

  return (
    <Card className="border dark:border-black rounded-3xl overflow-hidden w-full p-0 hover:bg-accent transition-colors duration-150">
      <Link href="/portfolio/about">
        <CardContent className="p-0">
          <div className="p-4 lg:p-3 xl:p-4">
            <h5 className="text-primary dark:text-foreground font-bold">
              {landingT("title")}
            </h5>
            <h6 className="text-secondary dark:text-foreground/80 font-semibold truncate">
              {landingT("developer")}
            </h6>
            <p className="text-xs font-light line-clamp-3 xl:line-clamp-4">
              {landingT("description")}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

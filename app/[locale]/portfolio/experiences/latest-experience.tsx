import { getScopedI18n } from "@/locales/server";
import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";

export async function LatestExperience() {
  const landingT = await getScopedI18n("landing.experience");

  return (
    <Card className="border dark:border-black rounded-3xl overflow-hidden w-full p-0 hover:bg-accent transition-colors duration-150">
      <Link href="/portfolio/resume/professional">
        <CardContent className="p-0">
          <div className="p-4">
            <h5 className="text-primary dark:text-foreground font-bold">
              {landingT("latest")}
            </h5>
            <h6 className="text-secondary dark:text-foreground/80 font-semibold truncate">
              {landingT("company")}
            </h6>
            <p className="text-xs font-light line-clamp-2 xl:line-clamp-3">
              {landingT("description")}
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

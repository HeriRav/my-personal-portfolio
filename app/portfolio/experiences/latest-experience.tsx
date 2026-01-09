import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";

export function LatestExperience() {
  return (
    <Card className="border dark:border-black rounded-3xl overflow-hidden w-full p-0 hover:bg-accent transition-colors duration-150">
      <Link href="/">
        <CardContent className="p-0">
          <div className="p-4">
            <h5 className="text-primary dark:text-foreground font-bold">
              My latest experience
            </h5>
            <h6 className="text-secondary dark:text-foreground/80 font-semibold truncate">
              Zeno Inno
            </h6>
            <p className="text-xs font-semibold line-clamp-2 xl:line-clamp-3">
              Creating dynamic user interfaces with React. Integrating reusable
              components using Tailwind CSS. Working closely with product teams
              to improve user experience.
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";

export function LatestResume() {
  return (
    <Card className="border dark:border-black rounded-3xl overflow-hidden w-full p-0 hover:bg-accent transition-colors duration-150">
      <Link href="/portfolio/resume/academic">
        <CardContent className="p-0">
          <div className="p-4">
            <h5 className="text-primary dark:text-foreground font-bold">
              My latest diploma
            </h5>
            <h6 className="text-secondary dark:text-foreground/80 font-semibold truncate">
              RNCP Level 6 certification, equivalent to the first year of a
              Master&apos;s degree
            </h6>
            <p className="text-xs font-light line-clamp-2 xl:line-clamp-3">
              Obtained RNCP Level 6 certification, recognized as equivalent to
              the first year of a Master’s degree.
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";

export function AboutMe() {
  return (
    <Card className="border dark:border-black rounded-3xl overflow-hidden w-full p-0 hover:bg-accent transition-colors duration-150">
      <Link href="/">
        <CardContent className="p-0">
          <div className="p-4 lg:p-3 xl:p-4">
            <h5 className="text-primary dark:text-foreground font-bold">
              Biography
            </h5>
            <h6 className="text-secondary dark:text-foreground/80 font-semibold truncate">
              Software developer
            </h6>
            <p className="text-xs font-semibold line-clamp-3 xl:line-clamp-4">
              Specialized in front-end development with back-end knowledge, I
              design intuitive and high-performance user interfaces. My
              expertise in JavaScript/TypeScript, and Java allows me to
              transform creative ideas into responsive web applications. Always
              on the lookout for the latest innovations, I strive to
              continuously improve my skills. I optimize performance and
              experiment with new approaches to create quality solutions that
              meet user needs.
            </p>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

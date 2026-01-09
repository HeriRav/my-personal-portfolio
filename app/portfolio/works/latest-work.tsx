import { Card, CardContent } from "@/src/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ph_1 from "@/public/images/placeholder_1.jpg";

export function LatestProject() {
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
            My latest work
          </h5>
          <h6 className="text-secondary dark:text-foreground/80 font-semibold truncate">
            Zeno - Landing page
          </h6>
          <p className="text-sm font-semibold line-clamp-3">
            Showcase site for Zeno. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab, perferendis cupiditate, molestias, odio maxime
            quod at quos mollitia eaque asperiores quis id sequi aliquid ut!
            Expedita quos ratione accusamus in.
          </p>
          <Link href="/" className="mt-auto ml-auto hover:underline pt-1">
            See all
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

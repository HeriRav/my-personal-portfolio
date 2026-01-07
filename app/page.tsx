import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-y-8">
      <h1 className="flex font-bold text-center text-7xl">My Portfolio</h1>
      <div className="w-80 md:w-full lg:px-28 xl:px-48 2xl:px-72">
        <Input
          className="rounded-full border focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12"
          readOnly
          value="Heritiana Raveloson"
        />
      </div>
      <Button
        className="hover:scale-105 duration-300 transition-all cursor-pointer rounded-xl"
        variant="outline"
      >
        <Link href="/portfolio" className="font-bold text-base">
          Search Portfolio
        </Link>
      </Button>
    </div>
  );
}

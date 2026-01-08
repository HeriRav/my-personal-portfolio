import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-y-8">
      <h1 className="flex font-bold text-center text-7xl text-transparent! bg-clip-text bg-linear-to-b md:bg-linear-to-r from-primary md:from-30% lg:from-40% 2xl:from-50% to-secondary dark:text-white">
        Heritiana
      </h1>
      <div className="relative mx-auto w-1/2 min-w-80 max-w-100">
        <Input
          className="rounded-full bg-accent border border-dark-accent hover:bg-accent/70 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
          value="Heritiana Raveloson"
          readOnly
        />
        <Link
          href="/portfolio"
          className="absolute right-4 top-1/2 -translate-y-1/2
               text-muted-foreground hover:text-primary transition"
        >
          <Search size={20} />
        </Link>
      </div>
      <Button
        className="hover:scale-105 duration-300 transition-all cursor-pointer rounded-md"
        variant="outline"
      >
        <Link
          href="/portfolio"
          className="font-semibold text-base dark:text-white"
        >
          Search
        </Link>
      </Button>
    </div>
  );
}

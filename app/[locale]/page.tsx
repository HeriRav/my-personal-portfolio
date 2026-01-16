import { getI18n } from "@/locales/server";
import { Input } from "@/src/components/ui/input";
import ParticleBackground from "@/src/components/ui/particle-background";
import { Search } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const t = await getI18n();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-y-8">
      <ParticleBackground />
      <h1 className="flex font-bold text-center text-7xl text-transparent! bg-clip-text bg-linear-to-b md:bg-linear-to-r from-primary dark:from-foreground md:from-30% lg:from-40% 2xl:from-50% to-secondary dark:to-accent">
        Heritiana
      </h1>
      <div className="relative mx-auto w-1/2 min-w-80 max-w-120">
        <Input
          className="py-6 rounded-full bg-accent border border-transparent hover:bg-accent/70 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none h-12 px-4 transition-colors duration-150"
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
      <Link
        href="/portfolio"
        className="border border-transparent bg-accent dark:bg-dark-accent px-4 py-2 hover:scale-105 duration-300 transition-all cursor-pointer rounded-md font-semibold text-base text-foreground"
      >
        {t("search")}
      </Link>
    </div>
  );
}

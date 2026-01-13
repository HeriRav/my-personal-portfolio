import { useScopedI18n } from "@/locales/client";

export default function Reference() {
  const landingT = useScopedI18n("landing.reference");

  return (
    <div>
      <h5 className="text-xl text-primary dark:text-foreground font-bold mb-2">
        {landingT("title")}
      </h5>
      <p className="italic">❝ {landingT("description")} ❞</p>
      <div className="flex lg:hidden mx-auto h-px w-full bg-dark-accent dark:bg-foreground my-6"></div>
    </div>
  );
}

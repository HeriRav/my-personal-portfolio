"use client";

import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import LinkedIn from "./links/linkedIn";
import Link from "next/link";
import GitHub from "./links/github";
import Reference from "./reference/reference";
import PersonalInfo from "./info/personal-info";
import { useI18n } from "@/locales/client";

const links = [
  {
    linkedin: "https://www.linkedin.com/in/heritiana-raveloson-564347236/",
    github: "https://github.com/HeriRav",
  },
];

export default function AboutMainPage() {
  const [showMore, setShowMore] = useState(false);
  const t = useI18n();

  return (
    <div className="max-w-full lg:max-w-80 xl:max-w-100 w-full">
      <div className="w-full">
        <h5 className="text-xl text-primary dark:text-foreground font-bold">
          {t("about_me")}
        </h5>

        <h6 className="text-base text-dark-accent/70 dark:text-foreground/80 font-semibold py-1">
          {t("developer")} | {t("passion")}
        </h6>

        <p className="text-sm font-light">
          Specialized in front-end development with back-end knowledge, I design
          intuitive and high-performance user interfaces. My expertise in
          JavaScript/TypeScript, and Java allows me to transform creative ideas
          into responsive web applications.
          {!showMore && (
            <Button
              variant="link"
              className="h-1 inline-flex align-baseline hover:no-underline -px-1 text-primary cursor-pointer"
              onClick={() => setShowMore(true)}
            >
              ... Show more
            </Button>
          )}
        </p>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            showMore ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-sm font-light my-1 last:mb-0">
            Always on the lookout for the latest innovations, I strive to
            continuously improve my skills. I optimize performance and
            experiment with new approaches to create quality solutions that meet
            user needs.
            {showMore && (
              <Button
                variant="link"
                className="h-1 inline-flex align-baseline hover:no-underline px-1 text-primary cursor-pointer"
                onClick={() => setShowMore(false)}
              >
                Show less
              </Button>
            )}
          </p>
        </div>
        <PersonalInfo />
      </div>
      <div className="mx-auto h-px w-full bg-dark-accent dark:bg-foreground my-6"></div>
      <div className="w-full my-4">
        <h5 className="text-xl text-primary dark:text-foreground font-bold mb-2">
          Links
        </h5>
        {links.map((link, index) => (
          <div key={index} className="flex gap-x-8">
            {[
              { name: "LinkedIn", url: link.linkedin, icon: <LinkedIn /> },
              { name: "GitHub", url: link.github, icon: <GitHub /> },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center"
                >
                  <div className="flex justify-center border border-dark-accent dark:border-foreground rounded-full w-fit p-2">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mx-auto h-px w-full bg-dark-accent dark:bg-foreground my-6"></div>
      <div>
        <Reference />
      </div>
    </div>
  );
}

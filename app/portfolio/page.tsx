import GalleryImage from "./gallery/gallery";
import { LatestProject } from "./works/latest-work";
import { LatestExperience } from "./experiences/latest-experience";
import { LatestResume } from "./resume/latest-resume";
import { AboutMe } from "./about/about-me";
import AboutMainPage from "./about/about-main-page";
import SectionItem from "./about/section/section-item";
import sections from "./about/section/section";

export default function Page() {
  return (
    <div className="bg-[#f7f8f9] dark:bg-[#28292a]">
      <div className="w-full">
        <div className="space-y-2 pb-4">
          <h1 className="font-bold text-3xl">Heritiana Raveloson</h1>
          <p className="font-extralight">Software developer</p>
        </div>
        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          <GalleryImage />

          <LatestProject />

          <div className="flex flex-col w-full lg:w-75 gap-4 xl:gap-3.5 mt-4 lg:mt-0">
            <div className="flex gap-x-2">
              <LatestExperience />

              <LatestResume />
            </div>

            <AboutMe />
          </div>
        </div>
        <div className="h-px w-full bg-linear-to-r from-transparent via-dark-accent to-transparent dark:bg-linear-to-r dark:from-transparent dark:via-foreground dark:to-transparent my-6"></div>
        <div className="flex flex-col-reverse lg:flex-row my-8">
          <div className="max-w-237.5 w-full">
            {sections.map((section) => (
              <SectionItem
                key={section.id}
                title={section.title}
                subtitle={section.subtitle}
                heading={section.heading}
                href={section.href}
                icon={section.icon}
                description={section.description}
              />
            ))}
          </div>
          <div className="hidden lg:flex h-175 xl:h-160 w-px bg-dark-accent dark:bg-foreground mx-4"></div>
          <AboutMainPage />
        </div>
      </div>
    </div>
  );
}

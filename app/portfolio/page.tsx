import GalleryImage from "./gallery/page";
import { LatestProject } from "./projects/latest-project";
import { LatestExperience } from "./experiences/latest-experience";
import { LatestResume } from "./resume/latest-resume";
import { AboutMe } from "./about/about-me";
import About from "./about/page";

export default function Page() {
  return (
    <div className="bg-white">
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
        <div className="h-px w-full bg-linear-to-r from-transparent via-dark-accent to-transparent my-6"></div>
        <div className="flex flex-col-reverse lg:flex-row my-8">
          <div className="max-w-237.5 w-full">
            <h5 className="text-xl text-primary font-bold mb-2">Placeholder</h5>
            <p className="text-sm font-light my-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Assumenda magni voluptatem quas temporibus accusantium quod
              recusandae ullam quasi cumque vero ea inventore deserunt sit
              repellendus mollitia fuga, omnis minus doloribus.
            </p>
          </div>
          <div className="hidden lg:flex h-165 w-px bg-dark-accent mx-4"></div>
          <About />
        </div>
      </div>
    </div>
  );
}

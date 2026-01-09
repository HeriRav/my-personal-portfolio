import GalleryImage from "./gallery/page";
import { LatestProject } from "./works/latest-work";
import { LatestExperience } from "./experiences/latest-experience";
import { LatestResume } from "./resume/latest-resume";
import { AboutMe } from "./(sections)/about/about-me";
import AboutMainPage from "./(sections)/about/about-main-page";
import {
  Briefcase,
  Cpu,
  GraduationCap,
  Monitor,
  UserSearch,
} from "lucide-react";
import Link from "next/link";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit. Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam, nunc turpis ullamcorper nibh, in tempus sapien eros vitae ligula. Pellentesque rhoncus nunc et augue.";

export default function Page() {
  return (
    <div className="bg-white dark:bg-[#28292a]">
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
            <div className="mb-6">
              <div className="hidden md:flex flex-col gap-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-x-2 w-fit group"
                >
                  <UserSearch className="text-dark-accent dark:text-foreground" />
                  <p className="text-xl text-primary font-bold group-hover:underline">
                    Heritiana Raveloson
                  </p>
                </Link>

                <Link
                  href="/"
                  className="inline-block w-fit text-sm text-secondary dark:text-foreground group-hover:underline"
                >
                  www.heritianaraveloson.dev &gt; portfolio &gt; about
                </Link>
                <p className="text-sm font-light line-clamp-3">{lorem}</p>
              </div>

              <Link href="/" className="flex flex-col md:hidden group">
                <div className="flex items-center gap-x-2">
                  <UserSearch className="text-dark-accent dark:text-foreground" />
                  <p className="text-xl text-primary font-bold group-hover:no-underline">
                    Heritiana Raveloson
                  </p>
                </div>
                <p className="text-sm text-secondary group-hover:no-underline">
                  www.heritianaraveloson.dev &gt; portfolio &gt; about
                </p>
                <p className="text-sm font-light line-clamp-3 group-hover:no-underline">
                  {lorem}
                </p>
              </Link>
            </div>

            <div className="mb-6">
              <div className="hidden md:flex flex-col gap-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-x-2 w-fit group"
                >
                  <div className="flex items-center gap-x-2">
                    <GraduationCap className="text-dark-accent dark:text-foreground" />
                    <p className="text-xl text-primary font-bold group-hover:underline">
                      Academic career
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="inline-block w-fit text-sm text-secondary dark:text-foreground group-hover:underline"
                >
                  www.heritianaraveloson.dev &gt; portfolio &gt; resume &gt;
                  academic
                </Link>
                <p className="text-sm font-light line-clamp-3">{lorem}</p>
              </div>

              <Link href="/" className="flex flex-col md:hidden group">
                <div className="flex items-center gap-x-2">
                  <GraduationCap className="text-dark-accent dark:text-foreground" />
                  <p className="text-xl text-primary font-bold group-hover:no-underline">
                    Academic career
                  </p>
                </div>
                <p className="text-sm text-secondary group-hover:no-underline">
                  www.heritianaraveloson.dev &gt; portfolio &gt; resume &gt;
                  academic
                </p>
                <p className="text-sm font-light line-clamp-3 group-hover:no-underline">
                  {lorem}
                </p>
              </Link>
            </div>

            <div className="mb-6">
              <div className="hidden md:flex flex-col gap-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-x-2 w-fit group"
                >
                  <div className="flex items-center gap-x-2">
                    <Briefcase className="text-dark-accent dark:text-foreground" />
                    <p className="text-xl text-primary font-bold group-hover:underline">
                      Professional career
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="inline-block w-fit text-sm text-secondary dark:text-foreground group-hover:underline"
                >
                  www.heritianaraveloson.dev &gt; portfolio &gt; resume &gt;
                  professional
                </Link>
                <p className="text-sm font-light line-clamp-3">{lorem}</p>
              </div>

              <Link href="/" className="flex flex-col md:hidden group">
                <div className="flex items-center gap-x-2">
                  <Briefcase className="text-dark-accent dark:text-foreground" />
                  <p className="text-xl text-primary font-bold group-hover:no-underline">
                    Professional career
                  </p>
                </div>
                <p className="text-sm text-secondary group-hover:no-underline">
                  www.heritianaraveloson.dev &gt; portfolio &gt; resume &gt;
                  professional
                </p>
                <p className="text-sm font-light line-clamp-3 group-hover:no-underline">
                  {lorem}
                </p>
              </Link>
            </div>

            <div className="mb-6">
              <div className="hidden md:flex flex-col gap-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-x-2 w-fit group"
                >
                  <div className="flex items-center gap-x-2">
                    <Cpu className="text-dark-accent dark:text-foreground" />
                    <p className="text-xl text-primary font-bold group-hover:underline">
                      Skills
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="inline-block w-fit text-sm text-secondary dark:text-foreground group-hover:underline"
                >
                  www.heritianaraveloson.dev &gt; portfolio &gt; skills
                </Link>
                <p className="text-sm font-light line-clamp-3">{lorem}</p>
              </div>

              <Link href="/" className="flex flex-col md:hidden group">
                <div className="flex items-center gap-x-2">
                  <Cpu className="text-dark-accent dark:text-foreground" />
                  <p className="text-xl text-primary font-bold group-hover:no-underline">
                    Skills
                  </p>
                </div>
                <p className="text-sm text-secondary group-hover:no-underline">
                  www.heritianaraveloson.dev &gt; portfolio &gt; skills
                </p>
                <p className="text-sm font-light line-clamp-3 group-hover:no-underline">
                  {lorem}
                </p>
              </Link>
            </div>

            <div className="mb-6">
              <div className="hidden md:flex flex-col gap-1">
                <Link
                  href="/"
                  className="inline-flex items-center gap-x-2 w-fit group"
                >
                  <div className="flex items-center gap-x-2">
                    <Monitor className="text-dark-accent dark:text-foreground" />
                    <p className="text-xl text-primary font-bold group-hover:underline">
                      Works
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="inline-block w-fit text-sm text-secondary dark:text-foreground group-hover:underline"
                >
                  www.heritianaraveloson.dev &gt; works
                </Link>
                <p className="text-sm font-light line-clamp-3">{lorem}</p>
              </div>

              <Link href="/" className="flex flex-col md:hidden group">
                <div className="flex items-center gap-x-2">
                  <Monitor className="text-dark-accent dark:text-foreground" />
                  <p className="text-xl text-primary font-bold group-hover:no-underline">
                    Works
                  </p>
                </div>
                <p className="text-sm text-secondary group-hover:no-underline">
                  www.heritianaraveloson.dev &gt; works
                </p>
                <p className="text-sm font-light line-clamp-3 group-hover:no-underline">
                  {lorem}
                </p>
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex h-175 xl:h-160 w-px bg-dark-accent dark:bg-foreground mx-4"></div>
          <AboutMainPage />
        </div>
      </div>
    </div>
  );
}

import { Card, CardTitle, CardContent } from "@/src/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import ph_2 from "@/public/images/placeholder_2.jpg";
import { ArrowRight, Award, BriefcaseBusiness, Calendar } from "lucide-react";

export function ProfessionalResumeCard() {
  return (
    <Card className="w-full overflow-hidden hover:shadow-lg hover:dark:shadow-gray-600 hover:scale-105 transition-all duration-300 py-0">
      <CardTitle className="px-0">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={ph_2}
            alt="Professional Picture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
            loading="eager"
          />
        </div>
        <div className="p-8">
          <div className="text-center mb-8 border-b border-accent pb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-primary rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              <span>Professional Journey</span>
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-2">
              My Latest Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              A Professional experience & Career Growth
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-row items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-linear-to-br from-purple-400 to-blue-800 rounded-lg flex items-center justify-center">
                <BriefcaseBusiness className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-xl text-primary font-semibold dark:text-white mb-1">
                  Zeno Inno
                </h4>
                <p className="text-dark-accent/70 dark:text-gray-400 leading-relaxed">
                  Software Developer - Full time
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pl-0 md:pl-16 lg:pl-0 xl:pl-16">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-dark-accent/70 dark:text-gray-400">
                August 2024 - Ongoing
              </span>
            </div>
          </div>
        </div>
      </CardTitle>
      <CardContent className="flex flex-col gap-y-2 pb-6">
        <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
          <Link
            href="/portfolio/resume/professional"
            className="group/link inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            <span>View Full Professional Resume</span>
            <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

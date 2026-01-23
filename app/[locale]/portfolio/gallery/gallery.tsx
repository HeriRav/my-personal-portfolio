import { Card, CardContent } from "@/src/components/ui/card";
import Image from "next/image";
import ph_1 from "@/public/images/placeholder_1.jpg";
import ph_2 from "@/public/images/placeholder_2.jpg";
import ph_3 from "@/public/images/placeholder_3.jpg";

export default function GalleryImage() {
  return (
    <Card className="flex border dark:border-black rounded-3xl overflow-hidden w-full lg:w-125 p-0">
      <CardContent className="p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="sm:border-r overflow-hidden">
            <Image
              src={ph_1}
              alt="ph-1"
              className="w-full h-full object-cover hover:scale-120 transition-all duration-300"
              fetchPriority="low"
              loading="eager"
            />
          </div>
          <div className="hidden sm:grid grid-rows-2">
            <div className="border-b overflow-hidden">
              <Image
                src={ph_2}
                alt="ph-2"
                className="w-full h-full object-cover hover:scale-120 transition-all duration-300"
              />
            </div>
            <div className="border-t overflow-hidden">
              <Image
                src={ph_3}
                alt="ph-3"
                className="w-full h-full object-cover hover:scale-120 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

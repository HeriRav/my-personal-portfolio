import { easeInOut, motion } from "framer-motion";
import { StaticImageData } from "next/image";
import DeviceMockup from "./device-mockup";

type ShowcaseSectionProps = {
  desktopSrc: StaticImageData;
  mobileSrc: StaticImageData;
  reverse?: boolean;
  children: React.ReactNode;
};

const floatingAnimation = {
  animate: { y: [0, -5, 0] },
  transition: {
    duration: 5,
    repeat: Infinity,
    ease: easeInOut,
  },
  whileHover: {
    y: 0,
    transition: { duration: 0.2 },
  },
};

function WorkSection({
  desktopSrc,
  mobileSrc,
  reverse = false,
  children,
}: ShowcaseSectionProps) {
  return (
    <div
      className={`lg:grid lg:grid-cols-2 gap-y-5 lg:gap-x-16 py-8 lg:py-20 bg-transparent items-center
    ${reverse ? "flex flex-col-reverse" : "flex flex-col"}`}
    >
      {!reverse && (
        <motion.div {...floatingAnimation} className="flex flex-col">
          <DeviceMockup desktopSrc={desktopSrc} mobileSrc={mobileSrc} />
        </motion.div>
      )}

      <div>{children}</div>

      {reverse && (
        <motion.div {...floatingAnimation} className="flex flex-col">
          <DeviceMockup desktopSrc={desktopSrc} mobileSrc={mobileSrc} />
        </motion.div>
      )}
    </div>
  );
}

export default WorkSection;

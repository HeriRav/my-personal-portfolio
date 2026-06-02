import Image from "next/image";
import DeviceMockupProps from "../types/device-mockup";

export default function DeviceMockup({
  desktopSrc,
  mobileSrc,
  alt,
}: DeviceMockupProps) {
  return (
    <div className="flex flex-col">
      {/* Desktop / Tablet */}
      <div className="hidden md:flex relative mx-auto w-full">
        <div className="relative bg-transparent p-2">
          <div className="bg-dark-accent dark:bg-black rounded-xl lg:rounded-t-lg lg:rounded-b-none overflow-hidden px-8 lg:px-2 xl:px-3 py-2 lg:py-3 xl:py-5">
            <Image
              src={desktopSrc}
              alt={alt ?? "Project preview"}
              className="w-full h-full object-contain"
              loading="eager"
            />
            <div className="absolute flex lg:hidden right-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-dark-accent border-2 border-gray-500 rounded-full" />
          </div>

          <div className="flex flex-col items-center">
            <div className="hidden lg:flex h-3 bg-gray-300 rounded-b-lg relative w-[120%]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-1.5 bg-gray-500 rounded-b" />
            </div>
            <div className="hidden lg:flex h-0.5 bg-gray-400 rounded-b-lg relative w-[115%]" />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="relative flex md:hidden mx-auto border-dark-accent bg-ring border-14 rounded-[2.5rem] h-150 w-75">
        <div className="h-8 w-0.75 bg-dark-accent absolute -end-4.25 top-35.5 rounded-e-lg" />
        <div className="h-11.5 w-0.75 bg-dark-accent absolute -start-4.25 top-31 rounded-s-lg" />
        <div className="h-11.5 w-0.75 bg-dark-accent absolute -start-4.25 top-44.5 rounded-s-lg" />
        <div className="rounded-4xl overflow-hidden w-full h-full bg-black">
          <Image
            src={mobileSrc}
            alt={alt ?? "Project preview"}
            className="w-full h-full object-contain"
            loading="eager"
          />
          <div className="absolute left-1/2 -top-1 -translate-x-1/2 w-36 h-5 bg-dark-accent rounded-b-full" />
          <div className="absolute left-1/2 bottom-1 -translate-x-1/2 w-28 h-1 bg-gray-100 rounded" />
        </div>
      </div>
    </div>
  );
}

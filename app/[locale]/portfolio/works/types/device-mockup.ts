import { StaticImageData } from "next/image";

interface DeviceMockupProps {
  desktopSrc: StaticImageData | string;
  mobileSrc: StaticImageData | string;
  alt?: string;
}

export default DeviceMockupProps;

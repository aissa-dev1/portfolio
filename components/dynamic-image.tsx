import { useDynamicImgSrc } from "@/hooks/use-dynamic-img-src";
import Image, { ImageProps } from "next/image";

interface DynamicImageProps extends ImageProps {
  forceStatic?: boolean;
}

export default function DynamicImage({
  src: defaultSrc,
  forceStatic = false,
  ...rest
}: DynamicImageProps) {
  const { src } = useDynamicImgSrc({
    imgSrc: defaultSrc as string,
    forceStatic,
  });

  if (!src) return null;

  return <Image src={src} {...rest} />;
}

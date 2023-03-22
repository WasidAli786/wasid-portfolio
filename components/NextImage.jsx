import Image from "next/image";

export default function NextImage({ src, alt, isPriority, className }) {
  return (
    <>
      <Image
        src={src ?? "#"}
        fill
        priority={isPriority ? true : false}
        alt={alt ?? "alt description"}
        sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
        className={className ?? ""}
      />
    </>
  );
}

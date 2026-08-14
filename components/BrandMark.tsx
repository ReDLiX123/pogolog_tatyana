import Image from "next/image";

type BrandMarkProps = {
  className?: string;
};

export default function BrandMark({ className = "h-10 w-10" }: BrandMarkProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-xl bg-[#4F9A8F] shadow-sm ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/images/brand-logo-green.png"
        alt=""
        fill
        sizes="40px"
        className="object-cover"
      />
    </span>
  );
}

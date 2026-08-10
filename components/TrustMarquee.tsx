import { marqueeItems } from "@/lib/data";

export default function TrustMarquee() {
  // Duplicate array to ensure seamless infinite looping
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full bg-[#4F9A8F] text-white py-3.5 overflow-hidden shadow-sm select-none border-y border-[#3F7E75]">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {items.map((item, index) => (
          <div key={index} className="inline-flex items-center mx-6 text-sm sm:text-base font-semibold tracking-wide">
            <span>{item}</span>
            <span className="ml-6 text-white/50 text-xs">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

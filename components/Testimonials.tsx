"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF7F2] relative border-y border-[#E5DCD0]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4F9A8F]" />
            Реальные истории
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22282B] tracking-tight">
            Отзывы наших пациентов
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A656B]">
            Более 380 положительных оценок в независимых сервисах Яндекс и 2ГИС Иркутска.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="relative pb-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full !pb-14"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-white rounded-3xl p-7 shadow-sm border border-[#E5DCD0]/80 flex flex-col justify-between h-full hover:shadow-lg hover:border-[#4F9A8F]/40 transition-all duration-300">
                  <div>
                    {/* Header: Rating & Quote Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <Quote className="w-8 h-8 text-[#4F9A8F]/20" />
                    </div>

                    {/* Procedure Badge */}
                    <div className="inline-block px-3 py-1 rounded-full bg-[#EBF4F3] text-[#3F7E75] text-xs font-bold mb-4">
                      {item.procedure}
                    </div>

                    {/* Content */}
                    <p className="text-sm text-[#22282B] leading-relaxed mb-6 italic">
                      «{item.content}»
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-[#22282B] flex items-center gap-1.5">
                        {item.author}
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4F9A8F]" />
                      </div>
                      <div className="text-xs text-[#5A656B]">
                        {item.age} {item.role ? `· ${item.role}` : ""}
                      </div>
                    </div>
                    <span className="text-[11px] text-[#5A656B]">{item.date}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { whyChooseUs } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#FAF7F2] relative border-y border-[#E5DCD0]/60 overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4F9A8F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4F9A8F]" />
            Стандарты работы
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22282B] tracking-tight">
            Почему пациенты выбирают «ПодоПрофи»
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A656B]">
            Мы объединили медицинскую точность, строгое соблюдение стерильности и премиальный сервис в центре Иркутска.
          </p>
        </div>

        {/* 01-06 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-8 shadow-sm border border-[#E5DCD0]/80 hover:shadow-xl hover:border-[#4F9A8F]/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Large Faded Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-extrabold text-[#4F9A8F]/20 group-hover:text-[#4F9A8F]/40 transition-colors font-mono">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center font-bold text-xs">
                    ✦
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#22282B] mb-3 leading-tight group-hover:text-[#4F9A8F] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-[#5A656B] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#4F9A8F]">
                <span>Высокий стандарт ухода</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

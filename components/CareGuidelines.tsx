"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, FileText, Info } from "lucide-react";
import { careGuidelines } from "@/lib/data";

export default function CareGuidelines() {
  const [activeType, setActiveType] = useState<'before' | 'after'>('before');

  const currentGuideline = careGuidelines.find((g) => g.type === activeType) || careGuidelines[0];

  const recommendedItems = currentGuideline.items.filter((item) => item.isRecommended);
  const notRecommendedItems = currentGuideline.items.filter((item) => !item.isRecommended);

  return (
    <section id="guidelines" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F3] border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5 text-[#4F9A8F]" />
            Памятка пациенту
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22282B] tracking-tight">
            Правила подготовки и ухода
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A656B]">
            Простые рекомендации помогают подготовиться к визиту и правильно ухаживать за стопами после процедуры.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#FAF7F2] rounded-2xl border border-[#E5DCD0]/70">
            <button
              onClick={() => setActiveType('before')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeType === 'before'
                  ? 'bg-[#4F9A8F] text-white shadow-md'
                  : 'text-[#5A656B] hover:text-[#22282B]'
              }`}
            >
              Перед процедурой (Подготовка)
            </button>
            <button
              onClick={() => setActiveType('after')}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200 ${
                activeType === 'after'
                  ? 'bg-[#4F9A8F] text-white shadow-md'
                  : 'text-[#5A656B] hover:text-[#22282B]'
              }`}
            >
              После процедуры (Домашний уход)
            </button>
          </div>
        </div>

        {/* Guideline Title & Subtitle */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-[#22282B] mb-2">
            {currentGuideline.title}
          </h3>
          <p className="text-sm text-[#5A656B]">
            {currentGuideline.subtitle}
          </p>
        </div>

        {/* Two Columns Grid: DO vs DON'T */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeType}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {/* DO Column */}
            <div className="bg-[#EBF4F3]/60 rounded-3xl p-6 sm:p-8 border border-[#C8E2DE]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C8E2DE]">
                <div className="w-10 h-10 rounded-full bg-[#4F9A8F] text-white flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#22282B]">Рекомендуется делать</h4>
                  <span className="text-xs text-[#3F7E75] font-medium">Для лучшего результата</span>
                </div>
              </div>

              <ul className="space-y-4">
                {recommendedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#4F9A8F] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#22282B] font-medium leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DON'T Column */}
            <div className="bg-[#FFF5F5] rounded-3xl p-6 sm:p-8 border border-[#FCD3D3]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#FCD3D3]">
                <div className="w-10 h-10 rounded-full bg-[#E53E3E] text-white flex items-center justify-center">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#22282B]">Чего делать НЕ стоит</h4>
                  <span className="text-xs text-[#C53030] font-medium">Во избежание осложнений</span>
                </div>
              </div>

              <ul className="space-y-4">
                {notRecommendedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-[#E53E3E] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#22282B] font-medium leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Note */}
        <div className="mt-12 max-w-2xl mx-auto bg-[#FAF7F2] rounded-2xl p-5 border border-[#E5DCD0] flex items-center gap-3 text-xs sm:text-sm text-[#5A656B]">
          <Info className="w-5 h-5 text-[#4F9A8F] shrink-0" />
          <span>
            После процедуры уточните у специалиста индивидуальные рекомендации по домашнему уходу и срок следующего визита.
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Sparkles, Home, ArrowRight } from "lucide-react";
import { serviceCategories } from "@/lib/data";

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  const currentCategory = serviceCategories.find((cat) => cat.id === activeTab) || serviceCategories[0];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F3] border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#4F9A8F]" />
            Прайс-лист услуг
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22282B] tracking-tight">
            Услуги и стоимость приёма
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A656B]">
            Прозрачные цены без скрытых платежей. Возможен выезд на дом по Иркутску при сложных поражениях.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`relative px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "text-white bg-[#4F9A8F] shadow-md shadow-[#4F9A8F]/20"
                    : "text-[#5A656B] bg-[#FAF7F2] hover:bg-[#EBF4F3] border border-[#E5DCD0]/60 hover:text-[#22282B]"
                }`}
              >
                {category.title}
              </button>
            );
          })}
        </div>

        {/* Tab Description */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-sm sm:text-base text-[#5A656B] italic">
            {currentCategory.description}
          </p>
        </div>

        {/* Tab Content with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {currentCategory.services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                  service.homeVisit
                    ? "border-amber-400 ring-2 ring-amber-400/20 bg-amber-50/20"
                    : service.popular
                    ? "border-[#4F9A8F] ring-2 ring-[#4F9A8F]/20 shadow-md"
                    : "border-[#E5DCD0] shadow-sm hover:border-[#4F9A8F]/40"
                }`}
              >
                {service.homeVisit && (
                  <div className="absolute -top-3.5 right-6 bg-amber-500 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Home className="w-3 h-3" /> Специальная услуга
                  </div>
                )}

                {!service.homeVisit && service.popular && (
                  <div className="absolute -top-3.5 right-6 bg-[#4F9A8F] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Популярный выбор
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#5A656B] mb-2">
                    <Clock className="w-3.5 h-3.5 text-[#4F9A8F]" />
                    <span>{service.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#22282B] mb-3 leading-snug">
                    {service.name}
                  </h3>

                  <p className="text-sm text-[#5A656B] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FAF7F2]">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-[#5A656B] font-medium">Стоимость:</span>
                    <span className="text-2xl font-extrabold text-[#22282B]">
                      {service.price}
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-colors duration-200 shadow-sm"
                  >
                    Записаться на процедуру
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

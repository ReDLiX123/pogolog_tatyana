"use client";

import Image from "next/image";
import { Shield, Phone, Sparkles, CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";
import { clinicInfo } from "@/lib/data";
import heroImg from "@/public/images/hero.jpg";

export default function Hero() {
  const headlineText = "Здоровые стопы и ногти без боли и рецидивов";
  const words = headlineText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2]/60 to-white overflow-hidden">
      {/* Background Subtle Geometric Accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#4F9A8F]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#4F9A8F]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (55%) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF4F3] border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#4F9A8F]" />
              Центр подологии в Иркутске
            </motion.div>

            {/* Headline with word stagger animation */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#22282B] tracking-tight leading-[1.15]"
            >
              {words.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className={
                    word.toLowerCase().includes("боли") || word.toLowerCase().includes("здоровые")
                      ? "inline-block mr-2.5 text-[#4F9A8F]"
                      : "inline-block mr-2.5 text-[#22282B]"
                  }
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-[#5A656B] leading-relaxed max-w-2xl font-normal"
            >
              Решаем сложные эстетические и медицинские проблемы ногтей и стоп за 1–3 приёма. 
              Без хирургического вмешательства, с полной стерильностью и деликатной заботой о вашем комфорте.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-bold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-all duration-200 shadow-lg shadow-[#4F9A8F]/25 hover:shadow-xl hover:scale-[1.02] active:scale-95"
              >
                Записаться на приём
              </a>

              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full text-base font-bold text-[#22282B] bg-white hover:bg-[#FAF7F2] border border-[#E5DCD0] transition-all duration-200 shadow-sm hover:border-[#4F9A8F] gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#4F9A8F]" />
                {clinicInfo.phone}
              </a>
            </motion.div>

            {/* Trust Badges Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6 border-t border-[#E5DCD0]/70 w-full flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#5A656B]"
            >
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#4F9A8F]" />
                <span>Лицензия Минздрава</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#4F9A8F]" />
                <span>9 лет практики</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#4F9A8F]" />
                <span>4 800+ пациентов</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (45%) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md lg:max-w-none aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src={heroImg}
                alt="Кабинет центра подологии ПодоПрофи"
                fill
                priority
                className="object-cover object-center"
              />

              {/* Floating Badge 1: Experience */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#E5DCD0]/60 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center font-bold text-lg">
                  9+
                </div>
                <div>
                  <div className="text-xs font-bold text-[#22282B]">Практика с 2017 года</div>
                  <div className="text-[11px] text-[#5A656B]">г. Иркутск</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Sterility guarantee */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#E5DCD0]/60 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#4F9A8F] text-white flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#22282B]">100% Стерильность</div>
                  <div className="text-[11px] text-[#5A656B]">Крафт-пакеты СанПиН</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

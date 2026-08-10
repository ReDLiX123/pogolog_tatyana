"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Award, CheckCircle2, Home } from "lucide-react";
import { clinicInfo } from "@/lib/data";

const isProd = process.env.NODE_ENV === "production";
const doctorImageSrc = isProd ? "/pogolog_tatyana/images/tatyana.jpg" : "/images/tatyana.jpg";

export default function AboutDoctor() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] relative border-b border-[#E5DCD0]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Floating Ratings */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={doctorImageSrc}
                alt="Подолог Татьяна Оксанычева"
                className="w-full h-full object-cover object-top"
              />

              {/* Floating Badge: 2GIS Rating */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#E5DCD0]/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-white flex items-center justify-center font-bold text-lg">
                  5.0
                </div>
                <div>
                  <div className="text-xs font-bold text-[#22282B] flex items-center gap-1">
                    <span>112 оценок</span>
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="text-[11px] text-[#5A656B]">На карточке 2ГИС Иркутск</div>
                </div>
              </div>

              {/* Floating Badge: Experience */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-[#E5DCD0]/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#4F9A8F] text-white flex items-center justify-center font-bold">
                  12+
                </div>
                <div>
                  <div className="text-xs font-bold text-[#22282B]">12+ лет опыта</div>
                  <div className="text-[11px] text-[#5A656B]">В подологии</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#4F9A8F]" />
              Ваш специалист
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22282B] tracking-tight">
              {clinicInfo.doctorName}
            </h2>

            <p className="text-lg font-semibold text-[#4F9A8F]">
              {clinicInfo.doctorRole} (стаж более 12 лет)
            </p>

            <p className="text-base text-[#5A656B] leading-relaxed">
              {clinicInfo.doctorBio}
            </p>

            {/* Key Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-[#E5DCD0]/70 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#4F9A8F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#22282B]">100% Стерильность</div>
                  <div className="text-xs text-[#5A656B]">Крафт-пакеты и автоклав СанПиН</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-[#E5DCD0]/70 flex items-start gap-3">
                <Home className="w-5 h-5 text-[#4F9A8F] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-[#22282B]">Выезд на дом</div>
                  <div className="text-xs text-[#5A656B]">Для пожилых и маломобильных</div>
                </div>
              </div>
            </div>

            {/* Certificates & Qualifications */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#22282B]">
                Специализация и квалификация:
              </div>
              {clinicInfo.doctorCertificates.map((cert, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-[#5A656B]">
                  <CheckCircle2 className="w-4 h-4 text-[#4F9A8F] shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>

            {/* Actions: Contact Form link */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-all shadow-md shadow-[#4F9A8F]/25 hover:scale-105 active:scale-95"
              >
                Записаться на консультацию
              </a>

              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-bold text-[#22282B] bg-white border border-[#E5DCD0] hover:border-[#4F9A8F] transition-all shadow-sm active:scale-95"
              >
                {clinicInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

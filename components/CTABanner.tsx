import { Phone, Shield, Calendar, Sparkles } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export default function CTABanner() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#FAF7F2] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#4F9A8F] to-[#3F7E75] text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden text-center">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Специальное предложение
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Запишитесь на первичный осмотр подолога со скидкой 100%
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-normal max-w-2xl mx-auto">
              Консультация и компьютерная диагностика состояния стоп предоставляется бесплатно при проведении любой процедуры в день обращения.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-[#22282B] bg-white hover:bg-[#FAF7F2] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Записаться на приём
              </a>

              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 transition-all duration-200 gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                {clinicInfo.phone}
              </a>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-300" /> Медицинская лицензия
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-300" /> Приём без ожидания в очереди
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

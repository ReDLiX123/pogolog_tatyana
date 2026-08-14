import { Phone, MapPin, Clock, Send, MessageCircle, ExternalLink, Mail, CalendarDays } from "lucide-react";
import { bookingUrl, clinicInfo } from "@/lib/data";

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] relative border-t border-[#E5DCD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <SparklesIcon />
            Контакты и Запись
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22282B] tracking-tight">
            Свяжитесь с Татьяной Оксанычевой
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A656B]">
            Выберите удобный способ связи или запишитесь онлайн через Dikidi.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E5DCD0]/80 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#22282B] mb-2">
                {clinicInfo.name}
              </h3>
              <p className="text-sm text-[#5A656B]">
                Приём ведут по предварительной записи. Возможен выезд на дом по Иркутску.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A656B] font-semibold">Адрес кабинета</div>
                  <div className="text-sm font-bold text-[#22282B]">{clinicInfo.address}</div>
                  <div className="text-xs text-[#5A656B] mt-0.5">Клиника «Демократ», Октябрьский район</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A656B] font-semibold">Телефон для записи</div>
                  <a
                    href={`tel:${clinicInfo.phoneRaw}`}
                    className="text-base font-bold text-[#22282B] hover:text-[#4F9A8F] transition-colors"
                  >
                    {clinicInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A656B] font-semibold">Режим работы</div>
                  <div className="text-sm font-bold text-[#22282B]">{clinicInfo.workHours}</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A656B] font-semibold">Email</div>
                  <a href={`mailto:${clinicInfo.email}`} className="text-sm font-bold text-[#22282B] hover:text-[#4F9A8F]">
                    {clinicInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Messengers Section */}
            <div className="pt-6 border-t border-gray-100">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A656B] mb-3">
                Мессенджеры и соцсети:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                <a
                  href={clinicInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4 mb-1" />
                  <span className="text-xs font-bold">Telegram</span>
                </a>

                <a
                  href={clinicInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 mb-1" />
                  <span className="text-xs font-bold">WhatsApp</span>
                </a>

                <a
                  href={clinicInfo.maxMessenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#4F9A8F]/10 text-[#4F9A8F] hover:bg-[#4F9A8F] hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4 mb-1" />
                  <span className="text-xs font-bold">Max</span>
                </a>

                <a
                  href={clinicInfo.odnoklassniki}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#EE8208]/10 text-[#EE8208] hover:bg-[#EE8208] hover:text-white transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mb-1" />
                  <span className="text-xs font-bold">OK.ru</span>
                </a>
              </div>
            </div>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#4F9A8F] px-6 py-4 font-bold text-white shadow-md shadow-[#4F9A8F]/20 transition-colors hover:bg-[#3F7E75]">
              <CalendarDays className="h-5 w-5" />
              <span>Записаться онлайн через Dikidi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SparklesIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-[#4F9A8F]"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
  );
}

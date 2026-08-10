"use client";

import { useState } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, MessageCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { clinicInfo, serviceCategories } from "@/lib/data";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: serviceCategories[0].services[0].name,
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to /api/contact once backend API route or CRM integration is ready
    console.log("Submit booking:", formData);
    setSubmitted(true);
  };

  const allServices = serviceCategories.flatMap((cat) => cat.services);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] relative border-t border-[#E5DCD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C8E2DE] text-[#3F7E75] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#4F9A8F]" />
            Запись и Контакты
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#22282B] tracking-tight">
            Свяжитесь с нами удобным способом
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5A656B]">
            Заполните форму или напишите нам в мессенджерах. Администратор ответит в течение 10 минут.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Details & Messengers (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-sm border border-[#E5DCD0]/80 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#22282B] mb-2">
                Центр «ПодоПрофи»
              </h3>
              <p className="text-sm text-[#5A656B]">
                Приём ведут сертифицированные специалисты по предварительной записи.
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
                  <div className="text-xs text-[#5A656B] mt-0.5">Остановка «Степана Разина»</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#5A656B] font-semibold">Телефон регистратуры</div>
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
            </div>

            {/* Messengers Section */}
            <div className="pt-6 border-t border-gray-100">
              <div className="text-xs font-bold uppercase tracking-wider text-[#5A656B] mb-3">
                Запись через мессенджеры:
              </div>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href={clinicInfo.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#0088cc]/10 text-[#0088cc] hover:bg-[#0088cc] hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold">Telegram</span>
                </a>

                <a
                  href={clinicInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold">WhatsApp</span>
                </a>

                <a
                  href={clinicInfo.maxMessenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-[#4F9A8F]/10 text-[#4F9A8F] hover:bg-[#4F9A8F] hover:text-white transition-colors group"
                >
                  <Send className="w-5 h-5 mb-1" />
                  <span className="text-xs font-bold">Max</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E5DCD0]/80">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#22282B]">
                  Заявка успешно принята!
                </h3>
                <p className="text-sm text-[#5A656B] max-w-md mx-auto">
                  Администратор центра свяжется с вами по номеру <span className="font-bold text-[#22282B]">{formData.phone}</span> в ближайшее время для подтверждения удобного времени визита.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-[#4F9A8F] bg-[#EBF4F3] hover:bg-[#4F9A8F] hover:text-white transition-colors"
                >
                  Отправить еще одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-[#22282B]">
                  Запись на приём
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#22282B] uppercase tracking-wider mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-[#E5DCD0] bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F9A8F] text-sm text-[#22282B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#22282B] uppercase tracking-wider mb-2">
                      Номер телефона *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (900) 000-00-00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-[#E5DCD0] bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F9A8F] text-sm text-[#22282B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#22282B] uppercase tracking-wider mb-2">
                    Интересующая услуга
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#E5DCD0] bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F9A8F] text-sm text-[#22282B]"
                  >
                    {allServices.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name} — {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#22282B] uppercase tracking-wider mb-2">
                    Комментарий или описание проблемы (опционально)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Например: беспокоит вросший ноготь на правой стопе..."
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-[#E5DCD0] bg-[#FAF7F2]/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#4F9A8F] text-sm text-[#22282B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-base font-bold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-all duration-200 shadow-md shadow-[#4F9A8F]/25 hover:shadow-lg active:scale-98"
                >
                  Записаться на консультацию
                </button>

                <p className="text-[11px] text-[#5A656B] text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных в соответствии с политикой конфиденциальности.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

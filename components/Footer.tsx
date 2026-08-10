import { ShieldCheck, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#22282B] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#4F9A8F] text-white flex items-center justify-center font-bold text-xl">
                ПП
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                {clinicInfo.name}
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              {clinicInfo.tagline}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={clinicInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#4F9A8F] transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href={clinicInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#4F9A8F] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={clinicInfo.maxMessenger}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#4F9A8F] transition-colors"
                aria-label="Max Messenger"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">Направления</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Лечение вросшего ногтя
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Титановая нить и коррекция
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Зачистка при грибке ногтей
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Медицинский педикюр
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Уход при диабетической стопе
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">Разделы сайта</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Услуги и цены
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#4F9A8F] transition-colors">
                  Стандарты и лицензия
                </a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-[#4F9A8F] transition-colors">
                  Памятка пациенту
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#4F9A8F] transition-colors">
                  Отзывы пациентов
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#4F9A8F] transition-colors">
                  Запись на приём
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white mb-4">Контакты</h4>

            <div className="flex items-start gap-2.5 text-sm text-gray-400">
              <MapPin className="w-4 h-4 text-[#4F9A8F] shrink-0 mt-0.5" />
              <span>{clinicInfo.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-gray-400">
              <Phone className="w-4 h-4 text-[#4F9A8F] shrink-0" />
              <a href={`tel:${clinicInfo.phoneRaw}`} className="hover:text-white font-bold transition-colors">
                {clinicInfo.phone}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-gray-400">
              <Clock className="w-4 h-4 text-[#4F9A8F] shrink-0 mt-0.5" />
              <span>{clinicInfo.workHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} {clinicInfo.fullName}. Все права защищены.
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <ShieldCheck className="w-4 h-4 text-[#4F9A8F]" />
            <span>Лицензия на осуществление медицинской деятельности № {clinicInfo.licenseNumber}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

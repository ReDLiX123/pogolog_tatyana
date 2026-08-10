import { Phone, MapPin, Clock, Send, MessageCircle, ExternalLink, Calendar, Star } from "lucide-react";
import { clinicInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#22282B] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#4F9A8F] text-white flex items-center justify-center font-bold text-lg">
                ТО
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Подолог Т. Оксанычева
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              {clinicInfo.tagline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
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

              <a
                href={clinicInfo.odnoklassniki}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#EE8208] transition-colors"
                aria-label="Одноклассники"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">Основные услуги</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Аппаратный педикюр
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Установка скоб при вросшем ногте
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Зачистка при микозе ногтей
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Выезд на дом по Иркутску
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Изготовление ортезов
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-base font-bold text-white mb-4">Навигация</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-[#4F9A8F] transition-colors">
                  О специалисте
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#4F9A8F] transition-colors">
                  Прайс-лист DIKIDI
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#4F9A8F] transition-colors">
                  Стандарты СанПиН
                </a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-[#4F9A8F] transition-colors">
                  Памятка пациенту
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#4F9A8F] transition-colors">
                  Отзывы (5.0 ★ 2ГИС)
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

            <div className="pt-2">
              <a
                href={clinicInfo.dikidiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Онлайн-запись DIKIDI
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} {clinicInfo.fullName}. Все права защищены.
          </div>
          <div className="flex items-center gap-1.5 text-gray-400">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>Рейтинг 5.0 ★ (112 оценок / 107 отзывов на 2ГИС Иркутск)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

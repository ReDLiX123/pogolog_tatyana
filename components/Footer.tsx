import { Phone, MapPin, Clock, Send, MessageCircle, ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import { bookingUrl, clinicInfo } from "@/lib/data";
import BrandMark from "@/components/BrandMark";

export default function Footer() {
  return (
    <footer className="bg-[#22282B] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <BrandMark />
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
                <Link href="/uslugi/apparatnyj-pedikur/" className="hover:text-[#4F9A8F] transition-colors">
                  Аппаратный педикюр
                </Link>
              </li>
              <li>
                <Link href="/uslugi/korrekcionnye-skoby/" className="hover:text-[#4F9A8F] transition-colors">
                  Установка скоб при вросшем ногте
                </Link>
              </li>
              <li>
                <Link href="/uslugi/vrosshij-nogot/" className="hover:text-[#4F9A8F] transition-colors">
                  Обработка вросшего ногтя
                </Link>
              </li>
              <li>
                <Link href="/uslugi/obrabotka-mikoza/" className="hover:text-[#4F9A8F] transition-colors">
                  Зачистка при микозе ногтей
                </Link>
              </li>
              <li>
                <Link href="/uslugi/podolog-na-dom/" className="hover:text-[#4F9A8F] transition-colors">
                  Выезд на дом по Иркутску
                </Link>
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
                  Прайс-лист услуг
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#4F9A8F] transition-colors">
                  Почему выбирают Татьяну
                </a>
              </li>
              <li>
                <a href="#guidelines" className="hover:text-[#4F9A8F] transition-colors">
                  Памятка пациенту
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
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-colors"
              >
                Записаться на приём
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            © {new Date().getFullYear()} {clinicInfo.fullName}. Все права защищены.
            <Link href="/politika-konfidencialnosti/" className="hover:text-white hover:underline">Политика конфиденциальности</Link>
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

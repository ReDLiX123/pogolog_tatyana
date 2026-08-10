"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, Star, MapPin, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clinicInfo } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "О специалисте", href: "#about" },
    { name: "Услуги и цены", href: "#services" },
    { name: "Почему выбирают нас", href: "#why-us" },
    { name: "Памятка", href: "#guidelines" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#E5DCD0]/60"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#4F9A8F] text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-[#3F7E75] transition-colors">
              ТО
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#22282B] group-hover:text-[#4F9A8F] transition-colors">
                Подолог Т. Оксанычева
              </span>
              <span className="text-xs text-[#5A656B] flex items-center gap-1 font-medium">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                5.0 ★ 2ГИС · Иркутск
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-[#22282B] hover:text-[#4F9A8F] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center space-x-5">
            <div className="flex flex-col items-end">
              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="flex items-center text-sm font-bold text-[#22282B] hover:text-[#4F9A8F] transition-colors gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#4F9A8F]" />
                {clinicInfo.phone}
              </a>
              <span className="text-[11px] text-[#5A656B] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#4F9A8F]" /> ул. Красного Восстания, 20
              </span>
            </div>

            <a
              href={clinicInfo.dikidiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-all shadow-sm hover:shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              Записаться
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="p-2 rounded-full bg-[#EBF4F3] text-[#4F9A8F] hover:bg-[#4F9A8F] hover:text-white transition-colors"
              aria-label="Позвонить"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#22282B] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#22282B]" />
              ) : (
                <Menu className="w-6 h-6 text-[#22282B]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-[#22282B] hover:text-[#4F9A8F] py-2 border-b border-gray-100 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="pt-2 flex flex-col space-y-3">
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-[#22282B] bg-[#FAF7F2] border border-[#E5DCD0]"
                >
                  <Phone className="w-4 h-4 text-[#4F9A8F]" />
                  {clinicInfo.phone}
                </a>

                <a
                  href={clinicInfo.dikidiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-[#4F9A8F] hover:bg-[#3F7E75] transition-colors shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Онлайн-запись DIKIDI
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

"use client";

import { useState } from "react";
import { Phone, MessageCircle, Send, X, MessageSquarePlus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clinicInfo } from "@/lib/data";

export default function CallButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Speed Dial Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white/95 backdrop-blur-md rounded-3xl p-4 shadow-2xl border border-[#E5DCD0]/80 space-y-3 min-w-[220px]"
          >
            <div className="text-xs font-bold text-[#5A656B] uppercase tracking-wider px-2 pb-1 border-b border-gray-100">
              Быстрая связь:
            </div>

            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#FAF7F2] transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#4F9A8F] text-white flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#22282B] group-hover:text-[#4F9A8F]">Позвонить</span>
                <span className="text-[11px] text-[#5A656B]">{clinicInfo.phone}</span>
              </div>
            </a>

            <a
              href={clinicInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#FAF7F2] transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#0088cc] text-white flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#22282B] group-hover:text-[#0088cc]">Telegram</span>
                <span className="text-[11px] text-[#5A656B]">Онлайн-консультация</span>
              </div>
            </a>

            <a
              href={clinicInfo.maxMessenger}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#FAF7F2] transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#4F9A8F] text-white flex items-center justify-center">
                <MessageSquarePlus className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#22282B] group-hover:text-[#4F9A8F]">Чат в Max</span>
                <span className="text-[11px] text-[#5A656B]">Канал записи</span>
              </div>
            </a>

            <a
              href={clinicInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-[#FAF7F2] transition-colors group"
            >
              <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#22282B] group-hover:text-[#25D366]">WhatsApp</span>
                <span className="text-[11px] text-[#5A656B]">Быстрый ответ</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulsing Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-[#4F9A8F] text-white shadow-xl flex items-center justify-center hover:bg-[#3F7E75] transition-all duration-300 active:scale-90 focus:outline-none group"
        aria-label="Связаться с нами"
      >
        {/* Continuous Pulsing Glow Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#4F9A8F] opacity-40 animate-ping pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 relative z-10" />
        ) : (
          <Phone className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />
        )}
      </button>
    </div>
  );
}

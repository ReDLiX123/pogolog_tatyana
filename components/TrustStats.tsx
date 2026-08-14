"use client";

import { motion } from "framer-motion";
import { trustStats } from "@/lib/data";
import { Award, ShieldCheck, Star, Home } from "lucide-react";

export default function TrustStats() {
  const getIcon = (id: string) => {
    switch (id) {
      case "rating":
        return <Star className="w-6 h-6 text-current" />;
      case "exp":
        return <Award className="w-6 h-6 text-current" />;
      case "schedule":
        return <ShieldCheck className="w-6 h-6 text-current" />;
      case "home":
        return <Home className="w-6 h-6 text-current" />;
      default:
        return <Award className="w-6 h-6 text-current" />;
    }
  };

  return (
    <section className="py-16 bg-[#FAF7F2] border-b border-[#E5DCD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto justify-center"
        >
          {trustStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#E5DCD0]/80 flex flex-col justify-between hover:border-[#4F9A8F]/60 transition-all duration-300 hover:shadow-lg group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EBF4F3] text-[#4F9A8F] flex items-center justify-center mb-5 group-hover:bg-[#4F9A8F] group-hover:text-white transition-colors duration-300">
                  {getIcon(stat.id)}
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-[#22282B] tracking-tight mb-2">
                  <span>{stat.value}</span>
                  <span className="text-[#4F9A8F] ml-1">{stat.suffix}</span>
                </div>

                <div className="text-base font-bold text-[#22282B] mb-2 leading-snug">
                  {stat.label}
                </div>

                <div className="text-xs sm:text-sm text-[#5A656B] leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

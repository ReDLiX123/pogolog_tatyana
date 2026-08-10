"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { trustStats } from "@/lib/data";
import { Award, Users, ShieldCheck, HeartPulse, Star } from "lucide-react";

export default function TrustStats() {
  const [hasAnimated, setHasAnimated] = useState(false);

  const getIcon = (id: string) => {
    switch (id) {
      case "exp":
        return <Award className="w-6 h-6 text-[#4F9A8F]" />;
      case "patients":
        return <Users className="w-6 h-6 text-[#4F9A8F]" />;
      case "sterile":
        return <ShieldCheck className="w-6 h-6 text-[#4F9A8F]" />;
      case "painless":
        return <HeartPulse className="w-6 h-6 text-[#4F9A8F]" />;
      case "rating":
        return <Star className="w-6 h-6 text-[#4F9A8F]" />;
      default:
        return <Award className="w-6 h-6 text-[#4F9A8F]" />;
    }
  };

  return (
    <section className="py-16 bg-[#FAF7F2] border-b border-[#E5DCD0]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          onViewportEnter={() => setHasAnimated(true)}
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {trustStats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-[#E5DCD0]/70 flex flex-col justify-between hover:border-[#4F9A8F]/50 transition-all hover:shadow-md group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EBF4F3] flex items-center justify-center mb-4 group-hover:bg-[#4F9A8F] group-hover:text-white transition-colors">
                {getIcon(stat.id)}
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#22282B] tracking-tight">
                  {hasAnimated ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                  ) : (
                    <span>0</span>
                  )}
                  <span className="text-[#4F9A8F] ml-0.5">{stat.suffix}</span>
                </div>

                <div className="text-sm font-bold text-[#22282B] mt-1.5">
                  {stat.label}
                </div>

                <div className="text-xs text-[#5A656B] mt-1 line-clamp-2 leading-relaxed">
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

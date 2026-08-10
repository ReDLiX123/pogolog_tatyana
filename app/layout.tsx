import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { clinicInfo } from "@/lib/data";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ПодоПрофи — Центр медицинской подологии в Иркутске | Лечение вросшего ногтя и мозолей",
  description: "Профессиональная медицинская подология в Иркутске. Безболезненное лечение вросшего ногтя, грибка, удаление стержневых мозолей и трещин. Запись на приём: +7 (3952) 74-88-90",
  keywords: ["подолог Иркутск", "врастающий ноготь Иркутск", "медицинский педикюр", "титановая нить", "лечение грибка ногтей Иркутск", "удаление мозолей"],
  authors: [{ name: clinicInfo.doctorName }],
  openGraph: {
    title: "Центр медицинской подологии ПодоПрофи в Иркутске",
    description: "Профессиональный уход за стопами и ногтями без боли и стеснения. Лицензия № ЛО-38-01-003892",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#22282B] antialiased selection:bg-[#4F9A8F] selection:text-white">
        {children}
      </body>
    </html>
  );
}

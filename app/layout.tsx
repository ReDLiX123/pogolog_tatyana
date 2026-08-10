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
  title: "Подолог в Иркутске — Татьяна Оксанычева | Лечение вросшего ногтя, грибка, аппаратный педикюр",
  description: "Практика подологии Татьяны Оксанычевой в Иркутске. Аппаратный педикюр от 2000 ₽, коррекция вросшего ногтя, скобы, лечение грибка стопы. Запись онлайн, приём ежедневно 09:00–21:00.",
  keywords: [
    "подолог Иркутск",
    "аппаратный педикюр Иркутск",
    "вросший ноготь лечение Иркутск",
    "скоба на ноготь Иркутск",
    "лечение грибка ногтей на ногах Иркутск",
    "подологический кабинет Иркутск",
    "обработка стоп Иркутск",
    "убрать вросший ноготь без операции Иркутск",
    "аппаратный педикюр с выездом на дом Иркутск",
    "Октябрьский район ул Красного Восстания"
  ],
  authors: [{ name: clinicInfo.doctorName }],
  openGraph: {
    title: "Практика подологии Татьяны Оксанычевой в Иркутске",
    description: "Профессиональный уход за стопами и ногтями без боли. Рейтинг 5.0 ★ на 2ГИС (112 отзывов). Запись на приём: +7 (902) 560-90-73",
    locale: "ru_RU",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": clinicInfo.fullName,
  "description": clinicInfo.tagline,
  "url": "https://redlix123.github.io/pogolog_tatyana/",
  "telephone": clinicInfo.phone,
  "email": clinicInfo.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ул. Красного Восстания, 20, офис 1, 2 этаж",
    "addressLocality": "Иркутск",
    "addressRegion": "Иркутская область",
    "postalCode": "664022",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.2743,
    "longitude": 104.2831
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "112",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "500 ₽ - 6 000 ₽"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-[#22282B] antialiased selection:bg-[#4F9A8F] selection:text-white">
        {children}
      </body>
    </html>
  );
}

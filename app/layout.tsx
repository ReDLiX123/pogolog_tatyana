import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { clinicInfo } from "@/lib/data";
import { absoluteUrl, siteName, siteUrl, socialProfiles } from "@/lib/site";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Подолог в Иркутске — Татьяна Оксанычева",
    template: "%s | Подолог Татьяна Оксанычева",
  },
  description: "Практика подологии Татьяны Оксанычевой в Иркутске. Аппаратный педикюр от 2 000 ₽, работа с вросшим ногтем, коррекционные системы и уход за проблемными стопами.",
  authors: [{ name: clinicInfo.doctorName }],
  creator: clinicInfo.doctorName,
  publisher: siteName,
  category: "Подология",
  applicationName: siteName,
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "Подолог в Иркутске — Татьяна Оксанычева",
    description: "Аппаратный педикюр, работа с вросшим ногтем, коррекционные системы и уход за проблемными стопами в Иркутске.",
    locale: "ru_RU",
    type: "website",
    siteName,
    url: absoluteUrl("/"),
    images: [{ url: absoluteUrl("/images/og-cover.jpg"), width: 1200, height: 630, alt: "Кабинет подолога Татьяны Оксанычевой в Иркутске" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Подолог в Иркутске — Татьяна Оксанычева",
    description: "Аппаратный педикюр, работа с вросшим ногтем и уход за проблемными стопами.",
    images: [absoluteUrl("/images/og-cover.jpg")],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": absoluteUrl("/"),
      "name": siteName,
      "inLanguage": "ru-RU",
      "publisher": { "@id": `${siteUrl}/#business` }
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#business`,
      "name": clinicInfo.fullName,
      "description": clinicInfo.tagline,
      "url": absoluteUrl("/"),
      "image": absoluteUrl("/images/og-cover.jpg"),
      "telephone": clinicInfo.phone,
      "email": clinicInfo.email,
      "priceRange": "500 ₽ – 6 000 ₽",
      "sameAs": socialProfiles,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Красного Восстания, 20, офис 1, 2 этаж",
        "addressLocality": "Иркутск",
        "addressRegion": "Иркутская область",
        "postalCode": "664022",
        "addressCountry": "RU"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 52.2743, "longitude": 104.2831 },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:00"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </head>
      <body className="min-h-screen bg-white text-[#22282B] antialiased selection:bg-[#4F9A8F] selection:text-white">
        {children}
      </body>
    </html>
  );
}

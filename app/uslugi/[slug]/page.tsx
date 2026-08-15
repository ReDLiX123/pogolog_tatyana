import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { bookingUrl, clinicInfo } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";
import { getServiceSeoPage, serviceSeoPages } from "@/lib/service-pages";
import BrandMark from "@/components/BrandMark";

export function generateStaticParams() {
  return serviceSeoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/uslugi/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceSeoPage(slug);
  if (!page) return {};
  const path = `/uslugi/${page.slug}/`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: { title: page.title, description: page.description, url: absoluteUrl(path), images: [absoluteUrl("/images/og-cover.jpg")] },
  };
}

export default async function ServicePage({ params }: PageProps<"/uslugi/[slug]">) {
  const { slug } = await params;
  const page = getServiceSeoPage(slug);
  if (!page) notFound();

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faq.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": absoluteUrl("/") },
      { "@type": "ListItem", "position": 2, "name": page.title, "item": absoluteUrl(`/uslugi/${page.slug}/`) },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#22282B]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqJsonLd, breadcrumbJsonLd]).replace(/</g, "\\u003c") }} />
      <header className="border-b border-[#E5DCD0] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3 font-extrabold"><BrandMark /><span className="hidden sm:inline">Подолог Т. Оксанычева</span></Link>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl bg-[#4F9A8F] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#3F7E75]">Записаться</a>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-20">
          <nav aria-label="Хлебные крошки" className="mb-8 flex items-center gap-2 text-sm text-[#5A656B]">
            <Link href="/" className="hover:text-[#4F9A8F]">Главная</Link><ChevronRight className="h-4 w-4"/><span>{page.eyebrow}</span>
          </nav>
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#4F9A8F]">{page.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{page.title}</h1>
          <p className="mt-6 text-lg leading-8 text-[#5A656B]">{page.intro}</p>

          <section className="mt-10 rounded-3xl border border-[#C8E2DE] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold">Что входит в приём</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2">
              {page.points.map((point) => <li key={point} className="flex gap-3 text-[#5A656B]"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#4F9A8F]"/><span>{point}</span></li>)}
            </ul>
            <p className="mt-6 rounded-2xl bg-[#EBF4F3] p-4 font-semibold text-[#3F7E75]">{page.priceNote}</p>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-extrabold">Частые вопросы</h2>
            <div className="mt-6 space-y-4">
              {page.faq.map((item) => <details key={item.question} className="group rounded-2xl border border-[#E5DCD0] bg-white p-5"><summary className="cursor-pointer font-bold">{item.question}</summary><p className="mt-3 leading-7 text-[#5A656B]">{item.answer}</p></details>)}
            </div>
          </section>

          <nav aria-label="Другие услуги" className="mt-12">
            <h2 className="text-2xl font-extrabold">Другие услуги</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {serviceSeoPages.filter((item) => item.slug !== page.slug).map((item) => (
                <Link key={item.slug} href={`/uslugi/${item.slug}/`} className="rounded-full border border-[#C8E2DE] bg-white px-4 py-2.5 text-sm font-bold text-[#3F7E75] transition-colors hover:bg-[#EBF4F3]">
                  {item.eyebrow}
                </Link>
              ))}
            </div>
          </nav>

          <aside className="mt-12 rounded-3xl bg-[#22282B] p-7 text-white sm:p-9">
            <h2 className="text-2xl font-extrabold">Записаться на приём</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">Кабинет: {clinicInfo.address}. Приём по предварительной записи.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4F9A8F] px-5 py-3 font-bold hover:bg-[#5EAEA2]"><CalendarDays className="h-5 w-5"/>Выбрать время в Dikidi</a>
              <a href={`tel:${clinicInfo.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold hover:bg-white/10"><Phone className="h-5 w-5"/>{clinicInfo.phone}</a>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}

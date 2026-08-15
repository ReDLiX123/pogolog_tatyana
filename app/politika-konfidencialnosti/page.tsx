import type { Metadata } from "next";
import Link from "next/link";
import { clinicInfo } from "@/lib/data";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Информация об обработке данных при использовании сайта практики подологии Татьяны Оксанычевой.",
  alternates: { canonical: absoluteUrl("/politika-konfidencialnosti/") },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] px-4 py-12 text-[#22282B] sm:py-20">
      <article className="mx-auto max-w-3xl rounded-3xl border border-[#E5DCD0] bg-white p-6 shadow-sm sm:p-10">
        <Link href="/" className="text-sm font-bold text-[#4F9A8F] hover:underline">← Вернуться на главную</Link>
        <h1 className="mt-7 text-3xl font-extrabold sm:text-4xl">Политика конфиденциальности</h1>
        <p className="mt-3 text-sm text-[#5A656B]">Последнее обновление: 14 августа 2026 года</p>

        <div className="mt-8 space-y-7 leading-7 text-[#5A656B]">
          <section><h2 className="text-xl font-bold text-[#22282B]">1. Общие положения</h2><p className="mt-2">Настоящая страница описывает работу с данными посетителей сайта {clinicInfo.fullName}. На сайте нет собственной формы записи и личного кабинета пациента.</p></section>
          <section><h2 className="text-xl font-bold text-[#22282B]">2. Переход к сторонним сервисам</h2><p className="mt-2">Для онлайн-записи сайт направляет пользователя в сервис Dikidi. Ссылки на мессенджеры и социальные сети также ведут на внешние сайты. Обработка данных после перехода регулируется правилами соответствующего сервиса.</p></section>
          <section><h2 className="text-xl font-bold text-[#22282B]">3. Технические данные</h2><p className="mt-2">Хостинг-провайдер может автоматически фиксировать технические сведения, необходимые для безопасности и работы сайта: IP-адрес, время запроса, адрес страницы, тип браузера и сведения об устройстве. Срок и порядок хранения таких журналов определяет хостинг-провайдер.</p></section>
          <section><h2 className="text-xl font-bold text-[#22282B]">4. Аналитика</h2><p className="mt-2">Если на сайте будет подключена система веб-аналитики, эта политика должна быть дополнена до её включения, а посетителям должна быть предоставлена требуемая информация о применяемых технологиях.</p></section>
          <section><h2 className="text-xl font-bold text-[#22282B]">5. Контакты</h2><p className="mt-2">По вопросам, связанным с этой политикой, можно обратиться по адресу <a href={`mailto:${clinicInfo.email}`} className="font-semibold text-[#4F9A8F] hover:underline">{clinicInfo.email}</a> или телефону <a href={`tel:${clinicInfo.phoneRaw}`} className="font-semibold text-[#4F9A8F] hover:underline">{clinicInfo.phone}</a>.</p></section>
        </div>
      </article>
    </main>
  );
}

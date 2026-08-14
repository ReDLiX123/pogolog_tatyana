export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
  homeVisit?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export interface WhyChooseUsItem {
  number: string;
  title: string;
  description: string;
}

export interface TrustStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface CareGuideline {
  type: 'before' | 'after';
  title: string;
  subtitle: string;
  items: {
    text: string;
    isRecommended: boolean;
  }[];
}

export interface ClinicInfo {
  name: string;
  fullName: string;
  tagline: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  phoneRaw: string;
  email: string;
  telegram: string;
  whatsapp: string;
  maxMessenger: string;
  odnoklassniki: string;
  workHours: string;
  doctorName: string;
  doctorRole: string;
  doctorExperience: string;
  doctorBio: string;
}

export const clinicInfo: ClinicInfo = {
  name: "Практика подологии Татьяны Оксанычевой",
  fullName: "Практика подологии Оксанычевой Татьяны",
  tagline: "Заботьтесь о своих стопах — профессиональная подология и аппаратный педикюр в Иркутске от 2 000 ₽",
  city: "г. Иркутск",
  district: "Октябрьский район",
  address: "г. Иркутск, ул. Красного Восстания, 20, офис 1 (2 этаж, клиника «Демократ»)",
  phone: "+7 902 560-90-73",
  phoneRaw: "+79025609073",
  email: "podologiarf@gmail.com",
  telegram: "https://t.me/Pedikurpodologia38",
  whatsapp: "https://wa.me/79025609073",
  maxMessenger: "https://max.ru/u/f9LHodD0cOKukTyqmUkh-6mcqJ2qF0lTYlbYU4gvacfRruo-RjPpEiMAdOA",
  odnoklassniki: "https://ok.ru/group/70000000993544",
  workHours: "Ежедневно с 09:00 до 21:00 (по предварительной записи)",
  doctorName: "Татьяна Оксанычева",
  doctorRole: "Подолог, специалист по аппаратным технологиям и коррекционным системам",
  doctorExperience: "Более 16 лет опыта",
  doctorBio: "Работает с вросшими и деформированными ногтями, устанавливает коррекционные системы, выполняет аппаратную обработку проблемных стоп и изменённых ногтевых пластин.",
};

export const trustStats: TrustStat[] = [
  {
    id: "rating",
    value: 5.0,
    suffix: " ★",
    label: "Рейтинг на 2ГИС",
    description: "112 оценок и 107 отзывов от благодарных пациентов",
  },
  {
    id: "exp",
    value: 16,
    suffix: "+ лет",
    label: "Практического опыта",
    description: "Специализированная подологическая практика в Иркутске",
  },
  {
    id: "schedule",
    value: 7,
    suffix: " дней",
    label: "Приём ежедневно",
    description: "С 09:00 до 21:00 по предварительной записи",
  },
  {
    id: "home",
    value: 1,
    suffix: " сервис",
    label: "Выезд на дом",
    description: "Приём маломобильных и пожилых пациентов с выездом по Иркутску",
  },
];

export const marqueeItems: string[] = [
  "Рейтинг 5.0 ★ на 2ГИС (112 оценок)",
  "Онлайн-запись на удобное время через Dikidi",
  "Выезд на дом по Иркутску при сложных случаях",
  "Приём ежедневно с 09:00 до 21:00 по записи",
  "Установка коррекционных скоб без операции",
  "Бережная обработка проблемных стоп и ногтей",
  "16+ лет профессионального опыта в Иркутске",
];

export const serviceCategories: ServiceCategory[] = [
  {
    id: "pedicure",
    title: "Педикюр и обработка стоп",
    description: "Гигиенический и аппаратный уход за здоровыми и проблемными стопами",
    services: [
      {
        id: "healthy-feet",
        name: "Обработка здоровых стоп",
        description: "Гигиенический аппаратный педикюр для сохранения здоровья и мягкости кожи",
        price: "2 000 ₽",
        duration: "30 мин",
      },
      {
        id: "full-pedicure",
        name: "Комплексный педикюр",
        description: "Полный аппаратный уход за ногтями и стопами с обработкой пальцев и кутикулы",
        price: "3 500 ₽",
        duration: "40 мин",
        popular: true,
      },
      {
        id: "problem-feet",
        name: "Обработка проблемных стоп",
        description: "Удаление ороговений, кератозов, глубоких трещин и обработка огрубевшей кожи",
        price: "3 000 ₽",
        duration: "30 мин",
        popular: true,
      },
      {
        id: "long-nails-mycosis",
        name: "Обработка длинных ногтей и чистка поражений",
        description: "Комплексная зачистка при микозе, утолщении и деформациях ногтевых пластин",
        price: "4 000 ₽",
        duration: "60 мин",
      },
      {
        id: "ingrown-nail-unit",
        name: "Работа с вросшим ногтем с перевязкой (1 ед.)",
        description: "Безоболезненное удаление вросшего сегмента, обработка антисептиками и наложение повязки",
        price: "3 000 ₽",
        duration: "30 мин",
      },
      {
        id: "crack-treatment",
        name: "Обработка трещины",
        description: "Локальная аппаратная зачистка и шлифовка болезненной трещины с нанесением размягчителя",
        price: "500 ₽",
        duration: "10 мин",
      },
      {
        id: "tamponade",
        name: "Тампонирование боковых валиков",
        description: "Укладка каполина для предотвращения врастания и снятия давления на боковые валики",
        price: "300 ₽",
        duration: "15 мин",
      },
    ],
  },
  {
    id: "staples",
    title: "Скобы и вросший ноготь",
    description: "Безоперационная ортониксия и исправление формы ногтевой пластины",
    services: [
      {
        id: "bracket-installation",
        name: "Изготовление и установка скобы (1 ед.)",
        description: "Индивидуальная коррекционная скоба. Снимает боль сразу после установки и направляет рост ногтя",
        price: "6 000 ₽",
        duration: "25 мин",
        popular: true,
      },
      {
        id: "bracket-correction",
        name: "Коррекция скобы",
        description: "Плановая регулировка натяжения скобы по мере роста ногтевой пластины",
        price: "2 000 ₽",
        duration: "20 мин",
      },
      {
        id: "ingrown-nail-base",
        name: "Обработка вросшего ногтя (базовая)",
        description: "Снятие воспаления, разгрузка бокового валика и антисептическая обработка",
        price: "2 000 ₽",
        duration: "15 мин",
      },
    ],
  },
  {
    id: "mycosis",
    title: "Обработка ногтей при микозе",
    description: "Аппаратная чистка пораженных тканей и подготовка к наружной терапии",
    services: [
      {
        id: "mycosis-unit",
        name: "Чистка микоза (1 ед.)",
        description: "Аппаратное удаление измененной части ногтя при грибковом поражении",
        price: "700 ₽",
        duration: "10 мин",
      },
      {
        id: "toes-treatment",
        name: "Обработка пальцев стопы",
        description: "Комплексная зачистка кожи пальцев и ногтевых валиков от грибкового поражения",
        price: "2 000 ₽",
        duration: "20 мин",
      },
      {
        id: "deformed-toe-primary",
        name: "Первичная обработка деформированного пальца",
        description: "Глубокая аппаратная зачистка травмированного или сильно утолщенного ногтя",
        price: "1 000 ₽",
        duration: "60 мин",
      },
      {
        id: "deformed-toe-secondary",
        name: "Вторичная обработка первого пальца",
        description: "Повторная гигиеническая зачистка в процессе восстановления ногтя",
        price: "500 ₽",
        duration: "15 мин",
      },
      {
        id: "nail-prosthetics",
        name: "Протезирование ногтя (1 ед.)",
        description: "Восстановление утраченной части ногтя гипоаллергенным подологическим материалом",
        price: "1 500 ₽",
        duration: "20 мин",
      },
    ],
  },
  {
    id: "home-visit",
    title: "Выезд на дом и Ортезы",
    description: "Услуги с выездом по Иркутску и индивидуальная разгрузка стоп",
    services: [
      {
        id: "home-visit-mycosis",
        name: "Обработка сложных микозов с выездом на дом",
        description: "Полный комплект мобильного оборудования для выезда к маломобильным и пожилым пациентам",
        price: "5 000 ₽",
        duration: "60 мин",
        popular: true,
        homeVisit: true,
      },
      {
        id: "orthesis-make",
        name: "Изготовление индивидуального ортеза",
        description: "Индивидуальный силиконовый разделитель для пальцев при вальгусе и частых мозолях",
        price: "3 000 ₽",
        duration: "60 мин",
      },
      {
        id: "callus-remove",
        name: "Удаление стержневой мозоли",
        description: "Безоболезненное высверливание стержня мозоли со специальной разгрузочной повязкой",
        price: "1 000 ₽",
        duration: "10 мин",
      },
    ],
  },
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    number: "01",
    title: "Высокий рейтинг 5.0 ★ на 2ГИС",
    description: "Более 110 реальных отзывов жителей Иркутска. Нас рекомендуют друзьям и близким за бережное отношение.",
  },
  {
    number: "02",
    title: "Понятные цены до записи",
    description: "Стоимость и продолжительность основных процедур указаны в прайс-листе и доступны до выбора времени приёма.",
  },
  {
    number: "03",
    title: "16+ лет профессионального опыта",
    description: "Татьяна Оксанычева регулярно повышает квалификацию по аппаратному педикюру, ортониксии и сложным деформациям стопы.",
  },
  {
    number: "04",
    title: "Выезд на дом по Иркутску",
    description: "Специальная услуга для пожилых, маломобильных пациентов и тех, кому трудно доехать до кабинета самостоятельно.",
  },
  {
    number: "05",
    title: "Онлайн-запись через Dikidi",
    description: "Можно самостоятельно выбрать услугу и подходящее свободное время без ожидания ответа в мессенджере.",
  },
  {
    number: "06",
    title: "Удобное расположение в центре",
    description: "Кабинет на ул. Красного Восстания, 20 (клиника «Демократ», Октябрьский район) с удобной парковкой и остановкой.",
  },
];

export const bookingUrl = "https://dikidi.net/953518?p=0.pi";

export const careGuidelines: CareGuideline[] = [
  {
    type: "before",
    title: "Подготовка к приёму",
    subtitle: "Рекомендации перед визитом к подологу",
    items: [
      { text: "Примите гигиенический душ перед визитом.", isRecommended: true },
      { text: "Возьмите с собой удобные носки и привычную повседневную обувь.", isRecommended: true },
      { text: "Сообщите специалисту о наличии диабета, аллергий или хронических заболеваний.", isRecommended: true },
      { text: "НЕ срезайте углы ногтей и не пытайтесь зачистить мозоли самостоятельно.", isRecommended: false },
      { text: "НЕ наносите жирные кремы, мази или декоративные лаки за 12 часов до приёма.", isRecommended: false },
      { text: "НЕ распаривайте стопы в горячей воде в день визита.", isRecommended: false },
    ],
  },
  {
    type: "after",
    title: "Уход после процедуры",
    subtitle: "Сохранение результата и быстрая регенерация",
    items: [
      { text: "Соблюдайте индивидуальную схему домашнего ухода, составленную Татьяной.", isRecommended: true },
      { text: "Носите свободную обувь, не сдавливающую пальцы в носочной части.", isRecommended: true },
      { text: "Своевременно проходите коррекцию (при установленной скобе — раз в 3-5 недель).", isRecommended: true },
      { text: "НЕ посещайте баню, сауну и бассейн первые 48 часов после глубокой зачистки.", isRecommended: false },
      { text: "НЕ снимайте самостоятельно защитные перевязки или установленные ортезы.", isRecommended: false },
      { text: "НЕ покрывайте обработанный ноготь обычным гель-лаком до полного восстановления.", isRecommended: false },
    ],
  },
];

"use client";

import { useState } from "react";
import "./../globals.css";
import Image from "next/image";

const workList = [
  "Дизайн-проект",
  "3D-эскизы интерьера",
  "Рабочие чертежи",
  "Черновые работы",
  "Электрика",
  "Сантехника",
  "Полы и стяжка",
  "Стены и перегородки",
  "Плиточные работы",
  "Двери",
  "Натяжные потолки",
  "Сплит-системы",
  "Кухни",
  "Корпусная мебель",
  "Диваны и мягкая мебель",
  "Финальная уборка объекта"
];
const repairLevels = [
  {
    tag: "Практичный старт",
    title: "Простой ремонт",
    text: "Для квартиры, которую нужно быстро и аккуратно довести до жилого состояния без сложной комплектации.",
    items: ["Без кухни и мебели", "Базовая чистовая отделка", "Инженерия и основные работы"],
    price: "от 24 000 ₽/м²"
  },
  {
    tag: "Для жизни",
    title: "Комфортный ремонт",
    text: "Оптимальный формат для семьи: дизайн, ремонт, потолки, инженерия, кухня и мебель в единой логике.",
    items: ["Дизайн-проект", "Кухня и мебель", "Готовая квартира под заселение"],
    price: "по смете"
  },
  {
    tag: "Индивидуальный уровень",
    title: "Премиум ремонт",
    text: "Для сложных интерьеров, премиальных материалов, нестандартных решений и полной комплектации объекта.",
    items: ["Индивидуальная концепция", "Премиальные материалы", "Полная детализация проекта"],
    price: "по проекту"
  }
];

const repairRoadmap = [
  {
    number: "01",
    title: "Понимаем задачу",
    text: "Обсуждаем площадь, состояние квартиры, стиль, состав работ и желаемый уровень ремонта."
  },
  {
    number: "02",
    title: "Считаем основу",
    text: "Выезжаем на объект, делаем замеры, оцениваем черновую отделку и технические ограничения."
  },
  {
    number: "03",
    title: "Проектируем интерьер",
    text: "Готовим дизайн-проект, 3D-эскизы, чертежи, план электрики, сантехники и будущей комплектации."
  },
  {
    number: "04",
    title: "Запускаем ремонт",
    text: "Выполняем черновые работы, инженерные сети, полы, стены, потолки, двери и чистовую отделку."
  },
  {
    number: "05",
    title: "Комплектуем квартиру",
    text: "Подключаем кухню, мебель, диваны, сплит-системы и финальные элементы интерьера."
  },
  {
    number: "06",
    title: "Сдаём результат",
    text: "Проверяем качество, убираем объект и передаём готовую квартиру заказчику."
  }
];
const steps = [
  {
    number: "01",
    title: "Заявка и консультация",
    text: "Обсуждаем квартиру, площадь, состояние отделки, желаемый уровень ремонта и примерный бюджет."
  },
  {
    number: "02",
    title: "Выезд и замер",
    text: "Осматриваем объект, фиксируем исходное состояние, проверяем планировку и технические особенности."
  },
  {
    number: "03",
    title: "Дизайн и смета",
    text: "Готовим концепцию, 3D-эскизы, чертежи, перечень работ и понятную смету по этапам."
  },
  {
    number: "04",
    title: "Ремонт под ключ",
    text: "Выполняем черновые и чистовые работы: электрику, сантехнику, полы, стены, потолки и двери."
  },
  {
    number: "05",
    title: "Комплектация",
    text: "Подключаем своих мебельщиков: кухни, шкафы, диваны, мебельные решения и финальные детали."
  },
  {
    number: "06",
    title: "Сдача готовой квартиры",
    text: "Проверяем качество, убираем объект, передаём результат и рекомендации по эксплуатации."
  }
];

const packages = [
  {
    label: "Базовый старт",
    title: "Простой ремонт",
    price: "от 24 000 ₽/м²",
    text: "Для тех, кому нужен аккуратный ремонт без кухни и мебели.",
    items: [
      "Работы от черновой отделки",
      "Электрика и сантехника",
      "Полы, стены, потолки",
      "Двери и базовая чистовая отделка",
      "Без кухни и мебели"
    ],
    popular: false
  },
  {
    label: "Самый востребованный",
    title: "Комфорт под ключ",
    price: "по смете",
    text: "Для семьи, которая хочет получить готовую квартиру без поиска отдельных подрядчиков.",
    items: [
      "Дизайн-проект и 3D-эскизы",
      "Все черновые и чистовые работы",
      "Натяжные потолки",
      "Сплит-системы",
      "Кухня и мебель от своих мебельщиков"
    ],
    popular: true
  },
  {
    label: "Индивидуальный уровень",
    title: "Премиум ремонт",
    price: "по проекту",
    text: "Для сложных интерьеров, нестандартных решений и высокого уровня детализации.",
    items: [
      "Авторская концепция интерьера",
      "Индивидуальные чертежи",
      "Премиальные материалы",
      "Мебель под заказ",
      "Полная комплектация квартиры"
    ],
    popular: false
  }
];

const faqItems = [
  {
    question: "Вы делаете частичный ремонт?",
    answer:
      "Нет. Мы не берём частичные работы, доделки и отдельные помещения. Работаем только комплексно — ремонт квартиры под ключ."
  },
  {
    question: "С какого состояния квартиры вы начинаете?",
    answer:
      "Основной формат — квартира в черновой отделке или без отделки. Берём объект с нуля и доводим до готового жилого состояния."
  },
  {
    question: "Что входит в ремонт под ключ?",
    answer:
      "Дизайн-проект, чертежи, черновые работы, электрика, сантехника, полы, двери, потолки, чистовая отделка, сплит-системы, кухни и мебель — по выбранному формату."
  },
  {
    question: "Можно заказать ремонт без мебели и кухни?",
    answer:
      "Да. Базовый вариант без кухни и мебели начинается ориентировочно от 24 000 ₽ за м². Точная стоимость зависит от площади, материалов и состояния объекта."
  },
  {
    question: "Вы выдаёте дизайн-проект заказчику?",
    answer:
      "Да. Заказчик получает дизайн-проект, 3D-эскизы и рабочие чертежи, чтобы понимать, каким будет итоговый интерьер и как будет устроен ремонт."
  },
  {
    question: "Можно сделать простой ремонт, а не премиальный?",
    answer:
      "Да. Мы работаем в разных сегментах: от простого аккуратного ремонта до премиального интерьера с индивидуальной комплектацией."
  }
];

export default function RepairLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPhoneOpen, setIsPhoneOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = (event) => {
    if (event) event.preventDefault();
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPhoneOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Заявка отправлена! Здесь можно подключить форму.");
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a className="logo" href="/" onClick={closeMenu}>
            <span>
              <div className="logoImageWrapper">
                <Image
                  className="logoImage"
                  fill
                  src="/logo.svg"
                  alt="СТЭТ — ремонт квартир под ключ"
                />
              </div>
            </span>
          </a>

          <button
            className={`burger ${isMenuOpen ? "burger--active" : ""}`}
            type="button"
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
            <a href="#advantages" onClick={closeMenu}>Преимущества</a>
            <a href="#format" onClick={closeMenu}>Формат работы</a>
            <a href="#includes" onClick={closeMenu}>Что входит</a>
            <a href="#prices" onClick={closeMenu}>Стоимость</a>
            <a href="#process" onClick={closeMenu}>Этапы</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav__mobile-button" href="#request" onClick={openModal}>
              Рассчитать ремонт
            </a>
          </nav>

          <a className="header__button" href="#request" onClick={openModal}>
            Рассчитать ремонт
          </a>
        </div>
      </header>

      <div
        id="modal"
        className="modal"
        style={{ display: isModalOpen ? "flex" : "none" }}
        onClick={closeModal}
      >
        <div className="modal-content" onClick={(event) => event.stopPropagation()}>
          <div className="modal-header">
            <div className="modal-logo">
              <Image src="/logo.svg" alt="СТЭТ" fill />
            </div>

            <button className="modal-close" type="button" onClick={closeModal}>
              ×
            </button>
          </div>

          <div className="modal-body">
            <p>
              <b>Свяжитесь с нами для расчёта ремонта</b>
            </p>

            <p>
              <a href="mailto:stet-kazan@mail.ru">stet-kazan@mail.ru</a>
            </p>

            <div className="phone-wrapper">
              <a
                href="tel:+79625507555"
                className={`phone ${isPhoneOpen ? "active" : ""}`}
              >
                +7 962 550-75-55
              </a>

              {!isPhoneOpen && (
                <div
                  className="phone-overlay"
                  onClick={() => setIsPhoneOpen(true)}
                >
                  👁
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <main>
        






        <section className="repair-hero">
            <div className="repair-hero__bg repair-hero__bg--one"></div>
            <div className="repair-hero__bg repair-hero__bg--two"></div>

            <div className="container repair-hero__inner">
                <div className="repair-hero__content">
                <div className="pill pill--teal">
                    <span>★</span>
                    Ремонт квартир под ключ
                </div>

                <h1>
                    Квартира из черновой отделки в готовый интерьер
                </h1>

                <p>
                    Берём ремонт целиком: от планировки, 3D-эскизов и чертежей до электрики,
                    сантехники, полов, потолков, дверей, кухни, мебели и сплит-систем.
                </p>

                <div className="repair-hero__actions">
                    <a className="button button--primary" href="#request" onClick={openModal}>
                    Рассчитать ремонт
                    </a>
                    <a className="button button--secondary" href="#format">
                    Как мы работаем
                    </a>
                </div>
                </div>

                <div className="repair-hero__showcase">
                <div className="repair-stage repair-stage--dark">
                    <span>01</span>
                    <b>Черновая квартира</b>
                    <p>Пустые стены, инженерия, планировка и техническая база.</p>
                </div>

                <div className="repair-stage repair-stage--accent">
                    <span>02</span>
                    <b>Проект и ремонт</b>
                    <p>3D-эскизы, чертежи, смета, закупки и управление работами.</p>
                </div>

                <div className="repair-stage repair-stage--light">
                    <span>03</span>
                    <b>Готовый интерьер</b>
                    <p>Кухня, мебель, потолки, двери, сплит-системы и финальная сдача.</p>
                </div>

                <div className="repair-hero__price">
                    <small>Простой ремонт без кухни и мебели</small>
                    <strong>от 24 000 ₽/м²</strong>
                </div>
                </div>
            </div>
            </section>
















        <section className="section" id="advantages">
          <div className="container">
            <div className="section-title">
              <span className="pill">Почему это удобно</span>
              <h2>Один подрядчик вместо десятка мастеров</h2>
              <p>
                Вам не нужно отдельно искать электрика, сантехника, потолочников,
                мебельщиков и монтажников. Мы собираем весь процесс в одну
                понятную систему.
              </p>
            </div>

            <div className="cards-grid cards-grid--3">
              <InfoCard
                icon="🏗"
                title="Работаем с черновой отделкой"
                text="Заходим на объект с нуля и ведём ремонт до состояния, когда можно завозить вещи и жить."
              />
              <InfoCard
                icon="📐"
                title="Дизайн-проект до ремонта"
                text="Показываем будущий интерьер заранее: 3D-эскизы, планировки, чертежи и технические решения."
              />
              <InfoCard
                icon="⚡"
                title="Инженерия внутри проекта"
                text="Электрика, сантехника, сплит-системы и скрытые работы планируются до начала чистовой отделки."
              />
              <InfoCard
                icon="🛋"
                title="Свои мебельщики"
                text="Можем закрыть кухни, шкафы, диваны и мебельные решения без поиска сторонних исполнителей."
              />
              <InfoCard
                icon="🧾"
                title="Понятная смета"
                text="Разделяем работы по этапам, чтобы заказчик видел, за что платит и как формируется бюджет."
              />
              <InfoCard
                icon="🚫"
                title="Не берём частичный ремонт"
                text="Не распыляемся на доделки. Команда работает только с комплексными объектами под ключ."
              />
            </div>
          </div>
        </section>

        
        



        <section className="section section--white" id="format">
            <div className="container">
                <div className="repair-rule">
                <div className="repair-rule__main">
                    <span className="pill pill--red">Принцип работы</span>
                    <h2>Мы не делаем частичный ремонт и не доделываем за другими</h2>
                    <p>
                    Мы берём объект только комплексно, потому что качество ремонта зависит
                    от всей цепочки: проекта, инженерии, черновых работ, чистовой отделки,
                    мебели и финальной комплектации.
                    </p>

                    <a className="button button--white" href="#request" onClick={openModal}>
                    Обсудить ремонт под ключ
                    </a>
                </div>

                <div className="repair-rule__cards">
                    <div className="repair-rule-card">
                    <span>✕</span>
                    <b>Не берём отдельную комнату</b>
                    <p>Не делаем ремонт одной комнаты, санузла или кухни отдельно.</p>
                    </div>

                    <div className="repair-rule-card">
                    <span>✕</span>
                    <b>Не исправляем чужой ремонт</b>
                    <p>Не заходим на объект, где уже нарушена логика работ другим подрядчиком.</p>
                    </div>

                    <div className="repair-rule-card repair-rule-card--green">
                    <span>✓</span>
                    <b>Берём квартиру целиком</b>
                    <p>От черновой отделки до готового результата с понятной ответственностью.</p>
                    </div>

                    <div className="repair-rule-card repair-rule-card--orange">
                    <span>✓</span>
                    <b>Ведём весь процесс</b>
                    <p>Проект, смета, работы, мебель, кухня, потолки и финальная сдача.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>      















        <section className="section" id="includes">
          <div className="container">
            <div className="section-title">
              <span className="pill">Что входит в ремонт</span>
              <h2>Закрываем весь путь от идеи до готовой квартиры</h2>
              <p>
                В зависимости от выбранного уровня ремонта можно оставить только
                базовые работы или подключить полную комплектацию с кухней,
                мебелью и техникой.
              </p>
            </div>

            <div className="cards-grid cards-grid--4">
              {workList.map((item) => (
                <div className="equipment-card" key={item}>
                  <div className="icon-box">✓</div>
                  <h3>{item}</h3>
                  <p>
                    Включается в проект при необходимости и согласуется с
                    заказчиком до начала работ.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

      
      


            
        <section className="section section--white">
        <div className="container">
            <div className="section-title">
            <span className="pill pill--teal">Форматы ремонта</span>
            <h2>От простого ремонта до премиум-сегмента</h2>
            <p>
                Мы не продаём один шаблонный ремонт для всех. Формат зависит от задачи:
                быстро заехать, сделать удобную семейную квартиру или собрать
                индивидуальный интерьер высокого уровня.
            </p>
            </div>

            <div className="repair-levels">
            {repairLevels.map((level, index) => (
                <article className="repair-level" key={level.title}>
                <div className="repair-level__number">
                    {String(index + 1).padStart(2, "0")}
                </div>

                <div className="repair-level__content">
                    <span>{level.tag}</span>
                    <h3>{level.title}</h3>
                    <p>{level.text}</p>
                </div>

                <ul className="repair-level__list">
                    {level.items.map((item) => (
                    <li key={item}>✓ {item}</li>
                    ))}
                </ul>

                <div className="repair-level__price">
                    {level.price}
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>








        <section className="section" id="prices">
          <div className="container">
            <div className="section-title">
              <span className="pill">Стоимость</span>
              <h2>Стоимость зависит от уровня ремонта и комплектации</h2>
              <p>
                Базовый ориентир — от 24 000 ₽ за м² без кухни и мебели.
                Финальная цена рассчитывается после замера, обсуждения
                материалов, дизайн-проекта и состава работ.
              </p>
            </div>

            <div className="price-grid repair-price-grid">
              {packages.map((item) => (
                <PriceCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <div className="trust-block">
              <div>
                <strong>1</strong>
                <span>команда на весь ремонт</span>
              </div>
              <div>
                <strong>24к+</strong>
                <span>ориентир за м² в простом варианте</span>
              </div>
              <div>
                <strong>3D</strong>
                <span>эскизы будущего интерьера</span>
              </div>
              <div>
                <strong>0</strong>
                <span>частичных ремонтов и доделок</span>
              </div>
            </div>
          </div>
        </section>

        
        



        <section className="section" id="process">
            <div className="container">
                <div className="section-title">
                <span className="pill">Процесс</span>
                <h2>Понятная последовательность без хаоса на объекте</h2>
                <p>
                    Ремонт идёт не как набор случайных работ, а как управляемый маршрут:
                    сначала проект и техническая база, потом отделка, комплектация и сдача.
                </p>
                </div>

                <div className="repair-roadmap">
                {repairRoadmap.map((step) => (
                    <article className="repair-roadmap__item" key={step.number}>
                    <div className="repair-roadmap__number">{step.number}</div>
                    <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                    </div>
                    </article>
                ))}
                </div>
            </div>
            </section> 



        <section className="section section--white">
          <div className="container check-grid">
            <div className="photo-card photo-card--large">
              <div className="photo-card__room">
                <div
                  style={{
                    position: "absolute",
                    left: "42px",
                    top: "52px",
                    right: "42px",
                    height: "112px",
                    borderRadius: "28px",
                    background: "rgba(255,255,255,0.9)",
                    padding: "24px",
                    boxShadow: "0 18px 50px rgba(15,23,42,0.1)"
                  }}
                >
                  <b style={{ display: "block", fontSize: "24px", color: "#0f172a" }}>
                    Комплектация
                  </b>
                  <span style={{ display: "block", marginTop: "8px", color: "#64748b", fontWeight: 700 }}>
                    кухня · мебель · потолки · сплит-системы
                  </span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: "50px",
                    bottom: "70px",
                    width: "150px",
                    height: "230px",
                    borderRadius: "36px",
                    background: "linear-gradient(135deg, rgba(255,145,64,0.26), rgba(255,191,64,0.34))"
                  }}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    right: "50px",
                    bottom: "70px",
                    width: "230px",
                    height: "160px",
                    borderRadius: "36px",
                    background: "linear-gradient(135deg, rgba(52,207,190,0.28), rgba(255,255,255,0.55))"
                  }}
                ></div>
              </div>

              <a className="photo-card__label" href="#request" onClick={openModal}>
                <small>Не только ремонт</small>
                <b>Можем закрыть мебель и кухню</b>
              </a>
            </div>

            <div>
              <span className="pill pill--teal">Свои мебельщики</span>
              <h2>Кухня, диваны и мебель без отдельного поиска подрядчиков</h2>
              <p className="section-text">
                После ремонта часто начинается новая проблема: где заказать
                кухню, шкафы, мебель, кто всё замерит и установит. Мы можем
                закрыть этот этап внутри одного проекта, чтобы интерьер выглядел
                цельно.
              </p>

              <div className="checklist">
                <div>✓ Кухни под размеры квартиры</div>
                <div>✓ Шкафы и зоны хранения</div>
                <div>✓ Диваны и мягкая мебель</div>
                <div>✓ Единый стиль интерьера</div>
                <div>✓ Замеры на объекте</div>
                <div>✓ Монтаж после чистовой отделки</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container container--small">
            <div className="section-title">
              <span className="pill">FAQ</span>
              <h2>Частые вопросы о ремонте под ключ</h2>
              <p>
                Собрали основные вопросы, которые возникают перед началом
                комплексного ремонта квартиры.
              </p>
            </div>

            <div className="faq">
              {faqItems.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

       
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a className="logo" href="#">
            <span>
              <div className="logoImageWrapper">
                <Image
                  className="logoImage"
                  fill
                  src="/logo.svg"
                  alt="СТЭТ — ремонт квартир"
                />
              </div>
            </span>
          </a>

          <div className="footer__links">
            <a href="#advantages">Преимущества</a>
            <a href="#format">Формат работы</a>
            <a href="#includes">Что входит</a>
            <a href="#prices">Стоимость</a>
            <a href="#process">Этапы</a>
            <a href="#faq">FAQ</a>
            <a href="mailto:stet-kazan@mail.ru">stet-kazan@mail.ru</a>
            <a href="tel:+79625507555">+7 962 550-75-55</a>
            <a href="#request">Рассчитать ремонт</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function InfoCard({ icon, title, text }) {
  return (
    <article className="info-card">
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function PriceCard({ label, title, price, text, items, popular }) {
  return (
    <article className={`price-card ${popular ? "price-card--popular" : ""}`}>
      <span className={popular ? "popular-label" : "pill"}>{label}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <strong className="price">{price}</strong>

      <ul>
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>

      <a
        className={`button ${popular ? "button--white" : "button--primary"} button--wide`}
        href="#request"
      >
        Рассчитать этот формат
      </a>
    </article>
  );
}

function CaseCard({ label, title, text, area, time }) {
  return (
    <article className="case-card">
      <div className="case-image-wrapper">
        <div
          className="case-image"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(52,207,190,0.22), transparent 28%), radial-gradient(circle at 20% 75%, rgba(255,145,64,0.24), transparent 30%), linear-gradient(135deg, #f1f5f9, #fff7ed)"
          }}
        ></div>

        <div className="case-image-label">{label}</div>
      </div>

      <div className="case-content">
        <h3>{title}</h3>
        <p>{text}</p>

        <div className="case-info">
          <div>
            <span>Бюджет</span>
            <b>{area}</b>
          </div>

          <div>
            <span>Формат</span>
            <b>{time}</b>
          </div>
        </div>
      </div>
    </article>
  );
}
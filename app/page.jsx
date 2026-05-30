"use client";

import { useState } from "react";
import "./globals.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Заявка отправлена! Здесь можно подключить форму.");
  };

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a className="logo" href="#" onClick={closeMenu}>
            <span className="logo__icon">✓</span>
            <span>
              <span className="logo__title">Приемка PRO</span>
              <span className="logo__subtitle">независимые эксперты</span>
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
            <a href="#services" onClick={closeMenu}>Услуги</a>
            <a href="#prices" onClick={closeMenu}>Тарифы</a>
            <a href="#equipment" onClick={closeMenu}>Оборудование</a>
            <a href="#cases" onClick={closeMenu}>Кейсы</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <a className="nav__mobile-button" href="#request" onClick={closeMenu}>Заказать приемку</a>
          </nav>

          <a className="header__button" href="#request">Заказать приемку</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero__decor hero__decor--orange"></div>
          <div className="hero__decor hero__decor--teal"></div>

          <div className="container hero__grid">
            <div className="hero__content">
              <div className="pill pill--teal">
                <span>★</span>
                Рейтинг 5.0 · 1000+ проверенных квартир
              </div>

              <h1>Не подписывайте акт приемки квартиры, пока её не проверит эксперт</h1>

              <p className="hero__text">
                Находим скрытые дефекты, проверяем квартиру по 100+ параметрам
                и помогаем взыскать компенсацию с застройщика.
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#request">Заказать приемку</a>
                <a className="button button--secondary" href="#request">Бесплатная консультация</a>
              </div>

              <div className="hero__stats">
                <div className="stat-card">
                  <strong>1000+</strong>
                  <span>квартир</span>
                </div>
                <div className="stat-card">
                  <strong>10 000+</strong>
                  <span>дефектов</span>
                </div>
                <div className="stat-card">
                  <strong>50 млн ₽</strong>
                  <span>взыскано</span>
                </div>
              </div>
            </div>

            <div className="hero__visual">
              <div className="photo-card photo-card--hero">
                <div className="photo-card__room"></div>

                <div className="expert">
                  <div className="expert__head"></div>
                  <div className="expert__body"></div>
                  <div className="expert__tablet">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className="laser-line laser-line--one"></div>
                <div className="laser-line laser-line--two"></div>
                <div className="defect-marker">Дефект</div>

                <div className="photo-card__label">
                  <small>Эксперт с планшетом</small>
                  <b>Проверка квартиры</b>
                </div>
              </div>

              <div className="floating-card floating-card--left">
                <span className="check-icon">✓</span>
                <b>100+ параметров</b>
              </div>

              <div className="floating-card floating-card--right">
                <span className="doc-icon">▦</span>
                <b>Отчет после осмотра</b>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-title">
              <span className="pill">До подписания акта</span>
              <h2>Почему нас вызывают заранее</h2>
              <p>
                Один внимательный осмотр помогает избежать расходов, споров
                и неприятных сюрпризов после заселения.
              </p>
            </div>

            <div className="cards-grid cards-grid--3">
              <InfoCard icon="🔍" title="Находим скрытые дефекты" text="Проверяем то, что обычно не видно при обычном осмотре." />
              <InfoCard icon="💰" title="Экономим десятки тысяч рублей" text="Фиксируем нарушения, чтобы вы не устраняли их за свой счет." />
              <InfoCard icon="📐" title="Профоборудование" text="Используем тепловизор, уровень, влагомер, анемометр и дальномер." />
              <InfoCard icon="🛡" title="Защищаем покупателя" text="Объясняем, что подписывать, а где лучше остановиться." />
              <InfoCard icon="✅" title="Работаем официально" text="Передаем отчет, фотофиксацию и понятные рекомендации." />
              <InfoCard icon="⚖" title="Документы для суда" text="Готовим базу для претензии и взыскания с застройщика." />
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container check-grid">
            <div>
              <span className="pill">Профессиональная приемка · 6 000 ₽</span>
              <h2>Что входит в проверку квартиры</h2>
              <p className="section-text">
                Проверяем квартиру комплексно: документы, инженерные системы,
                отделку, окна, двери и геометрию помещений.
              </p>

              <div className="checklist">
                {[
                  "Проверка площади и документов",
                  "Балкон и лоджия",
                  "Отделка квартиры",
                  "Вентиляция",
                  "Отопление",
                  "Водоснабжение и канализация",
                  "Электрика",
                  "Входная дверь",
                  "Окна",
                  "Балконные конструкции",
                  "Геометрия стен",
                  "Геометрия пола",
                  "Геометрия потолка",
                ].map((item) => (
                  <div key={item}>✓ {item}</div>
                ))}
              </div>
            </div>

            <div className="photo-card photo-card--large">
              <div className="photo-card__room"></div>

              <div className="expert expert--large">
                <div className="expert__head"></div>
                <div className="expert__body"></div>
                <div className="expert__tablet">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="laser-line laser-line--one"></div>
              <div className="defect-marker">Проверка</div>

              <div className="photo-card__label">
                <small>Специалист во время осмотра</small>
                <b>Профессиональная диагностика</b>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <span className="pill">Наглядная диагностика</span>
              <h2>Популярные дефекты новостроек</h2>
              <p>
                Дефекты показаны как фото-карточки с визуальными отметками,
                чтобы посетитель сразу понял ценность приемки.
              </p>
            </div>

            <div className="cards-grid cards-grid--4">
              {[
                ["Трещины стен", "Фиксируем раскрытие, направление и зону дефекта."],
                ["Кривые углы", "Проверяем геометрию лазерным уровнем и правилом."],
                ["Неровный пол", "Находим перепады, которые мешают чистовой отделке."],
                ["Продувание окон", "Проверяем примыкания, створки, откосы и монтажные швы."],
                ["Плохая вентиляция", "Замеряем тягу и выявляем обратный поток."],
                ["Некачественная электрика", "Осматриваем розетки, щиток, автоматы и линии."],
                ["Нарушения гидроизоляции", "Проверяем мокрые зоны и риск протечек."],
                ["Ошибки монтажа дверей", "Смотрим перекосы, зазоры, уплотнители и фурнитуру."],
              ].map(([title, text], index) => (
                <article className="defect-card" key={title}>
                  <div className="defect-image">
                    <span>{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white" id="prices">
          <div className="container">
            <div className="section-title">
              <span className="pill">Тарифы</span>
              <h2>Выберите формат приемки</h2>
              <p>
                Два понятных тарифа: техническая проверка квартиры или полное
                сопровождение с взысканием компенсации.
              </p>
            </div>

            <div className="price-grid">
              <article className="price-card">
                <h3>Профессиональная приемка квартиры</h3>
                <strong className="price">6 000 ₽</strong>
                <p>Все проверки технического состояния квартиры.</p>

                <ul>
                  <li>✓ Проверка по 100+ параметрам</li>
                  <li>✓ Фотофиксация дефектов</li>
                  <li>✓ Отчет и рекомендации</li>
                </ul>

                <a className="button button--secondary button--wide" href="#request">Заказать приемку</a>
              </article>

              <article className="price-card price-card--popular">
                <span className="popular-label">Самый популярный</span>
                <h3>Приемка квартиры + взыскание компенсации с застройщика</h3>
                <p>Все проверки из первого тарифа и юридическое сопровождение по Татарстану.</p>

                <ul>
                  <li>✓ Все проверки из тарифа №1</li>
                  <li>✓ Подготовка юридической претензии</li>
                  <li>✓ Сбор доказательств</li>
                  <li>✓ Подготовка документов</li>
                  <li>✓ Сопровождение взыскания</li>
                  <li>✓ Работа по Татарстану</li>
                </ul>

                <a className="button button--white button--wide" href="#request">Получить консультацию</a>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-title">
              <span className="pill">Процесс</span>
              <h2>Как проходит работа</h2>
              <p>Пять простых шагов от заявки до отчета и рекомендаций.</p>
            </div>

            <div className="timeline">
              {[
                ["Оставляете заявку", "Оставляете контакты на сайте или пишете в мессенджер."],
                ["Согласовываем дату", "Подбираем удобное время и уточняем ЖК или адрес."],
                ["Выезжаем на объект", "Эксперт приезжает с полным комплектом оборудования."],
                ["Проводим проверку", "Осматриваем квартиру, фиксируем дефекты и нарушения."],
                ["Передаем отчет", "Вы получаете отчет, рекомендации и план дальнейших действий."],
              ].map(([title, text], index) => (
                <article className="step-card" key={title}>
                  <span>{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white" id="equipment">
          <div className="container">
            <div className="section-title">
              <span className="pill">Оборудование</span>
              <h2>Проверяем не на глаз, а инструментально</h2>
              <p>Каждый прибор помогает увидеть конкретные нарушения и подтвердить их в отчете.</p>
            </div>

            <div className="cards-grid cards-grid--3">
              <InfoCard icon="🌡" title="Тепловизор" text="Находит мостики холода, продувания и скрытые теплопотери." cardClass="equipment-card" />
              <InfoCard icon="📏" title="Лазерный уровень" text="Показывает отклонения стен, пола, потолка и проемов." cardClass="equipment-card" />
              <InfoCard icon="💨" title="Анемометр" text="Проверяет скорость воздушного потока и работу вентиляции." cardClass="equipment-card" />
              <InfoCard icon="💧" title="Влагомер" text="Помогает выявить повышенную влажность и риск плесени." cardClass="equipment-card" />
              <InfoCard icon="💡" title="Люксметр" text="Оценивает уровень освещенности и качество света." cardClass="equipment-card" />
              <InfoCard icon="📐" title="Лазерный дальномер" text="Точно измеряет площадь, расстояния и размеры помещений." cardClass="equipment-card" />
            </div>
          </div>
        </section>

        <section className="section" id="cases">
          <div className="container">
            <div className="section-title">
              <span className="pill">Кейсы</span>
              <h2>Реальные результаты клиентов</h2>
              <p>Карточки показывают найденные дефекты, сумму компенсации и срок решения.</p>
            </div>

            <div className="case-grid">
              {[
                ["ЖК Южный парк", "42 дефекта: окна, откосы, электрика.", "184 000 ₽", "27 дней"],
                ["ЖК Нова", "Неровный пол, вентиляция, трещины.", "312 000 ₽", "41 день"],
                ["ЖК Солнечный", "Дверь, гидроизоляция, геометрия стен.", "96 000 ₽", "18 дней"],
              ].map(([name, text, price, time]) => (
                <article className="case-card" key={name}>
                  <div className="case-image"></div>
                  <div className="case-content">
                    <h3>{name}</h3>
                    <p>{text}</p>

                    <div className="case-info">
                      <div>
                        <span>Компенсация</span>
                        <b>{price}</b>
                      </div>
                      <div>
                        <span>Срок</span>
                        <b>{time}</b>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--white">
          <div className="container">
            <div className="section-title">
              <span className="pill">Отзывы</span>
              <h2>Клиенты доверяют нам самое важное — новую квартиру</h2>
              <p>Отзывы оформлены как доверительные карточки с фото, ЖК, текстом и рейтингом.</p>
            </div>

            <div className="review-grid">
              {[
                ["Алина М.", "ЖК Казань XXI", "Эксперт приехал с оборудованием, спокойно всё объяснил и нашел дефекты, которые мы бы точно пропустили."],
                ["Ильдар С.", "ЖК ART City", "Не подписали акт в первый день, застройщик устранил окна и стяжку. Очень грамотная работа."],
                ["Мария К.", "ЖК Светлая долина", "Понравился отчет: фото, комментарии, что критично, что можно принять. Чувствуется опыт."],
              ].map(([name, complex, text]) => (
                <article className="review-card" key={name}>
                  <div className="review-user">
                    <div className="avatar">{name[0]}</div>
                    <div>
                      <h3>{name}</h3>
                      <span>{complex}</span>
                    </div>
                  </div>
                  <div className="stars">★★★★★</div>
                  <p>«{text}»</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="trust-block">
              <div>
                <strong>1000+</strong>
                <span>проверенных квартир</span>
              </div>
              <div>
                <strong>10 000+</strong>
                <span>выявленных дефектов</span>
              </div>
              <div>
                <strong>50 млн ₽</strong>
                <span>взыскано клиентам</span>
              </div>
              <div>
                <strong>5+ лет</strong>
                <span>практического опыта</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--white" id="faq">
          <div className="container container--small">
            <div className="section-title">
              <span className="pill">FAQ</span>
              <h2>Ответы на популярные вопросы</h2>
            </div>

            <div className="faq">
              {[
                ["Когда нужно вызывать эксперта?", "Лучше до подписания акта приемки. Так дефекты можно официально зафиксировать и потребовать устранения."],
                ["Что делать если уже подписал акт?", "Можно провести независимый осмотр, зафиксировать недостатки и оценить перспективы претензии к застройщику."],
                ["Какие дефекты можно взыскать?", "Обычно взыскивают стоимость устранения строительных недостатков, если они подтверждены осмотром и документами."],
                ["Сколько длится приемка?", "В среднем 1,5–3 часа. Время зависит от площади квартиры, отделки и количества выявленных замечаний."],
                ["Нужно ли присутствовать лично?", "Желательно, но не обязательно. Можно согласовать формат сопровождения и получить отчет после проверки."],
                ["Какие документы выдаются?", "Передаем отчет с дефектами, фотофиксацией, рекомендациями и перечнем замечаний для застройщика."],
              ].map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

       
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a className="logo" href="#">
            <span className="logo__icon">✓</span>
            <span>
              <span className="logo__title">Приемка PRO</span>
              <span className="logo__subtitle">Экспертная приемка квартир</span>
            </span>
          </a>

          <div className="footer__links">
            <span>+7 999 123-45-67</span>
            <span>WhatsApp</span>
            <span>Telegram</span>
            <span>info@priemka-pro.ru</span>
            <span>Политика конфиденциальности</span>
            <span>Реквизиты компании</span>
          </div>
        </div>
      </footer>
    </>
  );
}

function InfoCard({ icon, title, text, cardClass = "info-card" }) {
  return (
    <article className={cardClass}>
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

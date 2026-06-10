"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import Image from "next/image";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert("Заявка отправлена! Здесь можно подключить форму.");
  };

  useEffect(() => {
    // Кнопки открывают модалку
    document.querySelectorAll(
      'a.nav__mobile-button, a.header__button, a.button, a.photo-card__label, a.button.button--secondary.button--wide, a.button.button--white.button--wide'
    ).forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        if(modal) modal.style.display = 'flex';
      });
    });

    // Закрытие крестиком
    const closeBtn = document.querySelector('.modal-close');
    if(closeBtn) {
      closeBtn.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        if(modal) modal.style.display = 'none';
      });
    }

    // Телефон: клик показывает ссылку
    const phoneWrapper = document.querySelector('.phone-wrapper');
    if(phoneWrapper) {
      const phone = phoneWrapper.querySelector('.phone');
      const overlay = phoneWrapper.querySelector('.phone-overlay');
      if(overlay && phone) {
        overlay.addEventListener('click', () => {
          phone.classList.add('active');
        });
      }
    }
  }, []); // пустой массив, чтобы скрипт выполнился только один раз на клиенте


  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a className="logo" href="#" onClick={closeMenu}>
          
            <span>
 
              <div className="logoImageWrapper">
                <Image
                  className="logoImage"
                  fill
                  src="/logo.svg"
                  alt="СТЭТ — строительные экспертизы"
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

      {/* Модальное окно */}
      <div id="modal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-logo">
              <Image src="/logo.svg" alt="СТЭТ" fill /> </div>
            <button className="modal-close">×</button>
          </div>
          <div className="modal-body">
            <p><a href="mailto:stet-kazan@mail.ru">stet-kazan@mail.ru</a></p>
            <div className="phone-wrapper"> <a href="tel:+79625507555" className="phone">+7 962 550-75-55</a>
              <div className="phone-overlay">👁</div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <section className="hero">
          <div className="hero__decor hero__decor--orange"></div>
          <div className="hero__decor hero__decor--teal"></div>

          <div className="container hero__grid">
            <div className="hero__content">
              <div className="pill pill--teal">
                <span>★</span>
                8000+ проверенных квартир
              </div>

              <h1>Перед подписанием акта доверьте проверку квартиры независимым экспертам!</h1>

              <p className="hero__text">
                Находим скрытые дефекты, проверяем квартиру по 100+ параметрам
                и помогаем взыскать компенсацию с застройщика
              </p>

              <div className="hero__actions">
                <a className="button button--primary" href="#request">Заказать приемку</a>
                <a className="button button--secondary" href="#request">Бесплатная консультация</a>
              </div>

              <div className="hero__stats">
                <div className="stat-card">
                  <strong>8 000+</strong>
                  <span>квартир</span>
                </div>
                <div className="stat-card">
                  <strong>95 000+</strong>
                  <span>дефектов</span>
                </div>
                <div className="stat-card">
                  <strong>40 млн ₽</strong>
                  <span>взыскано</span>
                </div>
              </div>
            </div>



            <div className="mainImageWrapper">
              <Image
                className="mainImage"
                src="/mainImg1.jpg"
                alt="Замерщик квартиры"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                и неприятных сюрпризов после заселения
              </p>
            </div>

            <div className="cards-grid cards-grid--3">
              <InfoCard icon="🔍" title="Находим скрытые дефекты" text="Проверяем то, что обычно не видно при обычном осмотре" />
              <InfoCard icon="💰" title="Экономим десятки тысяч рублей" text="Фиксируем нарушения, чтобы вы не устраняли их за свой счет" />
              <InfoCard icon="📐" title="Профоборудование" text="Используем тепловизор, уровень, влагомер, анемометр и дальномер" />
              <InfoCard icon="🛡" title="Защищаем покупателя" text="Объясняем, что подписывать, а где лучше остановиться" />
              <InfoCard icon="✅" title="Работаем официально" text="Передаем отчет, фотофиксацию и понятные рекомендации" />
              <InfoCard icon="⚖" title="Документы для суда" text="Готовим базу для претензии и взыскания с застройщика" />
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
                отделку, окна, двери и геометрию помещений
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
                  "Ровность пола",
                  "Прочность стяжки"
                ].map((item) => (
                  <div key={item}>✓ {item}</div>
                ))}
              </div>
            </div>

            <div className="photo-card photo-card--large">
              {/* Основное фото */}
              <div className="photo-card__image">
                <Image
                  src="/checkIncludes.jpg"
                  alt="Проверка квартиры"
                  fill
                  className="photo-card__img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 620px"
                />
              </div>

              {/* Оставляем блоки с меткой и подписью */}
              <a className="photo-card__label">
                <small>Специалист во время осмотра</small>
                <b>Профессиональная диагностика</b>
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="populyarnieDefecti">
          <div className="container">
            <div className="section-title">
              <span className="pill">Наглядная диагностика</span>
              <h2>Популярные дефекты новостроек</h2>
              <p>
                На фотографиях показаны основные дефекты, которые 
                встречаются при приемке квартиры
              </p>
            </div>

            <div className="cards-grid cards-grid--4">
              {[
                ["Трещины стен", "Фиксируем раскрытие, направление и зону дефекта", "wall"],
                ["Неровный пол", "Находим перепады, которые мешают чистовой отделке", "floor"],
                ["Продувание окон", "Проверяем примыкания, створки, откосы и монтажные швы", "window"],
                ["Плохая вентиляция", "Замеряем тягу и выявляем обратный поток.", "ventilation"],
                ["Некачественная электрика", "Осматриваем розетки, щиток, автоматы и линии", "voltage"],
                ["Ошибки монтажа дверей", "Смотрим перекосы, зазоры, уплотнители и фурнитуру", "door"],
                ["Замер температуры", "Проверяем тепло на стенах и потолке", "temperature"],
                ["Проверка лоджий", "Проверяем состояние и монтаж балконов", "balcony"],
                
              ].map(([title, text, image], index) => (
                <article className="defect-card" key={title}>
                  <div className="defect-image">
                    <img src={`/${image}.jpg`} alt={title} />
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
                сопровождение с взысканием компенсации
              </p>
            </div>

            <div className="price-grid">
              <article className="price-card">
                <h3>Профессиональная приемка квартиры</h3>
                <strong className="price">6 000 ₽</strong>
                <p>Все проверки технического состояния квартиры</p>

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
                <p>Все проверки из первого тарифа и юридическое сопровождение по Татарстану</p>

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
              <p>Пять простых шагов от заявки до отчета и рекомендаций</p>
            </div>

            <div className="timeline">
              {[
                ["Оставляете заявку", "Оставляете контакты на сайте или пишете в мессенджер"],
                ["Согласовываем дату", "Подбираем удобное время и уточняем ЖК или адрес"],
                ["Выезжаем на объект", "Эксперт приезжает с полным комплектом оборудования"],
                ["Проводим проверку", "Осматриваем квартиру, фиксируем дефекты и нарушения"],
                ["Передаем отчет", "Вы получаете отчет, рекомендации и план дальнейших действий"],
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
              <p>Каждый прибор помогает увидеть конкретные нарушения и подтвердить их в отчете</p>
            </div>

            <div className="cards-grid cards-grid--3">
              <InfoCard icon="🌡" title="Тепловизор" text="Находит мостики холода, продувания и скрытые теплопотери" cardClass="equipment-card" />
              <InfoCard icon="📏" title="Лазерный уровень" text="Показывает отклонения стен, пола, потолка и проемов" cardClass="equipment-card" />
              <InfoCard icon="💨" title="Анемометр" text="Проверяет скорость воздушного потока и работу вентиляции" cardClass="equipment-card" />
              <InfoCard icon="💧" title="Влагомер" text="Помогает выявить повышенную влажность и риск плесени" cardClass="equipment-card" />
              <InfoCard icon="💡" title="Люксметр" text="Оценивает уровень освещенности и качество света" cardClass="equipment-card" />
              <InfoCard icon="📐" title="Лазерный дальномер" text="Точно измеряет площадь, расстояния и размеры помещений" cardClass="equipment-card" />
            </div>
          </div>
        </section>

        <section className="section" id="cases">
          <div className="container">
            <div className="section-title">
              <span className="pill">Кейсы</span>
              <h2>Реальные результаты клиентов</h2>
              <p>Карточки показывают найденные дефекты, сумму компенсации и срок решения</p>
            </div>

            <div className="case-grid">
              {[
                [
                  "ЖК Сказочный Лес (Суварстроит)",
                  "Предупреждали о плохой штукатурке",
                  "184 000 ₽",
                  "27 дней",
                  "suvarstroit.jpg",
                  "СУВАРСТРОИТ",
                  "suvar",
                  "Звонить",
                ],
                [
                  "ЖК Светлая Долина (Ак Барс Дом)",
                  "Выявили ошибки монтажа блоков",
                  "312 000 ₽",
                  "41 день",
                  "akboarsdom.jpg",
                  "Ак Барс Дом",
                  "akbars",
                  "Связаться",
                ],
                [
                  "ЖК Зимний сад (ЖК Удачный)",
                  "Проверили окна и стяжку",
                  "96 000 ₽",
                  "18 дней",
                  "lucky.jpg",
                  "ЖК Удачный",
                  "udachny",
                  "Обратиться",
                ],
              ].map(([name, text, price, time, image, logo, logoClass, label]) => (
                <article className="case-card" key={name}>
                  <div className="case-image-wrapper">
                    <img className="case-image" src={`/${image}`} alt={name} />
                    {/* <img className="case-logo" src={`/${logo}`} alt="Логотип СТЭТ" /> */}

                   
                    <a href="tel:+79625507555" className="case-image-label">{label}</a>
                  </div>

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



        <section className="section section--white" id="faq">
          <div className="container container--small">
            <div className="section-title">
              <span className="pill">FAQ</span>
              <h2>Ответы на популярные вопросы</h2>
            </div>

            <div className="faq">
              {[
                ["Когда нужно вызывать эксперта?", "Лучше до подписания акта приемки. Так дефекты можно официально зафиксировать и потребовать устранения"],
                ["Что делать если уже подписал акт?", "Можно провести независимый осмотр, зафиксировать недостатки и оценить перспективы претензии к застройщику"],
                ["Какие дефекты можно взыскать?", "Обычно взыскивают стоимость устранения строительных недостатков, если они подтверждены осмотром и документами"],
                ["Сколько длится приемка?", "В среднем 1,5–3 часа. Время зависит от площади квартиры, отделки и количества выявленных замечаний"],
                ["Нужно ли присутствовать лично?", "Желательно, но не обязательно. Можно согласовать формат сопровождения и получить отчет после проверки"],
                ["Какие документы выдаются?", "Передаем отчет с дефектами, фотофиксацией, рекомендациями и перечнем замечаний для застройщика"],
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
      
            <span>
  

              <div className="logoImageWrapper">
                <Image
                  className="logoImage"
                  fill
                  src="/logo.svg"
                  alt="СТЭТ — строительные экспертизы"
                />
              </div>
            </span>
          </a>

          <div className="footer__links">
            <a href="tel:+79625507555">+7 962 550-75-55</a>
            <a href="https://max.ru/">MAX</a>
            <a href="mailto:stet-kazan@mail.ru">stet-kazan@mail.ru</a>

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

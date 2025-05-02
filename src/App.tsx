import './App.css'

// Компоненты разделов
const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>P.R.O.</h1>
          <span>Personal Result Optimizer</span>
        </div>
        <div className="mobile-menu-toggle" id="menu-toggle">
          ☰
        </div>
        <nav className="nav" id="main-nav">
          <div className="close-menu" id="close-menu">✕</div>
          <ul>
            <li><a href="#audience">Аудитория</a></li>
            <li><a href="#solution">Решение</a></li>
            <li><a href="#technology">Технология</a></li>
            <li><a href="#market">Рынок</a></li>
            <li><a href="#unit-economics">Экономика</a></li>
            <li><a href="#competitors">Конкуренты</a></li>
            <li><a href="#team">Команда</a></li>
          </ul>
        </nav>
        <a href="https://runwithfun.github.io/introducing/" className="cta-button" target="_blank">
          Открыть веб-версию
        </a>
      </div>
    </header>
  )
}

const HeroSection = () => {
  return (
    <section className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Фитнес Трекер P.R.O.</h1>
          <h2>Отслеживайте. Анализируйте. Достигайте.</h2>
          <p>Превращаем каждый ваш шаг в достижение</p>
          <div className="hero-buttons">
            <button className="primary-btn">Узнать больше</button>
            <button>Демо-версия</button>
          </div>
        </div>
        <div className="hero-image">
          <video
            width="100%"
            height="auto"
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="https://raw.githubusercontent.com/runwithfun/P.R.O./main/public/videoapp.MP4" type="video/mp4" />
            Ваш браузер не поддерживает видео тег.
          </video>
        </div>
      </div>
    </section>
  )
}

const ProblemSection = () => {
  return (
    <section className="problem-section section" id="problem">
      <div className="container">
        <h2>🔍 Проблема</h2>
        <p>Современный человек стремится вести активный образ жизни, но сталкивается с серьезными препятствиями:</p>

        <div className="problem-cards">
          <div className="problem-card">
            <div className="icon">📊</div>
            <h3>Отсутствие понимания эффективности</h3>
            <p>Большинство людей не имеют достаточных знаний для оценки качества своих занятий</p>
          </div>

          <div className="problem-card">
            <div className="icon">📈</div>
            <h3>Сложность отслеживания прогресса</h3>
            <p>Без систематизации данных невозможно увидеть долгосрочные результаты</p>
          </div>

          <div className="problem-card">
            <div className="icon">🔋</div>
            <h3>Низкая мотивация</h3>
            <p>Без визуализации достижений сложно поддерживать регулярность тренировок</p>
          </div>

          <div className="problem-card">
            <div className="icon">🔄</div>
            <h3>Информационная перегрузка</h3>
            <p>Существующие решения часто избыточно сложны или требуют платной подписки</p>
          </div>

          <div className="problem-card">
            <div className="icon">🚫</div>
            <h3>Уход больших игроков</h3>
            <p>Strava, Garmin, Fitbit и другие покинули российский рынок</p>
          </div>
        </div>

        <div className="problem-stats">
          <p>По данным исследований, более <strong>60% людей</strong>, начинающих заниматься спортом, бросают через 3-6 месяцев именно из-за отсутствия видимого прогресса и сложности отслеживания своих результатов.</p>
        </div>
      </div>
    </section>
  )
}

const AudienceSection = () => {
  return (
    <section className="audience-section section" id="audience">
      <div className="container">
        <h2>👨‍👩‍👧‍👦 Целевая аудитория</h2>
        <p>Наш продукт ориентирован на три основные группы пользователей:</p>

        <div className="audience-profiles">
          <div className="profile">
            <div className="profile-avatar profile-1"></div>
            <h3>Любители активного образа жизни</h3>
            <p><strong>25-45 лет</strong></p>
            <p>Люди, которые регулярно занимаются спортом для поддержания здоровья и хорошего самочувствия</p>
          </div>

          <div className="profile">
            <div className="profile-avatar profile-2"></div>
            <h3>Начинающие спортсмены</h3>
            <p><strong>18-35 лет</strong></p>
            <p>Те, кто только начинает свой путь в фитнесе и нуждается в понятной системе отслеживания прогресса</p>
          </div>

          <div className="profile">
            <div className="profile-avatar profile-3"></div>
            <h3>Опытные энтузиасты</h3>
            <p><strong>30-55 лет</strong></p>
            <p>Пользователи, которые серьезно относятся к тренировкам и хотят получать детальную аналитику</p>
          </div>
        </div>
      </div>
    </section>
  )
}

const SolutionSection = () => {
  return (
    <section className="solution-section section" id="solution">
      <div className="container">
        <h2>💡 Решение</h2>
        <div className="solution-intro">
          <p>P.R.O. — это многофункциональное мобильное приложение для комплексного отслеживания физической активности, которое превращает разрозненные данные о тренировках в понятную аналитику прогресса.</p>
        </div>

        <h3>Ценностное предложение:</h3>
        <div className="value-propositions">
          <div className="value-card">
            <div className="icon">🎯</div>
            <h4>Простота использования</h4>
            <p>Интуитивно понятный интерфейс без лишних сложностей</p>
          </div>

          <div className="value-card">
            <div className="icon">📊</div>
            <h4>Детальная аналитика</h4>
            <p>Глубокий анализ тренировок с разбивкой по показателям</p>
          </div>

          <div className="value-card">
            <div className="icon">📈</div>
            <h4>Визуализация прогресса</h4>
            <p>Наглядные графики и карты для отслеживания результатов</p>
          </div>

          <div className="value-card">
            <div className="icon">🔄</div>
            <h4>Универсальность</h4>
            <p>Поддержка различных видов активности в одном приложении</p>
          </div>

          <div className="value-card">
            <div className="icon">💰</div>
            <h4>Доступность</h4>
            <p>Базовый функционал бесплатен, работает даже на старых устройствах</p>
          </div>

          <div className="value-card">
            <div className="icon">📱</div>
            <h4>Простая миграция</h4>
            <p>Быстрый и безболезненный перенос данных из других приложений</p>
          </div>
        </div>

        <div className="app-gallery">
          <div className="gallery-intro">
            <h3>Посмотрите, как это работает:</h3>
          </div>
          <div className="screenshots">
            <div className="screenshot">
              <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/workout_details.jpg" alt="Детали тренировки" />
              <p>Детали тренировки</p>
            </div>
            <div className="screenshot">
              <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/heart_rate.jpg" alt="Анализ сердечного ритма" />
              <p>Анализ сердечного ритма</p>
            </div>
            <div className="screenshot">
              <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/route_map.jpg" alt="Маршрут тренировки" />
              <p>Маршрут тренировки</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TechnologySection = () => {
  return (
    <section className="technology-section section" id="technology">
      <div className="container">
        <h2>🔧 Технология</h2>

        <div className="tech-intro">
          <h3>Уникальные технологические преимущества:</h3>
        </div>

        <div className="tech-features">
          <div className="tech-feature">
            <div className="icon">📊</div>
            <h4>Расширенный анализ</h4>
            <p>Полный анализ всех показателей тренировок и здоровья пользователя</p>
          </div>

          <div className="tech-feature">
            <div className="icon">🤖</div>
            <h4>ИИ-ассистент</h4>
            <p>Персональный помощник для оптимизации тренировочного процесса и расшифровки данных</p>
          </div>

          <div className="tech-feature">
            <div className="icon">🔄</div>
            <h4>Простая интеграция</h4>
            <p>Быстрый и безболезненный перенос данных из других приложений и устройств</p>
          </div>
        </div>

        <div className="main-functions">
          <h3>Основные функции:</h3>

          <div className="carousel-hint">Прокрутите для просмотра всех функций 👉</div>

          <div className="functions-carousel-container">
            <div className="carousel-arrow carousel-arrow-left">
              <span>&#8249;</span>
            </div>

            <div className="functions-carousel">
              <div className="function-slide">
                <div className="function-image">
                  <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/start_workout.jpg" alt="Начало тренировки" />
                </div>
                <div className="function-description">
                  <h4>Отслеживание тренировок</h4>
                  <ul>
                    <li>Поддержка различных видов активности (бег, велосипед, плавание и др.)</li>
                    <li>Запись продолжительности, дистанции, сожженных калорий</li>
                    <li>Мониторинг среднего пульса и скорости</li>
                    <li>Детальная статистика по каждой тренировке</li>
                  </ul>
                </div>
              </div>

              <div className="function-slide">
                <div className="function-image">
                  <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/heart_rate.jpg" alt="Анализ сердечного ритма" />
                </div>
                <div className="function-description">
                  <h4>Анализ сердечного ритма</h4>
                  <ul>
                    <li>Графики изменения пульса во время тренировки</li>
                    <li>Анализ по 5 зонам сердечного ритма</li>
                    <li>Процентное соотношение времени в каждой зоне</li>
                  </ul>
                </div>
              </div>

              <div className="function-slide">
                <div className="function-image">
                  <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/route_map.jpg" alt="Маршрут тренировки" />
                </div>
                <div className="function-description">
                  <h4>Визуализация маршрутов</h4>
                  <ul>
                    <li>Отображение пройденного маршрута на карте</li>
                    <li>Различные режимы просмотра маршрута</li>
                    <li>Сохранение и анализ истории маршрутов</li>
                  </ul>
                </div>
              </div>

              <div className="function-slide">
                <div className="function-image">
                  <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/workout_history.jpg" alt="История тренировок" />
                </div>
                <div className="function-description">
                  <h4>История и статистика</h4>
                  <ul>
                    <li>Полная история тренировок с сортировкой по типу</li>
                    <li>Ежедневная статистика активности</li>
                    <li>Годовые отчеты с графиками по месяцам</li>
                    <li>Комплексный анализ по всем видам активности</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="carousel-arrow carousel-arrow-right">
              <span>&#8250;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const MarketSection = () => {
  return (
    <section className="market-section section" id="market">
      <div className="container">
        <h2>📊 Рынок</h2>

        <div className="market-geography">
          <h3>География</h3>
          <p>На первом этапе фокусируемся на рынке России и СНГ с последующим выходом на международный рынок.</p>
        </div>

        <div className="market-volume">
          <h3>Объем рынка</h3>

          <div className="market-metrics">
            <div className="market-metric">
              <div className="metric-value">$5,8 млрд</div>
              <div className="metric-name">TAM</div>
              <div className="metric-description">Весь рынок приложений для фитнеса</div>
            </div>

            <div className="market-metric">
              <div className="metric-value">$2,3 млрд</div>
              <div className="metric-name">SAM</div>
              <div className="metric-description">Сегмент приложений для отслеживания тренировок</div>
            </div>

            <div className="market-metric">
              <div className="metric-value">$58 млн</div>
              <div className="metric-name">SOM</div>
              <div className="metric-description">Реалистичная доля рынка через 3 года (2,5% от SAM)</div>
            </div>
          </div>

          <div className="market-source">
            <p><em>Источники: Grand View Research, Statista, внутренние исследования рынка</em></p>
          </div>
        </div>

        <div className="business-model">
          <h3>Бизнес-модель</h3>

          <div className="model-details">
            <div className="model-item">
              <div className="model-icon">💰</div>
              <div className="model-content">
                <h4>Freemium модель</h4>
                <p>Базовый функционал бесплатно, расширенные возможности по подписке</p>
              </div>
            </div>

            <div className="model-item">
              <div className="model-icon">💳</div>
              <div className="model-content">
                <h4>Стоимость подписки</h4>
                <p>299 руб/месяц или 2490 руб/год</p>
              </div>
            </div>

            <div className="model-item">
              <div className="model-icon">🤝</div>
              <div className="model-content">
                <h4>Дополнительные источники дохода</h4>
                <p>Партнерские программы с производителями спортивной экипировки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const UnitEconomicsSection = () => {
  return (
    <section className="unit-economics-section section" id="unit-economics">
      <div className="container">
        <h2>💹 Юнит-экономика</h2>

        <div className="economics-intro">
          <p>Масштабируемая бизнес-модель с фокусом на удержание пользователей и высокую конверсию в платящие аккаунты.</p>
        </div>

        <div className="key-metrics">
          <h3>Ключевые метрики</h3>

          <div className="metrics-cards">
            <div className="metric-card">
              <div className="metric-title">LTV</div>
              <div className="metric-value">6 400 ₽</div>
              <div className="metric-description">Средний доход с пользователя</div>
            </div>

            <div className="metric-card">
              <div className="metric-title">CAC</div>
              <div className="metric-value">1 200 ₽</div>
              <div className="metric-description">Стоимость привлечения</div>
            </div>

            <div className="metric-card">
              <div className="metric-title">LTV/CAC</div>
              <div className="metric-value">5,3</div>
              <div className="metric-description">Эффективность привлечения</div>
            </div>

            <div className="metric-card">
              <div className="metric-title">MRR</div>
              <div className="metric-value">37 млн ₽</div>
              <div className="metric-description">Месячный доход при 1М пользователей</div>
            </div>
          </div>
        </div>

        <div className="user-metrics">
          <h3>Показатели пользователей</h3>

          <div className="metrics-container">
            <div className="user-metrics-chart">
              <div className="chart-container">
                <div className="chart-bar">
                  <div className="bar-segment users-total" style={{height: '100%'}}>
                    <span>1 000 000</span>
                  </div>
                </div>
                <div className="chart-label">Всего пользователей</div>
              </div>

              <div className="chart-container">
                <div className="chart-bar">
                  <div className="bar-segment users-active" style={{height: '70%'}}>
                    <span>700 000</span>
                  </div>
                </div>
                <div className="chart-label">Активных пользователей</div>
              </div>

              <div className="chart-container">
                <div className="chart-bar">
                  <div className="bar-segment users-paying" style={{height: '15%'}}>
                    <span>150 000</span>
                  </div>
                </div>
                <div className="chart-label">Платящих пользователей</div>
              </div>
            </div>

            <div className="conversion-metrics">
              <div className="conversion-item">
                <div className="conversion-label">Удержание 30 дней</div>
                <div className="conversion-bar">
                  <div className="conversion-progress" style={{width: '70%'}}></div>
                </div>
                <div className="conversion-value">70%</div>
              </div>

              <div className="conversion-item">
                <div className="conversion-label">Конверсия в платящих</div>
                <div className="conversion-bar">
                  <div className="conversion-progress" style={{width: '15%'}}></div>
                </div>
                <div className="conversion-value">15%</div>
              </div>

              <div className="conversion-item">
                <div className="conversion-label">Удержание платящих</div>
                <div className="conversion-bar">
                  <div className="conversion-progress" style={{width: '85%'}}></div>
                </div>
                <div className="conversion-value">85%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="profit-formula">
          <h3>Формула прибыли</h3>

          <div className="formula-container">
            <div className="formula">
              <span className="formula-text">Profit = (Users × Buyers% × APC) − (Users × Buyers% × CAC<sub>amortized</sub>) − Operational Costs − COGS</span>
            </div>

            <div className="formula-result">
              <div className="result-item">
                <span className="result-label">При достижении 1 млн пользователей прогнозируемая ежемесячная прибыль:</span>
                <span className="result-value">~15 млн ₽/месяц</span>
              </div>
            </div>
          </div>
        </div>

        <div className="growth-strategy">
          <h3>Стратегия развития</h3>

          <div className="strategy-items">
            <div className="strategy-item">
              <div className="strategy-icon">📈</div>
              <div className="strategy-content">
                <h4>Повышение LTV</h4>
                <ul>
                  <li>Улучшение ценностного предложения</li>
                  <li>A/B тестирование различных ценовых предложений</li>
                  <li>Внедрение программы триальных периодов</li>
                </ul>
              </div>
            </div>

            <div className="strategy-item">
              <div className="strategy-icon">🎯</div>
              <div className="strategy-content">
                <h4>Снижение CAC</h4>
                <ul>
                  <li>Оптимизация маркетинговых каналов</li>
                  <li>Внедрение реферальной программы</li>
                  <li>Рост органических установок через SEO</li>
                </ul>
              </div>
            </div>

            <div className="strategy-item">
              <div className="strategy-icon">🔄</div>
              <div className="strategy-content">
                <h4>Повышение удержания</h4>
                <ul>
                  <li>Улучшение UX/UI для увеличения вовлеченности</li>
                  <li>Геймификация и социальные механики</li>
                  <li>Регулярное обновление контента и функций</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CompetitorsSection = () => {
  return (
    <section className="competitors-section section" id="competitors">
      <div className="container">
        <h2>🥇 Конкуренты</h2>

        <div className="competitors-intro">
          <p>В условиях ухода крупных игроков с российского рынка, мы предлагаем решение, которое не только заполняет образовавшуюся нишу, но и предоставляет уникальные преимущества.</p>
        </div>

        <div className="competitors-table-container">
          <div className="competitors-table">
            <div className="table-header">
              <div className="feature-name">Функции / Приложение</div>
              <div className="competitor">Strava*</div>
              <div className="competitor">Runkeeper*</div>
              <div className="competitor">RunTastic*</div>
              <div className="our-app">P.R.O.</div>
            </div>

            <div className="table-row">
              <div className="feature-name">Отслеживание бега и ходьбы</div>
              <div className="competitor">✅</div>
              <div className="competitor">✅</div>
              <div className="competitor">✅</div>
              <div className="our-app">✅</div>
            </div>

            <div className="table-row">
              <div className="feature-name">Анализ сердечного ритма</div>
              <div className="competitor">✅</div>
              <div className="competitor">✅</div>
              <div className="competitor">✅</div>
              <div className="our-app">✅</div>
            </div>

            <div className="table-row">
              <div className="feature-name">Детальная статистика</div>
              <div className="competitor">⚠️ Платно</div>
              <div className="competitor">⚠️ Платно</div>
              <div className="competitor">⚠️ Платно</div>
              <div className="our-app">✅</div>
            </div>

            <div className="table-row">
              <div className="feature-name">Персональные рекомендации</div>
              <div className="competitor">❌</div>
              <div className="competitor">❌</div>
              <div className="competitor">⚠️ Платно</div>
              <div className="our-app">✅</div>
            </div>

            <div className="table-row">
              <div className="feature-name">ИИ анализ тренировок</div>
              <div className="competitor">❌</div>
              <div className="competitor">❌</div>
              <div className="competitor">❌</div>
              <div className="our-app">✅</div>
            </div>

            <div className="table-row">
              <div className="feature-name">Работа без интернета</div>
              <div className="competitor">⚠️ Частично</div>
              <div className="competitor">⚠️ Частично</div>
              <div className="competitor">⚠️ Частично</div>
              <div className="our-app">✅</div>
            </div>

            <div className="table-row">
              <div className="feature-name">Доступ на территории РФ</div>
              <div className="competitor">❌</div>
              <div className="competitor">❌</div>
              <div className="competitor">❌</div>
              <div className="our-app">✅</div>
            </div>
          </div>

          <div className="table-note">
            <p>* Сервисы больше не доступны в России или имеют ограниченную функциональность</p>
          </div>
        </div>

        <div className="unique-advantages">
          <h3>Наши уникальные преимущества:</h3>

          <div className="advantages-list">
            <div className="advantage-item">
              <div className="advantage-icon">🚀</div>
              <div className="advantage-content">
                <h4>Полностью локализованное решение для российской аудитории</h4>
                <p>Учитываем все особенности и потребности отечественного рынка</p>
              </div>
            </div>

            <div className="advantage-item">
              <div className="advantage-icon">🧠</div>
              <div className="advantage-content">
                <h4>ИИ-ассистент для анализа тренировок</h4>
                <p>Уникальная технология, которая дает персонализированные рекомендации</p>
              </div>
            </div>

            <div className="advantage-item">
              <div className="advantage-icon">💯</div>
              <div className="advantage-content">
                <h4>Расширенная базовая функциональность</h4>
                <p>Предоставляем больше возможностей без необходимости платной подписки</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const TeamSection = () => {
  return (
    <section className="team-section section" id="team">
      <div className="container">
        <h2>👥 Команда</h2>

        <div className="team-intro">
          <p>Наша команда объединяет профессионалов с опытом в разработке, фитнесе и маркетинге цифровых продуктов.</p>
        </div>

        <div className="team-members">
          <div className="team-member">
            <div className="member-photo">
              <img src="https://raw.githubusercontent.com/runwithfun/P.R.O./main/public/CEO_1.jpg" alt="CEO" />
            </div>
            <div className="member-info">
              <h3>Мария Николаева</h3>
              <div className="member-position">CEO & CTO & Founder</div>
              <p>Эксперт в области мобильной разработки и машинного обучения. Опыт создания и масштабирования цифровых продуктов.</p>
              <div className="member-social">
                <a href="https://github.com/" className="social-link" target="_blank">GitHub</a>
                <a href="https://t.me/" className="social-link" target="_blank">Telegram</a>
              </div>
            </div>
          </div>

          <div className="team-member">
            <div className="member-photo">
              <img src="https://raw.githubusercontent.com/runwithfun/P.R.O./main/public/CEO_2.jpg" alt="CTO" />
            </div>
            <div className="member-info">
              <h3>Дорохов Даниил</h3>
              <div className="member-position">CEO & CTO & Founder</div>
              <p>Эксперт в области мобильной разработки и машинного обучения. Опыт создания и масштабирования цифровых продуктов.</p>
              <div className="member-social">
                <a href="https://github.com/" className="social-link" target="_blank">GitHub</a>
                <a href="https://t.me/" className="social-link" target="_blank">Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const CtaSection = () => {
  return (
    <section className="cta-section section" id="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Готовы начать свой путь к лучшим результатам?</h2>
          <p>Присоединяйтесь к тысячам пользователей, которые уже улучшили свои тренировки с P.R.O.</p>

          <div className="cta-buttons">
            <a href="#" className="secondary-btn">Запросить ранний доступ</a>
          </div>

          <div className="cta-benefits">
            <div className="benefit">
              <div className="benefit-icon">✨</div>
              <div className="benefit-text">14-дневный пробный период Pro-версии</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🔒</div>
              <div className="benefit-text">Безопасная платформа и защита данных</div>
            </div>
            <div className="benefit">
              <div className="benefit-icon">🤝</div>
              <div className="benefit-text">Поддержка и сообщество единомышленников</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <AudienceSection />
        <SolutionSection />
        <TechnologySection />
        <MarketSection />
        <UnitEconomicsSection />
        <CompetitorsSection />
        <TeamSection />
        <CtaSection />
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2025 P.R.O. - Personal Result Optimizer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

// Заменяем функцию инициализации карусели на автоматическую версию
window.addEventListener('DOMContentLoaded', () => {
  // Получаем все необходимые элементы
  const carousel = document.querySelector('.functions-carousel') as HTMLElement;
  const slides = document.querySelectorAll('.function-slide');

  // Проверяем, что все элементы найдены
  if (!carousel || slides.length === 0) {
    console.error('Не найдены элементы карусели');
    return;
  }

  console.log(`Карусель инициализирована: ${slides.length} слайдов`);

  // Состояние карусели
  let currentSlide = 0;
  const slideCount = slides.length;

  // Функция для прокрутки к определенному слайду
  const scrollToSlide = (index: number) => {
    // Обеспечиваем закольцованность (возвращаемся к первому слайду после последнего)
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;

    currentSlide = index;

    // Прокручиваем к выбранному слайду
    const slideWidth = carousel.clientWidth;
    carousel.scrollTo({
      left: index * slideWidth,
      behavior: 'smooth'
    });

    console.log(`Прокрутка к слайду ${index}`);
  };

  // Функция для автоматической прокрутки
  const autoScroll = () => {
    scrollToSlide(currentSlide + 1);
  };

  // Запускаем автоматическую прокрутку каждые 30 секунд
  let autoScrollTimer = setInterval(autoScroll, 30000);

  // Обработчик скролла с дебаунсингом
  let scrollTimeout: any = null;
  let userScrolling = false;

  carousel.addEventListener('scroll', () => {
    // Отмечаем, что пользователь взаимодействует с каруселью
    userScrolling = true;

    // Очищаем таймер автоматической прокрутки и устанавливаем новый
    clearInterval(autoScrollTimer);

    if (scrollTimeout !== null) {
      clearTimeout(scrollTimeout);
    }

    scrollTimeout = setTimeout(() => {
      // Вычисляем текущий видимый слайд
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = carousel.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);

      if (newIndex >= 0 && newIndex < slideCount) {
        currentSlide = newIndex;
        console.log(`Слайд изменен при прокрутке: ${newIndex}`);
      }

      // Возобновляем автоматическую прокрутку после взаимодействия пользователя
      autoScrollTimer = setInterval(autoScroll, 30000);
      userScrolling = false;
      scrollTimeout = null;
    }, 200);
  });

  // Обработчик завершения касания для мобильных устройств
  carousel.addEventListener('touchend', () => {
    // Отмечаем, что пользователь взаимодействует с каруселью
    userScrolling = true;

    // Очищаем таймер автоматической прокрутки
    clearInterval(autoScrollTimer);

    setTimeout(() => {
      // Вычисляем текущий видимый слайд
      const scrollLeft = carousel.scrollLeft;
      const slideWidth = carousel.clientWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);

      if (newIndex >= 0 && newIndex < slideCount) {
        currentSlide = newIndex;
        console.log(`Слайд изменен после касания: ${newIndex}`);
      }

      // Возобновляем автоматическую прокрутку после взаимодействия пользователя
      autoScrollTimer = setInterval(autoScroll, 30000);
      userScrolling = false;
    }, 200);
  });

  // Наблюдатель за изменением размера окна
  window.addEventListener('resize', () => {
    // При изменении размера окна прокручиваем к текущему слайду
    const slideWidth = carousel.clientWidth;
    carousel.scrollTo({
      left: currentSlide * slideWidth,
      behavior: 'auto'
    });
  });

  // Обработчик видимости страницы - останавливаем прокрутку если страница не видна
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(autoScrollTimer);
    } else {
      if (!userScrolling) {
        autoScrollTimer = setInterval(autoScroll, 30000);
      }
    }
  });

  // Первоначальная настройка
  scrollToSlide(0);

  // Запускаем первую автоматическую прокрутку через 5 секунд после загрузки
  setTimeout(() => {
    if (!userScrolling) {
      autoScroll();
    }
  }, 5000);

  // Получаем стрелки навигации
  const leftArrow = document.querySelector('.carousel-arrow-left');
  const rightArrow = document.querySelector('.carousel-arrow-right');

  // Добавляем обработчики событий для стрелок
  if (leftArrow) {
    leftArrow.addEventListener('click', () => {
      scrollToSlide(currentSlide - 1);
    });
  }

  if (rightArrow) {
    rightArrow.addEventListener('click', () => {
      scrollToSlide(currentSlide + 1);
    });
  }

  // Функция для управления видимостью стрелок в зависимости от положения прокрутки
  const updateArrowsVisibility = () => {
    // Эта функция может быть использована для скрытия левой стрелки на первом слайде
    // и правой стрелки на последнем, если требуется
    if (leftArrow && rightArrow) {
      if (currentSlide === 0) {
        leftArrow.classList.add('semi-transparent');
      } else {
        leftArrow.classList.remove('semi-transparent');
      }

      if (currentSlide === slideCount - 1) {
        rightArrow.classList.add('semi-transparent');
      } else {
        rightArrow.classList.remove('semi-transparent');
      }
    }
  };

  // Вызываем функцию при прокрутке
  carousel.addEventListener('scroll', () => {
    // ... существующий код обработки прокрутки ...

    // Добавляем обновление видимости стрелок
    updateArrowsVisibility();
  });

  // Инициализация видимости стрелок
  updateArrowsVisibility();

  // Удаляем подсказку после первого взаимодействия с каруселью
  const carouselHint = document.querySelector('.carousel-hint') as HTMLElement;
  if (carouselHint) {
    const hideHint = () => {
      carouselHint.style.opacity = '0';
      setTimeout(() => {
        carouselHint.style.display = 'none';
      }, 500);
    };

    carousel.addEventListener('scroll', hideHint, { once: true });
    if (leftArrow) leftArrow.addEventListener('click', hideHint, { once: true });
    if (rightArrow) rightArrow.addEventListener('click', hideHint, { once: true });

    // Скрываем подсказку после 10 секунд
    setTimeout(hideHint, 10000);
  }

  // Инициализация мобильного меню
  const menuToggle = document.getElementById('menu-toggle');
  const closeMenu = document.getElementById('close-menu');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav a');

  if (menuToggle && closeMenu && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
      mainNav.classList.remove('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }
});

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
        <nav className="nav">
          <ul>
            <li><a href="#problem">Проблема</a></li>
            <li><a href="#audience">Аудитория</a></li>
            <li><a href="#solution">Решение</a></li>
            <li><a href="#technology">Технология</a></li>
            <li><a href="#market">Рынок</a></li>
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
          <img src="https://raw.githubusercontent.com/runwithfun/introducing/main/images/login_screen.jpg" alt="P.R.O. Fitness Tracker" />
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

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <AudienceSection />
        {/* Здесь будут добавлены другие секции */}
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2023 P.R.O. - Personal Result Optimizer. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App

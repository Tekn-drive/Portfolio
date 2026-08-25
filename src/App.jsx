import { useEffect, useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import ContactSection from './components/ContactSection'
import translations from './translations'

const navigation = ['about', 'skills', 'projects', 'experience', 'contact']

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') || 'en')

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : language
  }, [language])

  const selectLanguage = (nextLanguage) => {
    setLanguage(nextLanguage)
    localStorage.setItem('portfolio-language', nextLanguage)
  }

  const selectPage = (index) => {
    if (index === activeIndex) return

    setActiveIndex(index)
  }

  const activePage = navigation[activeIndex]
  const content = translations[language]

  return (
    <>
      <header className="site-header">
        <nav className="site-navigation" aria-label={content.primaryNavigation}>
          {navigation.map((item, index) => (
            <button
              key={item}
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              aria-current={index === activeIndex ? 'page' : undefined}
              onClick={() => selectPage(index)}
            >
              {content.navigation[index]}
            </button>
          ))}
        </nav>
        <div className="language-switcher" aria-label={content.contact.languageLabel}>
          {['id', 'en', 'zh'].map((option) => (
            <button
              key={option}
              type="button"
              className={language === option ? 'is-active' : ''}
              aria-pressed={language === option}
              onClick={() => selectLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <main className="content-viewport">
        <section
          key={activePage}
          className="content-panel"
          aria-label={content.navigation[activeIndex]}
        >
          {activePage === 'about' ? (
            <AboutSection content={content.about} />
          ) : activePage === 'skills' ? (
            <SkillsSection content={content.skills} />
          ) : activePage === 'projects' ? (
            <ProjectsSection content={content.projects} />
          ) : activePage === 'experience' ? (
            <ExperienceSection experiences={content.experience} />
          ) : activePage === 'contact' ? (
            <ContactSection content={content.contact} />
          ) : (
            <p>{`{this is ${activePage}}`}</p>
          )}
        </section>
      </main>
    </>
  )
}

export default App

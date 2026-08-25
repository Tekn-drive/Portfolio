import { useState } from 'react'
import './App.css'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'

const navigation = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState('right')

  const selectPage = (index) => {
    if (index === activeIndex) return

    setDirection(index > activeIndex ? 'right' : 'left')
    setActiveIndex(index)
  }

  const activePage = navigation[activeIndex]

  return (
    <>
      <header className="site-header">
        <nav className="site-navigation" aria-label="Primary navigation">
          {navigation.map((item, index) => (
            <button
              key={item}
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              aria-current={index === activeIndex ? 'page' : undefined}
              onClick={() => selectPage(index)}
            >
              {item}
            </button>
          ))}
        </nav>
      </header>

      <main className="content-viewport">
        <section
          key={activePage}
          className={`content-panel swipe-from-${direction}`}
          aria-label={activePage}
        >
          {activePage === 'About' ? (
            <AboutSection />
          ) : activePage === 'Skills' ? (
            <SkillsSection />
          ) : activePage === 'Projects' ? (
            <ProjectsSection />
          ) : (
            <p>{`{this is ${activePage}}`}</p>
          )}
        </section>
      </main>
    </>
  )
}

export default App

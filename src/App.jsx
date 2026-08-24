import { useState } from 'react'
import profileImage from './assets/profile.JPG'
import './App.css'

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
            <div className="about-content">
              <div className="profile-frame">
                <img src={profileImage} alt="Juan Arnold" />
              </div>
              <div className="about-copy">
                <h1>Juan Arnold</h1>
                <p className="about-subtitle">
                  Software Engineer | Machine Learning and Data Science Enthusiast
                </p>
                <p>
                  Hi, I am Juan Arnold I am currently a Freelance Software Engineer at
                  PWD Lab, I build apps with the focus on web development, data and AI.
                  I aspire to be a data scientist or machine learning engineer in the
                  future.
                </p>
              </div>
            </div>
          ) : activePage === 'Skills' ? (
            <div className="skills-content">
              <section
                className="skills-group skills-group-hard"
                aria-labelledby="hard-skills-title"
              >
                <h2 id="hard-skills-title">Hard Skills</h2>
                <ul className="hard-skills-list">
                  <li>Python</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Databases</li>
                  <li>AI and Machine Learning</li>
                </ul>
              </section>
              <section
                className="skills-group skills-group-soft"
                aria-labelledby="soft-skills-title"
              >
                <h2 id="soft-skills-title">Soft Skills</h2>
                <ul>
                  <li>Leadership</li>
                  <li>Team Communication</li>
                  <li>Growth Mindset</li>
                  <li>Requirements Analysis</li>
                </ul>
              </section>
            </div>
          ) : (
            <p>{`{this is ${activePage}}`}</p>
          )}
        </section>
      </main>
    </>
  )
}

export default App

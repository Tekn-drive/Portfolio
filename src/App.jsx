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
          ) : activePage === 'Projects' ? (
            <div className="projects-content">
              <section className="project-categories" aria-label="Project categories">
                <article
                  className="project-category-card project-details"
                  style={{ '--card-delay': '320ms' }}
                >
                  <h2>Data Mining</h2>
                  <div className="project-list">
                    <article className="project-item">
                      <h3>Classification and Regression</h3>
                      <p>
                        Performed both classification and regression modeling tasks to
                        process water potability datasets, performing data extraction,
                        transformation, and loading into SQL databases.
                      </p>
                    </article>
                  </div>
                </article>
                <article
                  className="project-category-card project-details"
                  style={{ '--card-delay': '670ms' }}
                >
                  <h2>Object Oriented Programming</h2>
                  <div className="project-list">
                    <article className="project-item">
                      <h3>le Hotelier</h3>
                      <p>
                        A Java-based hotel management software for handling hotel
                        operations.
                      </p>
                    </article>
                  </div>
                </article>
              </section>
              <section className="project-categories" aria-label="Featured projects">
                <article
                  className="project-category-card project-details"
                  style={{ '--card-delay': '1020ms' }}
                >
                  <h2 id="nlp-title">Natural Language Processing</h2>
                  <div className="project-list">
                    <article className="project-item">
                      <h3>Sentiment Analysis</h3>
                      <p>
                        A simple React.js-based web app that is able to do sentiment
                        analysis on a given text.
                      </p>
                    </article>
                    <article className="project-item">
                      <h3>Fraud Detector</h3>
                      <p>
                        A Python desktop application with ETL workflows and natural
                        language processing to identify fraudulent e-commerce reviews,
                        improving detection accuracy.
                      </p>
                    </article>
                  </div>
                </article>
                <article
                  className="project-category-card project-details"
                  style={{ '--card-delay': '1370ms' }}
                >
                  <h2>Computer Vision</h2>
                  <div className="project-list">
                    <article className="project-item">
                      <h3>MSDD</h3>
                      <p>
                        Object detection dataset consisting of 300 shelf images in
                        Indonesian minimarkets containing nearly 14,000 product
                        instances with more than 100 unique SKUs, each with their own
                        class labels.
                      </p>
                    </article>
                    <article className="project-item">
                      <h3>Real-time Emotion Recognition</h3>
                      <p>
                        Real-time emotion recognition pipeline using Python, OpenCV,
                        and trained datasets, enabling webcam-based data ingestion,
                        processing, and classification with high data quality.
                      </p>
                    </article>
                    <article className="project-item">
                      <h3>Emotion Recognition</h3>
                      <p>
                        Image-based emotion classification models developed by applying
                        data preprocessing, feature extraction, and supervised learning
                        techniques for accurate predictions. This is a comparative study of different machine learning algorithms for emotion recognition.
                      </p>
                    </article>
                  </div>
                </article>
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

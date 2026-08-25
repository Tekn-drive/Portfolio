import '../App.css'

export default function SkillsSection() {
    return (
        <div className="skills-content">
            <section className="skills-group skills-group-hard" aria-labelledby="hard-skills-title">
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
            
            <section className="skills-group skills-group-soft" aria-labelledby="soft-skills-title">
                <h2 id="soft-skills-title">Soft Skills</h2>
                <ul>
                  <li>Leadership</li>
                  <li>Team Communication</li>
                  <li>Growth Mindset</li>
                  <li>Requirements Analysis</li>
                </ul>
            </section>
        </div>
    )
}
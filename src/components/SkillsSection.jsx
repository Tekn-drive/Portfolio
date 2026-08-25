import '../App.css'

export default function SkillsSection({ content }) {
    return (
        <div className="skills-content">
            <section className="skills-group skills-group-hard" aria-labelledby="hard-skills-title">
                <h2 id="hard-skills-title">{content.hardTitle}</h2>
                <ul className="hard-skills-list">
                    {content.hard.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
            </section>
            
            <section className="skills-group skills-group-soft" aria-labelledby="soft-skills-title">
                                <h2 id="soft-skills-title">{content.softTitle}</h2>
                <ul>
                                    {content.soft.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
            </section>
        </div>
    )
}
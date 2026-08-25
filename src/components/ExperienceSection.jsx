import '../App.css';

export default function ExperienceSection({ experiences }) {
	return (
		<div className="experience-content">
			{experiences.map((experience, index) => (
				<article
					className="experience-card"
					key={experience.company}
					style={{ '--card-delay': `${index * 700}ms` }}
				>
					<header className="experience-card-header">
						<div>
							<h2>{experience.role}</h2>
							<p className="experience-company">{experience.company}</p>
						</div>
						<time>{experience.dates}</time>
					</header>
					<ul>
						{experience.responsibilities.map((responsibility) => (
							<li key={responsibility}>{responsibility}</li>
						))}
					</ul>
				</article>
			))}
		</div>
	);
}

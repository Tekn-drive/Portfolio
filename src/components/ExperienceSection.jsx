import '../App.css';

const experiences = [
	{
		role: 'Software Engineer',
		company: 'PWD Lab',
		dates: 'Jul 2026 - Now',
		responsibilities: [
			'Creating various applications with frameworks such as Next.js, React, and also utilizing Databases such as Supabase and AI',
		],
	},
	{
		role: 'Data Annotator',
		company: 'T-Maxx International',
		dates: 'Dec 2025 - Jan 2026',
		responsibilities: ['Labelled data for machine learning pipelines'],
	},
	{
		role: 'Freelance Data Annotator',
		company: 'DataAnnotation',
		dates: 'Jul 2025 - Nov 2025',
		responsibilities: ['Labelled data for machine learning pipelines'],
	},
	{
		role: 'Full Stack Developer Intern',
		company: 'Komune Studio Software House',
		dates: 'Sep 2024 - Jan 2025',
		responsibilities: [
			'Designed and optimized data pipelines for real-time face detection and facial recognition applications',
			'Enhanced an existing model with continuous training capability and dynamic class addition/removal',
			'Built a Python-based backend for on-demand facial matching via user input or webcam feed, ensuring high data quality and performance optimization',
			'Applied SQL and NoSQL database management to store and retrieve processed facial data',
		],
	},
];

export default function ExperienceSection() {
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

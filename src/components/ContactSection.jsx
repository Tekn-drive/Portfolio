import '../App.css';

export default function ContactSection({ content }) {
	return (
		<div className="contact-content">
			<a className="contact-button contact-button-mail" href="mailto:juan.arnold.cs@gmail.com">
				{content.mail}
			</a>
			<a
				className="contact-button contact-button-whatsapp"
				href="https://wa.me/6285776830941"
				target="_blank"
				rel="noreferrer"
			>
				{content.whatsapp}
			</a>
			<a
				className="contact-button contact-button-github"
				href="https://github.com/Tekn-drive"
				target="_blank"
				rel="noreferrer"
			>
				{content.github}
			</a>
		</div>
	);
}

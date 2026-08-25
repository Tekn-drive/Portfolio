import '../App.css';

export default function ContactSection() {
	return (
		<div className="contact-content">
			<a className="contact-button contact-button-mail" href="mailto:juan.arnold.cs@gmail.com">
				Mail
			</a>
			<a
				className="contact-button contact-button-whatsapp"
				href="https://wa.me/6285776830941"
				target="_blank"
				rel="noreferrer"
			>
				WhatsApp
			</a>
		</div>
	);
}

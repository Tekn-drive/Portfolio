import profileImage from '../assets/profile.JPG';
import '../App.css'

export default function AboutSection({ content }) {
    return (
        <div className="about-content">
            <div className="profile-frame">
                <img src={profileImage} alt={content.imageAlt} />
            </div>
            
            <div className="about-copy">
                <h1>{content.name}</h1>
                <p className="about-subtitle">
                    {content.subtitle}
                </p>

                <p>{content.description}</p>
            </div>
        </div>
    );
}
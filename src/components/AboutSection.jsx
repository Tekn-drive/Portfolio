import profileImage from '../assets/profile.JPG';
import '../App.css'

export default function AboutSection() {
    return (
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
    );
}
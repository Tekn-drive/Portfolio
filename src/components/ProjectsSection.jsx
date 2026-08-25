import '../App.css';
import { Link } from 'react-router-dom';

export default function ProjectsSection() {
    return (
        <div className="projects-content">
            <section className="project-categories" aria-label="Project categories">
                <article className="project-category-card project-details" style={{ '--card-delay': '320ms' }}>
                    <h2>Data Mining</h2>
                    <div className="project-list">
                        <Link to = "https://github.com/Tekn-drive/ClassificationRegression">
                            <article className="project-item">
                                <h3>Classification and Regression</h3>
                                <p>
                                    Performed both classification and regression modeling tasks to
                                    process water potability datasets, performing data extraction,
                                    transformation, and loading into SQL databases.
                                </p>
                            </article>
                        </Link>
                    </div>
                </article>

                <article className="project-category-card project-details" style={{ '--card-delay': '670ms' }}>
                    <h2>Object Oriented Programming</h2>
                    <div className="project-list">
                        <Link to = "https://github.com/Tekn-drive/Le-Hotelier">
                            <article className="project-item">
                                <h3>Le Hotelier</h3>
                                <p>
                                    A Java-based hotel management software for handling hotel operations.
                                </p>
                            </article>
                        </Link>
                    </div>
                </article>
            </section>

            <section className="project-categories" aria-label="Featured projects">
                <article className="project-category-card project-details" style={{ '--card-delay': '1020ms' }}>
                    <h2 id="nlp-title">Natural Language Processing</h2>
                    <div className="project-list">
                        <Link to = "https://github.com/Tekn-drive/Sentiment-Analysis">
                            <article className="project-item">
                                <h3>Sentiment Analysis</h3>
                                <p>
                                    A simple React.js-based web app that is able to do sentiment analysis on a given text.
                                </p>
                            </article>
                        </Link>
                        
                        <Link to = "https://github.com/Tekn-drive/Fraud-Detector">
                            <article className="project-item">
                                <h3>Fraud Detector</h3>
                                <p>
                                    A Python desktop application with ETL workflows and natural
                                    language processing to identify fraudulent e-commerce reviews,
                                    improving detection accuracy.
                                </p>
                            </article>
                        </Link>
                    </div>
                </article>

                <article className="project-category-card project-details" style={{ '--card-delay': '1370ms' }}>
                    <h2>Computer Vision</h2>
                    <div className="project-list">
                        <Link to = "https://github.com/Tekn-drive/MSDD">
                            <article className="project-item">
                                <h3>MSDD</h3>
                                <p>
                                    Object detection dataset consisting of 300 shelf images in
                                    Indonesian minimarkets containing nearly 14,000 product
                                    instances with more than 100 unique SKUs, each with their own
                                    class labels.
                                </p>
                            </article>
                        </Link>

                        <Link to = "https://github.com/Tekn-drive/Realtime-Emotion-Recognition">
                            <article className="project-item">
                                <h3>Real-time Emotion Recognition</h3>
                                <p>
                                    Real-time emotion recognition pipeline using Python, OpenCV,
                                    and trained datasets, enabling webcam-based data ingestion,
                                    processing, and classification with high data quality.
                                </p>
                            </article>
                        </Link>
                        
                        <Link to = "https://www.mediafire.com/file/md8cytkn464yb5g/ML_LA02_1_Comparison_Analysis_of_Emotion_Recognition_Models.zip/file">
                            <article className="project-item">
                                <h3>Emotion Recognition</h3>
                                <p>
                                    Image-based emotion classification models developed by applying
                                    data preprocessing, feature extraction, and supervised learning
                                    techniques for accurate predictions. This is a comparative study of different machine learning algorithms for emotion recognition.
                                </p>
                            </article>
                        </Link>
                    </div>
                </article>
            </section>
        </div>
    )
}
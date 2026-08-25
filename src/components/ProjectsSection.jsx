import '../App.css';

export default function ProjectsSection({ content }) {
    return (
        <div className="projects-content">
            <section className="project-categories" aria-label={content.categories}>
                <article className="project-category-card project-details project-card-top project-card-right project-card-data" style={{ '--card-delay': '1400ms' }}>
                    <h2>{content.dataMining}</h2>
                    <div className="project-list">
                        <a href="https://github.com/Tekn-drive/ClassificationRegression">
                            <article className="project-item">
                                <h3>{content.classification}</h3>
                                <p>{content.classificationDescription}</p>
                            </article>
                        </a>
                    </div>
                </article>

                <article className="project-category-card project-details project-card-bottom project-card-right project-card-oop" style={{ '--card-delay': '2100ms' }}>
                    <h2>{content.oop}</h2>
                    <div className="project-list">
                        <a href="https://github.com/Tekn-drive/Le-Hotelier">
                            <article className="project-item">
                                <h3>{content.hotelier}</h3>
                                <p>{content.hotelierDescription}</p>
                            </article>
                        </a>
                    </div>
                </article>
            </section>

            <section className="project-categories" aria-label={content.featured}>
                <article className="project-category-card project-details project-card-top project-card-left project-card-nlp" style={{ '--card-delay': '0ms' }}>
                    <h2 id="nlp-title">{content.nlp}</h2>
                    <div className="project-list">
                        <a href="https://github.com/Tekn-drive/Sentiment-Analysis">
                            <article className="project-item">
                                <h3>{content.sentiment}</h3>
                                <p>{content.sentimentDescription}</p>
                            </article>
                        </a>
                        
                        <a href="https://github.com/Tekn-drive/Fraud-Detector">
                            <article className="project-item">
                                <h3>{content.fraud}</h3>
                                <p>{content.fraudDescription}</p>
                            </article>
                        </a>
                    </div>
                </article>

                <article className="project-category-card project-details project-card-bottom project-card-left project-card-cv" style={{ '--card-delay': '700ms' }}>
                    <h2>{content.cv}</h2>
                    <div className="project-list">
                        <a href="https://github.com/Tekn-drive/MSDD">
                            <article className="project-item">
                                <h3>{content.msdd}</h3>
                                <p>{content.msddDescription}</p>
                            </article>
                        </a>

                        <a href="https://github.com/Tekn-drive/Realtime-Emotion-Recognition">
                            <article className="project-item">
                                <h3>{content.realtime}</h3>
                                <p>{content.realtimeDescription}</p>
                            </article>
                        </a>
                        
                        <a href="https://www.mediafire.com/file/md8cytkn464yb5g/ML_LA02_1_Comparison_Analysis_of_Emotion_Recognition_Models.zip/file">
                            <article className="project-item">
                                <h3>{content.emotion}</h3>
                                <p>{content.emotionDescription}</p>
                            </article>
                        </a>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default function Showcase(){
    return (
        <section id="portfolio" className="projects-section">
            <div className="container mx-auto px-4">
                <p className="section-intro">What I do</p>
                <h2 className="section-title">Featured Projects</h2>
                
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image">Project Image</div>
                        <div className="project-content">
                            <h3 className="project-title">E-Commerce API</h3>
                            <p className="project-description">A scalable backend system for an e-commerce platform built with Spring Boot and PostgreSQL.</p>
                            <a href="portfolio.html" className="project-link">
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image">Project Image</div>
                        <div className="project-content">
                            <h3 className="project-title">Payment Processing System</h3>
                            <p className="project-description">Secure payment gateway integration with fraud detection capabilities.</p>
                            <a href="portfolio.html" className="project-link">
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="project-card">
                        <div className="project-image">Project Image</div>
                        <div className="project-content">
                            <h3 className="project-title">Real-time Analytics Platform</h3>
                            <p className="project-description">Data processing pipeline for real-time analytics using Kafka and Elasticsearch.</p>
                            <a href="portfolio.html" className="project-link">
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-8">
                    <a href="portfolio.html" className="inline-flex items-center text-accent font-medium">
                        View all projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
import CVButton from "./CVButton";

export default function Introduction() {
    return(
        <section id="about" className="about-section">
            <div className="container mx-auto px-4">
                <p className="section-intro">Who am I?</p>
                <h2 className="section-title">About Me</h2>
                <blockquote>
                    I'm a backend developer who mostly works with Java and Spring Boot. I enjoy building APIs that are 
                    fast, reliable, and not a total pain to maintain. I care a lot about clean code, solid structure, and making
                    sure things actually work in production. Outside of coding, I'm probably messing with some side project, 
                    reading docs I didn't mean to read, or making coffee I forgot I made.
                </blockquote>
                <CVButton />
                
                <div className="mt-16">
                    <p className="section-intro">My Expertise</p>
                    <h2 className="section-title">Technical Skills</h2>
                    
                    <div className="skills-grid">
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                                    <path d="M5 3v4"></path>
                                    <path d="M19 17v4"></path>
                                    <path d="M3 5h4"></path>
                                    <path d="M17 19h4"></path>
                                </svg>
                            </div>
                            <h3 className="skill-title">Backend Development</h3>
                            <div className="skill-items">
                                <span className="skill-tag">Java</span>
                                <span className="skill-tag">Spring Boot</span>
                                <span className="skill-tag">REST APIs</span>
                                <span className="skill-tag">Microservices</span>
                                <span className="skill-tag">SQL</span>
                                <span className="skill-tag">NoSQL</span>
                            </div>
                        </div>
                        
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
                                    <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
                                    <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
                                    <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
                                </svg>
                            </div>
                            <h3 className="skill-title">DevOps & Infrastructure</h3>
                            <div className="skill-items">
                                <span className="skill-tag">Docker</span>
                                <span className="skill-tag">Kubernetes</span>
                                <span className="skill-tag">AWS</span>
                                <span className="skill-tag">CI/CD</span>
                                <span className="skill-tag">Git</span>
                                <span className="skill-tag">Linux</span>
                            </div>
                        </div>
                        
                        <div className="skill-card">
                            <div className="skill-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 20h9"></path>
                                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                </svg>
                            </div>
                            <h3 className="skill-title">Architecture & Design</h3>
                            <div className="skill-items">
                                <span className="skill-tag">System Design</span>
                                <span className="skill-tag">API Design</span>
                                <span className="skill-tag">Clean Code</span>
                                <span className="skill-tag">Design Patterns</span>
                                <span className="skill-tag">SOLID</span>
                                <span className="skill-tag">Testing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
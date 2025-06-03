import Image from "@/photos/Picture-big.jpg"

function Contact() {
    return(
        <div  className="min-h-screen flex flex-col bg-background text-primary"> 
            <div id="about-page">
                <section className="page-hero">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="page-title">About Me</h1>
                        <p className="page-subtitle">Backend developer specializing in Java and Spring Boot</p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container mx-auto px-4">
                        <div className="about-content">
                            <div className="about-image"><img src={Image.src} /></div>
                            
                            <div className="section-header">
                                <p className="section-intro">Who I am</p>
                                <h2 className="section-title">My Journey</h2>
                            </div>
                            
                            <div className="about-text">
                                <p>I'm a backend developer who mostly works with Java and Spring Boot. I enjoy building APIs that are fast, reliable, and not a total pain to maintain. I care a lot about clean code, solid structure, and making sure things actually work in production.</p>
                                <p><br></br></p>
                                <p>My approach to development is rooted in simplicity and maintainability. I believe that the best solutions are often the simplest ones, and I strive to create systems that are easy to understand, extend, and operate.</p>
                            </div>
                            
                            <div className="section-header">
                                <p className="section-intro">My Expertise</p>
                                <h2 className="section-title">Technical Skills</h2>
                            </div>
                            
                            <div className="tech-stack">
                                <span className="tech-tag">Java</span>
                                <span className="tech-tag">Spring Boot</span>
                                <span className="tech-tag">Spring Cloud</span>
                                <span className="tech-tag">Microservices</span>
                                <span className="tech-tag">RESTful APIs</span>
                                <span className="tech-tag">SQL</span>
                                <span className="tech-tag">NoSQL</span>
                                <span className="tech-tag">Docker</span>
                                <span className="tech-tag">Kubernetes</span>
                                <span className="tech-tag">AWS</span>
                                <span className="tech-tag">Kafka</span>
                                <span className="tech-tag">CI/CD</span>
                                <span className="tech-tag">System Design</span>
                                <span className="tech-tag">API Design</span>
                            </div>
                            
                            <div className="section-header">
                                <p className="section-intro">My Journey</p>
                                <h2 className="section-title">Professional Timeline</h2>
                            </div>
                            
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-content">
                                        <div className="timeline-date">2022 - Present</div>
                                        <h3 className="card-title">Senior Backend Developer</h3>
                                        <p className="card-description">Leading development of microservices architecture for financial services platform. Optimized API performance by 40%.</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-item">
                                    <div className="timeline-content">
                                        <div className="timeline-date">2019 - 2022</div>
                                        <h3 className="card-title">Backend Developer</h3>
                                        <p className="card-description">Developed and maintained e-commerce platform backend handling 10k+ requests per minute.</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-item">
                                    <div className="timeline-content">
                                        <div className="timeline-date">2017 - 2019</div>
                                        <h3 className="card-title">Junior Java Developer</h3>
                                        <p className="card-description">Built RESTful APIs for enterprise resource planning system. Implemented automated testing suite.</p>
                                    </div>
                                </div>
                                
                                <div className="timeline-item">
                                    <div className="timeline-content">
                                        <div className="timeline-date">2015 - 2017</div>
                                        <h3 className="card-title">Computer Science Degree</h3>
                                        <p className="card-description">Focused on algorithms, data structures, and software engineering principles.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="section-header mt-16">
                                <p className="section-intro">Beyond Coding</p>
                                <h2 className="section-title">Personal Interests</h2>
                            </div>
                            
                            <div className="about-text">
                                <p>When I'm not architecting backend systems, you'll find me:</p>
                                
                                <ul className="mt-4 space-y-2">
                                    <li>• Contributing to open-source Java libraries</li>
                                    <li>• Experimenting with new database technologies</li>
                                    <li>• Writing technical articles and tutorials</li>
                                    <li>• Mentoring junior developers</li>
                                    <li>• Exploring coffee brewing techniques</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
    
export default Contact;
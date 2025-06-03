export default function ShowcaseBlog(){
    return(
        <section id="blog" className="blog-section">
            <div className="container mx-auto px-4">
                <p className="section-intro">My Thoughts</p>
                <h2 className="section-title">Latest Articles</h2>
                
                <div className="blog-grid">
                    <div className="blog-card">
                        <div className="blog-content">
                            <div className="blog-date">MAY 15, 2024</div>
                            <h3 className="blog-title">Optimizing Spring Boot Applications</h3>
                            <p className="blog-excerpt">Practical techniques to improve performance and reduce latency in your Spring Boot applications...</p>
                            <a href="blog.html" className="project-link">
                                Read Article
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="blog-card">
                        <div className="blog-content">
                            <div className="blog-date">APRIL 28, 2024</div>
                            <h3 className="blog-title">API Design Best Practices</h3>
                            <p className="blog-excerpt">Creating RESTful APIs that developers love to use - principles and patterns for effective API design...</p>
                            <a href="blog.html" className="project-link">
                                Read Article
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div className="blog-card">
                        <div className="blog-content">
                            <div className="blog-date">APRIL 10, 2024</div>
                            <h3 className="blog-title">The Art of Debugging</h3>
                            <p className="blog-excerpt">Strategies and tools for effectively debugging complex backend systems in production environments...</p>
                            <a href="blog.html" className="project-link">
                                Read Article
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="text-center mt-8">
                    <a href="blog.html" className="inline-flex items-center text-accent font-medium">
                        Read all articles
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
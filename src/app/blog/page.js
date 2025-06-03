import BlogGrid from "@/components/BlogsGrid";

const blogs = [
  {
    category: "Spring Boot",
    date: "MAY 15, 2024",
    title: "Optimizing Spring Boot Applications",
    description:
      "Practical techniques to improve performance and reduce latency in your Spring Boot applications.",
    link: "blog-detail.html",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
  },
  {
    category: "API Design",
    date: "APRIL 28, 2024",
    title: "API Design Best Practices",
    description:
      "Creating RESTful APIs that developers love to use - principles and patterns for effective API design.",
    link: "blog-detail.html",
    techStack: ["Java", "Spring Cloud", "Architecture"],
  },
  {
    category: "Debugging",
    date: "APRIL 10, 2024",
    title: "The Art of Debugging",
    description:
      "Strategies and tools for effectively debugging complex backend systems in production environments.",
    link: "blog-detail.html",
    techStack: ["Java", "Kafka", "Architecture"],
  },
  {
    category: "Microservices",
    date: "MARCH 22, 2024",
    title: "Microservices Communication Patterns",
    description:
      "Exploring synchronous vs asynchronous communication in distributed systems.",
    link: "blog-detail.html",
    techStack: ["Java", "Spring Security", "Performance"],
  },
  {
    category: "Security",
    date: "MARCH 5, 2024",
    title: "Securing Spring Boot Applications",
    description:
      "Implementing robust security measures from authentication to authorization.",
    link: "blog-detail.html",
    techStack: ["Jenkins", "Performance", "Kubernetes"],
  },
  {
    category: "Database",
    date: "FEBRUARY 18, 2024",
    title: "Database Optimization Techniques",
    description:
      "Improving query performance and database efficiency in high-traffic applications.",
    link: "blog-detail.html",
    techStack: ["Java", "Architecture", "Redis", 'Microservices'],
  },
];


function Contact() {
    return(
        <div  className="min-h-screen flex flex-col bg-background text-primary">       
            {/* <!-- Blog Page --> */}
            <div id="blog-page">
                <section className="page-hero">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="page-title">Technical Blog</h1>
                        <p className="page-subtitle">Insights, tutorials, and thoughts on backend development and system architecture</p>
                    </div>
                </section>
                

                <section className="content-section">
                    <div className="container mx-auto px-4">

                        <BlogGrid  blogs={ blogs } />
                        
                        <div className="pagination">
                            <button className="pagination-btn active">1</button>
                            <button className="pagination-btn">2</button>
                            <button className="pagination-btn">3</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
    
export default Contact;
import ProjectsGrid from "@/components/ProjectsGrid";

const projects = [
  {
    title: "E-Commerce Backend System",
    description:
      "Scalable e-commerce platform with inventory management, order processing, and payment integration.",
    techStack: ["Java", "Spring Boot", "PostgreSQL"],
    github: "https://github.com/username/ecommerce-api",
    preview: "https://ecommerce.example.com",
  date: "May 2024"
  },
  {
    title: "Payment Processing System",
    description:
      "Secure payment gateway with fraud detection and multi-currency support.",
    techStack: ["Java", "Spring Cloud", "Kafka"],
    github: "https://github.com/username/ecommerce-api",
    preview: "https://ecommerce.example.com",
  date: "May 2024"
  },
  {
    title: "Real-time Analytics Platform",
    description:
      "Data processing pipeline for real-time analytics with Kafka and Elasticsearch.",
    techStack: ["Java", "Kafka", "Elasticsearch"],
    github: "https://github.com/username/ecommerce-api",
    preview: "https://ecommerce.example.com",
  date: "May 2024"
  },
  {
    title: "Secure Authentication Service",
    description:
      "JWT-based authentication service with OAuth2 support and role management.",
    techStack: ["Java", "Spring Security", "OAuth2"],
    github: "https://github.com/username/ecommerce-api",
    preview: "https://ecommerce.example.com",
  date: "May 2024"
  },
  {
    title: "Automated Deployment Pipeline",
    description:
      "CI/CD pipeline for Java applications with Jenkins and Docker.",
    techStack: ["Jenkins", "Docker", "Kubernetes"],
    github: "https://github.com/username/ecommerce-api",
    preview: "https://ecommerce.example.com",
  date: "May 2024"
  },
  {
    title: "High-Performance API Gateway",
    description:
      "Optimized API gateway with rate limiting, caching, and load balancing.",
    techStack: ["Java", "Spring Cloud Gateway", "Redis", 'Microservices'],
    github: "https://github.com/username/ecommerce-api",
    preview: "https://ecommerce.example.com",
  date: "May 2024"
  },
];

function Contact() {
    return(
        <div  className="min-h-screen flex flex-col bg-background text-primary"> 
            
            
            <div id="projects-page">
                <section className="page-hero">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="page-title">My Projects</h1>
                        <p className="page-subtitle">Explore my technical solutions and implementations that solve real-world problems</p>
                    </div>
                </section>

                <section className="content-section">
                    <div className="container mx-auto px-4">
                       <ProjectsGrid projects={ projects } />
                                 
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
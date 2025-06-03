import TypingBox from "./Typemorph";

const Phrases = [
  "I build reliable backend systems with Java & Spring Boot",
  "I create scalable APIs that just work",
  "I optimize systems for performance and reliability",
  "I care about clean code and solid architecture"
];

export default function Hero() {
    return(
        <>
            <section id="home">
                <div className="container mx-auto px-4">
                    <h1 id="greating" className="greating">Hey, I'm Abdulrahim</h1>
                    
                    <div id="typing-box">
                        <TypingBox  phrases={Phrases} typeSpeed={15} deleteSpeed={30} afterWait={1500}/>
                    </div>
                    <a href="#about" className="inline-flex items-center text-accent font-medium text-lg">
                        Learn more about what I do
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                            <path d="M12 5v14"></path>
                            <path d="m19 12-7 7-7-7"></path>
                        </svg>
                    </a>
                </div>
            </section>
        </>
    );
}
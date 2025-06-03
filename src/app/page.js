import Hero from "@/components/Hero";
import Introduction from "@/components/Intruduction";
import ShowcaseBlog from "@/components/ShowcaseBlog";
import ShowcaseProject from "@/components/ShowcaseProject";
import Showcase from "@/components/ShowcaseProject";
import TypingBox from "@/components/Typemorph";

function Home() {
    return (
        <div  className="min-h-screen flex flex-col bg-background text-primary">
            <main className="flex-grow">
            
                <Hero />

                <Introduction />

                <ShowcaseProject />

                <ShowcaseBlog />
            
            </main>
        </div>
    );
}

export default Home;
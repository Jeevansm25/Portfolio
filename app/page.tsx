import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Social from "@/components/Social";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 space-y-32 py-32">
        <Education />
          <Projects />
          
          <Skills />
          
          <Social />
         
        </div>
      </main>
    </div>
  );
}


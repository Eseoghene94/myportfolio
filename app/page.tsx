// app/page.js or Home.js (wherever your component is located)
import Hero from "@/components/Hero";
import Education from "./Education/page";
import Skills from "./Skills/page";
import Contact from "./Contact/page";
import About from "./About/page";
import Projects from "./Projects/page";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container">
      {/* Uncomment if you want to include the mode toggle button */}
      {/* <ModeToggle /> */}
      {/* Uncomment if you want to include the header */}
      {/* <Header /> */}
      <Hero />
      <About />
      <Skills />
      <TechStack/>
      <Projects />
      <Education />
      <Contact />
      <Footer/>
    </div>
  );
}

import Header from "./components/Header";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Education from "./Pages/Eduaction";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="pt-0"> 
        <section id="about" className="pt-20 "> 
          <AboutMe />
        </section>

        <section id="skills" className="mt-0 pt-20">
          <Skills />
        </section>

        <section id="projects" className="mt-0 pt-20">
          <Projects />
        </section>

        <section id="education" className="pt-20">
          <Education />
        </section>
        <section id="contact" className="pt-20">
          <Contact/>
        </section>
      </main>
    </>
  );
}

export default App;

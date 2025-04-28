
import AboutMe from "./Pages/AboutMe.jsx";
import Projects from "./Pages/Projects.jsx";
import Skills from "./Pages/Skills.jsx";
import Education from "./Pages/Eduaction.jsx";
import Contact from "./Pages/Contact.jsx";
import Header from "./Components/Header.jsx";


function App() {
  return (
    <>
     <Header/>
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

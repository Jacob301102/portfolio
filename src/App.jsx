import { useRef, useState } from "react";
import "./App.scss";
import skills from "./data/skills.json";
import projects from "./data/projects.json";

import Header from "./components/Header";
import TypeAnimation from "./components/TypeAnimation";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  const [projectCategory, setProjectCategory] = useState(false);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (refName) => {
    let ref;
    switch (refName) {
      case "home":
        ref = homeRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      default:
        ref = contactRef;
    }

    ref.current.scrollIntoView({ inline: "center", behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToRef={scrollToRef} />

      <main>
        <section ref={homeRef}>
          <div>
            <h1>Hello, I&rsquo;m Jacob!</h1>
            <p>
              I&rsquo;m a student and an ambitious web developer with a passion for
              building beautiful and functional websites. I have two year
              experience working with{" "}
              <span style={{ color: "#DD4B25" }}>HTML</span>,{" "}
              <span style={{ color: "#0091D5" }}>CSS</span>,{" "}
              <span style={{ color: "#EFD81D" }}>JavaScript</span>,{" "}
              <span style={{ color: "#5ED3F3" }}>React</span>, and I am always
              eager to learn new technologies and skills.
            </p>
            <TypeAnimation words={skills} speed={100} />
          </div>
        </section>

        <section ref={projectsRef}>
          <h1>My projects</h1>

          <div className="project-buttons">
            <button
              className={projectCategory ? "button-active" : ""}
              onClick={() => setProjectCategory(false)}
            >
              Pet
            </button>
            <button
              className={projectCategory ? "" : "button-active"}
              onClick={() => setProjectCategory(true)}
            >
              Commercial
            </button>
          </div>

          <div className="projects">
            {projectCategory
              ? projects.commercial.map((project, i) => {
                  return (
                    <Card
                      key={i}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      link={project.link}
                    />
                  );
                })
              : projects.pet.map((project, i) => {
                  return (
                    <Card
                      key={i}
                      image={project.image}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      link={project.link}
                    />
                  );
                })}
          </div>
        </section>

        <section ref={contactRef}>
          <div className="contact">
            <h1>Get in touch</h1>

            <p>
              I&rsquo;m currently looking for work, so if you have any job or
              project opportunities, please feel free to reach out. I&rsquo;d be
              happy to provide more information if needed.
            </p>

            <p className="mail">
              <span>contact me on: </span>work301102@gmail.com
            </p>

            <p>or</p>

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=work301102@gmail.com">
              <button>Write me</button>
            </a>

            <div>
              <a href="https://www.linkedin.com/in/jacob-peikrishvili-b86527277">
                <img src={"/icons/Linkedin.svg"} alt="Linkedin" />
              </a>
              <a href="https://github.com/Jacob301102">
                <img src={"/icons/Github.svg"} alt="Github" />
              </a>
              <a href="https://www.figma.com/files/user/1214286916969832940?fuid=1214286916969832940">
                <img src={"/icons/Figma.svg"} alt="Figma" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer scrollToRef={scrollToRef} />
    </>
  );
};

export default App;

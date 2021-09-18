import React from "react";
import './body.css'
import About from "./about/about";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
// import Experience from "./experience/experience";
import Contact from "./contact/contact";

function Body() {
  return (
    <div className="body">
    <section>
      <About />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Skills />
    </section>
    {/* <section>
      <Experience />
    </section> */}
    <section>
      <Contact />
    </section>
    <hr />
    </div>
  );
}

export default Body;

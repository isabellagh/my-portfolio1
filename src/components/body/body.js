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
    <section className="section">
      <About />
    </section>
    <section className="section">
      <Projects />
    </section>
    <section className="section">
      <Skills />
    </section>
    {/* <section className="section">
      <Experience />
    </section> */}
    <section className="section">
      <Contact />
    </section>
    </div>
  );
}

export default Body;

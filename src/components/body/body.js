import React from "react";
import About from "./about/about";
import Projects from "./projects/projects";
import Skills from "./skills/skills";
import Work from "./work/work";
import Contact from "./contact/contact";

function Body() {
  return (
    <div className="body">
    <hr />
    <section>
      <About />
    </section>
    <section>
      <Projects />
    </section>
    <section>
      <Skills />
    </section>
    <section>
      <Work />
    </section>
    <section>
      <Contact />
    </section>
    <hr />
    </div>
  );
}

export default Body;

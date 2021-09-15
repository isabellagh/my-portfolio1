import React from "react";
import "./projects.css";
import { ProjectData } from "../projects/ProjectsData";
import ProjectSection from "./ProjectSection";

function projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <h1 className="section-header">Projects</h1>
      <div>
          {data.map((project) => {
              return <ProjectSection project={project}/>
          })}
      </div>
    </div>
  );
}

export default projects;

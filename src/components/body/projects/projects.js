import React from "react";
import "./projects.css";
import { ProjectData } from "../projects/ProjectsData";
import ProjectSection from "./ProjectSection";

function projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label className="section-header">Projects</label>
      <div>
          {data.map((project) => {
              return <ProjectSection project={project}/>
          })}
      </div>
    </div>
  );
}

export default projects;

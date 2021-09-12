import React from "react";
import "./projects.css";
import { ProjectData } from "../projects/ProjectsData";
import ProjectInfo from "./ProjectInfo";

function projects() {
  const data = ProjectData;
  return (
    <div className="projects">
      <label>Projects</label>
      <div>
          {data.map((project) => {
              return <ProjectInfo />
          })}
      </div>
    </div>
  );
}

export default projects;

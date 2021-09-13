import React from "react";
import "./project-section.css";

function ProjectSection({ project }) {
  return (
  <div className="project-section">
    <div className="project-info">
      <label className="project-title">{project.title}</label>
      <div className="project-links">
        {project.github &&
          <a className="project-link" href={project.github}>
            <div className="link-button">
            <i class="devicon-github-original colored"></i> Github

            </div>
          </a>
        }
          
      </div>
    </div>
      <img src={project.image} className="project-image" alt="" />
  </div>
)}

export default ProjectSection;

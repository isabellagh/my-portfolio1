import React from "react";
import "./project-section.css";

function ProjectSection({ project }) {
  return (
    <section className="project-container">
    <div className="project-section">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-links">
          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> Repository
              </div>
            </a>
          )}
        </div>
        <p className="project-about">{project.about}</p>
        <div className="project-tags">
          {project.tags.map((tag) => {
            return <label className="tag">{tag}</label>
          })}
        </div>
      </div>

      <img src={project.image} className="project-image" alt="" />
    </div>
    </section>
  );
}

export default ProjectSection;

import React from "react";
import "./skills.css";
import { SkillsData } from "./SkillsData";
import SkillsCard from "./SkillsCard";

function skills() {
  const data = SkillsData;
  return (
    <div className="skills">
      <h1 className="section-header">Skills</h1>
      <div className="skills-section">
        {data.map((skill) => {
          return <SkillsCard skill={skill} />;
        })}
      </div>
    </div>
  );
}

export default skills;

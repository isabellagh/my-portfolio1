import React from "react";
import "./skills-card.css";

function SkillsCard({ skill }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
    </div>
  );
}

export default SkillsCard;

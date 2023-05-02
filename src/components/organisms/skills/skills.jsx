import React from "react";
import SkillsTarget from "../../molecules/skills target/skills-target";
import "./skills.scss";

function Skills() {
  const skills = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "css3" },
    { id: 3, name: "HTML5" },
    { id: 4, name: "HTML5" },
    { id: 5, name: "HTML5" },
    { id: 6, name: "HTML5" },
    { id: 7, name: "HTML5" },
    { id: 8, name: "HTML5" },
    { id: 9, name: "HTML5" },
  ];

  const listaSkills = skills.map((skills) => {
    return <SkillsTarget key={skills.id} text={skills.name} />;
  });

  return (
    <div className="skills-container-full">
      <div className="skills-container">
        <h2 className="subtittle">Skills</h2>
        <div className="skills-target-container">{listaSkills}</div>
      </div>
    </div>
  );
}

export default Skills;

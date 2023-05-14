import React from "react";
import SkillsTarget from "../../molecules/skills target/skills-target";
import "./skills.scss";

function Skills() {
  const skills = [
    { id: 1, name: "HTML5" },
    { id: 2, name: "Sass" },
    { id: 3, name: "Javascript" },
    { id: 4, name: "React.Js" },
    { id: 5, name: "Git" },
    { id: 6, name: "Scrum" },
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

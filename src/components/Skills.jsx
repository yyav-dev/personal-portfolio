import React from "react";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiMysql, SiFlask, SiJavascript, SiCanva } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Python", icon: <FaPython className="skill-icon" /> },
    { name: "React.js", icon: <FaReact className="skill-icon" /> },
    { name: "JavaScript", icon: <SiJavascript className="skill-icon" /> },
    { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
    { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
    { name: "Flask", icon: <SiFlask className="skill-icon" /> },
    { name: "MySQL", icon: <SiMysql className="skill-icon" /> },
    { name: "Git", icon: <FaGitAlt className="skill-icon" /> },
    { name: "Canva", icon: <SiCanva className="skill-icon" /> },
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="icon-wrapper">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

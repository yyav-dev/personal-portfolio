import React from "react";

const Projects = () => {
  const projects = [
    { name: "Portfolio Website", description: "A personal portfolio website built with React.", github: "https://github.com/yyav-dev/portfolio-model", demo: "" },
    { name: "Face Recognition Based Attendance System", description: "A simple Attendance System using Flask and Excel.", github: "https://github.com/yyav-dev/Face-Recognition-Based-Attendance-System", demo: ""},
    { name: "Online Driver Hiring System", description: "A Acting Driver hiring system using Python and MySQL", github: "https://github.com/yyav-dev/online-driver-booking-system", demo: ""},
    {name: "CRUD Operations", description: "Demonstrates how a React frontend communicates with a Node.js + Express backend REST API.", github: "https://github.com/yyav-dev/react-node-crud", demo: ""},
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {/* 🧠 GitHub Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
            <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-btn"
              >
                Live Demo
              </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

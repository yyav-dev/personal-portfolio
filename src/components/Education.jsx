import React from "react";
import "../index.css";

const Education = () => {
  const educationData = [
    { year: "2020-2023", degree: "B.Sc Computer Science", institute: "Bharathiar University" },
    { year: "2023-2025", degree: "M.Sc Computer Science", institute: "Bharathiar University" },
  ];

  return (
    <section id="education" className="section-container">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, idx) => (
          <div key={idx} className="timeline-item">
            <span className="timeline-year">{edu.year}</span>
            <div className="timeline-info">
              <h3>{edu.degree}</h3>
              <p>{edu.institute}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

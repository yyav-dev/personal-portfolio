import React from "react";
import "../index.css";

const Hero = () => {
  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h1>
          KY<span>Portfolio</span>
        </h1>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        {/* Left */}
        <div className="hero-left">
          <h2>
            Hi, I'm <span>Karthicyadhav</span> 👋
          </h2>
          <p>
            I’m a passionate <strong>React Developer</strong> building modern, responsive web applications.
          </p>
          <div className="buttons">
            <a href="/Yav_CV.pdf" className="download">
              Download CV
            </a>
            <a href="#contact" className="hire">
              Hire Me
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="hero-right">
          <img src="/profile.jpg" alt="Yav Profile" />
        </div>
      </section>
    </div>
  );
};

export default Hero;

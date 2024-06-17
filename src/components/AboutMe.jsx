import React, { useState } from "react";
import "../style/AboutMe.scss";

const skills = [
  {
    name: "HTML5",
    level: 80,
    image: `${process.env.PUBLIC_URL}/image/aboutme/HTML5_logo.png`,
  },
  {
    name: "CSS3",
    level: 80,
    image: `${process.env.PUBLIC_URL}/image/aboutme/css_logo.jpg`,
  },
  {
    name: "JavaScript",
    level: 65,
    image: `${process.env.PUBLIC_URL}/image/aboutme/javascript_logo.png`,
  },
  {
    name: "React",
    level: 75,
    image: `${process.env.PUBLIC_URL}/image/aboutme/react_logo.png`,
  },
  {
    name: "Sass",
    level: 70,
    image: `${process.env.PUBLIC_URL}/image/aboutme/sass_logo.png`,
  },
  {
    name: "MySQL",
    level: 60,
    image: `${process.env.PUBLIC_URL}/image/aboutme/MySQL_logo.png`,
  },
  {
    name: "GitHub",
    level: 75,
    image: `${process.env.PUBLIC_URL}/image/aboutme/github_logo.png`,
  },
];

const AboutMe = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <div className="pages">
      <section className="page2_container">
        <div className="page2_title">
          <p>ABOUT ME</p>
        </div>
        <div className="myInfoWrap">
          <div className="imgWrap">
            <div className="background_circle"></div>
            <img src={`${process.env.PUBLIC_URL}/image/Meepng.png`} alt="Me" />
          </div>
          <div className="page2_description">
            <div className="introBorder">
              <div className="introButton1">
                <a>이가영</a>
                <a>1998.01.21</a>
                <a>Kyunggi Univ.</a>
              </div>
              <div className="introButton2">gaebong2da@naver.com</div>
              <div className="introButton3">
                <a
                  href="https://github.com/gaebonglee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="page2_skilsWrap">
          <p>Skills</p>
          <div className="page2_skilsbox">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <img src={skill.image} alt={skill.name} />
                {hoveredSkill === index && (
                  <div className="skill_level">
                    <div className="bar_background">
                      <div
                        className="bar_fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div
                      className="level_text"
                      style={{ left: `${skill.level}%` }}
                    >
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;

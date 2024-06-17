import React, { useState } from "react";
import "../style/Projects.scss";

const projects = [
  {
    title: "Trainer Matching Project",
    description: "팀프로젝트로 진행한 회원-트레이너 매칭사이트 입니다.",
    period: "2024.04.01 ~ 2024.05.17",
    tech: "React, Scss, JavaScript, axios, MySQL, react(library,hook)",
    mywork: "Design, Front-end, Back-end",
    image: `${process.env.PUBLIC_URL}/image/project/TMP.png`,
    // projectLink: "https://github.com/gaebonglee/project1",
    githubLink: "https://github.com/gaebonglee/TMP.git",
  },
  {
    title: "ShoppingMall Luks",
    description:
      "개인프로젝트로 문자인증과 주소찾기 API를 활용한 쇼핑몰 사이트입니다.",
    period: "2024.05.25 ~ 2024.06.11",
    tech: "React, Scss, JavaScript, axios, API, MySQL, react(library,hook)",
    mywork: "Design, Front-end, Back-end",
    image: `${process.env.PUBLIC_URL}/image/project/luks.png`,
    // projectLink: "https://github.com/gaebonglee/project2",
    githubLink: "https://github.com/gaebonglee/luks.git",
  },
  {
    title: "Portfolio Site",
    description: "반응형 디자인으로 제작한 포트폴리오 사이트입니다.",
    period: "2024.06.14 ~ 2024.06.16",
    tech: "React, Scss, API react-hook, Swipe",
    mywork: "Design, Front-end",
    image: `${process.env.PUBLIC_URL}/image/project/Portfolio.png`,
    // projectLink: "https://github.com/gaebonglee/project3",
    githubLink: "https://github.com/gaebonglee/portfolio.git",
  },
  {
    title: "Exchange Currency",
    description: "네이버의 <환율계산> 영역을 마크업한 결과물입니다.",
    period: "2024.05.23 ~ 2024.05.24",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/exchange_currency.png`,
    projectLink: `${process.env.PUBLIC_URL}/exchange_currency/index.html`,
    githubLink: "https://github.com/gaebonglee/exchangeCurrency.git",
  },
];

const Projects = () => {
  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <div className="pages">
      <section className="projects_container">
        <h2>PROJECTS</h2>
        <div className="projects_wrapper">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card ${flipped[index] ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
            >
              <div className="cardFront">
                <img src={project.image} alt={project.title} />
                <div className="info">
                  <h3 className="title">{project.title}</h3>
                  <p className="click_msg">Click</p>
                </div>
              </div>
              <div className="cardBack">
                <h3>{project.title}</h3>
                <div className="back_inner description">
                  <p>{project.description}</p>
                </div>
                <div className="back_inner period">
                  <h4># Period : </h4>
                  <a>{project.period}</a>
                </div>
                <div className="back_inner tech">
                  <h4># Tech: </h4>
                  <a>{project.tech}</a>
                </div>
                <div className="back_inner mywork">
                  <h4># My Work :</h4>
                  <a>{project.mywork}</a>
                </div>
                <div className="linkWrap">
                  <a href={project.githubLink}>Source</a>
                  <a href={project.projectLink}>Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;

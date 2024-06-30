import React, { useState, useEffect, useRef } from "react";
import "../style/main.scss";
// 아이콘
import { FaRegWindowMinimize } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { IoMdArrowDroprightCircle } from "react-icons/io";

const projects = [
  {
    title: "Trainer Matching Project",
    description: "팀프로젝트로 진행한 회원-트레이너 매칭사이트 입니다.",
    period: "2024.04.01 ~ 2024.05.17",
    tech: "React, Scss, JavaScript, axios, MySQL, react(library,hook)",
    mywork: "Design, Front-end, Back-end",
    image: `${process.env.PUBLIC_URL}/image/project/TMP.png`,
    projectLink:
      "https://gayounglee.notion.site/Trainer-Matching-Project-PPT-6c02aff850184dbeb843dff6fd695f81",
    githubLink: "https://github.com/gaebonglee/TMP.git",
  },
  {
    title: "ShoppingMall Luks",
    description:
      "개인프로젝트로 문자인증과 주소찾기 API를 활용한 쇼핑몰 사이트입니다.",
    period: "2024.05.25 ~ 2024.06.14, 지속 업데이트 예정",
    tech: "React, Scss, JavaScript, axios, API, MySQL, react(library,hook)",
    mywork: "Design, Front-end, Back-end",
    image: `${process.env.PUBLIC_URL}/image/project/LUKS.png`,
    projectLink:
      "https://gayounglee.notion.site/Luks-PPT-2ecadfde50dd4f1f9fc3e6fe6043708d?pvs=4",
    githubLink: "https://github.com/gaebonglee/luks.git",
  },
  {
    title: "Portfolio Site",
    description:
      "Y2K느낌의 포트폴리오 사이트입니다. 반응형으로 제작되었습니다.",
    period: "2024.06.14 ~ 2024.06.21",
    tech: "React, Scss, react-hook",
    mywork: "Design, Front-end",
    image: `${process.env.PUBLIC_URL}/image/project/myportfolio.png`,
    projectLink: "https://gaebonglee.github.io/myportfolio/",
    githubLink: "https://github.com/gaebonglee/myportfolio.git",
  },
  {
    title: "Exchange Currency",
    description: "네이버의 <환율계산> 영역을 마크업한 결과물입니다.",
    period: "2024.05.23 ~ 2024.05.24",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/exchange_currency.png`,
    projectLink:
      "https://gaebonglee.github.io/myportfolio/exchangeCurrency/index.html",
    githubLink: "https://github.com/gaebonglee/exchangeCurrency.git",
  },
  {
    title: "Kurly Header",
    description: "마켓컬리의 헤더부분을 마크업한 결과물입니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3",
    mywork: "HTML 마크업, CSS 스타일링",
    image: `${process.env.PUBLIC_URL}/image/project/kurlyHeader.png`,
    projectLink: "/kurly/kurlyHeader/kurlyHeader.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
  },
  {
    title: "Kurly ProductTimer",
    description: "마켓컬리의 카테고리 영역을 마크업한 결과물입니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/kurlyProductTimer.png`,
    projectLink: `${process.env.PUBLIC_URL}/kurly/kurlyProductTimer/timeProduct.html`,
    githubLink: "https://github.com/gaebonglee/kurly.git",
  },
  {
    title: "Kurly Category",
    description:
      "마켓컬리의 일일특가 상품 영역을 마크업한 결과물입니다. 24시간마다 시간이 리셋됩니다.",
    period: "2024.06.28 ~ 2024.07.01",
    tech: "HTML5, CSS3, JavaScript",
    mywork: "HTML 마크업, CSS 스타일링, JavaScript 기능구현",
    image: `${process.env.PUBLIC_URL}/image/project/kurlyCategory.png`,
    projectLink:
      "https://gaebonglee.github.io/myportfolio/kurly/kurlyCategory/category.html",
    githubLink: "https://github.com/gaebonglee/kurly.git",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.classList.add("right_to_center");
            imgRef.current.classList.remove("center_to_right");
          } else {
            imgRef.current.classList.add("center_to_right");
            imgRef.current.classList.remove("right_to_center");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <section className="Projects_section">
      <div className="pages">
        <div className="project_container">
          <div className="project_titleWrap">
            <img
              src={`${process.env.PUBLIC_URL}/image/project/projectsIcon.png`}
              alt="projectsIcon"
              ref={imgRef}
              className="projectsIcon"
            />
          </div>
          <div className="BrowserWindow">
            <div className="contentsTap">
              <div className="tapWrap">
                <p>Projects_explanation</p>
                <div className="Browser_iconWrap">
                  <a>
                    <FaRegWindowMinimize />
                  </a>
                  <a>
                    <FaRegWindowRestore />
                  </a>
                  <a>
                    <RiCloseLargeFill />
                  </a>
                </div>
              </div>
            </div>
            <div className="backgroundColor">
              <div className="productDetail_wrap">
                <div className="product detailWrap">
                  <div className="imgfile">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                    />
                  </div>
                  <div className="explanation">
                    <h3>{selectedProject.title}</h3>
                    <div className="explanation_inner description">
                      <p>{selectedProject.description}</p>
                    </div>
                    <div className="explanation_inner period">
                      <h4># Period : </h4>
                      <a>{selectedProject.period}</a>
                    </div>
                    <div className="explanation_inner tech">
                      <h4># Tech: </h4>
                      <a>{selectedProject.tech}</a>
                    </div>
                    <div className="explanation_inner mywork">
                      <h4># My Work :</h4>
                      <a>{selectedProject.mywork}</a>
                    </div>
                    <div className="linkWrap">
                      <a href={selectedProject.githubLink}>Source</a>
                      <a href={selectedProject.projectLink}>Demo</a>
                    </div>
                  </div>
                </div>

                <div className="product slideWrap">
                  <button>
                    <IoMdArrowDropleftCircle />
                  </button>
                  <div className="projectCards">
                    {projects.map((project, index) => (
                      <div
                        key={index}
                        className="projectCard"
                        onClick={() => setSelectedProject(project)}
                      >
                        <img src={project.image} alt={project.title} />
                      </div>
                    ))}
                  </div>
                  <button>
                    <IoMdArrowDroprightCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

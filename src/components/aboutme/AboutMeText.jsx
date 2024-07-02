import React, { useEffect, useRef } from "react";
import "../../style/main.scss";

// 아이콘
import { FaRegWindowMinimize } from "react-icons/fa";
import { FaRegWindowRestore } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

const skills = [
  {
    name: "HTML5",
    level: 80,
    image: `${process.env.PUBLIC_URL}/image/aboutme/htmlIcon.png`,
  },
  {
    name: "CSS3",
    level: 80,
    image: `${process.env.PUBLIC_URL}/image/aboutme/cssIcon.png`,
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

const AboutMeText = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            imgRef.current.classList.add("left_to_center");
            imgRef.current.classList.remove("center_to_left");
          } else {
            imgRef.current.classList.add("center_to_left");
            imgRef.current.classList.remove("left_to_center");
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
    <div className="AboutMeText_container">
      <div className="AboutMeText_titleWrap">
        <img
          src={`${process.env.PUBLIC_URL}/image/aboutme/aboutmeLogo.png`}
          alt="aboutmeLogo"
          ref={imgRef}
          className="aboutmeLogo"
        />
      </div>
      <div className="AboutMeText_infoWrap">
        <div className="faceImg">
          <img
            src={`${process.env.PUBLIC_URL}/image/aboutme/Meepng.png`}
            alt="Me"
          />
        </div>
        <div className="BrowserWindow">
          <div className="contentsTap">
            <div className="tapWrap">
              <p>Information</p>
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
            <div className="infoText_wrap">
              <div className="info name">
                <a>이가영</a>
                <a>1998.01.21</a>
                <a>Kyunggi Univ.</a>
              </div>
              <div className="info email">
                <a>2gayoung.2da@gmail.com</a>
              </div>
              <div className="info github">
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
        <img
          src={`${process.env.PUBLIC_URL}/image/intro/click.png`}
          alt="clickIcon"
          className="clickIcon"
        />
      </div>
      <div className="AboutMeText_descriptionWrap">
        <div className="BrowserWindow">
          <div className="contentsTap">
            <div className="tapWrap">
              <p>Description</p>
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
          <div className="description_wrap">
            <div className="backgroundColor">
              <div className="textContents">
                <h2>안녕하세요! 주니어 프론트엔드 개발자 이가영입니다.</h2>
                <p>
                  입체조형학과에서 창의적이고 세심한 디자인 감각을 키웠습니다.
                </p>
                <p>
                  디지털 시대에 더 넓은 영향력을 발휘하고 싶다는 생각에 웹
                  개발에 관심을 가지게 되었고,
                </p>
                <p>
                  프론트엔드 개발을 통해 디자인과 기술을 결합한 최고의 UX를
                  제공하고자 합니다.
                </p>
                <p>
                  다양한 도전과 경험을 통해 쌓은 기술 스택을 바탕으로, 더 많은
                  사람들에게
                </p>
                <p>가치를 전달하는 프론트엔드 개발자가 되고 싶습니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="BrowserWindow">
          <div className="contentsTap">
            <div className="tapWrap">
              <p>Skills</p>
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
          <div className="skills_wrap">
            <div className="backgroundColor">
              <div className="textContents">
                <div className="skills_icons">
                  {skills.map((skill, index) => (
                    <div className="skill_icon" key={index}>
                      <img src={skill.image} alt={skill.name} />
                      <div className="skill_level">{`${skill.level}%`}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeText;

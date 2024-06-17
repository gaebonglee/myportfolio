import React from "react";
import "../style/Intro.scss";

const Intro = () => {
  return (
    <div className="pages">
      <section className="intro_container">
        <div className="animated-background"></div>
        <div className="intro_contentWrap">
          <div className="intro_title">
            <h2>Welcome to Gayoung's Portfolio!</h2>
          </div>
          <div className="intro_textWrap">
            <h3>안녕하세요! 주니어 프론트엔드 개발자 이가영입니다.</h3>
            <p>입체조형학과에서 창의적이고 세심한 디자인 감각을 키웠습니다.</p>
            <p>
              디지털 시대에 더 넓은 영향력을 발휘하고 싶다는 생각에 웹 개발에
              관심을 가지게 되었고,
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
      </section>
    </div>
  );
};

export default Intro;

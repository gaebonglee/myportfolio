import React from "react";
import BackImage from "../components/intropage/BackImage";
import IntroText from "../components/intropage/IntroText";
import FrontImage from "../components/intropage/FrontImage";

const Intro = () => {
  return (
    <section className="Intro_section" style={{ position: "relative" }}>
      <div className="pages">
        <BackImage />
        <IntroText />
        <FrontImage />
      </div>
    </section>
  );
};

export default Intro;

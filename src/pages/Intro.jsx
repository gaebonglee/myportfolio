import React from "react";
import BackImage from "../components/intropage/BackImage";
import IntroText from "../components/intropage/IntroText";
import FrontImage from "../components/intropage/FrontImage";
import "../style/Intro.scss";

const Intro = () => {
  return (
    <div className="IntroPage">
      <div className="pages">
        <BackImage />
        <IntroText />
        <FrontImage />
      </div>
    </div>
  );
};

export default Intro;

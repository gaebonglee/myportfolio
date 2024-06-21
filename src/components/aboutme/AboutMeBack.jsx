import React from "react";
import "../../style/AboutMeBack.scss";

const AboutMeBack = () => {
  return (
    <div className="BackImage_container">
      <div className="BackImageWrap">
        <div className="Image_back">
          <img
            src={`${process.env.PUBLIC_URL}/image/intro/glitter2.png`}
            className="iconimg glitter2"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/intro/ribbon2.png`}
            className="iconimg glitter1"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeBack;

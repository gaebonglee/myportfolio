import React from "react";
import "../../style/BackImage.scss";

const BackImage = () => {
  return (
    <div className="BackImage_container">
      <div className="BackImageWrap">
        <div className="Image_back">
          <img
            src={`${process.env.PUBLIC_URL}/image/intro/y2k_1.png`}
            className="iconimg y2k_1"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image/intro/glitter1.png`}
            className="iconimg glitter1"
          />
        </div>
      </div>
    </div>
  );
};

export default BackImage;

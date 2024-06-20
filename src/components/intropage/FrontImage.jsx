import React from "react";
import "../../style/FrontImage.scss";

const FrontImage = () => {
  return (
    <div className="FrontImage_container">
      <div className="imageWrap">
        <img
          src={`${process.env.PUBLIC_URL}/image/intro/heart2.png`}
          className="iconimg heart2"
        />
        <img
          src={`${process.env.PUBLIC_URL}/image/intro/flower1.png`}
          className="iconimg flower1"
        />
      </div>
    </div>
  );
};

export default FrontImage;

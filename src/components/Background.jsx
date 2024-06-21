import React from "react";
import "../style/Background.scss";

const Background = () => {
  return (
    <div className="gradient_background">
      <img
        src={`${process.env.PUBLIC_URL}/image/background/cloud2.png`}
        alt="Cloud"
        className="cloudwrap cloud2"
      />
      <img
        src={`${process.env.PUBLIC_URL}/image/background/cloud3.png`}
        alt="Cloud"
        className="cloudwrap cloud3"
      />
      <img
        src={`${process.env.PUBLIC_URL}/image/background/cloud4.png`}
        alt="Cloud"
        className="cloudwrap cloud4"
      />
      <img
        src={`${process.env.PUBLIC_URL}/image/background/cloud5.png`}
        alt="Cloud"
        className="cloudwrap cloud5"
      />
    </div>
  );
};

export default Background;

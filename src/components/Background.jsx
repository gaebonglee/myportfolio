import React from "react";
import "../style/Background.scss";

const Background = () => {
  return (
    <div className="gradient-background">
      <img
        src={`${process.env.PUBLIC_URL}/image/background/cloud1.png`}
        alt="Cloud"
        className="cloud"
      />
    </div>
  );
};

export default Background;

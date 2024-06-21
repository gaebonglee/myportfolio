import React from "react";
import AboutMeBack from "../components/aboutme/AboutMeBack";
import AboutMeText from "../components/aboutme/AboutMeText";

const AboutMe = () => {
  return (
    <section className="AboutMe_section">
      <div className="pages">
        <AboutMeBack />
        <AboutMeText />
      </div>
    </section>
  );
};

export default AboutMe;

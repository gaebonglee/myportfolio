import React from "react";
import Background from "./components/Background";
import Intro from "./pages/Intro";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <div className="Portfolio_container">
      <Background />
      <Intro />
      <AboutMe />
    </div>
  );
};

export default App;

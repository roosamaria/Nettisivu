import React from "react";
import "./App.css";
import Intro from "./layout/Intro";
import Contact from "./layout/Contact";
import About from "./layout/About";
import MySkills from "./layout/MySkills";
import MyProjects from "./layout/MyProjects";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="container">
      <Intro />
      <Contact />
      <div className="boxi section">
        <MySkills />
        <MyProjects />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;

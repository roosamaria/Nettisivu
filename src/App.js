import React from "react";
import "./App.css";
import Intro from "./layout/Intro";
import Contact from "./layout/Contact";
import About from "./layout/About";
import MySkills from "./layout/MySkills";
import MyProjects from "./layout/MyProjects";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./layout/Header";

function App() {
  return (
    <Router>
      <div className="container">
        <Header branding="Roosa Sipari" />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Intro />
            <Contact />
            <div className="boxi section">
              <MySkills />
              <MyProjects />
            </div>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

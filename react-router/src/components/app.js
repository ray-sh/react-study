import React from "react";
import HomePage from "./homepage";
import AboutPage from "./about";
import Header from "../api/common/header";
import CoursePage from "../coursepage";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursePage} />
    </div>
  );
}

export default App;

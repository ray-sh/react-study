import React from "react";
import HomePage from "./homepage";
import AboutPage from "./about";
import Header from "../api/common/header";
import CoursePage from "../coursepage";
function App() {
  const url = window.location.pathname;
  //所有的url都会返回index.html,所以不过有404
  return (
    <div className="container-fluid">
      <Header />
      {url === "/about" ? <AboutPage /> : <HomePage />}
      <CoursePage></CoursePage>
    </div>
  );
}

export default App;

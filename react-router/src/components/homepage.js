import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="jumbotron">
      <h1>self learning</h1>
      <p>Flux, react router study</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

//TODO：学习export的语法
export default HomePage;

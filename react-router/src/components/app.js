import React from "react";
import HomePage from "./homepage";
import AboutPage from "./about";
import Header from "../api/common/header";
import CoursePage from "../coursepage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./notfound";
function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

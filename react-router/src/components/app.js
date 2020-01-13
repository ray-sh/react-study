import React from "react";
import HomePage from "./homepage";
import AboutPage from "./about";
import Header from "../api/common/header";
import CoursePage from "../coursepage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./notfound";
import ManageCourse from "./managecourse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursePage} />
        <Redirect from="/old-courses" to="/courses" />
        <Route path="/course/:slug" component={ManageCourse} />
        <Route path="/course" component={ManageCourse} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

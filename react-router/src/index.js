//create-react-app 可以直接在js里面倒入css,因为webpack的支持
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import HomePage from "./components/homepage.js";

// v1 STAR MATCH - Starting Template

render(<HomePage />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

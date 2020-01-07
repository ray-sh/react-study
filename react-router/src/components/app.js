import React from "react";
import HomePage from "./homepage";
import AboutPage from "./about";

function App() {
  const url = window.location.pathname;
  //所有的url都会返回index.html,所以不过有404
  if (url === "/about") return <AboutPage />;
  return <HomePage />;
}

export default App;

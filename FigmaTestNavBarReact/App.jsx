import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|1_3123)">
          <NavBar {...navBarData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const navBarData = {
    page1: "https://anima-uploads.s3.amazonaws.com/projects/62abb87cb441e61881a21d65/releases/62abbad139cccaed002f0719/img/page-1-1@2x.png",
    spanText1: "Home",
    spanText2: "Home",
    rectangle9: "https://anima-uploads.s3.amazonaws.com/projects/62abb87cb441e61881a21d65/releases/62abbad139cccaed002f0719/img/rectangle-9-1@2x.png",
    spanText3: "Buy",
    spanText4: "Sell",
    spanText5: "Rent",
    spanText6: "Project",
    spanText7: "Agenct",
    spanText8: "Loan",
    spanText9: "Login",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/62abb87cb441e61881a21d65/releases/62abbad139cccaed002f0719/img/rectangle-7-1@2x.png",
    rectangle8: "https://anima-uploads.s3.amazonaws.com/projects/62abb87cb441e61881a21d65/releases/62abbad139cccaed002f0719/img/rectangle-8-1@2x.png",
    spanText10: "Post Property   ",
    spanText11: "Free",
};


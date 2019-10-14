import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Login from "../Login/Login";
import Home from "../Home/Home";
import AboutUs from "../AboutUs/AboutUs";
import Signup from "../Signup/Signup";
import Rewards_Profile from "../Rewards/Rewards_Profile";

const Routing = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/about" component={AboutUs} />{" "}
        <Route path="/login" component={Login} />{" "}
        <Route path="/rewards" component={Rewards_Profile} />{" "}
        <Route path="/signup" component={Signup} />{" "}
      </Switch>{" "}
    </div>
  );
};

export default Routing;
import React from "react";
import Route from "react-router-dom/Route";
import WelcomeComponent from "./../components/welcomeComponent";
import LoginComponent from "../components/loginComponent";
import RegisterComponent from "../components/registerComponent";

const RootRouter = () => {
  return (
    <div className="App">
      {/**
        Adding Welcome page on path="/"
      */}
      <Route path="/" exact component={() => <WelcomeComponent />} />

      {/**
        Adding Login path
      */}
      <Route path="/login" exact component={() => <LoginComponent />} />

      {/**
        Adding Register path
      */}
      <Route path="/register" exact component={() => <RegisterComponent />} />
    </div>
  );
};

export default RootRouter;

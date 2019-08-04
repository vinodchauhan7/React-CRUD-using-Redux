import React from "react";
import Route from "react-router-dom/Route";
import WelcomeComponent from "./../components/welcomeComponent";
import LoginComponent from "../components/loginComponent";
import RegisterComponent from "../components/registerComponent";
import DashBoardComponent from "../components/dashBoardComponent";
import UpdateComponent from "../components/updateComponent";
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
      {/**
        Adding DashBoard path
      */}
      <Route path="/dashboard" exact component={() => <DashBoardComponent />} />
      {/**
        Adding DashBoard path
      */}
      <Route path="/update" exact component={() => <UpdateComponent />} />
    </div>
  );
};

export default RootRouter;

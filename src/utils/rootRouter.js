import React from "react";
import Route from "react-router-dom/Route";
import WelcomeComponent from "./../components/welcomeComponent";

const RootRouter = () => {
  return (
    <React.Fragment>
      <Route path="/" exact component={() => <WelcomeComponent />} />
    </React.Fragment>
  );
};

export default RootRouter;

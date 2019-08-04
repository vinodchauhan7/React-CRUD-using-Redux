import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";
import RootRouter from "./utils/rootRouter";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";

//import createStore and Provider from redux;

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./store/mainReducer";

//creating store to save state
const store = createStore(reducer);

function App() {
  return (
    <div>
      <div className="text-center heading-form">
        <h1>Redux CRUD</h1>
        <p>Creating react crud app using Redux</p>
      </div>
      {/**
    In our first lesson, we will add router to our app.
    To add it, first of all add dependency on CLI using 
    command "npm install react-router-dom --save".
    */}
      {/** This <Router> is used for adding routing in our app.
      So it must added in root of our app.
    */}

      <Router>
        <RootRouter />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

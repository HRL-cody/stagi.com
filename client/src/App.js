import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Layout/Landing";
import Navbar from "./components/Layout/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route extact path="/" component={Landing} />
      </Fragment>
    </Router>
  );
}

export default App;

import React, { Fragment  } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Layout/Landing";
import Navbar from "./components/Layout/Navbar";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
const App = () => {
  return(
<Router>
      <Fragment>
        <Navbar />
        <Route  path="/" exact component ={Landing} />
        <section className="container">
          <Switch>
            <Route  path="/Register" exact component ={Register} />
            <Route  path="/Login" exact component ={Login} />
          </Switch>
        </section>
      </Fragment>
    </Router> 
  )
    
}

export default App;

import React from "react";
import "./Landing.css";

const Menu = () => {
  return (
    <div>
      <div className="header-dark" style={{ width: "85rem", height: "45rem" }}>
        <nav className="navbar navbar-dark navbar-expand-lg navigation-clean-search">
          <div className="container">
            <a className="navbar-brand" href="www.google.com">
              STAGI
            </a>
            <button
              data-toggle="collapse"
              data-target="#navcol-1"
              className="navbar-toggler"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <form className="form-inline mr-auto" target="_self"></form>
              <span className="navbar-text">
                <a className="login" href="www.google.com">
                  Log In
                </a>
              </span>
              <a
                className="btn btn-sucsess action-button"
                role="button"
                href="www.google.com"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
        <div className="container hero">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h1 className="text-center">Start your Carer Here.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menu;

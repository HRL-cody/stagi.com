import React from "react";
import "./Layout.css";

const Menu = () => {
  return (
    <div className="ALL">
      <div className="header-dark">
        <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <a className="navbar-brand" href="www.google.com">
              Stagi TN
            </a>
          <div className="container">
            
            <div className="collapse navbar-collapse" id="navcol-1">
              <form className="form-inline mr-auto" target="_self"></form>
              <span className="navbar-text">
                <a href="www.google.com" className="login">
                  Log In
                </a>
              </span>
              <a
                className="btn btn-light action-button"
                role="button"
                href="www.google.com"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Menu;

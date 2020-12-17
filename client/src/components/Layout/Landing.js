import React from 'react'
import {Link} from 'react-router-dom';
const Landing = () => {
    return (
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Stagi TN</h1>
            <p className="lead">
              Search for Your tranee here
            </p>
            <div className="buttons">
              <Link to="/Register" className="btn btn-primary">Sign Up</Link>
              <Link to="/Login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
    );
};
export default Landing;
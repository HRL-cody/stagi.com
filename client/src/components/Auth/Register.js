import React, { Fragment, useState } from "react";
import './Form.css'
const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password:''
    });

    const {name , email , password} = formData;
  return (
    <Fragment>
      <div className="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
        <div className="wrapper wrapper--w680">
          <div className="card card-1">
            <div className="card-heading" />
            <div className="card-body">
              <h2 className="title">Registration Info</h2>
              <form method="POST">
                <div className="input-group">
                  <input
                    className="input--style-1"
                    type="text"
                    placeholder="NAME"
                    name="name"
                  />
                </div>
                <div className="input-group">
                <label for="email">Enter your @exemple.com email:</label>

<input type="email" id="email"
        size="50" required></input>

                </div>
                <div className="row row-space">
                  <div className="col-2">
                    <div className="input-group">
                    <form action="action">
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday"></input>
  
</form>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <div className="rs-select2 js-select-simple select--no-search">
                        <select name="gender">
                          <option disabled="disabled" selected="selected">
                            Gender
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                        <div className="select-dropdown" />
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="input-group">
                      <div className="rs-select2 js-select-simple select--no-search">
                        <select name="gender">
                          <option disabled="disabled" selected="selected">
                            Type
                          </option>
                          <option>Student</option>
                          <option>Company</option>
                        </select>
                        <div className="select-dropdown" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-t-20">
                  <button className="btn btn--radius btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Register;

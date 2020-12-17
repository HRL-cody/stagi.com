import React, { Fragment, useState } from "react";
// import axios from "axios"
import {Link} from "react-router-dom"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2:"",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = async e  => {
      e.preventDefault();
      if(password !== password2){
        console.log("pass not match")
      }else{
        console.log("nice")
        // const newUser = {
        //   name,
        //   email,
        //   password
        // }
        // try {
        //   const config = {
        //     headers: {
        //       'content-Type': 'application/json'
        //     }
        //   }

        //   const body = JSON.stringify(newUser);

        //   const res = await axios.post('/api/users' , body , config);
        //   console.log(res.data)
        // } catch (err) {
        //   console.error(err.response.data);
        // }
      }
    };
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <form className="form" onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input type="text" placeholder="Name" name="name" value={name} onChange= {e => onChange(e)} required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" name="email"
            value={email}
            onChange={e => onChange(e)}
            required />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="8"
              value={password}
              onChange={e => onChange(e)}

              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="8"
              value={password2}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="/Login">Sign In</Link>
        </p>
      </section>
    </Fragment>
  );
};
export default Register;

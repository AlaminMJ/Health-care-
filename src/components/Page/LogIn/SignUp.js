import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

const SignUp = () => {
  return (
    <div className="log__in">
      <div className="content py-3">
        <form className="py-2 px-4">
          <h2 className="text-center mt-3">Sign Up</h2>

          <p className="text-center">or</p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
          <h6 className="text-center my-3">
            Already have an Account ?
            <span className="text-primary">
              <Link to="/login"> Log In</Link>
            </span>
          </h6>
        </form>
        <div className="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl_Ws5zWfCk7GcPOalt_rEjt27p8wHvFD4TQ&usqp=CAU"
            alt="singup img"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
  const { logInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handelGoogleLogin = () => {
    logInWithGoogle().then(() => {
      if (location.state) {
        history.push(location.state);
      } else {
        history.push("/");
      }
    });
  };

  return (
    <div className="log__in ">
      <div className="content py-3">
        <div className="img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABM7Movo-HUZ4gC9DDNeUYu7iFc71yvt5UoC4ZXz-JdMe872pBH2qX0-Li0pNAPS-FiQ&usqp=CAU"
            alt=" log img"
          />
        </div>
        <form
          className="py-2 px-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="text-center mt-3">Log In</h2>
          <div className="log_in_with_social">
            <button className="btn btn-primary px-4">Facebook</button>
            <button className="btn btn-danger px-4" onClick={handelGoogleLogin}>
              Google
            </button>
          </div>
          <p className="text-center">or</p>
          <form>
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
              Log In
            </button>
          </form>
          <h6 className="text-center my-3">
            Not member ?
            <span className="text-primary">
              <Link to="/signup"> Sing Up</Link>
            </span>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default LogIn;

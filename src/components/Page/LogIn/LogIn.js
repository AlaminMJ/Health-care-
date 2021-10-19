import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./LogIn.css";

const LogIn = () => {
  const { logInWithGoogle, logInWithEmail, logInWithFacebook } = useAuth();
  const [error, setError] = useState("");
  const location = useLocation();
  const history = useHistory();
  const handelGoogleLogin = () => {
    logInWithGoogle()
      .then(() => {
        if (location.state?.from) {
          history.push(location?.state?.from);
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  const handelFacebookLogin = () => {
    logInWithFacebook()
      .then(() => {
        if (location.state?.from) {
          history.push(location?.state?.from);
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    logInWithEmail(email, password)
      .then(() => {
        if (location.state?.from) {
          history.push(location?.state?.from);
        } else {
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
        <form className="py-2 px-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mt-3">Log In</h2>
          <div className="log_in_with_social">
            <button
              className="btn btn-primary px-4"
              onClick={handelFacebookLogin}
            >
              Facebook
            </button>
            <button className="btn btn-danger px-4" onClick={handelGoogleLogin}>
              Google
            </button>
          </div>
          <p className="text-center">or</p>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", {
                required: { value: true, message: "Email is Requared" },
              })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", {
                required: true,
                minLength: { value: 6, message: "Password must 8 degite" },
              })}
            />
          </div>
          <p className="text-danger">{error ? error : " "}</p>

          <button type="submit" className="btn btn-primary">
            Log In
          </button>

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

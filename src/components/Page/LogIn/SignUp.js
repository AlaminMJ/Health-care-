import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./LogIn.css";

const SignUp = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const { createUser, updateUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    createUser(email, password)
      .then(() => {
        history.push("/");
      })

      .catch((error) => {
        setError(error.message);
      });
    updateUser();
  };
  return (
    <div className="log__in">
      <div className="content py-3">
        <form className="py-2 px-4" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mt-3">Sign Up</h2>

          <p className="text-center">or</p>

          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              {...register("name", {
                required: { value: true, message: "Name field is Requared" },
              })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    "/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/",
                  message: "Invalid Email Address",
                },
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
                maxLength: { value: 6, message: "Password minimum 6 chareter" },
              })}
            />
          </div>
          <p className="text-danger"> {error ? error : ""}</p>
          <input
            type="submit"
            className="btn btn-primary px-5"
            value=" Sign Up"
          />

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

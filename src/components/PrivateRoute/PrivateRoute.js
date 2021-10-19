import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  let { user, isLoading } = useAuth();
  if (isLoading) {
    return (
      <>
        <div className="d-flex justify-content-center p-5">
          <h5 className="mx-auto mt-5 d-block">Loading...</h5>
        </div>
      </>
    );
  } else {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  }
}
export default PrivateRoute;

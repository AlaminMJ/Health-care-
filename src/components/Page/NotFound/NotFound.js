import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/404.svg";
const NotFoundPage = () => {
  return (
    <div>
      <img src={img} alt="Notfound" className="d-block mx-auto h-75" />
      <div className=" d-flex justify-content-center">
        <Link to="/">
          <button className="btn btn-primary px-5 mt-2">Back Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

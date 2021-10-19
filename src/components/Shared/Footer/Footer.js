import React from "react";
import "./Footer.css";
import logo from "../../images/logo-2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-dark  text-white footer">
      <div className="container">
        <div className="row py-4">
          <div className="col-sm-6 col-lg-3">
            <div className="my-3">
              <img src={logo} alt="logo" />
            </div>
            <ul className="list-unstyled fs-6">
              <li>Office No 3456</li>
              <li>info@example.com</li>
              <li>234-5825852763</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4 className="my-3">Our DepartMent</h4>
            <ul className="list-unstyled">
              <li>Hounlare & intensive care</li>
              <li>Home care</li>
              <li>Caregivers</li>
              <li>Diagnosis & Investigation</li>
              <li>Madical & Surgical</li>
              <li>Mental health</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4 className="my-3">Helpful Links</h4>
            <ul className="list-unstyled">
              <li>Who we are</li>
              <li>Our team mission history</li>
              <li>Awards since 1990-2021</li>
              <li>Exprience purpose</li>
              <li>Success story</li>
              <li>specialized Support</li>
            </ul>
          </div>
          <div className="col-sm-6 col-lg-3">
            <h4 className="my-3">Gallary</h4>
            <ul className="list-unstyled">
              <li></li>
              <li>Home care</li>
              <li>Caregivers</li>
              <li>Diagnosis & Investigation</li>
              <li>Madical & Surgical</li>
              <li>Mental health</li>
              <li>specialized Support service</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row py-2 border-top">
        <div className="social d-flex justify-content-center align-items-center  mb-2">
          <div className="social_link">
            <FaFacebookF size={20} />
          </div>
          <div className="social_link">
            <FaTwitter size={20} />
          </div>
          <div className="social_link">
            <FaLinkedinIn size={20} />
          </div>
          <div className="social_link">
            <FaInstagram size={20} />
          </div>
        </div>
        <p className="text-center">
          @ 2021 <span className="text-primary">Alamin</span> all Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="banner about-banner">
        <div className="container">
          <div
            className="background-content"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h4 className="mt-5 text-danger display-4">About us</h4>
            <button className="btn btn-primary my-3 px-5">Learn more</button>
          </div>
        </div>
      </div>
      <div
        className="container py-5"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h5 className="text-danger mb-3">About us</h5>
        <h3 className="w-75">
          We assured to you that we will provide responsible treatment to you.
          It’s our duty for any <span className="text-danger"> patients</span> .
          You are welcome to HounLare medical & caregiver services center.
        </h3>
        <Link to="/contact">
          <button className="btn btn-primary my-3 px-5">Contact us</button>
        </Link>
      </div>
      <div className="home-about py-5">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 py-4">
              <img
                src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/about/about-02.jpg"
                alt="about-img"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <div
                className="content "
                data-aos="fade-up-left"
                data-aos-offset="300"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <h5 className="text-danger">About The HunLare</h5>
                <h2>
                  We’re lanced most{" "}
                  <span className="text-danger">powerful treatment system</span>
                  . They are making beautifully.
                </h2>
                <p>
                  Every patient getting best care from us. again is there anyone
                  who of itself, because it is pain, but because occasionally
                  circumstance procure him some great pleasure.
                </p>
                <div className="row mt-4">
                  <div className="col-2">
                    <img
                      src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/png-icon/png-icon-10.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <p>
                      Popular belief Lorem Ipsum is not simply random text. It
                      has roots in a piece of clasrs old Richard McClintock.
                    </p>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-2">
                    <img
                      src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/png-icon/png-icon-11.png"
                      alt=""
                    />
                  </div>
                  <div className="col-10">
                    <p>
                      Easy pament process belief Lorem Ipsum is not simply
                      random text. It has roots in a McClintock.
                    </p>
                  </div>
                </div>
                <button className="btn btn-primary my-3 px-5">Book now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

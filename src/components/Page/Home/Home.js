import React from "react";
import ServiceCard from "../../Shared/ServiceCard/ServiceCard";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="background-content">
            <h5>MEDICAL CENTER</h5>
            <h2>
              Best <span className="text-primary">Medical & </span>
              <br />
              Health care center
            </h2>
            <p>
              Pleasure, but because those who do not know how to pursue
              <br />
              pleasure rationally extremely painful.
            </p>
            <button className="btn btn-primary my-3 px-5">Learn more</button>
          </div>
        </div>
      </div>
      {/* Home About */}
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
              <div className="content">
                <h5 className="text-primary">About The HunLare</h5>
                <h2>
                  We’re lanced most
                  <span className="text-primary"> powerful treatment</span>
                  system. They are making beautifully.
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
      {/* Home About end*/}
      <div className="service py-5">
        <div className="container">
          <div className="container text-center">
            <h5 className="text-primary ">Our Services</h5>
            <h2 className="mt-4">HounLare professional services</h2>
            <p className="w-75 mx-auto my-4 lead">
              Why HounLare services is best all time since 1990. desires to
              obtain of itself, because it is pain, but because occasionally
              circumstance procure him some great deals.
            </p>
          </div>
          <div className="services-row">
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
            <ServiceCard></ServiceCard>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="row  img-banner">
        <div className="content">
          <h2 className="display-3 fw-bold">Enjoy a disease free life</h2>
        </div>
        <div>
          <img
            src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/about/about-04.jpg"
            alt="mother"
            className="img-fluid"
          />
        </div>
        <div>
          <img
            src="https://oilytheme.net/demo-html/2021/003/hounlare/assets/img/about/about-05.jpg"
            alt="doctor"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

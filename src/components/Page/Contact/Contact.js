import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container p-lg-5">
        <form className="row g-3 w-75 mx-auto my-2">
          <h2 className="text-center text-primary">
            Contact us or sent us your message
          </h2>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Number
            </label>
            <input type="number" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputPassword4"
              placeholder="abc@gmail.com"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="Subject"
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              massage
            </label>
            <textarea
              type="text"
              className="form-control"
              rows={6}
              id="inputAddress2"
              placeholder="Message"
            />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary px-5">
              Sent
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

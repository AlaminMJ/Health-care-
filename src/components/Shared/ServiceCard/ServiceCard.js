import React from "react";
import { Card } from "react-bootstrap";
import "./ServiceCart.css";

const ServiceCard = () => {
  return (
    <Card className="text-center ">
      <Card.Img
        variant="top"
        src="http://atriumhealthcare.com/images/bannerimg.png"
        className="img-fluid"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>
          <h6 className="py-2 ">Primary Health Care </h6>
        </Card.Title>
        <Card.Text>Some quick example text to build on the card</Card.Text>
        <button className=" btn btn-primary px-3">View Details</button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;

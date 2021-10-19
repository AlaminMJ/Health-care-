import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ServiceCart.css";

const ServiceCard = (props) => {
  console.log(props);
  const { service_id, service_img, service_name, service_datils } = props.data;
  return (
    <Card className="text-center ">
      <Card.Img
        variant="top"
        src={service_img}
        className="img-fluid"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>
          <h6 className="py-2 ">{service_name}</h6>
        </Card.Title>
        <Card.Text>{service_datils.slice(0, 60)}</Card.Text>
        <Link to={`/service/${service_id}`}>
          <button className=" btn btn-primary px-3">View Details</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;

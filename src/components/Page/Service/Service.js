import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Service = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((json) => json.json())
      .then((data) =>
        setService(data.filter((service) => service.service_id === id))
      );
  }, []);

  return (
    <div className="py-5">
      <h1 className="display-1 text-center">Service </h1>
      <div className="container">
        <div class="card">
          <img
            src={service[0]?.service_img}
            class="card-img-top "
            style={{height:"500px",objectFit:'cover'}}
            alt="service"
          />
          <div class="card-body">
            <h2 class="card-title display-3 ">{service[0]?.service_name}</h2>
            <p class="fs-4 ">{service[0]?.service_datils}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

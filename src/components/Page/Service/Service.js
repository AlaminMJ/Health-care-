import { useParams } from "react-router-dom";

const Service = () => {
  const { id } = useParams();

  return (
    <div className="py-5">
      <h1 className="display-1 text-center">Service {id} </h1>
      <div className="container">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Service;

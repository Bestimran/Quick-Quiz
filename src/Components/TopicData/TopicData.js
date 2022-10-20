import React from "react";
import { Link } from "react-router-dom";
import "./TopicData.css";

const TopicData = ({ topic }) => {
  const { name, logo, id} = topic;
  return (
    <div className="Topic container mt-5">
      <img src={logo} alt="" />
      <div className="name d-flex justify-content-between">
        {name}
        <Link to={`/topic/${id}`}><button className="btn btn-info fw-bold">
          start practice <i class="fa-solid fa-arrow-right"></i>
        </button></Link>
      </div>
    </div>
  );
};

export default TopicData;

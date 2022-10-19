import React from "react";
import "./TopicData.css";

const TopicData = ({ topic }) => {
  const { name, logo } = topic;
  return (
    <div className="Topic">
      <img src={logo} alt="" />
    </div>
  );
};

export default TopicData;

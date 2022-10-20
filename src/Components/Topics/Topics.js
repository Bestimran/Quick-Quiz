import React from "react";
import './Topics';
import { useLoaderData } from "react-router-dom";
import TopicData from "../TopicData/TopicData";

const Topics = () => {
  const topics = useLoaderData();
  return (
    <div className="imran">
      {topics.data.map((topic) => (
        <TopicData key={topic.id} topic={topic}></TopicData>
      ))}
    </div>
  );
};

export default Topics;

import React from "react";
import { useLoaderData } from "react-router-dom";
import TopicData from "../TopicData/TopicData";

const Topics = () => {
  const topics = useLoaderData();
  console.log(topics)
  return (
    <div>
      {topics.data.map((topic) => (
        <TopicData 
        key={topic.id} 
        topic={topic}></TopicData>
      ))}
    </div>
  );
};

export default Topics;

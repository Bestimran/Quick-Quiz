import React from "react";
import img from "../../image/Screenshot_1.png";
import "./Home.css";
const Home = () => {
  return (
    <div className=" home-page container mt-5 d-flex ">
     <div className="home-section">
          <h1>It's time to Learn Web Developing!!</h1>
          <h4>if would you like to enjoy your life start web developing!!!</h4>
          <button>Learn more</button>
        </div>
        <img src={img} alt="" />
    </div>
  );
};

export default Home;

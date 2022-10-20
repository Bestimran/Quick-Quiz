import React, { useState } from "react";
import Option from "../Option/Option";
import "./Ques.css";

const Ques = ({ questions }) => {
    const { correctAnswer, options, question } = questions;
    const [option, setOptioin] = useState(true);
    const functionShow = () =>{
      setOptioin(!option)
    }
    const userAnswer =(option)=>{
        if(correctAnswer === option){
            alert('Correct answer');
        }
        else{
            alert('Ops, you are wrong!!!');
        }
    }

  
  return (
    <div className="option">
      {question}
      {options.map((option, idx) => (
        <Option 
        key={idx} 
        option={option} 
        userAnswer={userAnswer}
        
        ></Option>
      ))}
      <button onClick={functionShow} className="btn btn-danger ">Show correct</button>
      {option ? undefined : correctAnswer}
    </div>
  );
};

export default Ques;

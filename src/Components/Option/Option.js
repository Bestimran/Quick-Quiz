import React from 'react';

const Option = ({option, userAnswer}) => {
        
    return (
        <div>
            <button onClick={()=>userAnswer(option)}>{option}</button>
            
        </div>
    );
};

export default Option;
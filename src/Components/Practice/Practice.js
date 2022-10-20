import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Ques from '../Ques/Ques';

const Practice = () => {
    const practice = useLoaderData();
    const {total,questions, id, name} = practice.data;
    // console.log(practice.data.)
    return (
        <div className='container'>
            <h1>Name:{name}</h1>
            <h4>Total Quiz : {total}</h4>
            {
                questions.map(question => <Ques
                key={id}
                questions={question}
                ></Ques>)
            }
        </div>
    );
};

export default Practice;
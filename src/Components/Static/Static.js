import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Static = () => {
    const tatic = useLoaderData();
     const {name,total} = tatic
    return (
        
           <ResponsiveContainer width="100%" height={200}>

          
            <LineChart
            width={1000}
            height={200}
            data={`${name}`}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={tatic.name} />
            <YAxis />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey={tatic.total} stroke="#8884d8" fill="#8884d8" />
          </LineChart>
          </ResponsiveContainer>
       
    );
};

export default Static;
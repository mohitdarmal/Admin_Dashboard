import React from "react";
import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line } from "recharts";
import "./BarChart.css"

const BarChart = () => {

    const data = [
        {
          "name": "",
          "uv": 50,
          "pv": 100,          
        },
        {
          "name": "Man",
          "uv": 30,
          "pv": 70,          
        },
        {
          "name": "Tue",
          "uv": 90,
          "pv": 140,          
        },
        {
          "name": "Wed",
          "uv": 50,
          "pv": 100,          
        },
        {
          "name": "Thu",
          "uv": 150,
          "pv": 200,          
        },
        {
          "name": "Fri",
          "uv": 50,
          "pv": 100,          
        },
        {
          "name": "Thu",
          "uv": 150,
          "pv": 200,                       
        }
        ,
        {
          "name": "Sun",
          "uv": 50,
          "pv": 100,          
        }
      ]
      
                                  
      

    return(
        <>
        <ResponsiveContainer width="90%" aspect={3}>
            <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" interval={'preservStarEnd'} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      </LineChart>
      </ResponsiveContainer>
        </>
    )
}

export default BarChart;
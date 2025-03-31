import React from "react";
import { FiUser } from "react-icons/fi";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
  } from 'recharts';

const data = [
    {
      name: 'Sunday',
      expected: 72,
      actual: 66,
      amt: 2400,
    },
    {
      name: 'Monday',
      expected: 182,
      actual: 157,
      amt: 2210,
    },
    {
      name: 'Tuesday',
      expected: 124,
      actual: 134,
      amt: 2290,
    },
    {
      name: 'Wednesday',
      expected: 101,
      actual: 123,
      amt: 2000,
    },
    {
      name: 'Thursday',
      expected: 98,
      actual: 88,
      amt: 2181,
    },
    {
      name: 'Friday',
      expected: 87,
      actual: 92,
      amt: 2500,
    },
    {
      name: 'Saturday',
      expected: 65,
      actual: 84,
      amt: 2100,
    },
];



const TrafficGraph: React.FC = () => {
    return (
        //to do: setup backend logic 
        <div className="col-span-8 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUser/> Weekly Traffic
                </h3>
            </div>

            {/* Graph */}
            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis scale="linear" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="expected" stroke="#82ca9d" />
                </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default TrafficGraph;
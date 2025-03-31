import React from "react";
import { FiUser } from "react-icons/fi";

import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
} from 'recharts';

const data = [
    {
      name: 'Sunday',
      expected: 72,
      actual: 66,
    },
    {
      name: 'Monday',
      expected: 182,
      actual: 157,
    },
    {
      name: 'Tuesday',
      expected: 124,
      actual: 134,
    },
    {
      name: 'Wednesday',
      expected: 101,
      actual: 123,
    },
    {
      name: 'Thursday',
      expected: 98,
      actual: 88,
    },
    {
      name: 'Friday',
      expected: 87,
      actual: 92,
    },
    {
      name: 'Saturday',
      expected: 65,
      actual: 84,
    },
];



const TrafficGraph: React.FC = () => {
    return (
        //to do: setup backend logic 
        <div className="col-span-12 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUser/> Weekly Traffic
                </h3>
            </div>

            {/* Graph */}
            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                <LineChart width={500} 
                           height={400} 
                           data={data} 
                           margin={{
                            top: 0,
                            right: 0,
                            left: -24,
                            bottom: 0,}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name"
                           className="text-xs font-bold"
                           padding={{ right: 4 }}  />
                    <YAxis className="text-xs font-bold" />
                    <Tooltip wrapperClassName="text-sm rounded"
                             labelClassName="text-xs text-stone-500"/>
                    <Legend />
                    <Line type="monotone" 
                          dataKey="actual" 
                          stroke="#5C1419" />
                    <Line type="monotone" 
                          dataKey="expected" 
                          stroke="#82ca9d" />
                </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default TrafficGraph;
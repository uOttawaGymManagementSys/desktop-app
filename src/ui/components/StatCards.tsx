import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

const StatCards: React.FC = () => {
    return (
        //to implement props linked to backend
        <>
            <Card 
                title="April traffic"
                value="256"
                pillText="2.75%"
                trend="up"
                period="From Apr 1st - Apr 30th"/>
            <Card 
                title="Last week's traffic"
                value="120"
                pillText="1.01%"
                trend="down"
                period="From March 30th - Apr 5th"
            />
            <Card 
                title="Today's highest traffic"
                value="89"
                pillText="12.75%"
                trend="up"
                period="Previous 6 hours"
            />
        </>
    );
};

export default StatCards;

const Card = ({
    title,
    value,
    pillText,
    trend,
    period,
    
  }: {
    title: string;
    value: string;
    pillText: string; //percentage vs last month traffic
    trend: "up" | "down";
    period: string;
}) => {
    return <div className="p-4 col-span-4 rounded border border-stone-300">
        <div className="flex mb-5 items-start justify-between">
            <div>
                <h3 className="text-stone-500 mb-2 text-sm">
                    {title}
                </h3>
                <p className="text-3xl font-semibold">{value}</p>
            </div>

            <span className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded
                              ${
                                trend === "up" 
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                                }`}>
                {trend === "up" ? <FiTrendingUp/> : <FiTrendingDown/>}
                {pillText}
            </span>

        </div>
        <p className="text-xs items-start justify-between">{period}</p>
    </div>
};
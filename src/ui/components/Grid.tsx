import React from "react";
import StatCards from "./StatCards";
import TrafficGraph from "./TrafficGraph";

const Grid: React.FC = () => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            <StatCards/>
            <TrafficGraph/>
        </div>
    );
};

export default Grid;
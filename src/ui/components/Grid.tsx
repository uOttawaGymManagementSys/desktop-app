import React from "react";
import StatCards from "./StatCards";

const Grid: React.FC = () => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            <StatCards/>
        </div>
    );
};

export default Grid;
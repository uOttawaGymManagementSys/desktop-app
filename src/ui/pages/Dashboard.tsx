import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar/>
        <div className="w-full ml-24 md:ml-65">
          <Header/>
          <Outlet/>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

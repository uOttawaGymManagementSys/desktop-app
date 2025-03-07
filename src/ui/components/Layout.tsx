import React from 'react';
import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Outlet/>
    </div>
  );
};

export default Layout;

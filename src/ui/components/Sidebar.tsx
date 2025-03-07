import React from "react";

//icons
import {FaBusinessTime} from "react-icons/fa";
import {TbDeviceAnalytics} from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";
import { GiFirstAidKit, GiVacuumCleaner } from "react-icons/gi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import logomini from "../assets/logomini.svg";
import { Link } from "react-router-dom";


type SidebarLink = {
    id: number;
    path: string;
    name: string;
    icon: React.ElementType; // React component type for icons
  };



  
const Sidebar: React.FC = () => {

    const SIDEBAR_LINKS: SidebarLink[] = [
        { id: 1, path: "/", name: "Dashboard", icon: TbDeviceAnalytics },
        { id: 2, path: "/punchInOut", name: "Punch In-Out", icon: FaBusinessTime },
        { id: 3, path: "/equipmentInspection", name: "Equipment Inspection", icon: CiDumbbell },
        { id: 4, path: "/firstAid", name: "First-Aid Kit", icon: GiFirstAidKit },
        { id: 5, path: "/closingChecklist", name: "Closing Checklist", icon: GiVacuumCleaner },
        { id: 6, path: "/trafficCount", name: "Traffic Count", icon: FaArrowsDownToPeople },
      ];
      
    return (
        <div className="w-20 md:w-62 fixed left-0 top-0 z-10 h-screen pt-4 px-4 bg-white shadow-lg">
            {/* logo */}
            <div className="flex flex-col items-center mb-8">
                <img src={logo} alt="REC Full Logo" className="w-26 hidden md:flex"/>
                <img src={logomini} alt="REC Mini Logo" className="w-18 flex md:hidden"/>
            </div>
            {/* logo */}

            {/* Navigation Links */}
            <ul className="space-y-0.5">
                {SIDEBAR_LINKS.map((link) => (
                    <li key={link.id} className="font-medium px-2 py-2 rounded-md hover:bg-gray-100 hover:text-[#5C1419] transition-all whitespace-nowrap">
                        <Link to={link.path} className="flex items-center md:space-x-4">
                        <link.icon className="text-xl" /> 
                        <span className="hidden md:inline-block">{link.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            {/* Navigation Links */}
        </div>
    );
};

export default Sidebar;
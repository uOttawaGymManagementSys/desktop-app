import React from "react";
import { Link, Links, NavLink } from "react-router-dom";

//icons
import { MdOutlineCancel } from 'react-icons/md';
import {FaBusinessTime} from "react-icons/fa";
import {TbDeviceAnalytics} from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";
import { GiFirstAidKit, GiVacuumCleaner } from "react-icons/gi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import logo from "../assets/logo.svg";
import logomini from "../assets/logomini.svg";

type SidebarLink = {
    id: number;
    path: string;
    name: string;
    icon: React.ElementType; // React component type for icons
  };



  
const Sidebar: React.FC = () => {

    const activeMenu: boolean = true;

    const activeLink: string = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#5C1419] transition-all whitespace-nowrap hover:bg-gray-200 m-2";
    const normalLink: string = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg hover:text-[#5C1419] transition-all hover:bg-gray-200 whitespace-nowrap m-2";


    const SIDEBAR_LINKS: SidebarLink[] = [
        { id: 1, path: "/", name: "Dashboard", icon: TbDeviceAnalytics },
        { id: 2, path: "/punchInOut", name: "Punch In-Out", icon: FaBusinessTime },
        { id: 3, path: "/equipmentInspection", name: "Equipment Inspection", icon: CiDumbbell },
        { id: 4, path: "/firstAid", name: "First-Aid Kit", icon: GiFirstAidKit },
        { id: 5, path: "/closingChecklist", name: "Closing Checklist", icon: GiVacuumCleaner },
        { id: 6, path: "/trafficCount", name: "Traffic Count", icon: FaArrowsDownToPeople },
      ];
      
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow-2xl">
            {activeMenu && (
                <>
                    <div className="flex justify-between items-center mt-4 px-2">
                        {/* Logo */}
                        <Link to="/" onClick={() => {}} className="items-center mx-auto ml-20">
                            <span><img src={logo} alt="REC Full Logo" width="100" height="100" /></span>
                        </Link>

                        {/* Minimise Sidebar Button */}
                        <button type="button"
                                onClick={() => {}}
                                className="text-xl rounded-full hover:bg-gray-200 cursor-pointer" >
                            <MdOutlineCancel />
                        </button>
                    </div>
                    <div className="mt-10">
                        {SIDEBAR_LINKS.map((link) => (
                            <NavLink to={`/${link.name}`}
                                     key={link.id}
                                     className={({isActive}) => (isActive ? activeLink : normalLink)}>
                                <link.icon />
                                <span>{link.name}</span>
                                
                            </NavLink>    
                        ))}
                    </div>
                </> 
            )}
        </div>
    ); 
};

export default Sidebar;
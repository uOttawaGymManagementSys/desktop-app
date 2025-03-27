import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

//icons
import {FaBusinessTime} from "react-icons/fa";
import {TbDeviceAnalytics} from "react-icons/tb";
import { CiDumbbell } from "react-icons/ci";
import { GiFirstAidKit, GiVacuumCleaner } from "react-icons/gi";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import logo from "../assets/logo.svg";
import logomini from "../assets/logomini.svg";

type SidebarLink = {
    id: number;
    path: string;
    name: string;
    icon: React.ElementType; // React component type for icons
  };



  
const Sidebar: React.FC = () => {

    const { activeMenu, setActiveMenu } = useStateContext();

    const activeLink: string = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#5C1419] transition-all whitespace-nowrap hover:bg-gray-200 m-2";
    const normalLink: string = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg hover:text-[#5C1419] transition-all hover:bg-gray-200 whitespace-nowrap m-2";


    const SIDEBAR_LINKS: SidebarLink[] = [
        { id: 1, path: "/", name: "Dashboard", icon: TbDeviceAnalytics },
        { id: 2, path: "/punch-in-out", name: "Punch In-Out", icon: FaBusinessTime },
        { id: 3, path: "/equipment-inspection", name: "Equipment Inspection", icon: CiDumbbell },
        { id: 4, path: "/first-aid-kit", name: "First-Aid Kit", icon: GiFirstAidKit },
        { id: 5, path: "/closing-checklist", name: "Closing Checklist", icon: GiVacuumCleaner },
        { id: 6, path: "/traffic-count", name: "Traffic Count", icon: FaArrowsDownToPeople },
    ];
    
      
    return (
        <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 shadow-2xl">
            {activeMenu ? (
                <>
                    <div className="flex justify-between items-center mt-4 px-2">
                        {/* Logo */}
                        <Link to="/" onClick={() => setActiveMenu(false)} className="items-center mx-auto ml-20">
                            <span><img src={logo} alt="REC Full Logo" width="100" height="100" /></span>
                        </Link>

                        {/* Minimise Sidebar Button */}
                        <button type="button"
                                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                className="text-xl rounded-ful cursor-pointer" 
                                style={{color: "#5C1419"}}>
                            <IoIosArrowBack />
                        </button>
                    </div>
                    {/* Sidebar Links */}
                    <div className="mt-10">
                        {SIDEBAR_LINKS.map((link) => (
                            <NavLink to={link.path}
                                     key={link.id}
                                     className={({isActive}) => (isActive ? activeLink : normalLink)}>
                                <link.icon />
                                <span>{link.name}</span>
                                
                            </NavLink>    
                        ))}
                    </div>
                </> 
                ) : (
                    <>
                    <div className="flex flex-col items-center ">
                        <div className="relative pl-7">
                        {/*Mini Logo*/}
                        <Link to="/" onClick={() => setActiveMenu(false)} className="items-center mx-auto ml-20">
                            <span><img src={logomini} alt="REC Full Logo" width="50" height="50" /></span>
                        </Link>
                        {/* Minimise Sidebar Button */}
                        <button type="button"
                                onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                className="absolute top-8.5 pl-11 text-l rounded-full cursor-pointer"
                                style={{color: "#5C1419"}}>
                            <IoIosArrowForward />
                        </button>
                        </div>
                    </div>
                    <div className="mt-10">
                    {SIDEBAR_LINKS.map((link) => (
                        <NavLink to={`/${link.name}`}
                                 key={link.id}
                                 className={({isActive}) => (isActive ? activeLink : normalLink)}>
                            <link.icon /> 
                        </NavLink>    
                    ))}
                </div>
                </>
                    
            )}
        </div>
    ); 
};

export default Sidebar;
import React from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { IoIosSearch, IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import Search from "./Search";
import profilephoto1 from "../data/profilephoto1.png";


interface NavButtonProps {
    title: string;
    customFunc: () => void;
    icon: React.ReactNode;
    color: string;
}

const NavButton: React.FC<NavButtonProps> = ({ title, customFunc, icon, color }) => {
    return (
        <button 
            type="button" 
            onClick={customFunc} 
            className="relative text-xl rounded-full p-3 cursor-pointer hover:brightness-90"
            style={{ color }}>
            <span style={{ color }}>
                {icon}
            </span>
        </button>
    );
};

const Navbar: React.FC = () => {
    const { isClicked, handleClick } = useStateContext();

    return (
        <div className="flex justify-between p-2 relative mt-3">
            <div className="flex">
                {/* Search button aligned to the left */}
                <NavButton
                    title="Search"
                    customFunc={() => handleClick('search')}
                    icon={<IoIosSearch />}
                    color="#5C1419"/>
            </div>

            <div className="flex ml-auto items-center gap-4"> {/* This pushes the following buttons to the right */}
                {/* Notifications button */}
                <NavButton
                    title="Notifications"
                    customFunc={() => handleClick('notification')}
                    icon={<IoIosNotifications />}
                    color="#5C1419"/>

                {/* User profile */}
                <div className="flex items-center gap-2 cursor-pointer p-1 rounded-lg mr-2"
                     onClick={() => handleClick('userProfile')}>
                    
                    <img src={profilephoto1} 
                         alt="avatar"
                         className="rounded-full w-8 h-8 mr-2" />
                    <p>
                        <span>Hi, </span>
                        <span className="font-bold ml-1">Oussema</span>
                    </p>
                    <IoIosArrowDown style={{color: "#5C1419"}}/>
                </div>

                {/* Render the components based on the icon clicked */}
                {isClicked.notification && <Notification/>}
                {isClicked.userProfile && <UserProfile/>}
                {isClicked.search && <Search/>}
            </div>
        </div>
    );
};

export default Navbar;

import { useContext } from "react";
import { SidebarContext } from "./SideBar";

const SidebarItem = ({icon, text, active, alert, onClick}) => {
    const {expanded} = useContext(SidebarContext);
    return (  
        <li 
            onClick={onClick}
            className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            ${
                active
                    ? "bg-linear-to-tr from-gray-200 to-gray-100 text-amber-900"
                    : "hover:bg-gray-50 text-gray-600"
            }
        `}>
            {icon}
            <span className={`ml-3
                              overflow-hidden
                              transition-all duration-300
                              whitespace-nowrap
                              ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}`}>{text}</span>
            {alert && (
                <div className={`absolute right-2 w-2 h-2 rounded bg-red-600 ${
                                 expanded? "" : "top-2"
                                }`}/>
            )}

            {!expanded && <div className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-gray-100 text-amber-900 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
                `}>{text}</div>}
        </li>
    );
}
 
export default SidebarItem;
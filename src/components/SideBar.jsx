import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { createContext, useState } from "react";

export const SidebarContext = createContext();

const SideBar = ({children}) => {
    const [expanded, setExpanded] = useState(true);
    return ( 
        <aside className="h-screen">
            <nav className={`h-full flex flex-col bg-white shadow-2xl
                             transition-all duration-300
                             ${expanded ? "w-62" : "w-20"}
                            `}> 
                <div className={`p-4 pb-2 flex items-center transition-all duration-300
                                 ${expanded ? "justify-between" : "justify-center"}`}>
                    <img 
                        src="src/assets/logo.png" 
                        className={`overflow-hidden transition-all ${
                            expanded? "w-14" : "w-0"}`} 
                        alt="GEEGEE REC" />

                    <button onClick={() => setExpanded(current =>!current)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                        {expanded? <ChevronLeft/> : <ChevronRight/>}
                    </button>
                </div>
                <SidebarContext.Provider value={{expanded, setExpanded}}>
                    <ul className="pt-12 flex-1 px-3">{children}</ul>
                </SidebarContext.Provider>
                <div className="border-t border-gray-200 flex p-3">
                    <img 
                        src="src/assets/user.png" 
                        className="w-12 h-12 rounded-md" 
                        alt="USER ICON" />
                    <div className={`
                            flex justify-between items-center
                            overflow-hidden transition-all ${
                            expanded? "w-52 ml-3" : "w-0"}
                        `}>
                        <div>
                            <h4 className="font-semibold">Oussema Nijewi</h4>
                            <span className="text-xs text-gray-600">onijew@uottawa.ca</span>
                        </div>
                        <MoreVertical size={20}/>
                    </div>
                </div>
            </nav>
        </aside>
     );
}
 
export default SideBar;
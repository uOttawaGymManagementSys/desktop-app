import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { createContext, useState } from "react";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.png";

export const SidebarContext = createContext();

const SideBar = ({ children, onSwitchGym, mode }) => {
  const [expanded, setExpanded] = useState(true);
  const isDark = mode === "dark";

  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col shadow-2xl transition-all duration-300
          ${expanded ? "w-62" : "w-20"}
          ${isDark ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}
        `}
      >
        <div
          className={`p-4 pb-2 flex items-center transition-all duration-300
            ${expanded ? "justify-between" : "justify-center"}
          `}
        >
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-14" : "w-0"
            }`}
            alt="GEEGEE REC"
          />

          <button
            onClick={() => setExpanded((current) => !current)}
            className={`p-1.5 rounded-lg ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            {expanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded, setExpanded }}>
          <ul className="pt-12 flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="px-3 mb-3">
          <button
            onClick={onSwitchGym}
            className={`w-full font-bold py-2 rounded-lg transition text-sm
              ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }
            `}
          >
            Switch Gym
          </button>
        </div>

        <div
          className={`flex p-3 border-t ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <img
            src={userIcon}
            className="w-12 h-12 rounded-md"
            alt="USER ICON"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
          >
            <div>
              <h4 className="font-semibold">Fitness Attendant</h4>
              <span
                className={`text-xs ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                fitness@uottawa.ca
              </span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;

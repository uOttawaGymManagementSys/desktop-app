import SideBar from "./components/SideBar";
import {
  LayoutDashboard,
  ChartNoAxesCombined,
  Dumbbell,
  Settings,
  LifeBuoy,
} from "lucide-react";
import SidebarItem from "./components/SidebarItem";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import TrafficCount from "./components/TrafficCount";
import EquipmentStatus from "./components/EquipmentStatus";
import SettingsPage from "./components/SettingsPage";
import Help from "./components/Help";
import GymSelector from "./components/GymSelector";

function App() {
  //manage which gym is selected
  const [selectedGym, setSelectedGym] = useState(null);
  const handleSelectGym = (gym) => setSelectedGym(gym);

  //manage which item is active
  const [activeItem, setActiveItem] = useState("Dashboard");

  // conditional rendering for each nav-item
  const renderContent = () => {
    switch (activeItem) {
      case "Dashboard":
        return <Dashboard />;
      case "Traffic count":
        return <TrafficCount selectedGym={selectedGym} />;
      case "Equipment status":
        return <EquipmentStatus />;
      case "Settings":
        return <SettingsPage />;
      case "Help":
        return <Help />;
      default:
        return null;
    }
  };

  //Show GymSelector screen before entering the app
  if (!selectedGym) {
    return <GymSelector onSelectGym={handleSelectGym} />;
  }

  console.log("Selected Gym is: ", selectedGym);

  return (
    <div className="App flex h-screen">
      <SideBar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert={false}
          active={activeItem === "Dashboard"}
          onClick={() => setActiveItem("Dashboard")}
        />

        <SidebarItem
          icon={<ChartNoAxesCombined size={20} />}
          text="Traffic count"
          alert={false}
          active={activeItem === "Traffic count"}
          onClick={() => setActiveItem("Traffic count")}
        />

        <SidebarItem
          icon={<Dumbbell size={20} />}
          text="Equipment status"
          alert={false}
          active={activeItem === "Equipment status"}
          onClick={() => setActiveItem("Equipment status")}
        />

        <hr className="border-t border-gray-200 my-3" />

        <SidebarItem
          icon={<Settings size={20} />}
          text="Settings"
          alert={false}
          active={activeItem === "Settings"}
          onClick={() => setActiveItem("Settings")}
        />

        <SidebarItem
          icon={<LifeBuoy size={20} />}
          text="Help"
          alert={false}
          active={activeItem === "Help"}
          onClick={() => setActiveItem("Help")}
        />
      </SideBar>
      <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
    </div>
  );
}

export default App;

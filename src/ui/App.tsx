import { HashRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PunchInOut from "./pages/PunchInOut";
import EquipmentInspection from "./pages/EquipmentInspection";
import FirstAidKit from "./pages/FirstAidKit";
import ClosingChecklist from "./pages/ClosingChecklist";
import TrafficCount from "./pages/TrafficCount";

import { useStateContext } from "./contexts/ContextProvider";

export default function App() {
  const { activeMenu } = useStateContext();

  return (
    <HashRouter>
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className={`fixed ${activeMenu ? "w-72" : "w-20"} h-screen transition-all`}>
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className={`flex-1 min-h-screen transition-all ${activeMenu ? "ml-72" : "ml-20"}`}>
          {/* Navbar */}
          <div className="w-full">
            <Navbar />
          </div>

          {/* Routing Content */}
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/punch-in-out" element={<PunchInOut />} />
              <Route path="/equipment-inspection" element={<EquipmentInspection />} />
              <Route path="/first-aid-kit" element={<FirstAidKit />} />
              <Route path="/closing-checklist" element={<ClosingChecklist />} />
              <Route path="/traffic-count" element={<TrafficCount />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

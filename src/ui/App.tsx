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
  const {activeMenu} = useStateContext();
  return (
    <HashRouter>
      <div className="flex">
        {/* Sidebar */}
        {activeMenu && (
          <div className="w-72 fixed">
            <Sidebar />
          </div>
        )}

        {/* Main Content Area */}
        <div className={`flex-1 min-h-screen w-full ${activeMenu ? "md:ml-72" : ""}`}>
          {/* Navbar */}
          <div className="fixed md:static w-full">
            <Navbar />
          </div>
        </div>

        {/* Routing Content */}
        <div className="p-6">
          <Routes>
            <Route path="/" element={<div>Dashboard Test</div>} />
            <Route path="/punch-in-out" element={<div>Punch In-Out Test</div>} />
            <Route path="/equipment-inspection" element={<div>Equipment Inspection Test</div>} />
            <Route path="/first-aid-kit" element={<div>First-Aid Kit Test</div>} />
            <Route path="/closing-checklist" element={<div>Closing Checklist Test</div>} />
            <Route path="/traffic-count" element={<div>Traffic Count Test</div>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
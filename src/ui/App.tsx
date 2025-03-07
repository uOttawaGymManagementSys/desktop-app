import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import { HashRouter, Routes, Route } from "react-router-dom";
import Members from "./pages/Members";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Dashboard />} />
          <Route path="members" element={<Members />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
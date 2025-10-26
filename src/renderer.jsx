import { createRoot } from 'react-dom/client';
import SideBar from './components/SideBar';
import { LayoutDashboard,  ChartNoAxesCombined, Dumbbell, Settings, LifeBuoy} from 'lucide-react';
import SidebarItem from './components/SidebarItem';

const App = () => {
  return (
    <div className='App'>
      <SideBar>
        <SidebarItem
          icon={<LayoutDashboard size={20}/>}
          text="Dashboard"
          alert={false}/>

        <SidebarItem
          icon={<ChartNoAxesCombined size={20}/>}
          text="Traffic count"
          active/>
        <SidebarItem
          icon={<Dumbbell size={20}/>}
          text="Equipment status"
          alert={true}
          />

        <hr className="border-t border-gray-200 my-3"/>

        <SidebarItem
          icon={<Settings size={20}/>}
          text="Settings"
          />

        <SidebarItem
          icon={<LifeBuoy size={20}/>}
          text="Help"
          />
      </SideBar>
    </div>
  );
}


// Render React component
const root = createRoot(document.getElementById('root'));
root.render(<App/>);
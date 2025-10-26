import { createRoot } from 'react-dom/client';
import Profile from './components/Profile';
const App = () => {
  return (
    <>
      <Profile/>
    </>
  );
}


// Render React component
const root = createRoot(document.getElementById('root'));
root.render(<App/>);
import { useLocation, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { ThemeModeToggle } from './ThemeModeToggle';

const Navbar = () => {
  const { theme, setTheme} = useStore();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={`bg-${theme === 'light' ? 'white' : 'gray-800'} text-${theme === 'light' ? 'black' : 'white'} p-4`}>
      <ul className="flex space-x-4">
        <li>
          <button onClick={() => navigate("/")} className={location.pathname === '/' ? 'text-blue-500' : ''}>
            Home
          </button>
        </li>
        <li>
          <button onClick={() => navigate('about')} className={location.pathname === 'about' ? 'text-blue-500' : ''}>
            About
          </button>
        </li>
        <li>
          <button onClick={() => navigate('projects')} className={location.pathname === 'projects' ? 'text-blue-500' : ''}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => navigate('contact')} className={location.pathname === 'contact' ? 'text-blue-500' : ''}>
            Contact
          </button>
        </li>
      </ul>
      <ThemeModeToggle/>
    </nav>
  );
};

export default Navbar;

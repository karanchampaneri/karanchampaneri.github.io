import { useDarkMode } from '../contexts/DarkModeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`p-2 rounded-lg transition-colors duration-200 ${
        isDarkMode 
          ? 'text-[#f3f4f6] hover:text-[#CC785C]' 
          : 'text-[#191919] hover:text-[#CC785C]'
      }`}
      aria-label="Toggle dark mode"
      title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
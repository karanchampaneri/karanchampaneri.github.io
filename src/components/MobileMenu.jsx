import { useEffect } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-start justify-start
            transition-all duration-500 ease-in-out overflow-hidden
            ${menuOpen ? "h-screen opacity-100" : "h-0 opacity-0"}
            ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#F0F0EB]'}
        `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 text-3xl focus:outline-none cursor-pointer ${
          isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
        }`}
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Items */}
      <div className="mt-20 w-full px-6">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`block text-2xl font-semibold py-4 w-full transition ${
            isDarkMode 
              ? 'text-[#f3f4f6] hover:bg-[#1a1a1a]' 
              : 'text-[#191919] hover:bg-[#E5E4DF]'
          }`}
        >
          Home
        </a>
        <hr className={`border-t ${
          isDarkMode ? 'border-[#333333]' : 'border-gray-300'
        }`} />

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`block text-2xl font-semibold py-4 w-full transition ${
            isDarkMode 
              ? 'text-[#f3f4f6] hover:bg-[#1a1a1a]' 
              : 'text-[#191919] hover:bg-[#E5E4DF]'
          }`}
        >
          About
        </a>
        <hr className={`border-t ${
          isDarkMode ? 'border-[#333333]' : 'border-gray-300'
        }`} />

        <a
          href="#testimonials"
          onClick={() => setMenuOpen(false)}
          className={`block text-2xl font-semibold py-4 w-full transition ${
            isDarkMode 
              ? 'text-[#f3f4f6] hover:bg-[#1a1a1a]' 
              : 'text-[#191919] hover:bg-[#E5E4DF]'
          }`}
        >
          Testimonials
        </a>
        <hr className={`border-t ${
          isDarkMode ? 'border-[#333333]' : 'border-gray-300'
        }`} />

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`block text-2xl font-semibold py-4 w-full transition ${
            isDarkMode 
              ? 'text-[#f3f4f6] hover:bg-[#1a1a1a]' 
              : 'text-[#191919] hover:bg-[#E5E4DF]'
          }`}
        >
          Projects
        </a>
        <hr className={`border-t ${
          isDarkMode ? 'border-[#333333]' : 'border-gray-300'
        }`} />

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`block text-2xl font-semibold py-4 w-full transition ${
            isDarkMode 
              ? 'text-[#f3f4f6] hover:bg-[#1a1a1a]' 
              : 'text-[#191919] hover:bg-[#E5E4DF]'
          }`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

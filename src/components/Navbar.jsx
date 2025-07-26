import { useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../contexts/DarkModeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { isDarkMode } = useDarkMode();
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-40 backdrop-blur-lg shadow-md ${
      isDarkMode ? 'bg-[rgba(10,10,10,0.9)]' : 'bg-[rgba(240,240,235,0.9)]'
    }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className={`font-mono text-xl font-bold ${
              isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
            }`}
          >
            Karan Champaneri
            <span className="text-[#CC785C] text-3xl text-bold">.</span>
          </a>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-4 md:hidden">
            <DarkModeToggle />
            <div
              className="w-7 h-5 relative cursor-pointer z-40"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`hover:text-[#CC785C] transition-colors ${
                isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`hover:text-[#CC785C] transition-colors ${
                isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}
            >
              About
            </a>
            <a
              href="#testimonials"
              className={`hover:text-[#CC785C] transition-colors ${
                isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}
            >
              Testimonials
            </a>
            <a
              href="#projects"
              className={`hover:text-[#CC785C] transition-colors ${
                isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`hover:text-[#CC785C] transition-colors ${
                isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}
            >
              Contact
            </a>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

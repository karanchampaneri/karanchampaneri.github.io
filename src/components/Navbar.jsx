import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(240,240,235,0.9)] backdrop-blur-lg shadow-md">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-xl font-bold text-[#191919]"
          >
            Karan Champaneri
            <span className="text-[#CC785C] text-3xl text-bold">.</span>
          </a>

          {/* Mobile Menu */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-[#191919] hover:text-[#CC785C] transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#191919] hover:text-[#CC785C] transition-colors"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-[#191919] hover:text-[#CC785C] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#projects"
              className="text-[#191919] hover:text-[#CC785C] transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-[#191919] hover:text-[#CC785C] transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

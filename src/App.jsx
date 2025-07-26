import { useState } from "react";
import "./App.css";
import "./index.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Testimonials } from "./components/sections/Testimonials";

import { useDarkMode } from "./contexts/DarkModeContext";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode } = useDarkMode();

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } ${isDarkMode ? 'bg-[#0a0a0a] text-[#f3f4f6]' : 'bg-[#F0F0EB] text-[#191919]'}`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Testimonials />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

// 1. Loading Screen.

export default App;

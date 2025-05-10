import { useState } from 'react'
import './App.css'
import "./index.css";
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Testimonials } from './components/sections/Testimonials';




function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <>
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundColor: "#F0F0EB", // Ivory Medium
          color: "#191919", // Slate Dark
        } }
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Testimonials/>
        <Projects />
        <Contact />


    </div>
    </>
  );
}

// 1. Loading Screen.

export default App

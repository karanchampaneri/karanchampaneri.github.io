import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "../../contexts/DarkModeContext";

export const Home = () => {
  const { isDarkMode } = useDarkMode();
  
  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${
        isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#F0F0EB]'
      }`}
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
            }`}
          >
            Hi, I'm{" "}
            <span className="underline decoration-[#CC785C]">
              Karan Champaneri
            </span>
          </h1>

          <p
            className={`text-lg mb-8 max-w-lg mx-auto ${
              isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
            }`}
          >
            I’m a computer engineering student passionate about building
            reliable systems and intuitive software that solve real-world
            problems.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-medium transition hover:bg-[#CC785C] hover:text-white ${
                isDarkMode 
                  ? 'bg-[#f3f4f6] text-[#191919]' 
                  : 'bg-[#191919] text-white'
              }`}
            >
              View Projects
            </a>

            <a
              href="#contact"
              className={`px-6 py-3 rounded-lg font-medium border transition hover:bg-[#CC785C] hover:text-white hover:border-[#CC785C] ${
                isDarkMode 
                  ? 'border-[#f3f4f6] text-[#f3f4f6]' 
                  : 'border-[#191919] text-[#191919]'
              }`}
            >
              Contact Me
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://github.com/karanchampaneri"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-[#CC785C] transition ${
                isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/karanchampaneri/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-[#CC785C] transition ${
                isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

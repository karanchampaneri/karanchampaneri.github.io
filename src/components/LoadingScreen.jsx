import { useEffect, useState } from "react";
import { useDarkMode } from "../contexts/DarkModeContext";

export const LoadingScreen = ({ onComplete }) => {
  const { isDarkMode } = useDarkMode();
  // Array of greetings in different languages
  const greetings = [
    "<Hello World!/>",
    "<Hola Mundo!/>",
    "<Bonjour le Monde!/>",
    "<Hallo Welt!/>",
    "<Ciao Mondo!/>",
  ];

  // State to manage the typing text
  const [text, setText] = useState("");

  useEffect(() => {
    // Select a random greeting
    const fullText = greetings[Math.floor(Math.random() * greetings.length)];

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      // Stop typing when the text is fully typed
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${isDarkMode ? 'bg-[#0a0a0a] text-[#f3f4f6]' : 'bg-[#F0F0EB] text-[#191919]'
        }`}
    >
      {/* Centered Container */}
      <div className="flex flex-col items-center">
        {/* Typing Text */}
        <div className="mb-4 text-4xl font-mono font-bold text-center">
          {text} <span className="animate-blink ml-1">|</span>
        </div>

        {/* Loading Bar */}
        <div className="w-[200px] h-[2px] rounded relative overflow-hidden bg-[#CC785C]">
          <div
            className={`w-[40%] h-full animate-loading-bar ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#F0F0EB]'
              }`}
            style={{
              boxShadow: "0 0 15px #CC785C", // Book Cloth glow effect
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

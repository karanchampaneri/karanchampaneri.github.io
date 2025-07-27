import { useEffect, useState, useRef, useMemo } from "react";
import DarkModeToggle from "./DarkModeToggle";
import { useDarkMode } from "../contexts/DarkModeContext";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { isDarkMode } = useDarkMode();
  const [activeSection, setActiveSection] = useState("home");
  const [_previousSection, setPreviousSection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const navbarRef = useRef(null);

  const navItems = useMemo(
    () => [
      { href: "#home", label: "Home", option: "1" },
      { href: "#about", label: "About", option: "2" },
      { href: "#testimonials", label: "Testimonials", option: "3" },
      { href: "#projects", label: "Projects", option: "4" },
      { href: "#contact", label: "Contact", option: "5" },
    ],
    []
  );

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // Scroll spy to track active section
  useEffect(() => {
    // Don't run during programmatic scrolling
    if (isScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        let maxRatio = 0;
        let activeEntry = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            activeEntry = entry;
          }
        });

        if (activeEntry && activeEntry.intersectionRatio > 0.3) {
          const sectionId = activeEntry.target.id;
          if (activeSection !== sectionId) {
            const currentItem = navItems.find(
              (item) => item.href === `#${activeSection}`
            );

            if (navbarRef.current && currentItem) {
              navbarRef.current.setAttribute("c-previous", currentItem.option);
            }

            setPreviousSection(activeSection);
            setActiveSection(sectionId);
          }
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-20% 0px -20% 0px", // Only trigger when section is 20% into viewport
      }
    );

    // Observe all sections
    const sections = navItems.map((item) => item.href.substring(1));
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection, navItems, isScrolling]);

  // Track previous section like the reference
  useEffect(() => {
    if (navbarRef.current && activeSection) {
      const activeItem = navItems.find(
        (item) => item.href === `#${activeSection}`
      );
      if (activeItem) {
        navbarRef.current.setAttribute("data-active", activeItem.option);
      }
    }
  }, [activeSection, navItems]);

  // Initialize previous tracking on mount
  useEffect(() => {
    if (navbarRef.current && activeSection) {
      const initialItem = navItems.find(
        (item) => item.href === `#${activeSection}`
      );
      if (initialItem) {
        navbarRef.current.setAttribute("c-previous", initialItem.option);
      }
    }
  }, [activeSection, navItems]);

  return (
    <>
      {/* Mobile Navbar - Full Width */}
      <nav
        className={`fixed top-0 w-full z-40 backdrop-blur-lg shadow-md md:hidden ${
          isDarkMode ? "bg-[rgba(10,10,10,0.9)]" : "bg-[rgba(240,240,235,0.9)]"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className={`font-mono text-xl font-bold ${
                isDarkMode ? "text-[#f3f4f6]" : "text-[#191919]"
              }`}
            >
              Karan Champaneri
              <span className="text-[#CC785C] text-3xl text-bold">.</span>
            </a>

            {/* Mobile Menu */}
            <div className="flex items-center space-x-4">
              <DarkModeToggle />
              <div
                className="w-7 h-5 relative cursor-pointer z-40"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                &#9776;
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Glass Morphism Navbar */}
      <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 z-40 hidden md:block">
        <style jsx>{`
          .glass-navbar {
            --c-glass: #bbbbbc;
            --c-light: #fff;
            --c-dark: #000;
            --c-content: ${isDarkMode ? "#e1e1e1" : "#224"};
            --c-action: ${isDarkMode ? "#03d5ff" : "#0052f5"};
            --c-bg: ${isDarkMode ? "#1b1b1d" : "#e8e8e9"};
            --glass-reflex-dark: ${isDarkMode ? "2" : "1"};
            --glass-reflex-light: ${isDarkMode ? "0.3" : "1"};
            --saturation: 150%;

            position: relative;
            display: flex;
            align-items: center;
            gap: 4px;
            width: auto;
            max-width: 700px;
            min-width: 600px;
            height: 70px;
            box-sizing: border-box;
            padding: 8px 20px 10px;
            margin: 0 auto;
            border: none;
            border-radius: 99em;
            font-size: 16px;
            font-family: "Fira Code", monospace;
            background-color: color-mix(
              in srgb,
              var(--c-glass) 12%,
              transparent
            );
            backdrop-filter: blur(8px) saturate(var(--saturation));
            -webkit-backdrop-filter: blur(8px) saturate(var(--saturation));
            box-shadow: inset 0 0 0 1px
                color-mix(
                  in srgb,
                  var(--c-light) calc(var(--glass-reflex-light) * 10%),
                  transparent
                ),
              inset 1.8px 3px 0px -2px color-mix(in srgb, var(--c-light)
                    calc(var(--glass-reflex-light) * 90%), transparent),
              inset -2px -2px 0px -2px color-mix(in srgb, var(--c-light)
                    calc(var(--glass-reflex-light) * 80%), transparent),
              inset -3px -8px 1px -6px color-mix(in srgb, var(--c-light)
                    calc(var(--glass-reflex-light) * 60%), transparent),
              inset -0.3px -1px 4px 0px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 12%),
                  transparent
                ),
              inset -1.5px 2.5px 0px -2px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 20%),
                  transparent
                ),
              inset 0px 3px 4px -2px color-mix(in srgb, var(--c-dark)
                    calc(var(--glass-reflex-dark) * 20%), transparent),
              inset 2px -6.5px 1px -4px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 10%),
                  transparent
                ),
              0px 1px 5px 0px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 10%),
                  transparent
                ),
              0px 6px 16px 0px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 8%),
                  transparent
                );
            transition: background-color 400ms cubic-bezier(1, 0, 0.4, 1),
              box-shadow 400ms cubic-bezier(1, 0, 0.4, 1);
          }

          .glass-navbar::after {
            content: "";
            position: absolute;
            left: 4px;
            top: 4px;
            display: block;
            width: 64px;
            height: calc(100% - 10px);
            border-radius: 99em;
            background-color: color-mix(
              in srgb,
              var(--c-glass) 36%,
              transparent
            );
            z-index: -1;
            box-shadow: inset 0 0 0 1px
                color-mix(
                  in srgb,
                  var(--c-light) calc(var(--glass-reflex-light) * 10%),
                  transparent
                ),
              inset 2px 1px 0px -1px color-mix(in srgb, var(--c-light)
                    calc(var(--glass-reflex-light) * 90%), transparent),
              inset -1.5px -1px 0px -1px color-mix(in srgb, var(--c-light)
                    calc(var(--glass-reflex-light) * 80%), transparent),
              inset -2px -6px 1px -5px color-mix(in srgb, var(--c-light)
                    calc(var(--glass-reflex-light) * 60%), transparent),
              inset -1px 2px 3px -1px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 20%),
                  transparent
                ),
              inset 0px -4px 1px -2px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 10%),
                  transparent
                ),
              0px 3px 6px 0px
                color-mix(
                  in srgb,
                  var(--c-dark) calc(var(--glass-reflex-dark) * 8%),
                  transparent
                );
            transition: background-color 400ms cubic-bezier(1, 0, 0.4, 1),
              box-shadow 400ms cubic-bezier(1, 0, 0.4, 1),
              translate 400ms cubic-bezier(1, 0, 0.4, 1),
              width 400ms cubic-bezier(1, 0, 0.4, 1);
          }

          /* Home - adjust width manually */
          .glass-navbar[data-active="1"]::after {
            translate: 58px 0;
            width: 70px;
            transform-origin: center;
            animation: scaleToggle 440ms ease;
          }

          /* Special case: Contact -> Home (last to first) */
          .glass-navbar[c-previous="5"][data-active="1"]::after {
            animation: jumpToFirst 440ms ease;
          }

          /* About - adjust width manually */
          .glass-navbar[data-active="2"]::after {
            translate: 139px 0;
            width: 70px;
            animation: scaleToggle2 440ms ease;
          }

          .glass-navbar[c-previous="1"][data-active="2"]::after {
            transform-origin: left;
            animation: scaleToggle 440ms ease;
          }

          .glass-navbar[c-previous="3"][data-active="2"]::after {
            transform-origin: right;
            animation: scaleToggle 440ms ease;
          }

          /* Long jumps to About */
          .glass-navbar[c-previous="4"][data-active="2"]::after,
          .glass-navbar[c-previous="5"][data-active="2"]::after {
            animation: longJump 440ms ease;
          }

          /* Testimonials - adjust width manually */
          .glass-navbar[data-active="3"]::after {
            translate: 230px 0;
            width: 120px;
            animation: scaleToggle3 440ms ease;
          }

          .glass-navbar[c-previous="1"][data-active="3"]::after,
          .glass-navbar[c-previous="2"][data-active="3"]::after {
            transform-origin: left;
            animation: scaleToggle 440ms ease;
          }

          .glass-navbar[c-previous="4"][data-active="3"]::after,
          .glass-navbar[c-previous="5"][data-active="3"]::after {
            transform-origin: right;
            animation: scaleToggle 440ms ease;
          }

          /* Long jumps to Testimonials */
          .glass-navbar[c-previous="1"][data-active="3"]::after {
            animation: longJump 440ms ease;
          }

          .glass-navbar[c-previous="5"][data-active="3"]::after {
            animation: longJump 440ms ease;
          }

          /* Projects - adjust width manually */
          .glass-navbar[data-active="4"]::after {
            translate: 372px 0;
            width: 90px;
            animation: scaleToggle 440ms ease;
          }

          .glass-navbar[c-previous="1"][data-active="4"]::after,
          .glass-navbar[c-previous="2"][data-active="4"]::after,
          .glass-navbar[c-previous="3"][data-active="4"]::after {
            transform-origin: left;
            animation: scaleToggle 440ms ease;
          }

          .glass-navbar[c-previous="5"][data-active="4"]::after {
            transform-origin: right;
            animation: scaleToggle 440ms ease;
          }

          /* Long jumps to Projects */
          .glass-navbar[c-previous="1"][data-active="4"]::after {
            animation: longJump 440ms ease;
          }

          /* Contact - adjust width manually */
          .glass-navbar[data-active="5"]::after {
            translate: 485px 0;
            width: 80px;
            transform-origin: center;
            animation: scaleToggle 440ms ease;
          }

          /* Special case: Home -> Contact (first to last) */
          .glass-navbar[c-previous="1"][data-active="5"]::after {
            animation: jumpToLast 440ms ease;
          }

          /* Long jumps to Contact */
          .glass-navbar[c-previous="2"][data-active="5"]::after {
            animation: longJump 440ms ease;
          }

          /* Animation for normal forward/backward transitions */
          @keyframes scaleToggle {
            0% {
              scale: 1 1;
            }
            50% {
              scale: 1.1 1;
            }
            100% {
              scale: 1 1;
            }
          }

          @keyframes scaleToggle2 {
            0% {
              scale: 1 1;
            }
            50% {
              scale: 1.2 1;
            }
            100% {
              scale: 1 1;
            }
          }

          @keyframes scaleToggle3 {
            0% {
              scale: 1 1;
            }
            50% {
              scale: 1.1 1;
            }
            100% {
              scale: 1 1;
            }
          }

          /* Animation for jumping from last to first (Contact -> Home) */
          @keyframes jumpToFirst {
            0% {
              scale: 1 1;
              opacity: 1;
            }
            25% {
              scale: 0.8 1;
              opacity: 0.6;
            }
            50% {
              scale: 0.6 1;
              opacity: 0.3;
            }
            75% {
              scale: 0.8 1;
              opacity: 0.6;
            }
            100% {
              scale: 1 1;
              opacity: 1;
            }
          }

          /* Animation for jumping from first to last (Home -> Contact) */
          @keyframes jumpToLast {
            0% {
              scale: 1 1;
              opacity: 1;
            }
            25% {
              scale: 0.8 1;
              opacity: 0.6;
            }
            50% {
              scale: 0.6 1;
              opacity: 0.3;
            }
            75% {
              scale: 0.8 1;
              opacity: 0.6;
            }
            100% {
              scale: 1 1;
              opacity: 1;
            }
          }

          /* Animation for large jumps (skipping 2+ items) */
          @keyframes longJump {
            0% {
              scale: 1 1;
              opacity: 1;
            }
            30% {
              scale: 0.9 1;
              opacity: 0.7;
            }
            60% {
              scale: 0.7 1;
              opacity: 0.4;
            }
            100% {
              scale: 1 1;
              opacity: 1;
            }
          }

          .nav-option {
            --c: var(--c-content);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            height: 100%;
            box-sizing: border-box;
            border-radius: 99em;
            opacity: 1;
            transition: all 160ms cubic-bezier(0.5, 0, 0, 1);
            color: var(--c);
            margin: 0;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            user-select: none;
            white-space: nowrap;
          }

          .nav-option:hover {
            color: #cc785c;
            transform: scale(1.05);
          }

          .nav-option.active {
            color: #cc785c;
            cursor: auto;
            transform: scale(1);
          }
        `}</style>

        <div className="flex items-center">
          {/* Single Glass Navigation Container with Logo, Nav, and Dark Mode */}
          <div ref={navbarRef} className="glass-navbar">
            {/* Logo */}
            <div className="flex items-center">
              <span
                className={`font-mono text-lg font-bold ${
                  isDarkMode ? "text-[#f3f4f6]" : "text-[#191919]"
                }`}
              >
                KC<span className="text-[#CC785C] text-2xl">.</span>
              </span>
            </div>

            {/* Navigation Items */}
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <div
                  key={item.href}
                  className={`nav-option ${isActive ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();

                    // Track previous section
                    const currentItem = navItems.find(
                      (nav) => nav.href === `#${activeSection}`
                    );
                    if (navbarRef.current && currentItem) {
                      navbarRef.current.setAttribute(
                        "c-previous",
                        currentItem.option
                      );
                    }

                    // Update state immediately
                    setPreviousSection(activeSection);
                    setActiveSection(sectionId);

                    // Disable scroll spy during programmatic scrolling
                    setIsScrolling(true);

                    // Scroll to section with smooth behavior
                    const section = document.getElementById(sectionId);
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });

                      // Re-enable scroll spy after scrolling completes
                      setTimeout(() => {
                        setIsScrolling(false);
                      }, 600); // Reduced timeout for faster response
                    }
                  }}
                >
                  {item.label}
                </div>
              );
            })}

            {/* Dark Mode Toggle */}
            <div className="flex items-center">
              <DarkModeToggle />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className={`fixed inset-0 z-30 md:hidden ${
            isDarkMode
              ? "bg-[rgba(10,10,10,0.95)]"
              : "bg-[rgba(240,240,235,0.95)]"
          } backdrop-blur-lg`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-2xl font-medium hover:text-[#CC785C] transition-colors ${
                  isDarkMode ? "text-[#f3f4f6]" : "text-[#191919]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

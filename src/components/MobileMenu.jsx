import { useEffect } from 'react';

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full z-40 bg-[#F0F0EB] flex flex-col items-start justify-start
            transition-all duration-500 ease-in-out overflow-hidden
            ${menuOpen ? "h-screen opacity-100" : "h-0 opacity-0"}
        `}
        >
            {/* Close Button */}
            <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-[#191919] text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"
            >
                &times;
            </button>

            {/* Menu Items */}
            <div className="mt-20 w-full px-6">
                <a
                    href="#home"
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-semibold text-[#191919] py-4 w-full hover:bg-[#E5E4DF] transition"
                >
                    Home
                </a>
                <hr className="border-t border-gray-300" />

                <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-semibold text-[#191919] py-4 w-full hover:bg-[#E5E4DF] transition"
                >
                    About
                </a>
                <hr className="border-t border-gray-300" />

                <a
                    href="#testimonials"
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-semibold text-[#191919] py-4 w-full hover:bg-[#E5E4DF] transition"
                >
                    Testimonials
                </a>
                <hr className="border-t border-gray-300" />

                <a
                    href="#projects"
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-semibold text-[#191919] py-4 w-full hover:bg-[#E5E4DF] transition"
                >
                    Projects
                </a>
                <hr className="border-t border-gray-300" />

                <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="block text-2xl font-semibold text-[#191919] py-4 w-full hover:bg-[#E5E4DF] transition"
                >
                    Contact
                </a>
            </div>
        </div>
    );
};
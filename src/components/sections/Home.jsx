import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
            style={{ backgroundColor: "#F0F0EB" }} // Ivory Medium
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "#191919" }}>
                        Hi, I'm <span className="underline decoration-[#CC785C]">Karan Champaneri</span>
                    </h1>

                    <p className="text-lg mb-8 max-w-lg mx-auto" style={{ color: "#191919" }}>
                        I'm a software engineer with a passion for building innovative solutions. 
                        I specialize in full-stack development and am always eager to learn new technologies.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg font-medium transition"
                            style={{
                                backgroundColor: "#191919", // Slate Dark
                                color: "#FFFFFF", // White
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#CC785C"; // Book Cloth
                                e.target.style.color = "#FFFFFF"; // White
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "#191919"; // Slate Dark
                                e.target.style.color = "#FFFFFF"; // White
                            }}
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-lg font-medium border transition"
                            style={{
                                borderColor: "#191919", // Slate Dark
                                color: "#191919", // Slate Dark
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = "#CC785C"; // Book Cloth
                                e.target.style.color = "#FFFFFF"; // White
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = "transparent";
                                e.target.style.color = "#191919"; // Slate Dark
                            }}
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
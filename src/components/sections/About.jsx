import { RevealOnScroll } from "../RevealOnScroll";
import karanImage from "/src/assets/images/karan4.png";

export const About = () => {
    const frontendSkills = ["React", "Vue", "Typescript", "TailwindCSS", "Vite"];
    const backendSkills = ["Node.js", "Python", "MySQL", "C++", "Java"];
    const otherSkills = ["Git", "Docker", "CI/CD", "GraphQL", "REST APIs"];

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col justify-center py-20"
            style={{ backgroundColor: "#F0F0EB" }} // Ivory Medium
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-12">
                    {/* Introduction Section */}
                    <div className="text-center mb-12">
                        <h3 className="leading-relaxed mb-4" style={{ color: "#CC785C" }}>Introduction</h3>
                        <h2 className="text-5xl font-bold mb-4" style={{ color: "#191919" }}>
                            About Me
                        </h2>
                    </div>

                    {/* Top Section: Image and Paragraph */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                        {/* Left Column: Image */}
                        <div className="relative flex justify-center">
                            <img
                                src={karanImage}
                                alt="Karan Champaneri"
                                className="rounded-xl w-full max-w-sm object-cover"
                            />
                        </div>

                        {/* Right Column: Paragraph */}
                        <div>
                            <p className="mb-6 text-lg leading-relaxed" style={{ color: "#191919" }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi laboriosam aliquam ut error expedita sapiente autem? Earum doloremque harum facilis accusantium architecto molestiae, temporibus sint porro nam quaerat numquam tempora?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo aspernatur animi provident ullam sequi odio, facilis sunt autem quaerat. Sunt ad velit dolorem expedita amet dicta ex temporibus quisquam.

                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-6" style={{ color: "#191919" }}>
                            Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Frontend Skills */}
                            <div>
                                <h4 className="font-semibold mb-2" style={{ color: "#191919" }}>
                                    Frontend
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="py-1 px-3 rounded-full text-sm transition"
                                            style={{
                                                backgroundColor: "#CC785C1A", // Book Cloth (10% opacity)
                                                color: "#CC785C", // Book Cloth
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Skills */}
                            <div>
                                <h4 className="font-semibold mb-2" style={{ color: "#191919" }}>
                                    Backend
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="py-1 px-3 rounded-full text-sm transition"
                                            style={{
                                                backgroundColor: "#CC785C1A", // Book Cloth (10% opacity)
                                                color: "#CC785C", // Book Cloth
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Other Skills */}
                            <div>
                                <h4 className="font-semibold mb-2" style={{ color: "#191919" }}>
                                    Other Skills
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {otherSkills.map((tech, key) => (
                                        <span
                                            key={key}
                                            className="py-1 px-3 rounded-full text-sm transition"
                                            style={{
                                                backgroundColor: "#CC785C1A", // Book Cloth (10% opacity)
                                                color: "#CC785C", // Book Cloth
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section: Education and Work Experience */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Education */}
                        <div
                            className="p-6 rounded-lg shadow-md bg-[#FFFFFF] flex flex-col justify-between"
                            style={{
                                border: "1px solid #E5E5E5", // Light gray border to match the Projects section
                            }}
                        >
                            <h3 className="text-sm font-bold uppercase mb-2" style={{ color: "#191919" }}>
                                Education
                            </h3>
                            <div>
                                <h4 className="text-lg font-bold mb-2" style={{ color: "#191919" }}>
                                    BASc in Computer Engineering
                                </h4>
                                <p className="text-sm text-gray-600 mb-4">
                                    University of Waterloo (2021 - 2026)
                                </p>
                                <p className="text-sm text-gray-600">
                                    Relevant Coursework: Data Structures and Algorithms, Software Design and Architecture, Computer Networks, Database Systems
                                </p>
                            </div>
                        </div>

                        {/* Work Experience */}
                        <div
                            className="p-6 rounded-lg shadow-md bg-[#FFFFFF] flex flex-col justify-between"
                            style={{
                                border: "1px solid #E5E5E5", // Light gray border to match the Projects section
                            }}
                        >
                            <h3 className="text-sm font-bold uppercase mb-2" style={{ color: "#191919" }}>
                                Work Experience
                            </h3>
                            <div>
                                <div className="mb-4">
                                    <h4 className="text-lg font-bold mb-1" style={{ color: "#191919" }}>
                                        Software Developer at XYZ Company
                                    </h4>
                                    <p className="text-sm text-gray-600">(2022 - Present)</p>
                                    <p className="text-sm text-gray-600">
                                        - Developed and maintained web applications using React and Node.js.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-1" style={{ color: "#191919" }}>
                                        Performance Engineer at AGFA Healthcare
                                    </h4>
                                    <p className="text-sm text-gray-600">(2025 - 2025)</p>
                                    <p className="text-sm text-gray-600">
                                        - Worked on performance testing and optimization of healthcare software solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
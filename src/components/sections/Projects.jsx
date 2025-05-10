import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    const projects = [
        {
            title: "Project 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro eligendi ipsam velit incidunt totam enim quaerat voluptatem sunt reiciendis.",
            technologies: ["React", "Node.js", "AWS", "Docker"],
            link: "#",
        },
        {
            title: "Project 2",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsam exercitationem. Accusamus aperiam suscipit magnam mollitia.",
            technologies: ["Vue", "Firebase", "TailwindCSS"],
            link: "#",
        },
        // Add more projects as needed
    ];

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col justify-center py-20"
            style={{ backgroundColor: "#F0F0EB" }} // Ivory Medium
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-12">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r text-[#CC785C] bg-clip-text">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-gray-600">
                            A selection of projects showcasing my skills and experience in software development.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                            >
                                <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                                    {project.technologies.join(", ")}
                                </h4>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                                <p className="text-gray-600 mb-6">{project.description}</p>
                                <a
                                    href={project.link}
                                    className="inline-block px-6 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-[#CC785C] hover:text-white transition-colors"
                                >
                                    View Project
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
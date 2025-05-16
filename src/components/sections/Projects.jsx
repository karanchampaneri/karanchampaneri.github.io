import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Carbon Intensity Tracker",
      description: `Led the development of an automated data pipeline to calculate the carbon intensity of electricity imports, improving data accuracy by 25% and reducing processing time by 40%. Built a Python-based tool that streamlined the extraction of Clean Energy Credit (CEC) invoice and inventory data, cutting retrieval time from 2 hours to just 5 minutes. Collaborated with Karbone Inc. and the IRD team to support the CEC initiative through detailed pricing analysis and policy verification, promoting clean energy adoption and regulatory compliance.`,
      technologies: ["Python", "Pandas", "NumPy", "Azure VM", "Tableau"],
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: `Designed and developed a fully responsive portfolio website using React, Vite, and TailwindCSS to showcase projects, work experience, and skills. The site emphasizes clean design, fast performance, and accessibility, and is deployed through GitHub Pages for reliable and seamless hosting.`,
      technologies: ["React", "Vite", "TailwindCSS"],
      link: "#",
    },
    {
      title: "Dumbledore, Discord Bot",
      description:
        "A dynamic Discord bot built with Python that brings Reddit posts and motivational quotes directly to users in real time. Using the Reddit PRAW and ZenQuotes APIs, the bot keeps conversations fresh and engaging. Designed for responsiveness and reliability, it adapts to peak usage and evolves through user-driven feature updates.",
      technologies: ["Python", "Discord API", "Reddit PRAW", "ZenQuotes API"],
      link: "#",
    },
    // {
    //   title: "Project 4",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsam exercitationem. Accusamus aperiam suscipit magnam mollitia.",
    //   technologies: ["Vue", "Firebase", "TailwindCSS"],
    //   link: "#",
    // },
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
              A selection of projects showcasing my skills and experience in
              software development.
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
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

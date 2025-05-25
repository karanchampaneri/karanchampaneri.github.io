import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "SpotifyUnwrapped",
      description:
        "A Python-based ETL pipeline to extract, transform, and analyze your Spotify user data using only supported Web API endpoints. Designed to work without deprecated features (e.g., audio-features, recommendations) which now require extended access.",
      technologies: [
        "Python",
        "SpotyPi",
        "SpotifyWeb API",
        "Pandas",
        "NumPy",
        "Jupyter Notebook",
      ],
      link: "https://github.com/karanchampaneri/SpotifyUnwrapped",
    },
    {
      title: "Carbon Intensity Tracker",
      description: `A command-line Python tool to log, analyze, and visualize personal finances using Pandas and Matplotlib. Built to support custom date filtering, trend detection, and persistent CSV-based data tracking.`,
      technologies: ["Python", "Pandas", "NumPy", "Azure VM", "Tableau"],
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: `A fully responsive portfolio site built with React, Vite, and TailwindCSS to showcase projects, skills, and experience. Designed with clean architecture, performance, and accessibility in mind, and deployed via GitHub Pages.`,
      technologies: ["React", "Vite", "TailwindCSS"],
      link: "https://github.com/karanchampaneri/karanchampaneri.github.io",
    },
    {
      title: "Dumbledore, Discord Bot",
      description:
        "A Python-powered Discord bot that delivers Reddit posts and motivational quotes using the Reddit PRAW and ZenQuotes APIs. Built for real-time interaction, user engagement, and feature scalability based on community feedback.",
      technologies: ["Python", "Discord API", "Reddit PRAW", "ZenQuotes API"],
      link: "https://github.com/karanchampaneri/Dumbledore-A-Personal-Discord-Bot",
    },
    {
      title: "Personal Finance Tracker CLI",
      description:
        "A command-line finance tracker that logs transactions to a CSV, analyzes income and expenses within date ranges using pandas, and visualizes trends with matplotlib. Implements boolean masking, resampling, and file-based data persistence.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      link: "https://github.com/karanchampaneri/personal-finance-tracker",
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
                  target="_blank"
                  rel="noopener noreferrer"
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

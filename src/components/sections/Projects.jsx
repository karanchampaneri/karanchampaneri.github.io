import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "SpotifyUnwrapped",
      description:
        "A Python-based ETL pipeline that extracts, transforms, and analyzes your Spotify user data using only supported Web API endpoints. Built to function without deprecated features, ensuring compatibility and privacy.",
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
      description: `A command-line tool for logging, analyzing, and visualizing personal carbon intensity data. Supports custom date filtering, trend analysis, and persistent CSV-based tracking, leveraging Pandas and Tableau for insights.`,
      technologies: ["Python", "Pandas", "NumPy", "Azure VM", "Tableau"],
      link: "#",
    },
    {
      title: "Personal Portfolio Website",
      description: `A fully responsive portfolio site built with React, Vite, and TailwindCSS to showcase my projects, skills, and experience. Designed for performance, accessibility, and clean architecture, and deployed via GitHub Pages.`,
      technologies: ["React", "Vite", "TailwindCSS"],
      link: "https://github.com/karanchampaneri/karanchampaneri.github.io",
    },
    {
      title: "Dumbledore, Discord Bot",
      description:
        "A Python-powered Discord bot that delivers Reddit posts and motivational quotes using the Reddit PRAW and ZenQuotes APIs. Built for real-time interaction, user engagement, and scalable features based on community feedback.",
      technologies: ["Python", "Discord API", "Reddit PRAW", "ZenQuotes API"],
      link: "https://github.com/karanchampaneri/Dumbledore-A-Personal-Discord-Bot",
    },
    {
      title: "Personal Finance Tracker CLI",
      description:
        "A command-line finance tracker that logs transactions to CSV, analyzes income and expenses over custom date ranges with pandas, and visualizes trends using matplotlib. Implements efficient data filtering and persistent storage.",
      technologies: ["Python", "Pandas", "Matplotlib"],
      link: "https://github.com/karanchampaneri/personal-finance-tracker",
    },
    {
      title: "PyGame Aim Trainer",
      description:
        "A PyGame-based game designed to help players improve their aim by shooting targets on the screen. Features a scoring system, time tracking, and an engaging, challenging gameplay experience.",
      technologies: ["Python", "PyGame"],
      link: "https://github.com/karanchampaneri/Python-Aim-Trainer",
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

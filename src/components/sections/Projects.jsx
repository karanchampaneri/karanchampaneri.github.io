import { RevealOnScroll } from "../RevealOnScroll";
import { useDarkMode } from "../../contexts/DarkModeContext";

export const Projects = () => {
  const { isDarkMode } = useDarkMode();

  const projects = [
    {
      title: "CareerCompass",
      description:
        "CareerCompass is a comprehensive career development mobile app built with Kotlin and Jetpack Compose for Android. It empowers professionals at all stages to set and track career goals, analyze skill gaps, generate professional resumes and cover letters, and prepare for interviews with AI-powered feedback. The app features a personalized dashboard, secure Firebase authentication, PDF export, voice recording, and automated reminders, all wrapped in a Material Design 3-compliant interface.",
      technologies: [
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
        "Material Design 3",
        "Android"
      ],
      link: "https://github.com/ethanbenjamingabriel/ece452",
      isPrivate: true
    },
    {
      title: "LexiLog",
      description:
        "LexiLog is a cross-platform vocabulary builder and personal dictionary app built with Expo, React Native, and Tamagui. It helps users log new words they encounter from daily life or media, automatically fetches definitions, and organizes their personal lexical database to boost vocabulary learning. Features include secure login with Firebase, beautiful UI, custom theming, and a seamless experience across iOS, Android, and Web.",
      technologies: [
        "React Native",
        "Expo",
        "Tamagui",
        "Firebase",
        "JavaScript",
        "TypeScript"
      ],
      link: "https://github.com/karanchampaneri/LexiLog",
    },
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
      className={`min-h-screen flex flex-col justify-center py-20 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#F0F0EB]'
        }`}
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-12">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r text-[#CC785C] bg-clip-text">
              Featured Projects
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
              A selection of projects showcasing my skills and experience in
              software development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ${isDarkMode
                  ? 'bg-[#1a1a1a] border border-[#333333]'
                  : 'bg-white border border-gray-200'
                  }`}
              >
                <h4 className={`text-sm font-semibold uppercase mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                  {project.technologies.join(", ")}
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                    {project.title}
                  </h3>
                  {project.isPrivate && (
                    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${isDarkMode
                      ? 'bg-yellow-900 text-yellow-300 border border-yellow-700'
                      : 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                      }`}>
                      Private Repository
                    </span>
                  )}
                </div>
                <p className={`mb-6 flex-grow ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{project.description}</p>
                <div className="mt-auto">
                  {project.isPrivate ? (
                    <a
                      href="#contact"
                      className={`inline-block px-6 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[#CC785C] hover:text-white ${isDarkMode
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                        }`}
                    >
                      Request Access
                    </a>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-2 text-sm font-medium rounded-md transition-colors hover:bg-[#CC785C] hover:text-white ${isDarkMode
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                        }`}
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

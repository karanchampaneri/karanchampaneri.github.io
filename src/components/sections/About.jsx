import { RevealOnScroll } from "../RevealOnScroll";
import karanImage from "/src/assets/images/karan4.png";
import { useDarkMode } from "../../contexts/DarkModeContext";

export const About = () => {
  const { isDarkMode } = useDarkMode();

  const languages = [
    "Python",
    "C++",
    "Java",
    "Kotlin",
    "C",
    "HTML/CSS",
    "SQL",
    "Typescript",
    "JavaScript",
    "ARMv7",
    "Verilog",
    "VHDL",
  ];

  const toolsAndTechnologies = [
    "Azure DevOps",
    "Google Cloud Platform",
    "Android Studio",
    "Docker",
    "Kubernetes",
    "Firebase",
    "Postman",
    "Git",
    "Bash",
    "Grafana",
    "Tableueu",
    "Jupyter Notebook",
    "Anaconda",
    "Agile",
    "Scrum",
    "MongoDB",
    "MySQL",
  ];

  const frameworksAndLibraries = [
    "React",
    "Node.js",
    "NumPy",
    "Pandas",
    "Jetpack Compose",
    "Matplotlib",
    "PostgreSQL",
    "REST APIs",
    "CI/CD",
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex flex-col justify-center py-20 ${isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#F0F0EB]'
        }`}
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-12">
          {/* Introduction Section */}
          <div className="text-center mb-12">
            <h3 className="leading-relaxed mb-4 text-[#CC785C]">
              Introduction
            </h3>
            <h2 className={`text-5xl font-bold mb-4 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}>
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
              <p className={`mb-6 text-lg leading-relaxed ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                }`}>
                Hey, I’m Karan — a Computer Engineering student at the
                University of Waterloo who enjoys building clean, performant
                software that makes real-world systems more intuitive and
                efficient. My interests lie at the intersection of backend
                infrastructure, frontend design, and data-driven engineering.
                Whether I’m designing dashboards, optimizing systems, or
                learning new tools, I care about writing code that’s thoughtful,
                scalable, and easy to maintain. I’m a big believer in shipping
                fast, learning on the fly, and always improving — whether that’s
                through collaboration, iteration, or just getting my hands
                dirty. Outside of tech, I stay active through dance and fitness,
                and I’m always down to explore a new creative project or
                challenge. This portfolio is a small reflection of the things
                I’ve learned (and am still learning) — thanks for stopping by.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
              }`}>
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend Skills */}
              <div>
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                  }`}>
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {languages.map((tech, key) => (
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
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                  }`}>
                  Tools and Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {toolsAndTechnologies.map((tech, key) => (
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
                <h4 className={`font-semibold mb-2 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                  }`}>
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2">
                  {frameworksAndLibraries.map((tech, key) => (
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
          {/* Education and Work Experience Section */}
          <div className="space-y-8">
            {/* Education Section - Horizontal Layout */}
            <div className={`p-6 rounded-lg shadow-md ${isDarkMode
              ? 'bg-[#1a1a1a] border border-[#333333]'
              : 'bg-white border border-gray-200'
              }`}>
              <h3 className={`text-sm font-bold uppercase mb-6 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                }`}>
                Education
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* University */}
                <div>
                  <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                    }`}>
                    BASc in Computer Engineering
                  </h4>
                  <p className={`text-sm mb-3 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    University of Waterloo (2021 - 2026)
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    Relevant Coursework: Data Structures and Algorithms, Software
                    Design and Architecture, Computer Networks, Database Systems,
                    Compilers, Operating Systems, Analog Control Systems, Digital
                    Computers, embedded Systems, Computer Architecture, and
                    Digital Logic Design.
                  </p>
                </div>

                {/* High School */}
                <div>
                  <h4 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                    }`}>
                    Ontario Secondary School Diploma
                  </h4>
                  <p className={`text-sm mb-3 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    North Albion Collegiate Institute (Sep 2017 - Jun 2021)
                  </p>
                  <div className={`text-sm space-y-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                    <p>• Ontario Scholar – Academic excellence (80%+ average)</p>
                    <p>• Honour Roll – Consistently high achievement</p>
                    <p>• Extracurriculars: Pan-Ultimate Steelpan Band, Baseball, Badminton</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Section - Full Width */}
            <div className={`p-6 rounded-lg shadow-md ${isDarkMode
              ? 'bg-[#1a1a1a] border border-[#333333]'
              : 'bg-white border border-gray-200'
              }`}>
              <h3 className={`text-sm font-bold uppercase mb-6 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                }`}>
                Work Experience
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                  <h4 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                      }`}>
                      Data Analyst Intern – Electricity Markets at Independent Electricity System Operator
                    </h4>
                    <p className={`text-sm mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      Starting 09/2025 | Toronto, ON
                    </p>
                    <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                    </ul>
                  </div>
                  
                  {/* AGFA HealthCare */}
                  <div>
                    <h4 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                      }`}>
                      Performance Engineer Co-op at AGFA HealthCare
                    </h4>
                    <p className={`text-sm mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      01/2025 - 04/2025 | Waterloo, ON
                    </p>
                    <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <li>• Provisioned over 10,000 users and 900 external systems into enterprise imaging clusters using automated XML pipelines and Python scripts, improving deployment efficiency by 60%</li>
                      <li>• Built and maintained OpenSearch/Elasticsearch dashboards in Grafana using Lucene syntax, enabling near real-time tracking of performance metrics across 20+ nodes</li>
                      <li>• Resolved user activation issues by analyzing database schema and scripting SQL updates with encrypted credentials, reducing post-import defects by 80%</li>
                      <li>• Automated system updates and Java memory configuration via Jenkins pipelines and VM deployments, cutting manual setup time by 50% and supporting high-load operations</li>
                    </ul>
                  </div>

                  {/* Independent Electricity System Operator */}
                  <div>
                    <h4 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                      }`}>
                      Software Developer & Analyst Co-op at Independent Electricity System Operator
                    </h4>
                    <p className={`text-sm mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      01/2024 - 04/2024 | Toronto, ON
                    </p>
                    <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <li>• Led development of automated data harvesting pipeline for calculating carbon intensity of electricity imports using Python, Pandas, and Selenium, enhancing data accuracy by 25% and reducing processing time by 70%</li>
                      <li>• Developed Python tool to streamline extraction of CEC invoices and inventory information, reducing data retrieval time from 2 hours to 5 minutes</li>
                      <li>• Collaborated with Karbone Inc. and IRD team on Clean Energy Credits project, performing detailed pricing analysis and policy verification to ensure compliance with industry standards</li>
                    </ul>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Ontario Ministry of Health */}
                  <div>
                    <h4 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                      }`}>
                      Software Developer at Ontario Ministry of Health
                    </h4>
                    <p className={`text-sm mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      09/2022 - 12/2022 | Toronto, ON
                    </p>
                    <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <li>• Developed and maintained full-stack TypeScript web application using React, Node.js, and MongoDB, improving UI responsiveness and user experience</li>
                      <li>• Resolved 50+ critical bugs through structured testing, boosting system stability and reliability across the platform</li>
                      <li>• Streamlined deployment processes using Azure DevOps, reducing deployment time by 25% and accelerating feature delivery cycles</li>
                    </ul>
                  </div>

                  {/* Executive IT Support */}
                  <div>
                    <h4 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-[#f3f4f6]' : 'text-[#191919]'
                      }`}>
                      Executive IT Support at Ministry of Public and Business Service Delivery and Procurement
                    </h4>
                    <p className={`text-sm mb-2 font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                      01/2022 - 04/2022 | Toronto, ON
                    </p>
                    <ul className={`text-sm space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                      <li>• Resolved 100+ technical issues across hardware, networking, and system configurations, ensuring uninterrupted operations for internal users</li>
                      <li>• Managed and updated web content to enhance cross-device compatibility and improve accessibility standards for all users</li>
                      <li>• Provided technical support and troubleshooting for various software applications and system integrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

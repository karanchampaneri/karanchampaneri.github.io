import { RevealOnScroll } from "../RevealOnScroll";
import karanImage from "/src/assets/images/karan4.png";

export const About = () => {
  const languages = [
    "Python",
    "C++",
    "Java",
    "C",
    "HTML/CSS",
    "SQL",
    "Typescript",
    "ARMv7",
    "Verilog",
    "VHDL",
  ];

  const toolsAndTechnologies = [
    "Azure DevOps",
    "Google Cloud Platform",
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
    "Matplotlib",
    "PostgreSQL",
    "REST APIs",
    "CI/CD",
  ];

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
            <h3 className="leading-relaxed mb-4" style={{ color: "#CC785C" }}>
              Introduction
            </h3>
            <h2
              className="text-5xl font-bold mb-4"
              style={{ color: "#191919" }}
            >
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
              <p
                className="mb-6 text-lg leading-relaxed"
                style={{ color: "#191919" }}
              >
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
            <h3
              className="text-2xl font-bold mb-6"
              style={{ color: "#191919" }}
            >
              Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Frontend Skills */}
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "#191919" }}>
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
                <h4 className="font-semibold mb-2" style={{ color: "#191919" }}>
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
                <h4 className="font-semibold mb-2" style={{ color: "#191919" }}>
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
          {/* Bottom Section: Education and Work Experience */}
          {/* Bottom Section: Education and Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
            {/* Education Section */}
            <div
              className="p-6 rounded-lg shadow-md bg-[#FFFFFF] flex flex-col"
              style={{
                border: "1px solid #E5E5E5", // Light gray border to match the Projects section
              }}
            >
              <h3
                className="text-sm font-bold uppercase mb-4"
                style={{ color: "#191919" }}
              >
                Education
              </h3>
              <div>
                {/* University */}
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ color: "#191919" }}
                >
                  BASc in Computer Engineering
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  University of Waterloo (2021 - 2026)
                </p>
                <p className="text-sm text-gray-600">
                  Relevant Coursework: Data Structures and Algorithms, Software
                  Design and Architecture, Computer Networks, Database Systems
                </p>
              </div>

              <div className="mt-6">
                {/* High School */}
                <h4
                  className="text-lg font-bold mb-2"
                  style={{ color: "#191919" }}
                >
                  Ontario Secondary School Diploma
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  North Albion Collegiate Institute (Sep 2017 - Jun 2021)
                </p>
                <p className="text-sm text-gray-600">
                  Grade: 12
                  <br />
                  Activities and Societies: Pan-Ultimate Steelpan Band,
                  Baseball, Badminton
                  <br />
                  Honour Roll
                </p>
              </div>
            </div>

            {/* Work Experience Section */}
            <div
              className="p-6 rounded-lg shadow-md bg-[#FFFFFF] flex flex-col"
              style={{
                border: "1px solid #E5E5E5", // Light gray border to match the Projects section
              }}
            >
              <h3
                className="text-sm font-bold uppercase mb-4"
                style={{ color: "#191919" }}
              >
                Work Experience
              </h3>
              <div>
                {/* AGFA HealthCare */}
                <div className="mb-4">
                  <h4
                    className="text-lg font-bold mb-1"
                    style={{ color: "#191919" }}
                  >
                    Performance Engineer Co-op at AGFA HealthCare
                  </h4>
                  <p className="text-sm text-gray-600">
                    01/2025 - 04/2025 | Waterloo, ON
                  </p>
                  <p className="text-sm text-gray-600">
                    - Provisioned over 10,000 users and 900 external systems
                    into enterprise imaging clusters using automated XML
                    pipelines and Python scripts, improving deployment
                    efficiency by 60%.
                    <br />
                    - Built and maintained OpenSearch/Elasticsearch dashboards
                    in Grafana using Lucene syntax, enabling near real-time
                    tracking of performance metrics across 20+ nodes.
                    <br />
                    - Resolved user activation issues by analyzing database
                    schema and scripting SQL updates with encrypted credentials,
                    reducing post-import defects by 80%.
                    <br />- Automated system updates and Java memory
                    configuration via Jenkins pipelines and VM deployments,
                    cutting manual setup time by 50% and supporting high-load
                    operations.
                  </p>
                </div>

                {/* Independent Electricity System Operator */}
                <div className="mb-4">
                  <h4
                    className="text-lg font-bold mb-1"
                    style={{ color: "#191919" }}
                  >
                    Software Developer & Analyst Co-op at Independent
                    Electricity System Operator
                  </h4>
                  <p className="text-sm text-gray-600">
                    01/2024 - 04/2024 | Toronto, ON
                  </p>
                  <p className="text-sm text-gray-600">
                    - Solely led the development of an automated data harvesting
                    pipeline for calculating carbon intensity of electricity
                    imports using Python, Pandas, and Selenium, significantly
                    enhancing data accuracy by 25% and reducing processing time
                    by 70%.
                    <br />
                    - Developed a Python tool to streamline the extraction of
                    information about CEC invoices and inventory, reducing data
                    retrieval time from 2 hours to 5 minutes.
                    <br />- Collaborated with Karbone Inc. and the IRD team on
                    the Clean Energy Credits (CEC) project, performing detailed
                    pricing analysis and policy verification to ensure
                    compliance with industry standards, promote clean energy
                    adoption, and support carbon footprint reduction
                    initiatives.
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

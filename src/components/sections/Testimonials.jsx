import { RevealOnScroll } from "../RevealOnScroll";
import IESOLogo from "../../assets/images/IESO.png"; // Import the logo image

export const Testimonials = () => {
  const testimonials = [
    {
      logo: IESOLogo, // Replace with the actual logo path
      quote: `One of Karan's areas of strength is his technological agility.  This term he was able to produce several applications for the team using Anaconda scripts ranging from a report summary tool for our Clean Energy Credits program administration and Sales and scraping hourly emissions data from our jurisdictions in North America (NYISO and MISO). In particular with the latter project, he was able to overcome many technical challenges such as creating code the ability to scrape hourly on a continuous basis, given limitations with Tools and also align emissions values based on different time zones as a result of day light saving changes.`,
      quote2: `Another top strength that Karan has demonstrated is critical thinking.  During his work term, Karan created a memo looking at the pros and cons of various pricing strategies for the sale of IESO's long term Clean Energy Credits.  In that report, he provided concrete examples looking at the potential tier blends that could fufill a specific buyer request. Through this example, he was able to come to a conclusion and recommend that IESO moves forward with a specific pricing strategy.  His memo was well received and ultimately, IESO adopted his suggestion.`,
      quote3: `Lastly, Karan is very responsible and can work well with minimal supervision.  He was able to carry forward the emissions tracking project with minimal supervision while one of his supervisors was away on vacation for several weeks.  This involved figuring out technical challenges and making decisions to move the project along.`,
      author: "Philip Woo", // Replace with the actual name of the supervisor
      position: "Senior System and Sector Development Advisor", // Replace with the actual position
      bgColor: "#cbcadb", // Background color for this testimonial
      //cbcadb
      //e3dacc
      //bcd1ca
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen flex items-center justify-center py-20"
      style={{ backgroundColor: "#F0F0EB" }} // Ivory Medium
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: "#CC785C" }}>
              Testimonials
            </h2>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-lg flex flex-col items-center text-center"
                style={{ backgroundColor: testimonial.bgColor }}
              >
                {/* Company Logo */}
                <div className="mb-4">
                  <img
                    src={testimonial.logo}
                    alt={`${testimonial.author}'s Company Logo`}
                    className="w-50 h-auto object-contain"
                  />
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-xl font-semibold text-gray-800 mb-4">
                  <p className="mb-4">"{testimonial.quote}"</p>
                  <p className="mb-4">"{testimonial.quote2}"</p>
                  <p className="mb-4">"{testimonial.quote3}"</p>
                </blockquote>

                {/* Author and Position */}
                <p className="text-lg text-gray-600">
                  <strong>{testimonial.author}</strong>, {testimonial.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

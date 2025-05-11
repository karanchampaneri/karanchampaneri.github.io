import { RevealOnScroll } from "../RevealOnScroll";
import IESOLogo from "../../assets/images/IESO.png"; // Import the logo image

export const Testimonials = () => {
    const testimonials = [
        {
            logo: IESOLogo, // Replace with the actual logo path
            quote: "Karan demonstrated strong technical agility by building multiple tools using Anaconda, including a report summary tool and a scraper for hourly emissions data across time zones and daylight saving changes. He also showed excellent critical thinking by evaluating pricing strategies for Clean Energy Credits and producing a well-received memo that led to IESO adopting his recommendation. Karan is highly responsible and worked independently to advance key projects even during supervisory absences.",
            author: "Philip Woo", // Replace with the actual name of the supervisor
            position: "Senior System and Sector Development Advisor", // Replace with the actual position
            bgColor: "#e3dacc", // Background color for this testimonial
        },
        {
            logo: "/path/to/company-logo2.png", // Replace with the actual logo path
            quote: "Technology is best when it brings people together.",
            author: "Matt Mullenweg",
            position: "Founder, WordPress",
            bgColor: "#bcd1ca", // Background color for this testimonial
        },
        {
            logo: "/path/to/company-logo3.png", // Replace with the actual logo path
            quote: "The best way to predict the future is to invent it.",
            author: "Alan Kay",
            position: "Computer Scientist",
            bgColor: "#cbcadb", // Background color for this testimonial
        },
    ];

    return (
        <section
            id="testimonials"
            className="min-h-screen flex items-center justify-center py-20"
            style={{ backgroundColor: "#F0F0EB" }} // Ivory Medium
        >
            <RevealOnScroll>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold" style={{ color: "#CC785C" }}>
                            Testimonials
                        </h2>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                        className="w-24 h-auto object-contain"
                                    />
                                </div>

                                {/* Testimonial Quote */}
                                <blockquote className="text-xl font-semibold text-gray-800 mb-4">
                                    "{testimonial.quote}"
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


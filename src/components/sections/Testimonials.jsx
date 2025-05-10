import { RevealOnScroll } from "../RevealOnScroll";

export const Testimonials = () => {
    const testimonials = [
        {
            logo: "/path/to/company-logo1.png", // Replace with the actual logo path
            quote: "If knowledge is power and we're building machines that have more knowledge than us, what will happen between us and the machines?",
            author: "Deep Ganguli",
            position: "Research Lead, Societal Impacts",
        },
        {
            logo: "/path/to/company-logo2.png", // Replace with the actual logo path
            quote: "Technology is best when it brings people together.",
            author: "Matt Mullenweg",
            position: "Founder, WordPress",
        },
        // Add more testimonials as needed
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                {/* Left Column: Company Logo */}
                                <div className="relative flex justify-center">
                                    <img
                                        src={testimonial.logo}
                                        alt={`${testimonial.author}'s Company Logo`}
                                        className="w-48 h-auto object-contain"
                                    />
                                </div>

                                {/* Right Column: Testimonial */}
                                <div>
                                    <blockquote className="text-2xl font-semibold text-gray-800 mb-4">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <p className="text-lg text-gray-600">
                                        <strong>{testimonial.author}</strong>, {testimonial.position}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
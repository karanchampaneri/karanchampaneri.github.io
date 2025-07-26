import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useDarkMode } from "../../contexts/DarkModeContext";

export const Contact = () => {
  const { isDarkMode } = useDarkMode();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center justify-center py-20 ${
        isDarkMode ? 'bg-[#0a0a0a]' : 'bg-[#F0F0EB]'
      }`}
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-8 text-center text-[#CC785C]">
            Get in Touch
          </h2>
          <p className={`text-lg text-center mb-12 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a question or want to work together? Fill out the form below,
            and I'll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className={`w-full rounded-lg px-4 py-3 transition focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] ${
                  isDarkMode 
                    ? 'bg-[#1a1a1a] border border-[#333333] text-gray-200' 
                    : 'bg-white border border-gray-300 text-gray-800'
                }`}
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className={`w-full rounded-lg px-4 py-3 transition focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] ${
                  isDarkMode 
                    ? 'bg-[#1a1a1a] border border-[#333333] text-gray-200' 
                    : 'bg-white border border-gray-300 text-gray-800'
                }`}
                placeholder="Your Email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className={`w-full rounded-lg px-4 py-3 transition focus:outline-none focus:border-[#CC785C] focus:ring-1 focus:ring-[#CC785C] ${
                  isDarkMode 
                    ? 'bg-[#1a1a1a] border border-[#333333] text-gray-200' 
                    : 'bg-white border border-gray-300 text-gray-800'
                }`}
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#CC785C] text-white py-3 px-6 rounded-lg font-medium transition hover:bg-[#b4694f] focus:outline-none focus:ring-2 focus:ring-[#CC785C] focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import React from "react";
import codingboy from "../images/codingboy.webp";

const ContactForm: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-8 py-16">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-3xl overflow-hidden w-full max-w-5xl flex flex-col md:flex-row">
                {/* Left Side - Image */}
                <div className="w-full md:w-1/2">
                    <img
                        src={codingboy}
                        alt="Contact illustration"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-blue-600 dark:text-cyan-400 mb-6">
                        Contact Me
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Feel free to reach out for collaborations, project inquiries, or just to say hi!
                    </p>

                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-5 py-4 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400"
                        />
                        <input
                            type="text"
                            placeholder="Mobile Number"
                            className="w-full px-5 py-4 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-5 py-4 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="w-full px-5 py-4 border dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 dark:bg-cyan-500 text-white py-4 rounded-lg font-semibold hover:bg-blue-600 dark:hover:bg-cyan-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

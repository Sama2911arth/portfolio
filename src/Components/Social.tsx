import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Social: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white p-8 flex items-center justify-center min-h-screen">
            <div className="bg-white text-gray-900 rounded-3xl p-8 shadow-lg w-full max-w-7xl">
                <div className="flex flex-col md:flex-row md:space-x-12 space-y-12 md:space-y-0">
                    {/* Left Section */}
                    <div className="md:w-1/3 space-y-6">
                        <h1 className="text-3xl font-bold">Let's keep in touch!</h1>
                        <p className="text-lg">Request an Enquiry!</p>

                        <div className="flex items-center bg-gray-200 rounded-full overflow-hidden p-1">
                            <input
                                type="text"
                                placeholder="Email Id/Mobile No."
                                className="flex-1 p-2 text-gray-700 bg-gray-200 outline-none"
                            />
                            <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <FaPhone className="text-blue-400" />
                                <p>+91 7898183094</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaEnvelope className="text-blue-400" />
                                <p>samarthshukla994@gmail.com</p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaMapMarkerAlt className="text-blue-400" />
                                <p>Sagar, Madhya Pradesh, 470002</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 flex flex-col md:flex-row justify-around text-blue-500">
                        {/* Fields Section */}
                        <div>
                            <h2 className="font-semibold mb-4">Fields I work In</h2>
                            <ul className="space-y-2">
                                <li>Frontend Development</li>
                                <li>Backend Development</li>
                                <li>Mobile App Development</li>
                                <li>Database Management</li>
                            </ul>
                        </div>

                        {/* Frameworks Section */}
                        <div>
                            <h2 className="font-semibold mb-4">Frameworks I use the Most</h2>
                            <ul className="space-y-2">
                                <li>Node.js</li>
                                <li>React.js</li>
                                <li>Express.js</li>
                                <li>React Native</li>
                            </ul>
                        </div>

                        {/* Follow Us Section */}
                        <div>
                            <h2 className="font-semibold mb-4">Reach Out to me On</h2>
                            <div className="flex space-x-4 text-2xl">
                                <a href="https://www.instagram.com" className="text-pink-500">
                                    <FaInstagram />
                                </a>
                                <a href="https://www.facebook.com" className="text-blue-600">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.linkedin.com/in/samarth-shukla-ab4391256/" className="text-blue-500">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com/Sama2911arth/" className="text-gray-700">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <p className="text-gray-500">&copy; 2025 Samarth Shukla. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Social;
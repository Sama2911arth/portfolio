import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function LearningJourney() {
    const steps = [
        {
            number: 1,
            title: "Mahar Regiment Public School, Sagar (M.P.)",
            description: "10th standard (2019-20)",
            icon: (
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            )
        },
        {
            number: 2,
            title: "Joy and Campion Sr. Sec. School, Sagar (M.P.)",
            description: "12th standard (2021-22)",
            icon: (
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            )
        },
        {
            number: 3,
            title: "Jaypee University Of Engineering And Technology, Guna (M.P.)",
            description: "Bachelor of Technology in Computer Science (2022-Present)",
            icon: (
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            )
        },

    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen">


            {/* Education Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-12">My Learning Journey</h1>
                <div className="space-y-8">
                    {steps.map((step) => (
                        <div key={step.number} className="flex items-center space-x-4 bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold">
                                    {step.number}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold text-white">{step.title}</h2>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                            <div className="ml-auto">
                                {step.icon}
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        </div>
    );
}
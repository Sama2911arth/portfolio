import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaCuttlefish, FaRobot, FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiExpress, SiReact, SiCplusplus, SiTypescript, SiMongodb, SiFirebase, SiAppwrite, SiMysql } from 'react-icons/si';

export default function Awards() {
    const skills = [
        // Languages
        { name: "C", icon: <FaCuttlefish size={48} className="text-blue-400" /> },
        { name: "C++", icon: <SiCplusplus size={48} className="text-blue-400" /> },
        { name: "Python", icon: <FaPython size={48} className="text-yellow-400" /> },
        { name: "JavaScript", icon: <FaJsSquare size={48} className="text-yellow-300" /> },
        { name: "TypeScript", icon: <SiTypescript size={48} className="text-blue-400" /> },
        { name: "HTML5", icon: <FaHtml5 size={48} className="text-orange-400" /> },

        // Frameworks
        { name: "React", icon: <FaReact size={48} className="text-blue-400" /> },
        { name: "React Native", icon: <SiReact size={48} className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs size={48} className="text-green-400" /> },
        { name: "Express", icon: <SiExpress size={48} className="text-gray-400" /> },
        { name: "CSS3", icon: <FaCss3Alt size={48} className="text-blue-600" /> },
        { name: "Generative AI", icon: <FaRobot size={48} className="text-purple-400" /> },

        // Databases
        { name: "MongoDB", icon: <SiMongodb size={48} className="text-green-400" /> },
        { name: "Firebase", icon: <SiFirebase size={48} className="text-yellow-400" /> },
        { name: "Appwrite", icon: <SiAppwrite size={48} className="text-red-400" /> },
        { name: "MySQL", icon: <SiMysql size={48} className="text-blue-400" /> },
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen">

            {/* Languages and Frameworks Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl lg:text-5xl font-bold text-white">
                        Languages and <span className="text-teal-500">Frameworks</span> I <span className="text-teal-500">Use</span><span className="text-teal-500">.</span>
                    </h1>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
                            {skill.icon}
                            <h2 className="mt-4 text-xl font-semibold text-white">{skill.name}</h2>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}
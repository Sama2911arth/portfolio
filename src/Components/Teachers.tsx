import React from 'react';
import travisco from '../images/travisco.jpg';
import sociopedia from '../images/sociopedia.png';
import codingpro from '../images/codingpro.png';
import bookstore from '../images/bookstore.png';
import eventbizz from '../images/eventbizz.png';
import mealdrive from '../images/mealdrive.png';

export default function ProjectsSection() {
    const projects = [
        {
            name: "Travisco",
            image: travisco,
            techStack: "Gen-AI | LangChain | React.js | Firebase",
            description: "Developed a website where users can upload images of famous monuments and get descriptions.",
            github: "https://github.com/Sama2911arth/Travisco", // Replace with actual GitHub link
        },
        {
            name: "Sociopedia",
            image: sociopedia,
            techStack: "MERN Stack | MongoDB | React.js | Node.js | Express.js",
            description: "A social media platform where users can share posts and interact.",
            github: "https://github.com/Sama2911arth/Sociopedia",
        },
        {
            name: "CodingPro UI",
            image: codingpro,
            techStack: "Frontend | React.js | Figma",
            description: "UI for a coding institute's website.",
            github: "https://github.com/Sama2911arth/CodingPro-Website-UI",
        },
        {
            name: "BookStore WebApp",
            image: bookstore,
            techStack: "MERN Stack | MongoDB | React.js | Node.js | TailwindCSS",
            description: "An app to search and browse book collections.",
            github: "https://github.com/Sama2911arth/Book-Store-Project-using-MERN-and-Tailwind-CSS",
        },
        {
            name: "EventBizz",
            image: eventbizz,
            techStack: "Mobile App | React Native | AppWrite | TypeScript",
            description: "An app to explore and book events.",
            github: "https://github.com/Sama2911arth/EventBizz-App",
        },
        {
            name: "MealDrive",
            image: mealdrive,
            techStack: "Mobile App | React Native | AppWrite",
            description: "App to search recipes and cooking instructions.",
            github: "https://github.com/Sama2911arth/MealDrive",
        },
    ];

    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6 sm:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
                        Some of the <span className="text-cyan-500">Projects.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transform transition hover:scale-105"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                                    {project.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    {project.techStack}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mt-3">
                                    {project.description}
                                </p>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-cyan-500 rounded hover:bg-cyan-600"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

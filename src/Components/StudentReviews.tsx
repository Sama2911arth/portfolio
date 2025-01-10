import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaUser, FaCode, FaBrain, FaLaptopCode } from 'react-icons/fa';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    icon: JSX.Element;
}

export default function AboutMe() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Samarth Shukla",
            role: "Aspiring Developer",
            content: "Aspiring React Native and Full Stack Developer with a strong foundation in data structures and algorithms, passionate about building scalable and efficient applications. I enjoy solving complex coding problems, with over 100 questions solved on LeetCode, and have worked on various projects including e-commerce apps, AI-driven solutions, and more. I'm always excited to learn and collaborate on innovative projects involving AI, ML, and full stack web/mobile development. Feel free to explore my projects and connect with me!",
            icon: <FaUser size={48} className="text-gray-400" />
        },
        {
            id: 2,
            name: "John Doe",
            role: "Software Engineer",
            content: "Samarth is an exceptional developer. His attention to detail and dedication to his work is unparalleled.",
            icon: <FaCode size={48} className="text-gray-400" />
        },
        {
            id: 3,
            name: "Jane Smith",
            role: "Product Manager",
            content: "Working with Samarth has been a pleasure. He is highly skilled and always delivers on time.",
            icon: <FaBrain size={48} className="text-gray-400" />
        },
        // Add more testimonials as needed
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">




            {/* About Me Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gray-800 rounded-lg p-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column - Tech Icon */}
                        <div className="relative">
                            <div className="w-48 h-48 rounded-full bg-gray-700 flex items-center justify-center mx-auto mb-4 animate-pulse">
                                <FaLaptopCode size={96} className="text-blue-400 animate-pulse" />
                            </div>
                            <p className="text-center text-white text-sm mt-2">According to ChatGPT, this is how my workspace looks like</p>
                        </div>

                        {/* Right Column - About Me Content */}
                        <div className="space-y-8">
                            <h1 className="text-4xl lg:text-5xl font-bold text-white">
                                About Me
                            </h1>
                            <p className="text-gray-400 text-lg">
                                Hi, I'm Samarth Shukla, a passionate Full Stack Developer and Mobile App Developer. I specialize in building responsive web applications using the MERN stack and designing mobile apps with amazing user interfaces using React Native.
                            </p>
                            <p className="text-gray-400 text-lg">
                                I have a proven track record of delivering high-quality projects that meet the needs of the hour. I am always eager to learn new technologies and take on new challenges.
                            </p>
                            <p className="text-gray-400 text-lg">
                                When I'm not coding, you can find me exploring new places, reading tech blogs, or spending time with my family and friends. Let's connect and create something amazing together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>




        </div>

    );
}
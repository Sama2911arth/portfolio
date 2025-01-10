import React from 'react';
import front from '../images/front.webp';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function FirstPage() {
    const stats = [
        { image: "https://s3-alpha-sig.figma.com/img/a450/7d8e/c681d13666c4cd13e403567a7e2adf4c?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MX1ZQ4F6EXKmsAZNiP7Q7coBC9xWvM07oA2OdjDM52cni08-X86QGBk1pQUFc2BhgMzt9z70O9QUn7oOnr5yHsUDd1afQGD36ScHuY2mO9WXHKuOzvpwK6TG1JKikL3360X3MgyNY4RMW1GBOirdmaVwr8kWj2lY1k7bdDlas8R08p6B7qNqehiU0LAaq2LlVUzGPk1cJgmy2MxwipPtHV5xOfgTFuZi1Ux6NolXUC7Xe8Go0Z4fUl4Ihi17Vfx0Ho5t2XZ7LsDqTjaK-cR4xsip0Juz1gjaGMgInGH0bDRjK6~y1sKGauyhDVv4wh7jjyN3uQ6~SrbMterDxncHeg__", number: "50+", label: "Cities" },
        { image: "https://s3-alpha-sig.figma.com/img/ca75/62dc/f6ab2bda6396c038478bc7e8bac9ff4d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f70Yww90jGEuvRPaq1j10HBMMcrSOB1BSts7ss7~CoFe1azH~CsA9w3dmdStXLuMaufYuosDefPHZWbpy~1eqPKmVIaNJiVWmVMxOsWgKkXrvROCmPkJaht8ZP1TwO8xrtgUp-8pxWfLZvvNu9Cp71P3lzJ9dThYOiUNnZJ4UCTs14MiVEHsqiPy02ZX8GQNa7vYAFn-chEd1VUfouhOMPz~RMZT0KBCvNm07lbHLD6Izp-QL09IctmWKzv21vEDklmNqC2ugzs24r~pM19d4kH5NzVQ5QSZ2th6PG8nHVaY8plB93gXNUG8HrEJ~DZZSlqlDA6ecdyeNqsNH2lKsg__", number: "80+", label: "Modules" },
        { image: "https://s3-alpha-sig.figma.com/img/2626/76a5/be7177d6615a51b866cfbce17d01a3e9?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q41cpdwNEQVKYeXfGzNmWEJ2QgoMJ2B37E~NwIuPaeSPIAzZd~DH0PkBbts54It8Vhsiv5yhl~coO1uGyZLtyK2uAJ8F1wlUkkwGU23N-FDfo7YagT8sD3Pc4wuC4Ni~QzdVKxO2r3MB7qq-5SxlBLCbgPdwMQH~SpQZeCwwcJ~ZcsRkqlcdWgolU7DqProDaTin~asAKadRuuNh73vIejL5GvYNK0g99C1rZxSlCMUqt0TkiK~TjnMlH-jxhkWsqk7NqpMUwftcx-2wQbPC~kUk0Y87Rqqpyuq6kmxdU~WljRuOYuie4P6ClUbxOBppK-AU16GpBPsfCBPCiIIjSg__", number: "10K+", label: "Students" },
        { image: "https://s3-alpha-sig.figma.com/img/9ef8/985d/d5d404395c93d8a5b5759b3f527700cc?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i7xi1A1mCqOjkL8xDc0KGyzBa3iQzwAKjZYpDwrYYFrgk11ysrYQ7plYp3peHhcML2ljoJsU1zHlj5H1I1Lv86r5dmRWon3uJ~Mna5phG5dPohBmpQFTx~Kvj5UNR2LDUCn3s9XnJuWAH3BEz3L-lTarLunSAT-EOqoj38h80HPWxN6-QNmfeIbX0atboPJLfiuu9oXcSg5riVlpNp6Ulv7wRbM24-~sqRP8s3zp7cSeaB9xXShe9M2DqZQTOG~YfZ2E2Ekex55QDrpmPU0D6YNIlV~Vi0iNL4aNpGwMWV-~LcbvPqRC6sG5PIMR7xfiMlfZIgrjdVKOdoJehIhNjg__", number: "100+", label: "Institutes" },
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Navigation */}
            <nav className="border-b border-gray-700 sticky top-0 bg-gray-900 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="text-2xl font-bold text-white">Samarth Shukla</div>
                        <div className="flex items-center space-x-8">
                            <a href="https://www.linkedin.com/in/samarth-shukla-ab4391256/" className="text-gray-400 hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                            <a href="https://github.com/Sama2911arth/" className="text-gray-400 hover:text-white">
                                <FaGithub size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Computer Image */}
                    <div className="relative">
                        <img
                            src={front}
                            alt="Desktop Computer"
                            className="w-full rounded-full animate-pulse"
                        />
                        <p className="text-center text-white text-sm mt-2">According to ChatGPT, this is how my workspace looks like!</p>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-white">
                            Hi, I am
                            <br />
                            Samarth Shukla
                        </h1>
                        <h3 className="text-gray-400">So I am a techy. <br />What I do is below this!</h3>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {/* Full Stack Development Card */}
                            <div className="border-2 rounded-lg p-6 border-blue-500 hover:shadow-lg transition-shadow bg-gray-800">
                                <div className="text-blue-400 mb-4">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Full Stack Development</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Building responsive Web-Apps using MERN Stack. Sometimes I also use other databases.
                                </p>
                            </div>

                            {/* Mobile App Development Card */}
                            <div className="border-2 rounded-lg border-blue-500 p-6 hover:shadow-lg transition-shadow bg-gray-800">
                                <div className="text-blue-400 mb-4">
                                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10H3M21 6H3M21 14H3M21 18H3" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-white">Mobile App Development</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    I design mobile apps with amazing user interfaces using ReactNative.
                                </p>
                            </div>
                            <div className="text-center mt-8">
                                <a
                                    href="https://drive.google.com/file/d/1GgQKsb1opDLSM8zABMZek_UKoKwmDp4u/view?usp=drive_link"
                                    download
                                    className="inline-block bg-teal-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social Media Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-center space-x-8">
                    <a href="https://www.linkedin.com/in/samarth-shukla-ab4391256/" className="text-gray-400 hover:text-white">
                        <FaLinkedin size={24} />
                    </a>
                    <span className="text-gray-400">|</span>
                    <a href="https://github.com/Sama2911arth/" className="text-gray-400 hover:text-white">
                        <FaGithub size={24} />
                    </a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FaInstagram size={24} />
                    </a>
                    <span className="text-gray-400">|</span>
                    <a href="#" className="text-gray-400 hover:text-white">
                        <FaFacebook size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
}
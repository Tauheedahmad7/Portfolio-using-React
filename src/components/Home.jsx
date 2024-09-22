import React, { useEffect } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import gsap from 'gsap';

const Home = () => {
    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            ".intro-1", 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1 }
        )
        .fromTo(
            ".intro-2", 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1 },
            "+=0.5" // delay before starting next animation
        )
        .fromTo(
            ".intro-3", 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 1 },
            "+=0.5" // delay before starting next animation
        );
    }, []);

    return (
        <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center bg-zinc-200" style={{ backgroundColor: 'zinc-200' }}>
            <div className="text-center text-white items-center">
                <div>
                    <h2 className="text-5xl font-bold font-serif mb-2 bg-gradient-to-r from-purple-700 to-pink-400 bg-clip-text text-transparent intro-1">
                        I'm Tauheed Ahmad
                    </h2>

                    <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-500 to-rose-700 bg-clip-text text-transparent intro-2">
                        I'm a Web Developer &
                    </h3>

                    <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-zinc-500 bg-clip-text text-transparent intro-3">
                        UI/UX Designer
                    </h3>
                </div>

                {/* Download Resume Button */}
                <div className="flex gap-14 items-center ml-14">
                    <div className="mt-4">
                        <a href="/TAUHEED_AHMAD.pdf" download="Tauheed_Ahmad.pdf">
                            <button className="px-6 py-3 bg-blue-600 text-white text-xl rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                                Download Resume
                            </button>
                        </a>
                    </div>

                    <div className="connect mt-5">
                        <button className="px-6 py-3 bg-blue-600 text-white text-xl rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Connect Me
                            <i className="ri-arrow-down-line ml-3"></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6 mt-[0vh] absolute bottom-32">
                <a href="https://www.linkedin.com/in/tauheed-ahmad-66b39a239/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl hover:text-blue-900">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Tauheedahmad7?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-3xl hover:text-gray-900">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/tauheed_ahmad95/" target="_blank" rel="noopener noreferrer" className="text-pink-500 text-3xl hover:text-pink-700">
                    <FaInstagram />
                </a>
            </div>
        </section>
    );
};

export default Home;

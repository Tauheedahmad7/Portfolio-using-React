const projects = [
    {
        title: 'Brandbeet Design',
        description: 'The design is very clean, with lots of white space. design and Developed modern websites using Html,css,javascripts and it is optimized for speed and user experiences. It is fully responsive design that adjusts perfectly on mobile, tablet, and desktop.',
        image: '/public/Brandbeet.jpg',
        liveLink: 'https://tauheedahmad7.github.io/Brandbeet-Clone/'
    },
    {
        title: 'Animated Websites',
        description: 'Interactive Animations Using the GSAP library, you’ve created smooth and engaging animations that take the user experience to the next level. With HTML and CSS, the website is fully responsive, ensuring flawless performance across all screen sizes. Responsive Design',
        image: '/public/Animated Websites.jpeg',
        liveLink: 'https://github.com/Tauheedahmad7/Animated-using-html-css-js-gsap'
    },
    {
        title: 'Dennis snellenberg',
        description: 'I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Building with Webflow (or Kirby CMS)the website is fully responsive, ensuring flawless performance across all screen sizes. Responsive Design and user experience with React and Tailwind Css ',
        image: '/public/dennis.jpeg',
        liveLink: 'https://github.com/Tauheedahmad7/React-project2'
    },
    {
        title: 'Blogs Websites',
        description: 'This blog website uses Node.js and Express.js for backend logic and routing, with MongoDB as the database to store blog posts and user data. The frontend is styled using Tailwind CSS for a modern, responsive design. It supports full CRUD functionality, allowing users to create, edit, update, and delete blog posts easily and efficiently.',
        image: '/public/Blogs.png',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 underline">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                    {projects.map((project, index) => (
                        <div key={index} className="p-10 bg-white rounded-lg shadow-lg">
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md" />
                            <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                            <p className="mt-2">{project.description}</p>

                            {/* Live Project Button */}
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer" // Ensures security and opens link in new tab
                                className="inline-block mt-4 font-semibold bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
                            >
                                Live Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

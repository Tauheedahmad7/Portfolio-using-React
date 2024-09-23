const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDb'];

const Skills = () => {
    return (
        <section id="skills" className="py-36 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-2 underline">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="py-10 mt-10  bg-zinc-300 rounded-lg shadow-lg">
                            <h3 className="text-lg md:text-2xl font-bold">{skill}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-200">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6 underline">Contact Me</h2>
                <form className="max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-4 mb-4 border border-gray-300 rounded-md"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full p-4 mb-4 border border-gray-300 rounded-md h-32"
                    />
                    <button type="submit" className="bg-blue-500 text-white py-3 px-6 font-semibold rounded-md hover:bg-blue-600">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

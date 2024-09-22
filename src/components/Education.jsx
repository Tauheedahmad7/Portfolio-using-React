const Education = () => {
    return (
        <section id="skills" className="py-14 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 underline">Education</h2>
                <div className="box bg-rd-400 grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div className="box1  bg-zinc-200 p-8 rounded-xl">
                        <div className="bg-white h-full py-12 px-2 rounded-xl ">
                            <div className="college flex justify-between mr-5 ml-5">
                                <h1 className="font-bold ">IES UNIVERSITY</h1>
                                <p className="font-light">Bhopal, Madhya Pradesh</p>
                            </div>
                            <div className="course flex justify-between mr-5 ml-5">
                                <h1>B.Tech(CSE)</h1>
                                <p>June 2020-April 2024</p>
                            </div>
                            <h1 className="font-bold">CGPA 7.98</h1>
                        </div>
                    </div>

                    <div className="box1  bg-zinc-200 p-8 rounded-xl">
                        <div className="bg-white h-full py-12 px-2 rounded-xl">
                            <div className="college flex justify-between mr-5 ml-5">
                                <h1 className="font-bold">Bihar Open Board</h1>
                                <p className="font-light">Muzaffarpur, Bihar</p>
                            </div>
                            <div className="course flex justify-between mr-5 ml-5">
                                <h1>12 <sup>th</sup>(BSEB)</h1>
                                <p>April 2017-March 2019</p>
                            </div>
                            <h1 className="font-bold">PERCENTAGE 67</h1>
                        </div>
                    </div>

                    <div className="box1 h-56 bg-zinc-200 p-8 rounded-xl relative">
                        <div className="bg-white h-full py-12 px-2 rounded-xl">
                            <div className="college flex justify-between mb-1 mr-5 ml-5">
                                <h1 className="font-bold ">Mother Teresa Vidhyapeeth</h1>
                                <p className="font-light">Muzaffarpur, Bihar</p>
                            </div>
                            <div className="course flex justify-between mr-5 ml-5">
                                <h1>10<sup>th</sup>(CBSE)</h1>
                                <p>April 2016-March 2017</p>
                            </div>
                            <h1 className="font-bold mt-3">CGPA 8.4</h1>
                        </div>
                    </div>


                    
                </div>
            </div>

        </section>

    )
};

export default Education;

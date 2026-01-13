import React from "react";
import { ReactTyped as Typed } from "react-typed";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";

const Home = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-white font-bold p-2 text-lg">
                    I had to learn CSS and JS for this
                </p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-white drop-shadow-lg">
                    SUANIME UNOFFICIAL OFFICIAL WEBSITE
                </h1>
                <h1 className="text-2xl md:text-3xl font-semibold py-2 text-white">
                    (Quick Description)
                </h1>
                <p className="text-lg text-white/90 py-2">Title Description</p>
                <div className="flex justify-center items-center flex-wrap">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
                        Join our social media: 
                    </p>
                    <Typed 
                        className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-purple-200"
                        strings={['Instagram', 'Discord', 'WeChat', 'LinkedIn']} 
                        typeSpeed={60} 
                        backSpeed={70} 
                        loop
                    />
                </div>
            </div>
            <Newsletter />
            <Cards />
        </div>
    );
}

export default Home;
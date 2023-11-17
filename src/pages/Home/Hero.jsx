import React from "react";
import { TypeAnimation } from "react-type-animation";
import doc from "../../assets/heroDoc.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-gray-600 body-font" id="one">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-xl text-2xl mb-12 font-medium text-gray-900 ">
            <TypeAnimation
              sequence={[
                "We care for you all",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "We are the Best",
                1000,
                "We provide health care",
                1000,
                "We preserve the village",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>

          <div className="flex justify-center">
            <Link to="/appointment">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Schedule appointment
              </button>
            </Link>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              See a doctor
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded h-[34rem] w-full"
            alt="hero"
            src={doc}
            style={{ objectPosition: "40% 20%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

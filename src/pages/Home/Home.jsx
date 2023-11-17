import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { PiCookingPot } from "react-icons/pi";
import Navbar from "../../components/Navbar";
import Dish from "../../components/Dish";
import ndole from "../../assets/images/ndole.webp";

export default function Home() {
  return (
    <div className="pb-10 space-y-5">
      <div className="mx-auto py-2 bg-[#F3EEEA]">
        <div className="max-w-6xl mx-auto my-4 flex flex-wrap-reverse items-center justify-center bg-[#F3EEEA] gap-6">
          <div className="max-w-2xl space-y-3 px-20">
            <h1 className="text-4xl font-bold">
              A journey through the world of flavours
            </h1>

            <p>
              Explore exciting dishes, discover new techniques and delight your
              taste buds with our vast collection of recipes
            </p>
          </div>

          <img src={ndole} alt="Hero" className="h-80" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-8 px-4">
        <h4 className="font-bold text-3xl text-center max-w-xl mx-auto">
          We offer people the best way to eat healthy food
        </h4>

        <div className="flex justify-center flex-wrap gap-6">
          <div className="inline-flex flex-col gap-2 w-44 items-center px-6 py-3 border rounded-2xl">
            <FaTruckFast className="text-4xl" />

            <h5 className="font-bold text-center">Fast delivery</h5>
          </div>

          <div className="inline-flex flex-col gap-2 w-44 items-center px-6 py-3 border rounded-2xl">
            <GiFruitBowl className="text-4xl" />

            <h5 className="font-bold text-center">Fresh ingredients</h5>
          </div>

          <div className="inline-flex flex-col gap-2 w-44 items-center px-6 py-3 border rounded-2xl">
            <PiCookingPot className="text-4xl" />

            <h5 className="font-bold text-center">Cooking procedure</h5>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto space-y-6 px-4">
        <h3 className="text-3xl font-bold">Our Dishes</h3>

        <div className="flex items-center justify-around gap-3 flex-wrap">
          <Dish />
          <Dish />
          <Dish />
          <Dish />
        </div>
      </div>
    </div>
  );
}

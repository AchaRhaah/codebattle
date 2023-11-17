import React from "react";
import { AiFillStar } from "react-icons/ai";
import eru from "../assets/images/eru.jpg";

export default function Dish() {
  return (
    <div className="inline-flex flex-col shadow-lg border pb-6 min-w-max">
      <div className="h-40 overflow-hidden rounded-xl">
        <img src={eru} alt="Dish" className="h-full" />
      </div>

      <div className="flex flex-col px-2 gap-1">
        <h6 className="text-xl">Eru</h6>
        <div className="flex items-center gap-1 text-[#D51C28]">
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />
          <AiFillStar className="text-xl" />

          <span className="text-gray-500 text-sm mx-1">5/5</span>
        </div>
        <span className="text-sm text-gray-500">233 Reviews</span>
      </div>
    </div>
  );
}

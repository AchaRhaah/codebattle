import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#EBE3D5] py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-5 px-4">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold logo">Cookt</span>
          <span>&copy;2023 Cookt,Inc.</span>
        </div>

        <ul className="flex items-center gap-4">
          <li className="hover:text-[#F05941] cursor-pointer">Home</li>
          <li className="hover:text-[#F05941] cursor-pointer">About</li>
          <li className="hover:text-[#F05941] cursor-pointer">Dishes</li>
          <li className="hover:text-[#F05941] cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

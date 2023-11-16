import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <header className="bg-[#F3EEEA] px-4">
      <div className="max-w-5xl mx-auto py-2 flex items-center justify-between">
        <span className="text-3xl font-bold logo">Cookt</span>

        <button
          className="block sm:hidden p-3 text-2xl"
          onClick={() => setNav(!nav)}
        >
          {nav ? <MdClose /> : <GiHamburgerMenu />}
        </button>

        <ul className="hidden sm:flex items-center gap-4">
          <li className="hover:text-[#F05941] cursor-pointer">Home</li>
          <li className="hover:text-[#F05941] cursor-pointer">About</li>
          <li className="hover:text-[#F05941] cursor-pointer">Dishes</li>
          <li className="hover:text-[#F05941] cursor-pointer">Contact Us</li>
        </ul>
      </div>
      {nav && (
        <ul className="flex flex-col sm:hidden items-center gap-4">
          <li className="hover:text-[#F05941] cursor-pointer">Home</li>
          <li className="hover:text-[#F05941] cursor-pointer">About</li>
          <li className="hover:text-[#F05941] cursor-pointer">Dishes</li>
          <li className="hover:text-[#F05941] cursor-pointer">Contact Us</li>
        </ul>
      )}
    </header>
  );
}

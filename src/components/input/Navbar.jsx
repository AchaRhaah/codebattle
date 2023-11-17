import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai";

import { RxCross1 } from "react-icons/rx";
import logo from '../../assets/logo.png'
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <header className="text-gray-600 z-40 body-font sm:bg-white fixed w-full shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-row  md:flex-row justify-between items-center bg-white">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className="w-[12rem] object-contain" src={logo} alt="" />{" "}
        </a>
        <div className="md:hidden flex">
          {menu ? (
            <RxCross1
              onClick={handleChange}
              className="text-2xl mr-8 font-bold"
            />
          ) : (
            <AiOutlineMenu
              onClick={handleChange}
              className="text-2xl mr-8 font-bold"
            />
          )}
        </div>
        <nav className="md:ml-auto cursor-pointer md:mr-auto md:flex flex-col md:flex-row items-center text-base justify-center gap-3 md:gap-0 hidden ">
          <Link
            smooth={true}
            to="one"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Home
          </Link>
          <Link
            smooth={true}
            to="two"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Tips
          </Link>
          <Link
            smooth={true}
            to="three"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Doctors
          </Link>
          <Link
            smooth={true}
            to="four"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Testimonials
          </Link>
        </nav>
        <button
          className=" items-center gap-2 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover-bg-gray-200 rounded text-base mt-4 md:mt-0 hidden 
md:inline-flex"
        >
          Schedule Appointment
          <AiOutlineArrowRight />
        </button>
        <nav
          className={`cursor-pointer ${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex md-none flex-col absolute bg-[#ffffff] left-0 top-16 text-center pt-2 pb-4 gap-3 w-full h-fit transition-transform duration-300`}
        >
          <Link
            smooth={true}
            to="one"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Home
          </Link>
          <Link
            smooth={true}
            to="two"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Tips
          </Link>
          <Link
            smooth={true}
            to="three"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Doctors
          </Link>
          <Link
            smooth={true}
            to="four"
            duration={500}
            spy={true}
            className="mr-5 hover-text-gray-900"
          >
            Testimonials
          </Link>
          <button
            className="inline-flex items-center w-[8rem] bg-gray-100 border-0 py-2 gap-2 self-center px-3 focus:outline-none hover-bg-gray-200 rounded
text-base mt-4 md:mt-0"
          >
            <AiOutlineArrowRight />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

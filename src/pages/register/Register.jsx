import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
Link;
export default function Register() {
  return (
    <div className="w-full h-full flex  flex-col mb-4 justify-center items-center">
      <img className="w-[12rem] my-8 object-contain" src={logo} alt="" />
      <form
        action=""
        className="w-[95%] md:w-[50%] p-7 md:p-12 border rounded-lg flex items-center flex-col gap-7"
      >
        <h2 className="font-bold text-3xl ">Sign up</h2>
        <div className="w-full ">
          <Input label="First Name" />
        </div>
        <div className="w-full ">
          <Input label="Last Name" />
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[46%] ">
            <Input label="Email" />
          </div>
          <div className="w-[46%] ">
            <Input label="phone number" />
          </div>
        </div>
        <div className="w-full ">
          <Input label="Address" />
        </div>
        <div className="w-full ">
          <Input label="Password" />
        </div>{" "}
        <div className="w-full ">
          <Input label="Confirm Password" />
        </div>
        <button className="w-[60%] bg-[#3B5FE8] text-white text-lg font-semibold rounded-lg py-1">
          <Link to="/">Sign Up</Link>
        </button>
      </form>
    </div>
  );
}

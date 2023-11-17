import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
Link;
export default function Login() {
  return (
    <div className="w-full h-full flex  flex-col mb-4 justify-center items-center">
      <img className="w-[12rem] my-8 object-contain" src={logo} alt="" />

      <form
        action=""
        className="w-[95%] md:w-[50%] p-7 md:p-12 border rounded-lg flex items-center flex-col gap-7"
      >
        <h2 className="font-bold text-3xl ">Login</h2>
        <div className="w-full ">
          <Input label="Email" />
        </div>
        <div className="w-full ">
          <Input label="Password" />
        </div>

        <button className="w-[60%] bg-[#3B5FE8] text-white text-lg font-semibold rounded-lg py-1">
          <Link to="/">Sign Up</Link>
        </button>
      </form>
    </div>
  );
}

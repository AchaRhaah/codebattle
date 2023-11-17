import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFileUpload } from "react-icons/md";
import Input from "../../components/input/Input";
import guy from "../../assets/guy.png";

export default function Profile() {
  return (
    <div className="pt-24">
      <div className="px-8 py-4">
        <h1 className="text-4xl py-4 border-b">Profile Settings</h1>

        <div className="flex justify-between items-end px-10 py-4 border-b">
          <div className="px-4 py-6 space-y-1">
            <img src={guy} alt="Profile Image" className="h-24 rounded-full" />

            <p className="text-sm font-bold">Profile picture</p>
            <p className="text-sm">PNG,JPEG under 15MB</p>
          </div>

          <button className="bg-[#0D224E] px-6 py-2 text-white flex items-center gap-1 rounded-lg">
            <MdOutlineFileUpload className="text-2xl" /> Upload
          </button>
        </div>

        <form
          action=""
          className="p-7 md:p-12 border rounded-lg flex items-center flex-col gap-7"
        >
          <div className="flex w-full gap-6">
            <div className="w-full ">
              <Input label="First Name" />
            </div>
            <div className="w-full ">
              <Input label="Last Name" />
            </div>
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
            <Link to="/">Confirm Changes</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

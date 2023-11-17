import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { BsFillCameraVideoFill, BsFillChatDotsFill } from "react-icons/bs";
import { MdCallEnd, MdSettings } from "react-icons/md";
import doc from "../../assets/teacher.jpg";
// lightBlue - C5E0EE
// dark blue -0D224E
// cream white - F6F5F7
// bright blue - 3B5FE8
// peach - F3E2D9

export default function VideoCall() {
  return (
    <div className="h-[90vh] bg-white flex items-start justify-center px-6 py-8">
      <div className="mt-16 overflow-hidden relative flex flex-col items-center gap-6 max-h-full">
        <div className="rounded-3xl overflow-hidden h-full">
          <img src={doc} alt="Doctor" className="max-h-full" />
        </div>

        <div className="hidden sm:flex items-center gap-3 absolute bottom-7">
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <FaMicrophone className="text-white sm:text-xl text-base " />
          </button>
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <BsFillCameraVideoFill className="text-white sm:text-xl text-base " />
          </button>
          <button className="p-5 rounded-full bg-red-500">
            <MdCallEnd className="text-white sm:text-4xl text-xl " />
          </button>
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <BsFillChatDotsFill className="text-white sm:text-xl text-base " />
          </button>
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <MdSettings className="text-white sm:text-xl text-base " />
          </button>
        </div>

        <div className="flex sm:hidden items-center gap-2 bottom-7">
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <FaMicrophone className="text-white sm:text-xl text-base " />
          </button>
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <BsFillCameraVideoFill className="text-white sm:text-xl text-base " />
          </button>
          <button className="p-5 rounded-full bg-red-500">
            <MdCallEnd className="text-white sm:text-4xl text-xl " />
          </button>
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <BsFillChatDotsFill className="text-white sm:text-xl text-base " />
          </button>
          <button className="p-5 rounded-full bg-gray-500 bg-opacity-50">
            <MdSettings className="text-white sm:text-xl text-base " />
          </button>
        </div>
      </div>
    </div>
  );
}

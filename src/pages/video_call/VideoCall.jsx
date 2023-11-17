import React from "react";
import { FaMicrophone } from "react-icons/fa";
import { BsFillCameraVideoFill, BsFillChatDotsFill } from "react-icons/bs";
import { MdCallEnd, MdSettings } from "react-icons/md";
import { LuImagePlus } from "react-icons/lu";
import doc from "../../assets/teacher.jpg";
// lightBlue - C5E0EE
// dark blue -0D224E
// cream white - F6F5F7
// bright blue - 3B5FE8
// peach - F3E2D9

export default function VideoCall() {
  return (
    <div className="min-h-[90vh] bg-white flex items-start justify-center gap-4 px-6 py-8 flex-wrap">
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

      <div className="mt-20 flex-1 h-full rounded-3xl px-4 py-2 border space-y-4">
        <h3 className="text-2xl border-b py-1">Chat</h3>

        {/* MESSAGE */}
        <div className="flex flex-col gap-3 justify-between h-[88%] bg-[#EBF0F7] rounded-xl">
          <div className="flex-1 px-6 py-3 rounded-lg flex flex-col gap-5 overflow-auto">
            <div className="flex gap-5 self-start">
              <div className="bg-[#2B7CF84D] p-4 rounded-full self-end">
                <img src={""} alt="Doctor" className="h-full min-w-max" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="bg-white py-2 px-5 rounded-e-3xl rounded-tl-3xl max-w-xl justify-self-end">
                  <p className="font-bold">Hello</p>
                </div>

                <div className="flex flex-1 items-center justify-between">
                  <p className="text-[#0E3673CC] mx-2">Doctor</p>

                  <p className="text-[#0D082C66] text-sm mx-2">08:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#EBF0F7] rounded-3xl py-2 px-2 flex gap-2 items-center">
            <div className="flex-1 bg-white rounded-xl flex items-center px-2 gap-2">
              <input
                type="text"
                className="py-1 px-3 rounded-3xl w-full focus:outline-none"
                placeholder="Some text..."
              />

              <LuImagePlus className="text-xl" />
            </div>
            <button className="bg-[#2B7CF8] font-bold py-1 px-2 text-white rounded-xl disabled:opacity-40">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

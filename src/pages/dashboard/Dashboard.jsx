import { useState } from "react";
import {
  AiOutlinePlusCircle,
  AiOutlineCreditCard,
  AiOutlineMessage,
  AiOutlineSetting,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import DashboardTab from "./components/DashboardTab";

export default function Dashboard() {
  const [page, setPage] = useState("");
  const [menu, setMenu] = useState(false);
  return (
    <div className="h-screen ">
      {/* -------------- SIDEBAR -------------------- */}
      <div className="bg-[#0E1B2E] pt-20 hidden sm:flex flex-col justify-between pb-10 space-y-20 h-screen w-[18vw] fixed top-0 left-0 z-10">
        <aside className="overflow-hidden">
          <ul className="text-[#8C94A3] flex flex-col gap-3">
            <li
              className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                page === "dashboard" ? "text-white bg-[#2B7CF8]" : ""
              }`}
              onClick={() => setPage("dashboard")}
            >
              <BsBarChartLine />
              Dashboard
            </li>

            <li
              className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                page === "newclass" ? "text-white bg-[#2B7CF8]" : ""
              }`}
              onClick={() => setPage("newclass")}
            >
              <AiOutlinePlusCircle />
              <span>My Calendar</span>
            </li>

            <li
              className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                page === "classroom" ? "text-white bg-[#2B7CF8]" : ""
              }`}
              onClick={() => setPage("classroom")}
            >
              <GoStack />
              <span>Classroom</span>
            </li>

            <li
              className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                page === "earnings" ? "text-white bg-[#2B7CF8]" : ""
              }`}
              onClick={() => setPage("earnings")}
            >
              <AiOutlineCreditCard />
              <span>Earnings</span>
            </li>

            <li
              className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                page === "messages" ? "text-white bg-[#2B7CF8]" : ""
              }`}
              onClick={() => setPage("messages")}
            >
              <AiOutlineMessage />
              <span>Messages</span>
              <span className="px-2 w-fit h-fit rounded-full text-[#0266FD] bg-white">
                3
              </span>
            </li>

            <li
              className={`flex items-center gap-2 px-5 py-2 cursor-pointer ${
                page === "settings" ? "text-white bg-[#2B7CF8]" : ""
              }`}
              onClick={() => setPage("settings")}
            >
              <AiOutlineSetting />
              <span>Settings</span>
            </li>
          </ul>
        </aside>

        <div className="flex items-center gap-2 text-[#8C94A3] px-4 py-2">
          <MdLogout />
          <a href="#">Sign out</a>
        </div>
      </div>

      {/* -------------------- MAIN AREA ------------------ */}

      <div className="sm:ml-[18vw]">
        {/* RESPONSIVE MENU */}
        <div className="flex sm:hidden flex-col text-xl shadow bg-[#0E1B2E]">
          <div className="flex justify-between items-center">
            <div
              className=" px-2 py-3 cursor-pointer text-white text-3xl"
              onClick={() => setMenu(!menu)}
            >
              {menu && <AiOutlineClose />}
              {!menu && <AiOutlineMenu />}
            </div>
          </div>

          {menu && (
            <div className="">
              <ul className="text-[#8C94A3] flex flex-col gap-3 py-3">
                <li
                  className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                    page === "dashboard" ? "text-white bg-[#2B7CF8]" : ""
                  }`}
                  onClick={() => {
                    setPage("dashboard");
                    setMenu(!menu);
                  }}
                >
                  <BsBarChartLine />
                  Dashboard
                </li>

                <li
                  className={`flex border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                    page === "newclass" ? "text-white bg-[#2B7CF8]" : ""
                  }`}
                  onClick={() => {
                    setPage("newclass");
                    setMenu(!menu);
                  }}
                >
                  <AiOutlinePlusCircle />
                  <span>Start new class</span>

                  <span className="px-2 w-fit h-fit rounded-full text-[#0266FD] bg-white">
                    3
                  </span>
                </li>

                <li
                  className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                    page === "classroom" ? "text-white bg-[#2B7CF8]" : ""
                  }`}
                  onClick={() => {
                    setPage("classroom");
                    setMenu(!menu);
                  }}
                >
                  <GoStack />
                  Classroom
                </li>

                <li
                  className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                    page === "earnings" ? "text-white bg-[#2B7CF8]" : ""
                  }`}
                  onClick={() => {
                    setPage("earnings");
                    setMenu(!menu);
                  }}
                >
                  <AiOutlineCreditCard />
                  Earnings
                </li>

                <li
                  className={`flex items-center border-b border-[#8C94A3] gap-2 p-2 mx-4 cursor-pointer ${
                    page === "messages" ? "text-white bg-[#2B7CF8]" : ""
                  }`}
                  onClick={() => {
                    setPage("messages");
                    setMenu(!menu);
                  }}
                >
                  <AiOutlineMessage />
                  Messages
                </li>

                <li
                  className={`flex items-center gap-2 p-2 mx-4 cursor-pointer ${
                    page === "settings" ? "text-white bg-[#2B7CF8]" : ""
                  }`}
                  onClick={() => {
                    setPage("settings");
                    setMenu(!menu);
                  }}
                >
                  <AiOutlineSetting />
                  Settings
                </li>
              </ul>
            </div>
          )}
        </div>

        {page === "dashboard" && <DashboardTab />}
        {/* {page === "newclass" && <Calendar />}
        {page === "classroom" && <StudentClassroom />}
        {page === "earnings" && <Earnings />}
        {page === "messages" && <Messages />}
        {page === "settings" && <Settings />} */}
      </div>
    </div>
  );
}

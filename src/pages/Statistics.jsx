import React from "react";

export default function Statistics() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto border border-[#0D224E] rounded-xl">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              2.7K
            </h2>
            <p className="leading-relaxed">We want to reach Patients</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              50+
            </h2>
            <p className="leading-relaxed">we have Doctors</p>
          </div>
          <div className="p-4 sm:w-1/3 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
              35
            </h2>
            <p className="leading-relaxed">Health centers</p>
          </div>
        </div>
      </div>
    </section>
  );
}

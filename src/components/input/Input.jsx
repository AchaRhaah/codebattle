import React from "react";

function Input({ label }) {
  return (
    <div class="relative w-full my-1">
      <input
        placeholder="Email"
        className="peer w-full bg-white rounded border border-gray-300 focus:border-[#C5E0EE] focus:ring-2 focus:ring-[#C5E0EE] text-base outline-none text-gray-700 px-3 py-1 leading-8 transition-colors duration-200 ease-in-out placeholder-transparent"
      />
      <label
        for={label}
        className="leading-7 text-sm text-gray-600 left-1 -top-3 -translate-y-1/2 transition-all absolute peer-placeholder-shown:left-1 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-neutral-900 peer-focus:-top-3"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;

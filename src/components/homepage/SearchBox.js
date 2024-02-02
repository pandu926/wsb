import React from "react";

export default function SearchBox() {
  return (
    <div>
      <div className="relative bg-white mt-72 h-screen font-bold capitalize text-lg rounded-3xl z-10 flex flex-col items-center justify-center ">
        <div className="-mt-96">
          <input
            type="text"
            placeholder="Masukkan kata kunci"
            className="border border-green-500 p-2 rounded-md outline-none"
          />
        </div>
        <div className="mt-10">atau</div>
        <div className="mt-10">
          <button className="bg-green-600 text-white py-2 px-10 rounded-md font-bold">
            Dashboard wisata
          </button>
        </div>
      </div>
    </div>
  );
}

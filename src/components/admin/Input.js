import React from "react";

export default function Input(props) {
  return (
    <div className="flex items-center justify-center mt-10 mb-5 md:mt-20">
      <label
        htmlFor={props.id}
        className="w-2/5 font-bold text-teal-500 capitalize text-md"
      >
        {props.label}
      </label>
      <input
        type="text"
        id={props.id}
        name={props.id}
        className="block w-1/2 h-8 mr-5 text-teal-500 bg-white border-2 border-gray-700 rounded-md md:w-1/4"
        onChange={props.value}
      />
    </div>
  );
}

import React from "react";

export default function FileInput({ id, label, onChange }) {
  return (
    <div className="mt-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="file"
        id={id}
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
        onChange={onChange}
      />
    </div>
  );
}

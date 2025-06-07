import { useState } from "react";

const Dropdown = ({ label, options, onChange }) => {
  // State untuk melacak opsi yang dipilih
  const [selectedOption, setSelectedOption] = useState("");

  // Fungsi untuk menangani perubahan nilai dropdown
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value); // Memanggil fungsi onChange dari props dengan nilai yang baru
  };

  return (
    <div className="mb-4">
      {/* Label untuk dropdown */}
      <label
        htmlFor="category"
        className="block mb-2 text-sm font-bold text-gray-700"
      >
        {label}
      </label>
      {/* Dropdown input */}
      <select
        id="category"
        value={selectedOption}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline"
      >
        {/* Opsi default yang disabled */}
        <option value="" disabled>
          Select a category
        </option>
        {/* Menerapkan opsi yang diterima melalui props */}
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.nama}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

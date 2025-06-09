"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import getCookie from "@/utils/cookies";

export default function EditWisata() {
  const { id } = useParams();
  const [data, setData] = useState({
    nama: "",
    tentang: "",
    tiket: 0,
    alamat: "",
    link: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}wisata/list?id=${id}`
      );

      const item = response.data[0] || {};
      setData({
        nama: item.nama || "",
        tentang: item.tentang || "",
        tiket: item.tiket || 0,
        alamat: item.alamat || "",
        link: item.link || "",
      });
    } catch (error) {
      console.error("Failed to fetch data:", error);
      alert("Gagal memuat data.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const accessToken = getCookie("access_token");

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}wisata/update/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      alert("Data berhasil diperbarui!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Gagal memperbarui data.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p className="p-4 text-gray-500">Memuat data...</p>;

  return (
    <div className="max-w-2xl p-6 mx-auto mt-10 bg-white rounded shadow">
      <h1 className="mb-6 text-2xl font-semibold">Edit Wisata #{id}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["nama", "tentang", "alamat", "link"].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium capitalize">
              {field}:
            </label>
            <input
              type="text"
              name={field}
              value={data[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-medium">Tiket:</label>
          <input
            type="number"
            name="tiket"
            value={data.tiket}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            min="0"
            required
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
        >
          {submitting ? "Memperbarui..." : "Update Wisata"}
        </button>
      </form>
    </div>
  );
}

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
    gambar_background: "",
  });

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}wisata/list?id=${id}`
      );
      setData({
        nama: response.data[0].nama || "",
        tentang: response.data[0].tentang || "",
        tiket: response.data[0].tiket || 0,
        alamat: response.data[0].alamat || "",
        link: response.data[0].link || "",
        gambar_background: response.data[0].gambar_background || "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = getCookie("access_token");
    const headers = {
      Authorization: `bearer ${accessToken}`,
    };
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}wisata/update/${id}`,
        data,
        {
          headers,
        }
      );
      alert("Data updated successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to update data.");
    }
  };

  return (
    <div>
      <h1>Edit Wisata Detail {id}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="nama"
            value={data.nama}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tentang:</label>
          <input
            type="text"
            name="tentang"
            value={data.tentang}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tiket:</label>
          <input
            type="number"
            name="tiket"
            value={data.tiket}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Alamat:</label>
          <input
            type="text"
            name="alamat"
            value={data.alamat}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Link:</label>
          <input
            type="text"
            name="link"
            value={data.link}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gambar Background:</label>
          <input
            type="text"
            name="gambar_background"
            value={data.gambar_background}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

"use client";

import Input from "@/components/admin/Input";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [tiket, setTiket] = useState("");
  const [tentang, setTentang] = useState("");
  const [alamat, setAlamat] = useState("");
  const [link, setLink] = useState("");

  // Fungsi untuk mendapatkan nilai cookie berdasarkan nama
  function getCookie(cookieName) {
    const cookieString = document.cookie; // Mendapatkan string cookie
    const cookies = cookieString.split(";"); // Memisahkan string cookie menjadi array

    // Iterasi melalui setiap cookie
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim(); // Menghilangkan spasi di awal dan akhir cookie
      const [name, value] = cookie.split("="); // Memisahkan nama dan nilai cookie

      // Jika nama cookie cocok dengan yang dicari, kembalikan nilainya
      if (name === cookieName) {
        return decodeURIComponent(value); // Decode nilai cookie (jika perlu)
      }
    }

    return null; // Mengembalikan null jika cookie tidak ditemukan
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mengambil access_token dari cookie
    const accessToken = getCookie("access_token");

    if (!accessToken) {
      console.error("Access Token not found in cookie");
      return;
    }
    console.log(`bearer ${accessToken}`);
    // Set header untuk request dengan token
    const headers = {
      Authorization: `bearer ${accessToken}`,
    };

    try {
      // Melakukan POST request dengan data wisata dan token
      const response = await axios.post(
        "https://pandusubekti.tech/wisata/add",
        {
          nama,
          tentang,
          tiket,
          alamat,
          link,
        },
        { headers }
      );

      console.log(response.data);
      router.push("/admin/wisata");
    } catch (error) {
      console.error("Error adding data:", error); // Tangani error jika request gagal
    }
  };

  return (
    <div>
      <h1 className="mt-5 text-xl font-bold text-center text-teal-500 capitalize">
        tambah objek wisata
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="nama wisata"
          id="nama"
          value={(e) => setNama(e.target.value)}
        />
        <Input
          label="tentang"
          id="tentang"
          value={(e) => setTentang(e.target.value)}
        />
        <Input
          label="tiket"
          id="tiket"
          value={(e) => setTiket(e.target.value)}
        />
        <Input
          label="alamat"
          id="alamat"
          value={(e) => setAlamat(e.target.value)}
        />
        <Input
          label="link gmaps"
          id="link"
          value={(e) => setLink(e.target.value)}
        />
        <div className="flex justify-center mt-10">
          <button
            className="pt-2 pb-2 pl-4 pr-4 text-white bg-teal-500 rounded-md "
            type="submit"
          >
            Tambah Data Wisata
          </button>
        </div>
      </form>
    </div>
  );
}

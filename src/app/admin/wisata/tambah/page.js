"use client";

import Input from "@/components/admin/Input";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FileInput from "@/components/admin/FileInput";
import getCookie from "@/utils/cookies";
import Dropdown from "@/components/admin/DropdownKategori";

export default function page() {
  const router = useRouter();
  const [nama, setNama] = useState("");
  const [tiket, setTiket] = useState();
  const [tentang, setTentang] = useState("");
  const [alamat, setAlamat] = useState("");
  const [link, setLink] = useState("");

  const [msg, setMsg] = useState("");

  const [kategori, setKategori] = useState();
  const [datakategori, setDatakategori] = useState([]);

  const [gambar1, setGambar1] = useState(null);
  const [gambar2, setGambar2] = useState(null);
  const [gambar3, setGambar3] = useState(null);
  const [gambar4, setGambar4] = useState(null);

  const handleImageChange = (e, setter) => {
    const file = e.target.files[0];
    setter(file);
  };

  useEffect(() => {
    getDataKategori();
  }, []);

  const getDataKategori = async () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}tag/list`)
      .then((response) => {
        setDatakategori(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveKategori = async (id_wisata, id_tag) => {
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
        `${process.env.NEXT_PUBLIC_API_URL}tagpivot/add`,
        {
          id_wisata,
          id_tag,
        },
        { headers }
      );

      console.log(response.data);
      setMsg("data gambar berhasil ditambahkan");
      router.push("/admin/wisata");
    } catch (error) {
      setMsg("error");
      console.error("Error adding data:", error); // Tangani error jika request gagal
    }
  };

  const saveImage = async (id_wisata) => {
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
      "Content-Type": "multipart/form-data",
    };

    try {
      // Melakukan POST request dengan data wisata dan token
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}gambar/add`,
        {
          id_wisata,
          gambar1,
          gambar2,
          gambar3,
          gambar4,
        },
        { headers }
      );

      console.log(response.data);
      const id_tag = response.data.id;
      setMsg("data gambar berhasil ditambahkan");
      saveKategori(id_wisata, id_tag);
    } catch (error) {
      setMsg("error");
      console.error("Error adding data:", error); // Tangani error jika request gagal
    }
  };

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
        `${process.env.NEXT_PUBLIC_API_URL}wisata/add`,
        {
          nama,
          tentang,
          tiket,
          alamat,
          link,
        },
        { headers }
      );

      setMsg("data gambar berhasil ditambahkan");
      saveImage(response.data.id);
    } catch (error) {
      setMsg("error");
      console.error("Error adding data:", error); // Tangani error jika request gagal
    }
  };

  console.log(kategori);

  return (
    <div>
      <h1 className="mt-5 text-xl font-bold text-center text-teal-500 capitalize">
        tambah objek wisata
      </h1>
      <div className={`flex justify-center mt-5   ${msg ? "" : "hidden"} `}>
        <h1 className="text-blue-500 capitalize "> data telah di tambahkan</h1>
      </div>
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

        {/* Input untuk mengunggah gambar */}
        <FileInput
          id="gambar1"
          label="Gambar 1"
          onChange={(e) => handleImageChange(e, setGambar1)}
        />
        <FileInput
          id="gambar2"
          label="Gambar 2"
          onChange={(e) => handleImageChange(e, setGambar2)}
        />
        <FileInput
          id="gambar3"
          label="Gambar 3"
          onChange={(e) => handleImageChange(e, setGambar3)}
        />
        <FileInput
          id="gambar4"
          label="Gambar 4"
          onChange={(e) => handleImageChange(e, setGambar4)}
        />

        <Dropdown
          label="Kategori"
          options={datakategori}
          onChange={(value) => setKategori(value)}
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

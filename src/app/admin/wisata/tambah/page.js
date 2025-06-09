"use client";

import Input from "@/components/admin/Input";
import FileInput from "@/components/admin/FileInput";
import Dropdown from "@/components/admin/DropdownKategori";
import getCookie from "@/utils/cookies";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import imageCompression from "browser-image-compression";

export default function Page() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [tiket, setTiket] = useState("");
  const [tentang, setTentang] = useState("");
  const [alamat, setAlamat] = useState("");
  const [link, setLink] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const [kategori, setKategori] = useState();
  const [datakategori, setDatakategori] = useState([]);

  const [gambar1, setGambar1] = useState(null);
  const [gambar2, setGambar2] = useState(null);
  const [gambar3, setGambar3] = useState(null);
  const [gambar4, setGambar4] = useState(null);

  useEffect(() => {
    getDataKategori();
  }, []);

  const getDataKategori = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}tag/list`
      );
      setDatakategori(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Fungsi untuk kompres gambar sebelum disimpan
  const compressImage = async (file) => {
    if (!file) return null;
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);
      return compressedFile;
    } catch (error) {
      console.error("Gagal compress gambar:", error);
      return file; // fallback ke file asli jika gagal compress
    }
  };

  // Menghandle perubahan gambar, kompres langsung saat upload
  const handleImageChange = async (e, setter) => {
    const file = e.target.files[0];
    if (!file) return;

    const compressed = await compressImage(file);
    setter(compressed);
  };

  const saveKategori = async (id_wisata) => {
    const accessToken = getCookie("access_token");

    if (!accessToken) {
      console.error("Access Token not found in cookie");
      return;
    }

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}tagpivot/add`,
        { id_wisata, id_tag: kategori },
        {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        }
      );

      setMsg("Data berhasil ditambahkan");
      router.push("/admin/wisata");
    } catch (error) {
      console.error("Error saving kategori:", error);
      setMsg("Terjadi kesalahan saat menyimpan kategori");
    }
  };

  const saveImage = async (id_wisata) => {
    const accessToken = getCookie("access_token");

    if (!accessToken) {
      console.error("Access Token not found in cookie");
      return;
    }

    const formData = new FormData();
    formData.append("id_wisata", id_wisata);
    if (gambar1) formData.append("gambar1", gambar1);
    if (gambar2) formData.append("gambar2", gambar2);
    if (gambar3) formData.append("gambar3", gambar3);
    if (gambar4) formData.append("gambar4", gambar4);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}gambar/add`,
        formData,
        {
          headers: {
            Authorization: `bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      saveKategori(id_wisata);
    } catch (error) {
      console.error("Error saving images:", error);
      setMsg("Terjadi kesalahan saat mengunggah gambar");
    }
  };

  // Validasi sederhana sebelum submit
  const validateInputs = () => {
    if (!nama.trim()) {
      setError("Nama Wisata wajib diisi");
      return false;
    }
    if (!tentang.trim()) {
      setError("Deskripsi Tentang wajib diisi");
      return false;
    }
    if (!tiket || isNaN(tiket) || tiket < 0) {
      setError("Harga Tiket harus angka dan tidak negatif");
      return false;
    }
    if (!alamat.trim()) {
      setError("Alamat wajib diisi");
      return false;
    }
    if (!link.trim()) {
      setError("Link Google Maps wajib diisi");
      return false;
    }
    if (!kategori) {
      setError("Kategori harus dipilih");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const accessToken = getCookie("access_token");
    if (!accessToken) {
      console.error("Access Token not found in cookie");
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}wisata/add`,
        {
          nama,
          tentang,
          tiket: parseInt(tiket),
          alamat,
          link,
        },
        {
          headers: {
            Authorization: `bearer ${accessToken}`,
          },
        }
      );

      const id_wisata = response.data.id;
      saveImage(id_wisata);
    } catch (error) {
      console.error("Error saving wisata:", error);
      setMsg("Terjadi kesalahan saat menyimpan data wisata");
    }
  };

  return (
    <div className="max-w-xl p-6 mx-auto bg-white rounded-md shadow-md">
      <h1 className="mt-5 mb-6 text-xl font-bold text-center text-teal-500 capitalize">
        Tambah Objek Wisata
      </h1>

      {msg && (
        <div className="flex justify-center mb-4">
          <h1 className="text-blue-500 capitalize">{msg}</h1>
        </div>
      )}

      {error && (
        <div className="flex justify-center mb-4">
          <h1 className="text-red-500 capitalize">{error}</h1>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Nama Wisata"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <div>
          <label
            htmlFor="tentang"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Tentang
          </label>
          <textarea
            id="tentang"
            value={tentang}
            onChange={(e) => setTentang(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
            rows={4}
          />
        </div>

        <Input
          label="Harga Tiket"
          id="tiket"
          type="number"
          value={tiket}
          onChange={(e) => setTiket(e.target.value)}
        />

        <Input
          label="Alamat"
          id="alamat"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
        />

        <Input
          label="Link Gmaps"
          id="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />

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
          value={kategori}
        />

        <div className="flex justify-center mt-10">
          <button
            type="submit"
            className="px-4 pt-2 pb-2 text-white bg-teal-500 rounded-md hover:bg-teal-600"
          >
            Tambah Data Wisata
          </button>
        </div>
      </form>
    </div>
  );
}

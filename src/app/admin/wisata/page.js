"use client";
import getCookie from "@/utils/cookies";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [openItemId, setOpenItemId] = useState(null);
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getDataWisata();
  }, []);

  const handleToggleDropdown = (itemId) => {
    setOpenItemId(openItemId === itemId ? null : itemId); // Toggle dropdown berdasarkan ID item
  };

  const getDataWisata = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}wisata/list`
      );
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleEdit = (id) => {
    // Implement your edit logic here, e.g., navigate to edit page
    // Example: Router.push(`/admin/wisata/${id}/edit`);
  };

  const handleDelete = (id) => {
    const accessToken = getCookie("access_token");

    if (!accessToken) {
      console.error("Access Token not found in cookie");
      return;
    }

    const headers = {
      Authorization: `bearer ${accessToken}`,
    };
    axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}wisata/delete/${id}`, {
        headers,
      })
      .then(() => {
        getDataWisata();
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const handleTambahGambar = (id) => {
    // Implement logic to add image for the item
  };

  const filterData = (searchTerm) => {
    const filtered = data.filter((item) => {
      return item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    filterData(keyword);
  }, [keyword]);

  return (
    <div className="px-10 mt-5">
      <div className="flex justify-center text-xl font-bold text-teal-600">
        Halaman Wisata Kontrol
      </div>
      <div>
        <Link
          href="/admin/wisata/tambah"
          className="flex justify-center w-1/2 pt-2 pb-2 text-white bg-blue-700 rounded-md mt-14"
        >
          Tambah Wisata
        </Link>
        <div className="mt-5">
          <input
            type="text"
            placeholder="Cari berdasarkan nama"
            className="w-full h-8 text-teal-500 border-2 border-gray-500 rounded-md focus:border-teal-500"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div>
          {filteredData.map((item, index) => (
            <div
              key={item.id}
              className="relative flex w-full px-2 pt-2 pb-2 mt-2 font-bold text-white capitalize bg-teal-500 rounded-md"
            >
              <div className="w-1/5">{index + 1}</div>
              <Link className="w-3/5" href={`/admin/wisata/${item.id}`}>
                {item.nama}
              </Link>
              <div
                className="flex justify-center w-1/5"
                onClick={() => handleToggleDropdown(item.id)}
              >
                <Image
                  src="/img/titiktiga.svg"
                  alt="Menu"
                  width={7}
                  height={7}
                />
              </div>
              {openItemId === item.id && (
                <div className="absolute top-0 right-0 z-10 p-2 mt-10 bg-black shadow-md">
                  <ul>
                    <li onClick={() => handleEdit(item.id)}> Edit</li>
                    <li onClick={() => handleDelete(item.id)}>Delete</li>
                    <li onClick={() => handleTambahGambar(item.id)}>
                      Tambahkan Gambar
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

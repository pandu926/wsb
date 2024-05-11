"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function page() {
  useEffect(() => {
    getDataWisata();
  }, []);

  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getDataWisata = async () => {
    axios
      .get("https://pandusubekti.tech/wisata/list")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      if (typeof item.nama === "string") {
        return item.nama.toLowerCase().includes(keyword.toLowerCase());
      }
      return false;
    });
    console.log(filtered);
    setFilteredData(filtered);
  }, [data, keyword]);

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
          tambah wisata
        </Link>
        <div className="mt-5">
          <input
            type="text"
            placeholder="cari bedasrkan nama"
            className="w-full h-8 text-teal-500 border-2 border-gray-500 rounded-md focus:border-teal-500"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="w-full mt-5">
          <table className="">
            <thead className="bg-teal-600">
              <tr>
                <td>id</td>
                <td>nama</td>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((wst, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <Link href={`/admin/wisata/${wst.id}`}>{wst.nama}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

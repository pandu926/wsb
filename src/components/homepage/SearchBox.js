"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get("https://653beb34d5d6790f5ec7a438.mockapi.io/wisata")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const filtered = data.filter((item) => {
      if (typeof item.name === "string") {
        return item.name.toLowerCase().includes(keyword.toLowerCase());
      }
      return false;
    });

    setFilteredData(filtered);
  }, [data, keyword]);

  return (
    <div>
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-lg font-bold capitalize bg-white mt-72 rounded-3xl ">
        <div className="-mt-96">
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Masukkan kata kunci"
            className="p-2 border border-green-500 rounded-md outline-none"
          />
        </div>
        <div className={`${keyword ? "hidden" : "block"} mt-10`}>atau</div>
        <div className={`${keyword ? "hidden" : "block"} mt-10`}>
          <Link
            href="/dashboard"
            className="px-10 py-2 font-bold text-white bg-green-600 rounded-md"
          >
            Dashboard wisata
          </Link>
        </div>
        <div className={`${keyword ? "" : "hidden"} mt-10`}>
          <div className="pt-12">
            {filteredData.map((item) => (
              <Link href="#" key={item.id} className="flex">
                <p className="pr-5">{item.id}</p>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

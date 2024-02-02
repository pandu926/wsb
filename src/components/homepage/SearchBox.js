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

  console.log(filteredData);
  return (
    <div>
      <div className="relative bg-white mt-72 h-screen font-bold capitalize text-lg rounded-3xl z-10 flex flex-col items-center justify-center ">
        <div className="-mt-96">
          <input
            type="text"
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Masukkan kata kunci"
            className="border border-green-500 p-2 rounded-md outline-none"
          />
        </div>
        <div className={`${keyword ? "hidden" : "block"} mt-10`}>atau</div>
        <div className={`${keyword ? "hidden" : "block"} mt-10`}>
          <button className="bg-green-600 text-white py-2 px-10 rounded-md font-bold">
            Dashboard wisata
          </button>
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

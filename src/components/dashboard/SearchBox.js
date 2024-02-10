"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SearchBox() {
  useEffect(() => {
    getData();
  }, []);

  const [keyword, setKeyword] = useState("a");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

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
      <div className="mx-5 mt-10 flex border-b-2 border-green-500 ">
        <div className="pr-4">
          <Image src="/img/back.svg" width={20} height={20} />
        </div>
        <input
          className="w-full border-b-2 "
          type="text"
          name="search"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="masukkan kata kunci"
        />
      </div>
      <div className="mx-5 pt-5  font-bold">
        {filteredData.map((item, index) => (
          <Link href={`/wisata/${item.id}`} key={item.id} className="flex">
            <p className="pr-5">{index}</p>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

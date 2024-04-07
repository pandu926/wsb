"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function page() {
  const [wisata, setWisata] = useState([]);

  useEffect(() => {
    dataWisata();
  }, []);

  const dataWisata = async () => {
    axios
      .get("https://pandusubekti.tech/wisata/list")
      .then((response) => {
        // Handle respons sukses (status kode 200 OK)
        const data = response.data;
        console.log(data);
        setWisata(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center overflow-hidden capitalize">
        {wisata.map((text) => (
          <Link
            href={`/wisata/${text.id}`}
            key={text.id}
            className="w-2/5 mx-3 mt-5 bg-center bg-cover h-52 rounded-2xl"
            style={{ backgroundImage: "url('https://pandusubekti.tech')" }}
          >
            <div className="items-center justify-center w-4/5 mx-auto mt-40 text-center text-black bg-white rounded-lg h-7">
              <h1 style={{ fontSize: 10 }} className="pt-1 font-bold ">
                {text.nama}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

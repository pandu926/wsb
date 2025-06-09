"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  useEffect(() => {
    getData();
  }, []);

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [gambar, setGambar] = useState("");

  const getData = async () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}wisata/list?id=${id}`)
      .then((response) => {
        setData(response.data[0]);
        setGambar(response.data[0].gambar?.gambar1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGambarClick = (gambarUrl) => {
    setGambar(gambarUrl);
  };
  return (
    <div className="capitalize">
      <div className="absolute flex flex-col items-center justify-center w-16 pt-5 pb-5 transform -translate-y-1/2 bg-white rounded-lg right-7 top-52">
        <div
          className="w-12 h-10 mb-2 rounded-md"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}upload/${data.gambar?.gambar1}')`,
          }}
          onClick={() => handleGambarClick(data.gambar?.gambar1)}
        ></div>
        <div
          className="w-12 h-10 mb-2 rounded-md"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}upload/${data.gambar?.gambar2}')`,
          }}
          onClick={() => handleGambarClick(data.gambar?.gambar2)}
        ></div>
        <div
          className="w-12 h-10 mb-2 rounded-md"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}upload/${data.gambar?.gambar3}')`,
          }}
          onClick={() => handleGambarClick(data.gambar?.gambar3)}
        ></div>
        <div
          className="w-12 h-10 mb-2 rounded-md"
          style={{
            backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}upload/${data.gambar?.gambar4}')`,
          }}
          onClick={() => handleGambarClick(data.gambar?.gambar4)}
        ></div>
      </div>

      <div
        className="w-full bg-cover rounded-b-3xl h-80 "
        style={{
          backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}upload/${gambar}')`,
        }}
      >
        <Link href="/dashboard">
          <div className="pt-5 pl-5 ">
            <Image src="/img/back.svg" height={40} width={40} />
          </div>
        </Link>
      </div>
      <h1 className="mt-5 mb-5 ml-5 text-2xl font-bold">{data.nama}</h1>
      <div className="flex w-full mx-5 rounded-2xl ">
        <Image src="/img/maps.svg" width={15} height={15} />
        <h1 className="pl-5 font-extrabold text-gray-500 capitalize">
          {data.alamat}{" "}
          <a className="text-blue-700" href={data.link}>
            lihat di gmaps
          </a>
        </h1>
      </div>
      <div className="flex mt-10">
        <div className="flex w-1/2 mx-5 ">
          <Image src="/img/rating.svg" width={20} height={20} />
          <h1 className="pl-4 font-bold">4,7</h1>
        </div>
        <div className="flex w-1/2 mx-5 ">
          <h1 className="pl-5 font-bold">Rp {data.tiket} / orang</h1>
        </div>
      </div>
      <div className="mt-10 mb-5">
        <h1 className="pl-5 text-lg font-bold capitalize">tentang wisata</h1>
        <p className="mx-5 mt-5 text-justify text-gray-500">d{data.tentang}</p>
      </div>
    </div>
  );
}

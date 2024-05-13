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

  const getData = async () => {
    axios
      .get(`https://pandusubekti.tech/wisata/list?id=${id}`)
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div
        className="w-full bg-cover rounded-b-3xl h-80 "
        style={{
          backgroundImage: `url('https://pandusubekti.tech/upload/${data.gambar?.gambar1}')`,
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
          {data.alamat}
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

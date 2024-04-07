import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="w-full bg-cover rounded-b-3xl h-80 "
        style={{ backgroundImage: "url('/img/manuk.jpg')" }}
      >
        <Link href="/dashboard">
          <div className="pt-5 pl-5 ">
            <Image src="/img/back.svg" height={40} width={40} />
          </div>
        </Link>
      </div>
      <h1 className="mt-5 mb-5 ml-5 text-2xl font-bold">Kebun Teh Tambi</h1>
      <div className="flex w-full mx-5 rounded-2xl ">
        <Image src="/img/maps.svg" width={15} height={15} />
        <h1 className="pl-5 font-extrabold text-gray-500 capitalize">
          {" "}
          Tambi, garung{" "}
        </h1>
      </div>
      <div className="flex mt-10">
        <div className="flex w-1/2 mx-5 ">
          <Image src="/img/rating.svg" width={20} height={20} />
          <h1 className="pl-4 font-bold">4,7</h1>
        </div>
        <div className="flex w-1/2 mx-5 ">
          <h1 className="pl-5 font-bold">Rp 5000 / orang</h1>
        </div>
      </div>
      <div className="mt-10 mb-5">
        <h1 className="pl-5 text-lg font-bold capitalize">tentang wisata</h1>
        <p className="mx-5 mt-5 text-justify text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum cumque
          distinctio tempora, dolore ipsa, voluptatem totam rerum blanditiis
          dignissimos repellat qui, corrupti sed quaerat veniam delectus
          perspiciatis rem! Quaerat, nemo?
        </p>
      </div>
    </div>
  );
}

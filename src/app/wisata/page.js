import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div
        className="bg-cover w-full rounded-b-3xl  h-96 "
        style={{ backgroundImage: "url('/img/manuk.jpg')" }}
      ></div>
      <h1 className="flex justify-center mt-5 mb-5 font-extrabold text-xl">
        Kebun Teh Tambi
      </h1>
      <div className="flex mt-10">
        <div className="w-1/4 mx-5 border-teal-700 border-2 h-20 rounded-2xl flex flex-col justify-center items-center">
          <Image src="/img/maps.svg" width={30} height={40} />
          <h1 className="font-extrabold">Lokasi</h1>
        </div>
        <div className="w-1/4 mx-5 border-teal-700 border-2 h-20 rounded-2xl flex flex-col justify-center items-center">
          <Image src="/img/tiket.svg" width={30} height={40} />
          <h1 className="font-extrabold">Rp 5000</h1>
        </div>
        <div className="w-1/4 mx-5 border-teal-700 border-2 h-20 rounded-2xl flex flex-col justify-center items-center">
          <Image src="/img/rating.svg" width={30} height={40} />
          <h1 className="font-extrabold">4,7</h1>
        </div>
      </div>
      <div className="mt-10 mb-5">
        <h1 className="text-lg font-bold capitalize pl-10">tentang</h1>
        <p className="mx-5 text-justify mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum cumque
          distinctio tempora, dolore ipsa, voluptatem totam rerum blanditiis
          dignissimos repellat qui, corrupti sed quaerat veniam delectus
          perspiciatis rem! Quaerat, nemo?
        </p>
      </div>
    </div>
  );
}

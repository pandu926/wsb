"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function Rekomendasi() {
  const [toogle, setToogle] = useState(false);

  const toogleSearch = () => {
    setToogle(!toogle);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 600, // adjust based on your design needs
        settings: {
          slidesToShow: 1,
          centerPadding: "60px", // adjust as needed
        },
      },
      {
        breakpoint: 1024, // adjust based on your design needs
        settings: {
          slidesToShow: 3,
          centerPadding: "60px", // adjust as needed
        },
      },
    ],
  };

  return (
    <>
      <div className="relative z-10 mt-5 mb-10 text-blue-900 capitalize">
        <div className="flex justify-between px-10 mt-5 mb-10 text-2xl font-extrabold">
          <h1>Wonosobo</h1>
          <button onClick={toogleSearch}>
            <Image src="/img/search.svg" width={30} height={30} />
          </button>
        </div>
        <div className="pb-5 mb-10 text-base font-extrabold text-center text-teal-500 ">
          rekomendasi wisata
        </div>
        <Slider {...settings}>
          {[...Array(5)].map((_, index) => (
            <Link
              href={`/wisata/${index}`}
              key={index}
              className="w-full px-4 mx-auto mb-8 overflow-hidden md:w-1/2 lg:w-2/5"
            >
              <div
                style={{ backgroundImage: "url('/img/manuk.jpg')" }}
                className="relative transition-transform duration-300 transform bg-cover h-60 rounded-3xl group hover:scale-110"
              >
                <div className="relative p-4 text-center text-black rounded-md hover:border-red-500">
                  <h2 className="mt-2 text-xl font-semibold"></h2>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div
        className={`fixed top-0 left-0 z-50 bg-white h-screen w-full ${
          toogle ? "" : "hidden"
        }`}
      >
        <div>
          <button onClick={toogleSearch}>close</button>
        </div>
        <SearchBox />
      </div>
    </>
  );
}

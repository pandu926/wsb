"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";

export default function Rekomendasi() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
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
    <div className="  text-blue-900 mt-5 relative z-10 mb-10 capitalize">
      <div className="mt-5 mb-10  font-extrabold text-2xl flex justify-between">
        <div className="w-4/5 pl-10">Wonosobo</div>
        <div className="w-1/5 justify-end">
          <Image src="/img/search.svg" width={30} height={30} />
        </div>
      </div>
      <div className=" text-center mb-10 text-base  font-extrabold text-teal-500 pb-5">
        rekomendasi wisata
      </div>
      <Slider {...settings}>
        {[...Array(5)].map((_, index) => (
          <Link
            href="/wisata"
            key={index}
            className="w-full  md:w-1/2 lg:w-2/5 mx-auto px-4 mb-8"
          >
            <div
              style={{ backgroundImage: "url('/img/manuk.jpg')" }}
              className="bg-cover  relative h-60 rounded-3xl  group transition-transform duration-300 transform hover:scale-110"
            >
              <div className="hover:border-red-500  text-black  p-4 rounded-md text-center relative">
                <h2 className="text-xl font-semibold mt-2"></h2>
              </div>
              {/* Progress Bar */}
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

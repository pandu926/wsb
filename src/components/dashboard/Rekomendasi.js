"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
      <div className=" pl-10 text-lg  font-bold text-teal-500 pb-5">
        rekomendasi wisata
      </div>
      <Slider {...settings}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="w-full  md:w-1/2 lg:w-2/5 mx-auto px-4 mb-8"
          >
            <div className="relative h-72 rounded-3xl  group transition-transform duration-300 transform hover:scale-110">
              <Image
                src="/img/manuk.jpg"
                width={250}
                height={300}
                className="rounded-3xl"
              />
              <div className="hover:border-red-500  text-black  p-4 rounded-md text-center relative">
                <h2 className="text-xl font-semibold mt-2">SeminarK</h2>
              </div>
              {/* Progress Bar */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

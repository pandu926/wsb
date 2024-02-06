"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Kategori() {
  const path = usePathname();

  const textArray = [
    "gunung",
    "curug",
    "kebun",
    "kawah",
    "buatan",
    "candi",
    "tradisional",
    "sungai",
  ];
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: false,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      <div className="  text-blue-900 mt-10 relative z-10 mb-10 capitalize">
        <div className=" text-center  text-lg mb-5  font-bold text-teal-500 pb-5">
          Explore Wonosobo
        </div>
        <Slider {...settings}>
          {textArray.map((text, index) => (
            <div
              key={index}
              className={`w-2/5 px-4 mb-8 ${
                path == `/dashboard/${text}` ? "text-teal-500 font-bold" : ""
              }`}
            >
              <Link id={text} href={`/dashboard/${text}`} key={index}>
                {text}
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

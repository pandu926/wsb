"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Kategori() {
  const path = usePathname();

  const [kategori, setKategori] = useState([]);
  useEffect(() => {
    dataKategori();
  }, []);

  const dataKategori = async () => {
    axios
      .get("https://pandusubekti.tech/tag/list")
      .then((response) => {
        // Handle respons sukses (status kode 200 OK)
        const data = response.data;
        console.log(data);
        setKategori(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
    <div className="relative z-10 my-5 text-blue-900 capitalize ">
      <div className="pb-5 mb-5 text-lg font-bold text-center text-teal-500 ">
        Explore Wonosobo
      </div>
      <Slider {...settings}>
        {kategori.map((text, index) => (
          <div
            key={index}
            className={`w-2/5 px-4 mb-8  ${
              path == `/dashboard/${text.nama}` ? "text-teal-500 font-bold" : ""
            }`}
          >
            <Link href={`/dashboard/${text.nama}`} key={index}>
              {text.nama}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

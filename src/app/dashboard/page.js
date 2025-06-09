"use client";
import { Suspense, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function Kategori() {
  const router = useSearchParams();
  const queryParam = router.get("kategori");

  const [kategori, setKategori] = useState([]);
  const [keyword, setKeyword] = useState(null);
  const [data, setData] = useState([]); // data tagpivot
  const [filteredData, setFilteredData] = useState([]);
  const [wisata, setWisata] = useState([]);

  useEffect(() => {
    fetchDataKategori();
    fetchDataWisataKategori();
    fetchDataWisata();
  }, []);

  // Set keyword berdasarkan query param kategori
  useEffect(() => {
    if (queryParam) {
      const filteredKategori = kategori.filter(
        (item) => item.nama.toLowerCase() === queryParam.toLowerCase()
      );
      setKeyword(filteredKategori.length > 0 ? filteredKategori[0].id : null);
    } else {
      setKeyword(null);
    }
  }, [kategori, queryParam]);

  // Gabungkan data tagpivot dengan data wisata lengkap berdasarkan keyword filter
  useEffect(() => {
    if (keyword !== null) {
      const filteredTagpivot = data.filter((item) => item.id_tag === keyword);
      const filteredWithWisata = filteredTagpivot.map((item) => ({
        ...item,
        wisata: wisata.find((w) => w.id === item.id_wisata) || null,
      }));
      setFilteredData(filteredWithWisata);
    } else {
      setFilteredData([]);
    }
  }, [data, keyword, wisata]);

  // Ambil data wisata lengkap
  const fetchDataWisata = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}wisata/list`
      );
      setWisata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Ambil kategori tag
  const fetchDataKategori = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}tag/list`
      );
      setKategori(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Ambil data tagpivot
  const fetchDataWisataKategori = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}tagpivot/list`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    swipeToSlide: false,
    afterChange: (index) => {
     
    },
  };

  return (
    <div className="relative z-10 my-5 text-blue-900 capitalize">
      <div className="pb-5 mb-5 text-lg font-bold text-center text-teal-500">
        Explore Wonosobo
      </div>
      <Slider {...settings}>
        {kategori.map((item) => (
          <div
            key={item.id || item.nama} // pakai id atau nama jika id tidak ada
            className={`w-2/5 px-4 mb-8 ${
              queryParam?.toLowerCase() === item.nama.toLowerCase()
                ? "text-teal-500 font-bold"
                : ""
            }`}
          >
            <Link href={`/dashboard?kategori=${item.nama}`}>{item.nama}</Link>
          </div>
        ))}
      </Slider>
      <div className="flex flex-wrap items-center justify-center overflow-hidden capitalize">
        {/* Tampilkan data filter jika ada */}
        {filteredData.length > 0
          ? filteredData.map((text) =>
              text.wisata ? (
                <Link
                  href={`/wisata/${text.wisata.id}`}
                  key={text.id}
                  className="w-2/5 mx-3 mt-5 bg-center bg-cover h-52 rounded-2xl"
                  style={{
                    backgroundImage: text.wisata.gambar?.gambar1
                      ? `url('${process.env.NEXT_PUBLIC_API_URL}upload/${text.wisata.gambar.gambar1}')`
                      : "url('/img/no-image.png')",
                  }}
                >
                  <div className="items-center justify-center w-4/5 mx-auto mt-40 text-center text-black bg-white rounded-lg h-7">
                    <h1 style={{ fontSize: 10 }} className="pt-1 font-bold ">
                      {text.wisata.nama}
                    </h1>
                  </div>
                </Link>
              ) : null
            )
          : // Jika tidak ada filter tampilkan semua wisata
            wisata.map((text) => (
              <Link
                href={`/wisata/${text.id}`}
                key={text.id}
                className="w-2/5 mx-3 mt-5 bg-center bg-cover h-52 rounded-2xl"
                style={{
                  backgroundImage: text.gambar?.gambar1
                    ? `url('${process.env.NEXT_PUBLIC_API_URL}upload/${text.gambar.gambar1}')`
                    : "url('/img/no-image.png')",
                }}
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

export default function page() {
  return (
    <Suspense>
      <Kategori />
    </Suspense>
  );
}

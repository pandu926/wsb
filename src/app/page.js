"use client";
import SearchBox from "@/components/homepage/SearchBox";
import Image from "next/image";
import { useState, useEffect } from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>created by Ahmad Pandu Subekti</h1>
    </div>
  );
};

const MainPage = () => {
  const [toogle, setToogle] = useState(false);
  const handleClick = () => {
    setToogle(!toogle);
  };
  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./img/bg.svg"
          layout="fill"
          objectFit="cover"
          alt="background"
        />
      </div>
      <div>
        <button
          onClick={handleClick}
          className="relative z-10 flex flex-col items-center justify-center h-full"
        >
          close
        </button>
      </div>
      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full ${
          toogle ? "hidden" : "block"
        }`}
      >
        <h1 className="text-xl font-extrabold mb-14 text-red-600">
          WONOSOBO SOUL OF JAVA
        </h1>
        <div className="mt-96">
          <button
            onClick={handleClick}
            className="bg-white text-green-600 py-2 px-20 rounded-md font-bold"
          >
            Explore
          </button>
        </div>
      </div>
      <div className={`${toogle ? "block" : "hidden"}`}>
        <SearchBox />
      </div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi beban data atau inisialisasi
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ubah sesuai dengan kebutuhan Anda
  }, []);

  return <div>{isLoading ? <LoadingPage /> : <MainPage />}</div>;
};

export default App;

"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1>created by Ahmad Pandu Subekti</h1>
    </div>
  );
};

const MainPage = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="./img/bg.svg"
          layout="fill"
          objectFit="cover"
          alt="background"
        />
      </div>
      {/* Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full `}
      >
        <h1 className="text-xl font-extrabold text-red-600 mb-14">
          WONOSOBO SOUL OF JAVA
        </h1>
        <div className="mt-96">
          <Link
            href="/dashboard"
            className="px-20 py-2 font-bold text-green-600 bg-white rounded-md"
          >
            Explore
          </Link>
        </div>
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

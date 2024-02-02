"use client";
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full ">
        <h1 className="text-xl font-extrabold mb-14 text-red-600">
          WONOSOBO SOUL OF JAVA
        </h1>
        <div className="mt-96">
          <button className="bg-white text-green-600 py-2 px-20 rounded-md font-bold">
            Explore
          </button>
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

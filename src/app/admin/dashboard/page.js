import Image from "next/image";

export default function page() {
  return (
    <div>
      <div className="px-10 mt-5 capitalize">
        <nav className="w-full flex capitalize justify-around">
          <h1 className="w-4/5">hallo, mas pandu</h1>
          <div className="w-1/5">
            <Image src="/img/logout.svg" height={25} width={25} />
          </div>
        </nav>
        <div className="mt-40 ">
          <div className="bg-teal-400 text-xl font-bold pt-3 pb-3 rounded-lg text-blue-700 flex justify-center">
            atur daftar wisata
          </div>
          <div className="bg-teal-400 text-xl font-bold pt-3 pb-3 mt-10 rounded-lg text-blue-700 flex justify-center">
            atur daftar kategori
          </div>
        </div>
      </div>
    </div>
  );
}

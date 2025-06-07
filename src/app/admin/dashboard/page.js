import { Activity, AreaChart, DollarSign, LogOut, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="px-10 mt-5 capitalize">
        <nav className="flex items-center justify-between w-full mb-5 capitalize">
          <h1>
            hallo, <span className="font-bold">mas pandu</span>
          </h1>
          <LogOut className="text-red-700" />
        </nav>
        {/* navbar menu */}
        <div className="grid grid-cols-2 gap-2 my-4">
          <div className="flex flex-col items-start justify-start p-4 space-y-4 border rounded-md">
            <div className="p-2 border rounded-full bg-slate-100">
              <Users className="text-zinc-700" />
            </div>
            <h1>Pengunjung</h1>
          </div>
          <div className="flex flex-col items-start justify-start p-4 space-y-4 border rounded-md">
            <div className="p-2 border rounded-full bg-slate-100">
              <DollarSign className="text-teal-700" />
            </div>
            <h1>Penjualan</h1>
          </div>
          <div className="flex flex-col items-start justify-start p-4 space-y-4 border rounded-md">
            <div className="p-2 border rounded-full bg-slate-100">
              <AreaChart className="text-red-700" />
            </div>
            <h1>Performa</h1>
          </div>
          <div className="flex flex-col items-start justify-start p-4 space-y-4 border rounded-md">
            <div className="p-2 border rounded-full bg-slate-100">
              <Activity className="text-sky-700" />
            </div>
            <h1>Status</h1>
          </div>
        </div>
        {/* add content */}
        <div className="">
          <Link href="/admin/wisata" className="w-full p-4 my-2 font-bold bg-teal-100 border border-teal-400 rounded-md hover:bg-teal-50">
            Atur Daftar Wisata
          </Link>
          <button className="w-full p-4 my-2 font-bold bg-teal-100 border border-teal-400 rounded-md hover:bg-teal-50">
            Atur Daftar Kategori
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function page() {
  return (
    <div className="mt-5 px-10">
      <div className="flex justify-center font-bold text-xl text-teal-600">
        Halaman Wisata Kontrol
      </div>
      <div>
        <div className="bg-blue-700 pt-2 pb-2 w-1/2 flex justify-center text-white rounded-md mt-14">
          tambah wisata
        </div>
        <div className="mt-5 w-full">
          <table className="">
            <thead className="bg-teal-600">
              <tr>
                <td>id</td>
                <td>nama</td>
                <td>aksi</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>hunung kemukus</td>
                <td className="flex px-3">
                  <div className="bg-red-600 px-1 pb-1 pt-1 mr-3">delete</div>
                  <div className="bg-teal-600 px-1 pb-1 pt-1">edit</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function page() {
  const textArray = ["teh tanjungsari", "teh bedakah", "teh tambi"];

  return (
    <div>
      <div className=" flex flex-wrap justify-center items-center capitalize ">
        {textArray.map((text, index) => (
          <div
            key={index}
            className="w-2/5 mt-5 h-52 mx-3 rounded-2xl bg-center bg-cover"
            style={{ backgroundImage: "url('/img/manuk.jpg')" }}
          >
            <div className="text-center bg-white w-4/5 mt-40 h-7 rounded-lg mx-auto justify-center items-center text-black">
              <h1 style={{ fontSize: 10 }} className="font-bold pt-1 ">
                {text}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

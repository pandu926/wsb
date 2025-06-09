"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}admin/login`,
        {
          username,
          password,
        }
      );

      const data = response.data.accessToken;
      Cookies.set("access_token", data, { expires: 7 });

      setSuccessMessage("Login berhasil!"); // Set success message
      router.push("/admin/dashboard");
    } catch (error) {
      console.error("Login gagal:", error);
      setError("Login gagal. Silakan cek kembali username dan password Anda."); // Set error message
    }

    setLoading(false);
  };

  return (
    <div className="flex text-teal-400 capitalize">
      <div className="hidden w-2/5 bg-teal-400 md:block"></div>
      <div className="w-full md:w-3/5">
        <div className="flex justify-center pt-8 text-xl font-bold">
          Login Admin
        </div>
        <div className="mt-28 md:mt-20">
          <label
            htmlFor="username"
            className="text-lg font-bold ml-14 md:ml-52"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="block h-10 mx-auto mt-3 text-teal-500 bg-white border-2 border-gray-700 rounded-md w-72 md:w-2/4"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mt-12">
          <label
            htmlFor="password"
            className="text-lg font-bold ml-14 md:ml-52"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="block h-10 mx-auto mt-3 text-teal-500 bg-white border-2 border-gray-700 rounded-md w-72 md:w-2/4"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="h-10 mx-auto mt-16 text-lg font-bold text-center text-black bg-teal-400 border-2 border-black rounded-md w-72 md:w-2/4 md:mt-24">
          <button
            type="submit"
            className="pt-1"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
        {error && <div className="mt-4 text-center text-red-500">{error}</div>}
        {successMessage && (
          <div className="mt-4 text-center text-green-500">
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}

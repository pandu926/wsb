"use client";

import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {};
  return (
    <div className="flex capitalize text-teal-400">
      <div className="hidden md:block w-2/5 bg-teal-400"></div>
      <div className="w-full md:w-3/5">
        <div className="flex justify-center pt-8 font-bold text-xl">
          Login Admin
        </div>
        <div className="  mt-28 md:mt-20">
          <label
            htmlFor="username"
            className="ml-14 md:ml-52 font-bold text-lg"
          >
            username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-72 md:w-2/4 h-10 block mx-auto  mt-3 text-teal-500 bg-white rounded-md border-2 border-gray-700"
          />
        </div>
        <div className="  mt-12">
          <label
            htmlFor="password"
            className="ml-14 md:ml-52  font-bold text-lg"
          >
            password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            className="w-72 md:w-2/4 h-10 block mx-auto mt-3 text-teal-500 bg-white rounded-md border-2 border-gray-700"
          />
        </div>
        <div className="mx-auto text-center bg-teal-400 w-72 md:w-2/4 rounded-md mt-16 md:mt-24 h-10 text-black font-bold text-lg border-2 border-black">
          <button type="submit" className="pt-1">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

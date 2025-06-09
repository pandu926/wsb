"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export default function SideNavbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Cek validitas token
  const validateToken = (token) => {
    if (!token) return false;
    try {
      const decoded = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTime) return false;
      return true;
    } catch (err) {
      return false;
    }
  };

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!validateToken(token)) {
      // Token invalid atau expired, redirect ke login admin
      router.replace("/admin");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    Cookies.remove("access_token");
    setIsAuthenticated(false);
    router.push("/admin/login");
  };

  if (!isAuthenticated) return null; // Atau loading spinner

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen p-4 transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="mb-6 text-white focus:outline-none"
          aria-label="Toggle sidebar"
        >
          {isOpen ? "←" : "→"}
        </button>

        <nav className="flex flex-col gap-4">
          <Link href="/admin/dashboard">
            <div className="flex items-center p-2 rounded hover:bg-gray-700">
              <span className="mr-2 material-icons">dashboard</span>
            </div>
          </Link>

          <Link href="/admin/wisata">
            <div className="flex items-center p-2 rounded hover:bg-gray-700">
              <span className="mr-2 material-icons">wisata</span>
            </div>
          </Link>
          <Link href="/admin/kategori">
            <div className="flex items-center p-2 rounded hover:bg-gray-700">
              <span className="mr-2 material-icons">kategori</span>
            </div>
          </Link>
        </nav>

        {/* Tombol Sign Out */}
        <button
          onClick={handleLogout}
          className="w-full p-2 mt-10 text-white bg-red-600 rounded hover:bg-red-700"
        >
          {isOpen ? "Sign Out" : <span className="material-icons">logout</span>}
        </button>
      </div>
    </div>
  );
}

"use client";

import SideNavbar from "@/components/admin/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const hideNavbar = pathname === "/admin";

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen">
          {!hideNavbar && <SideNavbar />}
          <div className="flex-1 p-6 overflow-auto">{children}</div>
        </main>
      </body>
    </html>
  );
}

import Kategori from "@/components/dashboard/Kategori";
import Rekomendasi from "../../components/dashboard/Rekomendasi";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Rekomendasi />
        <Kategori />
        {children}
      </body>
    </html>
  );
}

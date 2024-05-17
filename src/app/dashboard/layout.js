import Rekomendasi from "../../components/dashboard/Rekomendasi";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter}>
        <Rekomendasi />

        <main className="mb-10">{children}</main>
      </body>
    </html>
  );
}

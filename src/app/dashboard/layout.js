import Kategori from "@/components/dashboard/Kategori";
import Rekomendasi from "../../components/dashboard/Rekomendasi";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Rekomendasi />
        <Kategori />
        {children}
      </body>
    </html>
  );
}

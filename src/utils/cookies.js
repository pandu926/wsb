export default function getCookie(cookieName) {
  const cookieString = document.cookie; // Mendapatkan string cookie
  const cookies = cookieString.split(";"); // Memisahkan string cookie menjadi array

  // Iterasi melalui setiap cookie
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim(); // Menghilangkan spasi di awal dan akhir cookie
    const [name, value] = cookie.split("="); // Memisahkan nama dan nilai cookie

    // Jika nama cookie cocok dengan yang dicari, kembalikan nilainya
    if (name === cookieName) {
      return decodeURIComponent(value); // Decode nilai cookie (jika perlu)
    }
  }

  return null; // Mengembalikan null jika cookie tidak ditemukan
}

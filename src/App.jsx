import { useState, useEffect } from "react";
import "./App.css";
import DoaHarapanInteraktif from "./DoaHarapanInteraktif";

function App() {
  const [namaTamu, setNamaTamu] = useState("Nama Tamu");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("nama");
    if (nama) {
      setNamaTamu(decodeURIComponent(nama));
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090607] text-white font-montserrat overflow-hidden px-6 py-10 flex flex-col items-center justify-center text-center">
      {/* SVG Shape Background */}
      <svg
        className="fixed top-0 right-0 w-[300px] h-[300px] z-0"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ac1ed6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#c26e73" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="150" cy="150" r="150" fill="url(#grad)" />
      </svg>

      <svg
        class="bunga-animasi"
        width="200"
        height="200"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bungaGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ac1ed6" />
            <stop offset="100%" stop-color="#c26e73" />
          </radialGradient>
        </defs>
        <g transform="translate(100,100)">
          <g fill="url(#bungaGradient)">
            <ellipse rx="30" ry="60" transform="rotate(0)" />
            <ellipse rx="30" ry="60" transform="rotate(45)" />
            <ellipse rx="30" ry="60" transform="rotate(90)" />
            <ellipse rx="30" ry="60" transform="rotate(135)" />
            <ellipse rx="30" ry="60" transform="rotate(180)" />
            <ellipse rx="30" ry="60" transform="rotate(225)" />
            <ellipse rx="30" ry="60" transform="rotate(270)" />
            <ellipse rx="30" ry="60" transform="rotate(315)" />
          </g>
          <circle r="20" fill="#090607" stroke="#ac1ed6" stroke-width="3" />
        </g>
      </svg>

      {/* Konten Utama */}
      <div className="relative z-10 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-white">Undangan Aqiqah</h1>
        <p className="text-lg text-white font-semibold">
          'Aisyah Medina Azzahra
        </p>
        <p className="text-sm text-gray-300">Sabtu, 20 September 2025</p>

        <div className="bg-[#221f20] p-4 rounded shadow">
          <p className="text-sm text-gray-200">Yang Kami Undang : </p>
          <p className="text-lg font-semibold text-white">{namaTamu}</p>
        </div>

        <p className="text-sm text-gray-300">
          Kami sangat berharap kehadiran Bapak/Ibu/Saudara(i) untuk memperingati
          momen yang berharga ini bersama keluarga kami.
        </p>

        <button className="w-full py-3 rounded bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Buka Undangan
        </button>

        <p className="text-xs text-gray-500 italic">
          Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
      <section className="bg-[#090607] text-white font-montserrat px-6 py-10 max-w-2xl mx-auto space-y-6">
        {/* Judul */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#ac1ed6] text-center">
          Telah Lahir Buah Hati Kami
        </h2>
        <p className="text-center text-lg text-white font-semibold">
          Aisyah Medina Azzahra
        </p>
        <p className="text-sm text-gray-300 text-center italic">
          Anak ke-3 dari Muhammad Mahrus Zain dan Zahiyah Putri.
        </p>

        <div className="bg-[#221f20] p-6 rounded-lg shadow text-white font-montserrat">
          <h3 className="text-xl font-semibold text-center text-[#ac1ed6] mb-6">
            🌸 Aisyah Medina Azzahra{" "}
            <span className="text-sm text-gray-400">(عائشة مدينة الزهراء)</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
            {/* Kolom Aisyah */}
            <div className="bg-[#090607] p-4 rounded-lg shadow-sm">
              <h4 className="text-[#ac1ed6] font-bold mb-2">Aisyah (عائشة)</h4>
              <p>Makna: Hidup bahagia, sejahtera.</p>
              <p>Nama istri Rasulullah ﷺ, Ummul Mu’minin.</p>
            </div>

            {/* Kolom Medina */}
            <div className="bg-[#090607] p-4 rounded-lg shadow-sm">
              <h4 className="text-[#ac1ed6] font-bold mb-2">Medina (مدينة)</h4>
              <p>Makna: Kota, merujuk pada Madinah al-Munawwarah.</p>
              <p>Tempat hijrah Rasulullah ﷺ.</p>
            </div>

            {/* Kolom Azzahra */}
            <div className="bg-[#090607] p-4 rounded-lg shadow-sm">
              <h4 className="text-[#ac1ed6] font-bold mb-2">
                Azzahra (الزهراء)
              </h4>
              <p>Makna: Yang bercahaya, bersinar indah.</p>
              <p>Julukan untuk Fatimah az-Zahra (putri Rasulullah ﷺ).</p>
            </div>
          </div>
        </div>

        {/* Arti Rangkaian */}
        <div className="bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] p-4 rounded-lg shadow text-center">
          <h4 className="text-white font-semibold mb-2">✨ Arti Rangkaian</h4>
          <p className="text-sm text-white italic">
            “Wanita yang hidup bahagia, bercahaya seperti Fatimah az-Zahra, dan
            senantiasa mencerminkan kebaikan kota suci Madinah.”
          </p>
        </div>

        {/* Doa & Harapan */}
        <div className="bg-[#221f20] p-4 rounded-lg shadow text-center">
          <h4 className="text-[#c26e73] font-semibold mb-2">Doa & Harapan</h4>
          <p className="text-sm text-gray-300 italic">
            “Ya Allah, jadikanlah Aisyah Medina Azzahra anak yang hidup dalam
            kebahagiaan, berhati suci dan bercahaya dengan iman, serta membawa
            kebaikan seperti kota Madinah yang penuh berkah.”
          </p>
        </div>
      </section>
      <section className="relative bg-[#090607] text-white font-montserrat px-6 py-10 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="20" r="8" fill="#e91e63" />
            <rect x="26" y="28" width="12" height="16" rx="4" fill="#ac1ed6" />
            <circle cx="28" cy="48" r="4" fill="#c26e73" />
            <circle cx="36" cy="48" r="4" fill="#c26e73" />
            <line
              x1="32"
              y1="44"
              x2="32"
              y2="52"
              stroke="#fff"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
          <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="10" fill="#c26e73" />
            <path
              d="M24 32 C24 26, 40 26, 40 32 C40 38, 24 38, 24 32 Z"
              fill="#ac1ed6"
            />
            <circle cx="32" cy="32" r="4" fill="#fff" />
          </svg>
        </div>

        <div className="relative z-10 max-w-xl space-y-8 text-left font-sans">
          <h1 className="text-4xl font-extrabold text-[#ac1ed6] leading-tight tracking-wide">
            Assalamu'alaikum warahmatullah wabarakatuh
          </h1>

          <p className="text-base text-gray-300 italic leading-relaxed tracking-normal">
            Dengan izin Allah ﷻ, dan dengan penuh kerendahan hati,
            <br />
            kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir
            dalam acara syukuran aqiqah anak kami.
          </p>

          <div className="bg-gradient-to-br from-[#221f20] to-[#1a1819] p-6 rounded-2xl shadow-xl transition duration-300 hover:shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-[#c26e73]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3M16 7V3M4 11h16M4 19h16M4 15h16"
                />
              </svg>
              <h2 className="text-2xl font-bold text-[#c26e73] tracking-wide leading-snug">
                Hari & Tempat
              </h2>
            </div>

            <div className="grid gap-5 text-sm text-gray-300 leading-relaxed">
              <div className="flex items-start gap-3">
                <div className="text-white text-lg">🗓️</div>
                <div>
                  <p className="font-semibold text-white">Tanggal</p>
                  <p>
                    Minggu,{" "}
                    <span className="text-[#e91e63] font-medium">
                      20 September 2025
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-white text-lg">⏰</div>
                <div>
                  <p className="font-semibold text-white">Waktu</p>
                  <p>
                    Pukul{" "}
                    <span className="text-[#e91e63] font-medium">
                      11.00 WIB – Selesai
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-white text-lg">📍</div>
                <div>
                  <p className="font-semibold text-white">Lokasi</p>
                  <p>
                    Jl. Perjuangan, Palas, Kec. Rumbai, Kota Pekanbaru, Riau
                    <br />
                    <span className="text-[#c26e73] font-semibold italic">
                      (Pondok Pesantren Darussalam Al Islami)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/QTwnQvDCmpcHoUDb6"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full block"
          >
            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white text-base font-semibold tracking-wide hover:opacity-90 transition flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Petunjuk Arah
            </button>
          </a>
        </div>
      </section>
      <DoaHarapanInteraktif />
      <section className="bg-[#090607] text-white font-montserrat px-6 py-16 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Dekorasi SVG Bunga */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
          <svg
            viewBox="0 0 64 64"
            fill="#c26e73"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M32 4C20 20 44 20 32 44C44 28 20 28 32 4Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30">
          <svg
            viewBox="0 0 64 64"
            fill="#ac1ed6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32" cy="32" r="30" />
          </svg>
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-3xl font-bold text-[#ac1ed6]">
            Jazakumullah khairan katsiran
          </h2>
          <p className="text-sm text-gray-300 italic">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami,
            <br />
            apabila teman-teman/bapak/ibu berkenan hadir dan memberikan do'a.
          </p>

          <div className="mt-6 bg-[#221f20] p-4 rounded-lg shadow text-center space-y-2">
            <p className="text-sm text-gray-400 italic">
              Hormat Kami Yang Mengundang
            </p>
            <p className="text-lg font-semibold text-white">
              Bapak Mahrus & Ibu Zahiyah
            </p>
          </div>

          <p className="text-xs text-gray-500 italic mt-6">
            Semoga silaturahmi ini membawa berkah dan kebahagiaan untuk kita
            semua.
          </p>
        </div>
      </section>
      <div class="fixed bottom-0 left-0 w-[100px] h-[100px] z-0 pointer-events-none">
        <svg
          class="blur-xs animate-[spin-slow_30s_linear_infinite]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(100,100)">
            <g fill="#c2185b">
              <ellipse rx="30" ry="60" transform="rotate(0)" />
              <ellipse rx="30" ry="60" transform="rotate(45)" />
              <ellipse rx="30" ry="60" transform="rotate(90)" />
              <ellipse rx="30" ry="60" transform="rotate(135)" />
              <ellipse rx="30" ry="60" transform="rotate(180)" />
              <ellipse rx="30" ry="60" transform="rotate(225)" />
              <ellipse rx="30" ry="60" transform="rotate(270)" />
              <ellipse rx="30" ry="60" transform="rotate(315)" />
            </g>
            <circle r="20" fill="#e91e63" />
          </g>
          <rect x="95" y="100" width="10" height="100" fill="#ac1ed6" />
          <path
            d="M100 130 Q80 140 90 160"
            stroke="#ac1ed6"
            stroke-width="4"
            fill="none"
          />
          <path
            d="M100 130 Q120 140 110 160"
            stroke="#ac1ed6"
            stroke-width="4"
            fill="none"
          />
          <path d="M90 160 Q85 170 90 180 Q95 170 90 160" fill="#4caf50" />
          <path d="M110 160 Q105 170 110 180 Q115 170 110 160" fill="#4caf50" />
        </svg>
      </div>
    </div>
  );
}

export default App;

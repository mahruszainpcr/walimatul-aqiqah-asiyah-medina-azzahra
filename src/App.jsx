import { useState, useEffect } from 'react'
import './App.css'
import DoaHarapanInteraktif from './DoaHarapanInteraktif'

function App() {
  const [namaTamu, setNamaTamu] = useState('Nama Tamu')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const nama = params.get('nama')
    if (nama) {
      setNamaTamu(decodeURIComponent(nama))
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-[#090607] text-white font-montserrat overflow-hidden px-6 py-10 flex flex-col items-center justify-center text-center">
      
      {/* SVG Shape Background */}
      <svg
        className="absolute top-0 right-0 w-[300px] h-[300px] z-0"
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

      {/* Konten Utama */}
      <div className="relative z-10 max-w-md w-full space-y-6">
        <h1 className="text-3xl font-bold text-white">Undangan Aqiqah</h1>
        <p className="text-lg text-white font-semibold">'Aisyah Medina Azzahra</p>
        <p className="text-sm text-gray-300">Sabtu, 19 September 2025</p>

        <div className="bg-[#221f20] p-4 rounded shadow">
          <p className="text-sm text-gray-200">Kepada Yang Terhormat</p>
          <p className="text-lg font-semibold text-white">{namaTamu}</p>
        </div>

        <p className="text-sm text-gray-300">
          Kami sangat berharap kehadiran Bapak/Ibu/Saudara(i) untuk memperingati momen yang berharga ini bersama keluarga kami.
        </p>

        <button className="w-full py-3 rounded bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
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
    🌸 Aisyah Medina Azzahra <span className="text-sm text-gray-400">(عائشة مدينة الزهراء)</span>
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
      <h4 className="text-[#ac1ed6] font-bold mb-2">Azzahra (الزهراء)</h4>
      <p>Makna: Yang bercahaya, bersinar indah.</p>
      <p>Julukan untuk Fatimah az-Zahra (putri Rasulullah ﷺ).</p>
    </div>
  </div>
</div>


      {/* Arti Rangkaian */}
      <div className="bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] p-4 rounded-lg shadow text-center">
        <h4 className="text-white font-semibold mb-2">✨ Arti Rangkaian</h4>
        <p className="text-sm text-white italic">
          “Wanita yang hidup bahagia, bercahaya seperti Fatimah az-Zahra, dan senantiasa mencerminkan kebaikan kota suci Madinah.”
        </p>
      </div>

      {/* Doa & Harapan */}
      <div className="bg-[#221f20] p-4 rounded-lg shadow text-center">
        <h4 className="text-[#c26e73] font-semibold mb-2">Doa & Harapan</h4>
        <p className="text-sm text-gray-300 italic">
          “Ya Allah, jadikanlah Aisyah Medina Azzahra anak yang hidup dalam kebahagiaan, berhati suci dan bercahaya dengan iman, serta membawa kebaikan seperti kota Madinah yang penuh berkah.”
        </p>
      </div>
    </section>
    <section className="relative bg-[#090607] text-white font-montserrat px-6 py-10 min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

      {/* SVG Dekorasi Bayi & Bunga */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 64 64" fill="#ac1ed6" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" />
          <path d="M32 20a12 12 0 1 1 0 24 12 12 0 0 1 0-24z" fill="#090607" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 64 64" fill="#c26e73" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 4C20 20 44 20 32 44C44 28 20 28 32 4Z" />
        </svg>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 max-w-xl space-y-6">
        <h1 className="text-3xl font-bold text-[#ac1ed6]">Assalamualaikum wr wb</h1>

        <p className="text-sm text-gray-300 italic">
          Dengan izin Allah SWT, dan dengan penuh kerendahan hati,<br />
          kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk berkenan hadir dalam acara syukuran aqiqah anak kami.
        </p>

        <div className="bg-[#221f20] p-4 rounded-lg shadow space-y-2">
          <h2 className="text-xl font-semibold text-[#c26e73]">📅 Hari & Tempat</h2>
          <p className="text-sm text-gray-300">Minggu, 31 Desember 2023</p>
          <p className="text-sm text-gray-300">Pukul 19.00 WIB – Selesai</p>
          <p className="text-sm text-gray-300">Rumah Putra, Jl. Kauman No. 28, Kota Mojokerto – Jawa Timur</p>
        </div>

        <button className="mt-4 w-full py-3 rounded bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white font-semibold hover:opacity-90 transition flex items-center justify-center gap-2">
          {/* Amplop SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Petunjuk Arah
        </button>
      </div>
    </section>
    <DoaHarapanInteraktif/>
     <section className="bg-[#090607] text-white font-montserrat px-6 py-16 min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">

      {/* Dekorasi SVG Bunga */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 64 64" fill="#c26e73" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 4C20 20 44 20 32 44C44 28 20 28 32 4Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-30">
        <svg viewBox="0 0 64 64" fill="#ac1ed6" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="30" />
        </svg>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 max-w-xl space-y-6">
        <h2 className="text-3xl font-bold text-[#ac1ed6]">Terima Kasih Kami</h2>
        <p className="text-sm text-gray-300 italic">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami,<br />
          apabila teman-teman berkenan hadir dan memberikan do'a.
        </p>

        <div className="mt-6 bg-[#221f20] p-4 rounded-lg shadow text-center space-y-2">
          <p className="text-sm text-gray-400 italic">Hormat Kami Yang Mengundang</p>
          <p className="text-lg font-semibold text-white">Bapak Agus & Ibu Yulia</p>
        </div>

        <p className="text-xs text-gray-500 italic mt-6">
          Semoga silaturahmi ini membawa berkah dan kebahagiaan untuk kita semua.
        </p>
      </div>
    </section>
    </div>
  )
}

export default App

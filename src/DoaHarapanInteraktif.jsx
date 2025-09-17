import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase config
const supabaseUrl = "https://osvnysozjjzzkkevhlfm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zdm55c296amp6emtrZXZobGZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMzA4NjMsImV4cCI6MjA2NTcwNjg2M30.sEPSdAu6PQ0lQZQRYPfxwnp2VpSLVmwl9kJ_IuADj5o";
const supabase = createClient(supabaseUrl, supabaseKey);

function DoaHarapanInteraktif() {
  const [nama, setNama] = useState("");
  const [doa, setDoa] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [listDoa, setListDoa] = useState([]);

  // Fetch doa-doa dari Supabase
  useEffect(() => {
    const fetchDoa = async () => {
      const { data, error } = await supabase
        .from("doa_harapan")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setListDoa(data);
    };
    fetchDoa();
  }, [submitted]);

  // Submit doa ke Supabase
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("doa_harapan")
      .insert([{ nama, doa }]);
    if (!error) {
      setSubmitted(true);
      setNama("");
      setDoa("");
    }
  };

  return (
    <section className="bg-[#090607] text-white font-montserrat px-6 py-10 min-h-screen flex flex-col items-center justify-center text-center">
      <div className="max-w-xl w-full space-y-6" data-aos="fade-up">
        {/* Header */}
        <h2 className="text-2xl font-bold text-[#ac1ed6]" data-aos="fade-down">
          ✨ Doa & Harapan
        </h2>
        <p
          className="text-sm text-gray-300 italic"
          data-aos="fade-up"
          data-aos-delay="100"
        >
         Kami memohon Bapak/Ibu/Saudara/i untuk turut mendoakan putri kami agar kelak menjadi anak yang shalihah, berbakti kepada orang tua, serta bermanfaat bagi agama dan umat.
        </p>

        {/* Form */}
        <div
          className="bg-[#221f20] p-6 rounded-lg shadow space-y-4"
          data-aos="zoom-in"
        >
          {submitted ? (
            <p className="text-green-400 text-sm">
              Terima kasih atas doa dan harapan yang telah Anda kirimkan 💖
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nama Anda"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                className="w-full px-4 py-2 rounded bg-[#090607] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ac1ed6]"
                data-aos="fade-right"
              />
              <textarea
                placeholder="Tulis doa & harapan Anda..."
                value={doa}
                onChange={(e) => setDoa(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2 rounded bg-[#090607] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ac1ed6]"
                data-aos="fade-left"
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white font-semibold hover:opacity-90 transition"
                data-aos="fade-up"
              >
                Kirim Doa
              </button>
            </form>
          )}
        </div>

        {/* List Doa */}
        <div className="mt-8 space-y-4" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold text-[#c26e73]">
            💌 Doa dari Tamu
          </h3>
          <div className="max-h-96 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-[#ac1ed6] scrollbar-track-[#1a1819]">
  {listDoa.length === 0 ? (
    <p className="text-sm text-gray-400 italic">
      Belum ada doa yang masuk.
    </p>
  ) : (
    listDoa.map((item) => (
      <div
        key={item.id}
        className="bg-[#221f20] p-4 rounded shadow text-left"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-sm text-[#ac1ed6] font-semibold">{item.nama}</p>
        <p className="text-sm text-gray-300 italic mt-1">“{item.doa}”</p>
      </div>
    ))
  )}
</div>

        </div>
      </div>
    </section>
  );
}

export default DoaHarapanInteraktif;

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
    <>
      <div
        className="relative min-h-screen bg-[#090607] text-white font-montserrat overflow-hidden py-10 flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
      >
        {/* Header */}
        <h2 className="text-2xl font-bold text-[#ac1ed6]">✨ Doa & Harapan</h2>
        <p className="text-sm text-gray-300 italic">
          Kirimkan doa terbaik Anda untuk Aisyah Medina Azzahra. Setiap kata
          adalah berkah yang berarti bagi keluarga kami.
        </p>

        {/* Form */}
        <div className="bg-[#221f20] p-6 rounded-lg shadow space-y-4">
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
              />
              <textarea
                placeholder="Tulis doa & harapan Anda..."
                value={doa}
                onChange={(e) => setDoa(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2 rounded bg-[#090607] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ac1ed6]"
              />
              <button
                type="submit"
                className="w-full py-2 rounded bg-gradient-to-r from-[#ac1ed6] to-[#c26e73] text-white font-semibold hover:opacity-90 transition"
              >
                Kirim Doa
              </button>
            </form>
          )}
        </div>
      </div>
      <section className="bg-[#090607] text-white font-montserrat px-6 py-10 min-h-screen flex flex-col items-center justify-center text-center">
        <div className="max-w-xl w-full space-y-6">
          {/* List Doa */}
          <div
            className="mt-8 space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-lg font-semibold text-[#c26e73] text-center">
              💌 Doa dari Tamu
            </h3>

            <div className="relative w-full overflow-x-auto px-4 py-4 bg-[#1a1819] rounded-lg shadow-inner scrollbar-thin scrollbar-thumb-[#ac1ed6] scrollbar-track-[#090607]">
              <div className="flex gap-4 animate-marquee">
                {listDoa.length === 0 ? (
                  <p className="text-sm text-gray-400 italic text-center w-full">
                    Belum ada doa yang masuk.
                  </p>
                ) : (
                  listDoa.map((item) => (
                    <div
                      key={item.id}
                      className="min-w-[16rem] max-w-[16rem] bg-[#221f20] p-4 rounded-xl shadow text-left break-words flex-shrink-0"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-[#ac1ed6] flex items-center justify-center text-white text-xs font-bold">
                          {item.nama.charAt(0).toUpperCase()}
                        </div>
                        <p className="text-sm text-[#ac1ed6] font-semibold">
                          {item.nama}
                        </p>
                      </div>
                      <p className="text-sm text-gray-300 italic leading-relaxed">
                        “{item.doa}”
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DoaHarapanInteraktif;

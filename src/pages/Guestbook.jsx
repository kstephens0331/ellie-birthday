import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import supabase from "../supabase"; // Make sure this is set up as shown above

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);

  // Fetch and subscribe to guestbook entries
  useEffect(() => {
    const fetchEntries = async () => {
      const { data, error } = await supabase
        .from("guestbook")
        .select("*")
        .order("created", { ascending: false });

      if (!error) setEntries(data);
    };

    fetchEntries();

    // Real-time updates via Supabase Edge
    const subscription = supabase
      .channel("guestbook-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "guestbook" },
        (payload) => {
          setEntries((prev) => [payload.new, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    let photoUrl = null;

    if (photo) {
      const fileName = `${Date.now()}_${photo.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from("guestbook")
        .upload(fileName, photo);

      if (!uploadError) {
        const { data: urlData } = supabase.storage
          .from("guestbook")
          .getPublicUrl(fileName);
        photoUrl = urlData.publicUrl;
      }
    }

    await supabase.from("guestbook").insert([
      {
        name,
        message,
        photo: photoUrl,
      },
    ]);

    setName("");
    setMessage("");
    setPhoto(null);
  };

  return (
    <section className="relative min-h-screen bg-cream overflow-hidden px-4 py-12 font-serif text-coffee">
      {/* Form */}
      <div className="max-w-lg mx-auto mb-12 bg-white/80 backdrop-blur-md shadow-lg rounded-lg p-6">
        <h2 className="text-center text-2xl mb-4 font-semibold">Leave Ellie a Message ✍️</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-coffee rounded"
          />
          <textarea
            required
            placeholder="Write something sweet…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-coffee rounded resize-none"
            rows={3}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full text-sm text-coffee"
          />
          <button
            type="submit"
            className="w-full bg-coffee text-white py-2 rounded hover:bg-coffee/80"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Scrapbook-style entries */}
      <div className="relative w-full h-[1600px]">
        {entries.map((entry, index) => {
          const rotation = Math.floor(Math.random() * 12) - 6;
          const top = Math.floor(Math.random() * 1200) + 100;
          const left = Math.floor(Math.random() * 70) + 10;

          return (
            <motion.div
              key={entry.id || index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="absolute max-w-[250px] bg-white p-4 shadow-md rounded-lg"
              style={{
                top: `${top}px`,
                left: `${left}%`,
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {entry.photo && (
                <img
                  src={entry.photo}
                  alt="guest upload"
                  className="w-full h-auto rounded mb-2"
                />
              )}
              <p className="italic text-sm">"{entry.message}"</p>
              <p className="text-xs text-right mt-2 text-coffee/70">– {entry.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Guestbook;

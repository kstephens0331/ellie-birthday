import { useState, useRef } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null);
  const guestbookRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && message) {
      const newEntry = {
        name,
        message,
        photo: photo ? URL.createObjectURL(photo) : null,
      };
      setMessages([newEntry, ...messages]);
      setName("");
      setMessage("");
      setPhoto(null);
    }
  };

  const handleDownloadPDF = async () => {
    const canvas = await html2canvas(guestbookRef.current, {
      scale: 2,
      useCORS: true,
    });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("ellie-guestbook.pdf");
  };

  return (
    <section id="guestbook" className="bg-cream py-16 px-4 text-center font-serif relative z-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Leave Ellie a Message</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-coffee rounded"
        />
        <textarea
          placeholder="Write something sweet…"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border border-coffee rounded resize-none"
          rows={4}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhoto(e.target.files[0])}
          className="w-full text-sm text-coffee"
        />
        <button
          type="submit"
          className="bg-coffee text-white px-4 py-2 rounded hover:bg-coffee/80"
        >
          Submit
        </button>
      </form>

      {messages.length > 0 && (
        <motion.div
          ref={guestbookRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 text-coffee space-y-6 max-w-xl mx-auto"
        >
          {messages.slice(0, 3).map((msg, i) => (
            <motion.div
              key={i}
              className="bg-white/80 shadow-md rounded-lg p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
              {msg.photo && (
                <img
                  src={msg.photo}
                  alt="Guest upload"
                  className="w-full h-auto rounded mb-3"
                />
              )}
              <p className="italic">"{msg.message}"</p>
              <p className="mt-2 text-sm text-right">– {msg.name}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {messages.length > 0 && (
        <button
          onClick={handleDownloadPDF}
          className="mt-6 bg-coffee text-white px-4 py-2 rounded hover:bg-coffee/80"
        >
          Download Guestbook 📄
        </button>
      )}

      {/* Floating hearts */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 text-xl"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: -80 }}
            transition={{
              delay: i * 0.3,
              duration: 3,
              repeat: Infinity,
              repeatDelay: 5,
            }}
            style={{ left: `${Math.random() * 100}%` }}
          >
            ❤️
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Guestbook;

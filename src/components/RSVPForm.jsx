import { useState } from "react";
import SectionHeading from "./SectionHeading";

const RSVPForm = () => {
  const [flipped, setFlipped] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, guests, phone, note });
    setSubmitted(true);
    setTimeout(() => {
      setFlipped(false);
    }, 2000);
  };

  return (
    <section id="rsvp" className="py-16 px-6 text-center bg-cream font-serif relative z-10">
      <SectionHeading>RSVP</SectionHeading>

      <div
        className="relative w-full max-w-md mx-auto perspective"
        onClick={() => !flipped && setFlipped(true)}
      >
        <div
          className={`transition-transform duration-700 transform-style preserve-3d relative min-h-[450px] ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden p-6 bg-white/70 shadow-md rounded-lg flex items-center justify-center">
            <p className="text-lg cursor-pointer">
              Click to RSVP for Ellie Bean’s Birthday Brunch 🎉
            </p>
          </div>

          {/* Back - Form */}
          <div className="absolute w-full h-full rotate-y-180 backface-hidden p-6 bg-white shadow-lg rounded-lg overflow-auto">
            {submitted ? (
              <p className="text-green-600 font-semibold mt-20">RSVP submitted! Thank you 🥰</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-coffee rounded"
                />
                <input
                  type="number"
                  min={1}
                  required
                  placeholder="# of Guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-4 py-2 border border-coffee rounded"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (for text reminder)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-coffee rounded"
                />
                <textarea
                  placeholder="Message or allergies?"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full px-4 py-2 border border-coffee rounded resize-none"
                  rows={3}
                />
                <p className="text-sm text-coffee/70 italic">
                  We’ll text you a reminder 4 hours before brunch.
                </p>
                <button
                  type="submit"
                  className="w-full bg-coffee text-white px-4 py-2 rounded hover:bg-coffee/80"
                >
                  Submit RSVP
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVPForm;

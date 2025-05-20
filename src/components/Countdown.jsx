import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const Countdown = () => {
  const targetDate = new Date("2025-10-18T10:00:00");

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = targetDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.total <= 0) {
    return (
      <section className="text-center py-16">
      <SectionHeading>It’s Brunch Time! 🎉</SectionHeading>
      </section>
    );
  }

  return (
    <section className="bg-cream text-coffee py-20 px-4 text-center relative overflow-hidden">
      {/* Optional sparkle background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        <div className="w-full h-full bg-[url('/sparkles.svg')] bg-repeat" />
      </div>

      <SectionHeading>Mark your calendars</SectionHeading>
      <p className="text-2xl md:text-3xl font-serif font-semibold mb-8">The brunch begins in…</p>

      <div className="flex justify-center flex-wrap gap-4 md:gap-8">
        <TimeBox label="Days" value={timeLeft.days} />
        <TimeBox label="Hours" value={timeLeft.hours} />
        <TimeBox label="Minutes" value={timeLeft.minutes} />
        <TimeBox label="Seconds" value={timeLeft.seconds} />
      </div>
      <a
  href="/ellie-brunch.ics"
  download
  className="inline-block mt-6 bg-coffee text-white px-4 py-2 rounded hover:bg-coffee/80 transition"
>
  Add to Apple Calendar
</a>
        <a
          href="https://www.google.com/calendar/render?action=TEMPLATE&text=Ellie+Bean+Brunch+Birthday&dates=20251018T150000Z/20251018T180000Z&details=Join+us+to+celebrate+Ellie+Bean's+first+birthday!&location=2378+Strong+Horse+Dr+Conroe+Texas"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-coffee text-white px-4 py-2 rounded hover:bg-coffee/70 transition"
        >
          Add to Google Calendar
        </a>
    </section>
  );
};

const TimeBox = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
   className="bg-white/60 backdrop-blur-md shadow-md rounded-lg p-4 w-20 sm:w-24 md:w-28"

  >
    <div className="text-3xl md:text-4xl font-bold">{String(value).padStart(2, "0")}</div>
    <div className="text-xs md:text-sm mt-1 uppercase tracking-wide">{label}</div>
  </motion.div>
);


export default Countdown;

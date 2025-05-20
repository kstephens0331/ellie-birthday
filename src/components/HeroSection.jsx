import { motion } from "framer-motion";
import inviteImage from "../assets/images/invite.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative bg-cream flex flex-col items-center justify-center text-center px-4 py-16 md:py-20 overflow-hidden">

      {/* Falling Emojis */}
      {[...Array(12)].map((_, i) => {
        const emojis = ["☕", "🥐", "🫘"];
        const emoji = emojis[i % emojis.length];
        const left = Math.random() * 100;
        const delay = (Math.random() * 8).toFixed(2);
        const size = Math.random() * 0.75 + 0.75;

        return (
          <span
            key={i}
            className="falling-emoji"
            style={{
              left: `${left}%`,
              animationDelay: `${delay}s`,
              fontSize: `${size}rem`,
              top: '-5%',
            }}
          >
            {emoji}
          </span>
        );
      })}

      {/* Optional floating emoji placeholders */}
      <div className="absolute top-6 left-6 animate-pulse text-[24px]">☕</div>
      <div className="absolute top-10 right-6 animate-bounce text-[20px]">🥐</div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl md:text-4xl font-script text-coffee mb-1"
      >
        A tini bit older
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
  className="text-3xl md:text-5xl font-script shimmer-text"
>
  Ellie Bean
</motion.h2>

      <p className="mt-2 text-base md:text-lg font-serif text-coffee">
        Join us to celebrate her 1st Birthday Brunch
      </p>

      {/* Placeholder image area */}
      <div className="flex flex-col items-center mt-10">
  <motion.img
    src={inviteImage}
    alt="Ellie's Birthday Invite"
    className="w-full max-w-md rounded shadow-md"
    initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  />
</div>
    </section>
  );
};

export default HeroSection;

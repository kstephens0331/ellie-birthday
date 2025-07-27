import { motion } from "framer-motion";
import inviteImage from "../assets/images/invite.png";
import bean from "../assets/images/IMG_2383.jpeg"

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

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-script text-coffee mb-1"
      >
        Ellie Bean
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
  className="text-2xl md:text-4xl font-script text-coffee mb-1"
>
  Is
</motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
  className="text-2xl md:text-4xl font-script text-coffee mb-1"
>
  A Tini Bit Older
</motion.h1>

      <p className="mt-2 text-base md:text-lg font-serif text-coffee">
        Join us to celebrate her 1st Birthday Brunch
      </p>

      {/* Placeholder image area */}
<div className="flex flex-col items-center mt-10">
  <div className="flex flex-row justify-center w-full max-w-4xl gap-6">
    <motion.img
      src={inviteImage}
      alt="Bean Image Left"
      className="w-1/2 rounded shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    <motion.img
      src={bean}
      alt="Bean Image Right"
      className="w-1/2 rounded shadow-md"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
  </div>
</div>
    </section>
  );
};

export default HeroSection;

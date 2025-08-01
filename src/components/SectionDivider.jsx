import { motion } from "framer-motion";
import swirl from "../assets/images/latte-divider.png";

const SectionDivider = () => {
  return (
    <motion.div
      className="w-full py-6 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.img
        src={swirl}
        alt="Latte swirl divider"
        className="w-full max-w-6xl h-auto opacity-50"
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default SectionDivider;

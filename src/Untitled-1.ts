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
      <img
        src={swirl}
        alt="Latte swirl divider"
        className="max-w-xs md:max-w-sm opacity-50"
      />
    </motion.div>
  );
};

export default SectionDivider;

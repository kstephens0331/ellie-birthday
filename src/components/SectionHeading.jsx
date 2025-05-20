import { motion } from "framer-motion";

const SectionHeading = ({ children }) => {
  return (
    <div className="mb-8">
      <motion.div
        className="h-[2px] w-16 md:w-24 bg-[#A9745F] mx-auto mb-4"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{ transformOrigin: "left" }}
      />
      <h2 className="text-2xl md:text-3xl font-semibold text-coffee">{children}</h2>
    </div>
  );
};

export default SectionHeading;

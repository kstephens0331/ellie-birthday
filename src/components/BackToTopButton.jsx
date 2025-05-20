import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 right-4 z-[9999] bg-[#A9745F] text-white text-sm px-4 py-2 rounded-full shadow-lg hover:bg-[#8a5d46] transition md:text-base"
    >
      ↑ Back to Top
    </button>
  ) : null;
};

export default BackToTopButton;

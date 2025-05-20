const StickyRSVPButton = () => {
  return (
    <a
      href="#rsvp"
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[9999] bg-coffee text-white text-sm px-6 py-3 rounded-full shadow-lg hover:bg-coffee/80 transition md:hidden"
    >
      RSVP Now ☕
    </a>
  );
};

export default StickyRSVPButton;

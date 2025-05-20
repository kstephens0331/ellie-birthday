const Footer = () => {
  return (
    <footer className="bg-cream text-coffee text-center py-12 px-4 font-serif relative z-10 border-t border-coffee/10">
      <p className="text-xl md:text-2xl font-script mb-4">
        Thank you for being part of Ellie Bean’s special day
        <span className="text-[#A9745F] text-2xl md:text-3xl align-middle ml-1">♥</span>
      </p>

      <p className="text-sm text-coffee/70 italic">
        Built with love by Mom & Dad
      </p>

      <p className="text-xs text-coffee/50 mt-2">
        Site lovingly developed by <span className="font-semibold">StephensCode LLC</span>
      </p>
    </footer>
  );
};

export default Footer;
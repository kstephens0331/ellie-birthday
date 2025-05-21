import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-[9999] bg-cream/80 backdrop-blur-md shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center text-coffee font-serif">
        <div className="text-xl font-script">Ellie Bean</div>
        <ul className="flex gap-6 text-sm md:text-base">
  <li><HashLink smooth to="/#hero" className="hover:underline">Home</HashLink></li>
  <li><HashLink smooth to="/#details" className="hover:underline">Details</HashLink></li>
  <li><HashLink smooth to="/#rsvp" className="hover:underline">RSVP</HashLink></li>
  <li><Link to="/guestbook" className="hover:underline">Guestbook </Link></li>
  <li><Link to="/gallery" className="hover:underline">Gallery </Link></li>
  <li>
    <a
      href="https://www.amazon.com/registries/gl/guest-view/YMLHHKKO2KA9"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline text-[#A9745F] font-semibold"
    >
      Gifts 
    </a>
  </li>
</ul>
      </nav>
    </header>
  );
};

export default Navbar;

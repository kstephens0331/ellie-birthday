import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FallingEmojis from "./components/FallingEmojis";
import Navbar from "./components/Navbar";
import StickyRSVPButton from "./components/StickyRSVPButton";
import { HelmetProvider } from "react-helmet-async";
import ScrollProgressBar from "./components/ScrollProgressBar";
import BackToTopButton from "./components/BackToTopButton";
import ShareButton from "./components/ShareButton";import Guestbook from "./pages/Guestbook";
import Gallery from "./pages/Gallery";

function App() {
  return (
  <HelmetProvider>
    <ScrollProgressBar />
    <BackToTopButton />
    <ShareButton />
    <Router>
      <FallingEmojis />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <StickyRSVPButton />
    </Router>
  </HelmetProvider>
  );
}

export default App;

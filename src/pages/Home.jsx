import HeroSection from "../components/HeroSection";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import RSVPForm from "../components/RSVPForm";
import FadeInWrapper from "../components/FadeInWrapper";
import Footer from "../components/Footer";
import SectionDivider from "../components/SectionDivider";
import { Helmet } from "react-helmet-async";


const Home = () => {
  return (
    
    <>

<Helmet>
  <title>Ellie Bean’s 1st Birthday Brunch</title>
  <meta name="description" content="A tini bit older ☕ A lot more loved. Join us to celebrate Ellie turning one with brunch, smiles, and sweetness." />

  {/* Open Graph for Facebook + iMessage */}
  <meta property="og:title" content="Ellie Bean’s 1st Birthday Brunch" />
  <meta property="og:description" content="A tini bit older ☕ A lot more loved. Tap to see the invite!" />
  <meta property="og:image" content="https://yourdomain.com/invite.png" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourdomain.com/" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Ellie Bean’s 1st Birthday Brunch" />
  <meta name="twitter:description" content="Tap to RSVP and see the brunch invite ☕" />
  <meta name="twitter:image" content="https://yourdomain.com/invite.png" />
</Helmet>

      <FadeInWrapper>
  <HeroSection />
</FadeInWrapper>

<SectionDivider />

<FadeInWrapper delay={0.1}>
  <Countdown />
</FadeInWrapper>

<SectionDivider />

<FadeInWrapper delay={0.2}>
  <EventDetails />
</FadeInWrapper>

<SectionDivider />

<FadeInWrapper delay={0.3}>
  <RSVPForm />
</FadeInWrapper>

<SectionDivider />

<FadeInWrapper delay={0.5}>
  <Footer />
</FadeInWrapper>
    </>
  );
};

export default Home;

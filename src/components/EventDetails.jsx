const EventDetails = () => {
  return (
    <section
  id="details"
  className="bg-cream text-coffee py-12 px-6 md:px-12 text-center font-serif relative z-10"
>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">You're Invited!</h2>

      <div className="space-y-4 text-lg md:text-xl max-w-xl mx-auto">
        <p>
          <strong>Date:</strong> Saturday, October 18, 2025
        </p>
        <p>
          <strong>Time:</strong> 10:00 AM – 1:00 PM
        </p>
        <p>
          <strong>Location:</strong><br />
          2378 Strong Horse Dr<br />
          Conroe, Texas 77301
        </p>
        <p>
          <strong>RSVP:</strong> Text Aisha at <a href="sms:5129983363" className="underline hover:text-coffee/70">512-998-3363</a>
        </p>
        <a
  href="https://www.amazon.com/registries/gl/guest-view/YMLHHKKO2KA9"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 bg-coffee text-white px-4 py-2 rounded hover:bg-coffee/80 transition"
>
  View Gift Registry 🎁
</a>
      </div>
    </section>
  );
};

export default EventDetails;

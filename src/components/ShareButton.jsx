import { useState } from "react";

const ShareButton = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Ellie Bean’s 1st Birthday Brunch",
          text: "Come celebrate Ellie turning one! ☕🥐",
          url: window.location.href,
        });
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (err) {
        console.error("Share canceled or failed:", err);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="fixed bottom-4 right-4 z-[9999] bg-[#A9745F] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#8a5d46] transition md:text-base"
      >
        Share 🥐
      </button>

      {showToast && (
        <div className="fixed bottom-20 right-4 bg-white text-coffee border border-coffee/20 px-4 py-2 rounded shadow-md z-[9999] animate-fadeIn">
          Thanks for sharing! ☕
        </div>
      )}
    </>
  );
};

export default ShareButton;

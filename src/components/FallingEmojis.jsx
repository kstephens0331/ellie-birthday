const FallingEmojis = () => {
  const emojis = ["☕", "🥐", "🫘"];
  const emojiElements = [...Array(20)].map((_, i) => {
    const emoji = emojis[i % emojis.length];
    const left = Math.random() * 100;
    const delay = (Math.random() * 8).toFixed(2);
    const size = Math.random() * 0.75 + 0.75;

    return (
      <span
        key={i}
        className="falling-emoji"
        style={{
          left: `${left}%`,
          animationDelay: `${delay}s`,
          fontSize: `${size}rem`,
        }}
      >
        {emoji}
      </span>
    );
  });

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none overflow-visible">
      {emojiElements}
    </div>
  );
};

export default FallingEmojis;

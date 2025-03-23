import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";

const Winner = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  // Party popper animation
  const popperAnimation = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { tension: 200, friction: 12 },
  });

  // Stop confetti after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f6e9df] to-[#dec0ac] relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && <Confetti />}

      {/* Podium */}
      <div className="relative w-full max-w-4xl flex items-end justify-center">
        {/* Second Place (Left) */}
        <div className="flex flex-col items-center mr-8">
          <img
            src="https://picsum.photos/150/150" // Replace with second-place NFT
            alt="Second Place"
            className="w-24 h-24 rounded-full border-4 border-[#b8987c] mb-4"
          />
          <img
            src="/podium-left.png" // Replace with your left podium image
            alt="Second Place Podium"
            className="w-32"
          />
        </div>

        {/* Winner (Center) */}
        <div className="flex flex-col items-center">
          <img
            src="https://picsum.photos/200/200" // Replace with winner NFT
            alt="Winner"
            className="w-32 h-32 rounded-full border-4 border-[#b8987c] mb-4"
          />
          <img
            src="/podium-center.png" // Replace with your center podium image
            alt="Winner Podium"
            className="w-48"
          />
        </div>

        {/* Third Place (Right) */}
        <div className="flex flex-col items-center ml-8">
          <img
            src="https://picsum.photos/150/150" // Replace with third-place NFT
            alt="Third Place"
            className="w-24 h-24 rounded-full border-4 border-[#b8987c] mb-4"
          />
          <img
            src="/podium-right.png" // Replace with your right podium image
            alt="Third Place Podium"
            className="w-32"
          />
        </div>
      </div>

      {/* Party Popper Animation */}
      <animated.div
        style={popperAnimation}
        className="absolute top-0 left-1/2 transform -translate-x-1/2"
      >
        <img
          src="/party-popper.png" // Replace with your party popper image
          alt="Party Popper"
          className="w-24 h-24"
        />
      </animated.div>

      {/* Celebration Text */}
      <h1 className="mt-8 text-4xl font-bold text-[#4a3b3b]">Congratulations to the Winners! 🎉</h1>
    </div>
  );
};

export default Winner;
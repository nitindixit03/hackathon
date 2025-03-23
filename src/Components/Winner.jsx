import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";
import { getTopThree } from "../utils/db.js"; // Import the getTopThree function

const Winner = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [topThree, setTopThree] = useState([]); // State to store top three entries

  // Fetch top three entries when the component mounts
  useEffect(() => {
    const fetchTopThree = async () => {
      const data = await getTopThree();
      setTopThree(data);
    };

    fetchTopThree();
  }, []);

  // Party popper animation
  const popperAnimation = useSpring({
    from: { transform: "scale(0)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { tension: 200, friction: 12 },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f6e9df] to-[#dec0ac] relative overflow-hidden">
      {/* Infinite Confetti */}
      {showConfetti && <Confetti />}

      {/* Podium */}
      <div className="relative w-full max-w-4xl flex items-end justify-center">
        {/* Second Place (Left) */}
        <div className="flex flex-col items-center mr-8">
          {topThree[1] && (
            <>
              <img
                src={topThree[1].filePath} // Use the filePath from the database
                alt="Second Place"
                className="w-24 h-24 rounded-full border-4 border-[#b8987c] mb-4"
              />
              <div className="bg-[#c0c0c0] w-32 h-48 flex items-end justify-center rounded-t-lg shadow-lg">
                <span className="text-white text-2xl font-bold mb-4">2nd</span>
              </div>
            </>
          )}
        </div>

        {/* Winner (Center) */}
        <div className="flex flex-col items-center">
          {topThree[0] && (
            <>
              <img
                src={topThree[0].filePath} // Use the filePath from the database
                alt="Winner"
                className="w-32 h-32 rounded-full border-4 border-[#b8987c] mb-4"
              />
              <div className="bg-[#ffd700] w-48 h-64 flex items-end justify-center rounded-t-lg shadow-lg">
                <span className="text-white text-2xl font-bold mb-4">1st</span>
              </div>
            </>
          )}
        </div>

        {/* Third Place (Right) */}
        <div className="flex flex-col items-center ml-8">
          {topThree[2] && (
            <>
              <img
                src={topThree[2].filePath} // Use the filePath from the database
                alt="Third Place"
                className="w-24 h-24 rounded-full border-4 border-[#b8987c] mb-4"
              />
              <div className="bg-[#cd7f32] w-32 h-32 flex items-end justify-center rounded-t-lg shadow-lg">
                <span className="text-white text-2xl font-bold mb-4">3rd</span>
              </div>
            </>
          )}
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
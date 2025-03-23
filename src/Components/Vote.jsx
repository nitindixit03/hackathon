import React, { useState } from "react";

const Vote = () => {
  const [votedImage, setVotedImage] = useState(null);

  // Array of random image URLs (replace these with your own images)
  const images = [
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/500",
    "https://picsum.photos/300/600",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/450",
    "https://picsum.photos/300/550",
  ];

  const handleVote = (index) => {
    setVotedImage(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gradient-to-br from-[#f1b8a7] to-[#dec0ac]">
      <h1 className="text-4xl font-bold text-[#4a3b3b] mb-8">
        Vote for Your Favorite Piece!
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg border-4 border-[#b8987c] h-64 cursor-pointer transition-all duration-300 ${
              votedImage !== null && votedImage !== index ? "filter blur-sm" : ""
            }`}
          >
            {/* Image */}
            <img
              src={image}
              alt={`Random ${index}`}
              className="w-full h-full object-cover"
            />

            {/* Vote Button */}
            {votedImage === null && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button
                  className="px-6 py-2 bg-[#f1b8a7] text-white rounded-lg shadow-md hover:bg-[#45a049] transition-all"
                  onClick={() => handleVote(index)}
                >
                  Vote
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Voting Confirmation */}
      {votedImage !== null && (
        <div className="mt-8 text-2xl font-bold text-[#4a3b3b]">
          Thank you for voting! 🎉
        </div>
      )}
    </div>
  );
};

export default Vote;
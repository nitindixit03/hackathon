import React, { useState, useEffect } from 'react';
import { vote, getAllTheVotes } from '../utils/db.js';

const Vote = () => {
    const [votedImage, setVotedImage] = useState(null);
    const [images, setImages] = useState([]);
    const [votes, setVotes] = useState([]); // Use an array for votes

    // Load images
    useEffect(() => {
        const importImages = async () => {
            const imageFiles = import.meta.glob('../../backend/saved-files/*.{jpg,jpeg,png,gif}');
            const imageUrls = await Promise.all(
                Object.keys(imageFiles).map(async (path) => {
                    const module = await imageFiles[path]();
                    return module.default;
                })
            );
            setImages(imageUrls);
        };

        importImages();
    }, []);

    // Fetch votes from the database
    const fetchVotes = async () => {
        const votesData = await getAllTheVotes();
        if (votesData) {
            // Create an array where the index corresponds to the image index
            const votesArray = images.map((_, index) => {
                const voteEntry = votesData.find((entry) => entry.id == index);
                console.log(voteEntry);
                return voteEntry ? voteEntry.votes : 0;
            });
            setVotes(votesArray);
        }
    };

    // Fetch votes when the component mounts
    useEffect(() => {
        fetchVotes();
    }, [images]); // Re-fetch votes when images are loaded

    // Handle voting
    const handleVote = async (index) => {
        setVotedImage(index);
        const filePath = images[index]; // Get the file path of the image
        await vote(index, filePath); // Update the vote in the database with filePath

        // Fetch the latest votes after voting
        await fetchVotes();
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
                            votedImage !== null && votedImage !== index ? 'filter blur-sm' : ''
                        }`}
                    >
                        {/* Image */}
                        <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            className="w-full h-full object-cover"
                        />

                        {/* Vote Count */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2">
                            Votes: {votes[index] || 0}
                        </div>

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
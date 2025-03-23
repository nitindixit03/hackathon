import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const HomePage = () => {

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showTerms, setShowTerms] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [hoveredImage, setHoveredImage] = useState(null);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Array of random image URLs (replace these with your own images)
  const images = [
    "https://picsum.photos/300/400",
    "https://picsum.photos/300/500",
    "https://picsum.photos/300/600",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/450",
    "https://picsum.photos/300/550",
  ];

  // Event descriptions (replace with actual event data)
  const eventDescriptions = [
    "Event 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Event 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Event 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    "Event 4: Duis aute irure dolor in reprehenderit in voluptate velit.",
    "Event 5: Excepteur sint occaecat cupidatat non proident.",
    "Event 6: Sunt in culpa qui officia deserunt mollit anim id est laborum.",
  ];

  const handleViewMore = (index) => {
    setSelectedEvent(index);
  };

  const handleJoinAsAudience = () => {
    setShowTerms(true);
  };

  const handleJoinAsViewer = () => {
    if (acceptedTerms) {
      alert("Joined as Viewer!");
      setShowTerms(false);
      setSelectedEvent(null);
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  const handleJoinAsInvestor = () => {
    if (acceptedTerms) {
      alert("Joined as Investor!");
      setShowTerms(false);
      setSelectedEvent(null);
    } else {
      alert("Please accept the terms and conditions.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f6e9df] to-[#dec0ac] min-h-screen flex p-5">
      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-[25%] bg-[#fff2e5] p-5 shadow-lg border-r-4 border-[#b8987c] backdrop-blur-sm rounded-tr-3xl rounded-br-3xl z-50"
      >
        {/* Sidebar Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-[#f1b8a7] border-4 border-[#b8987c] shadow-md hover:shadow-lg transition-all hover:scale-110"
        >
          <FaArrowLeft size={20} />
        </button>
        {/* Sidebar Content */}
        <div className="mt-16 text-[#4a3b3b] font-semibold">📜 Sidebar Content</div>
      </motion.div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-[25%]" : "ml-0"
        } flex justify-center items-center`}
      >
        {/* Sidebar Toggle Button (Only Shows When Sidebar is Closed) */}
        {!isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-5 left-5 w-10 h-10 flex items-center justify-center rounded-full bg-[#f1b8a7] border-4 border-[#b8987c] shadow-md hover:shadow-lg transition-all hover:scale-110 z-50"
          >
            <FaArrowRight size={20} />
          </button>
        )}

        {/* Centered Box */}
        <div className="w-[100%] bg-[#f1b8a7] p-8 rounded-lg shadow-2xl border-4 border-[#b8987c]">
          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg border-4 border-[#b8987c] h-64 cursor-pointer"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Random ${index}`}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    hoveredImage === index ? "scale-110" : "scale-100"
                  }`}
                />

                {/* Hover Button */}
                {hoveredImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <button
                      className="px-5 py-2 bg-[#f1b8a7] text-white rounded-lg shadow-md hover:bg-[#a28c7b] transition-all hover:scale-105"
                      onClick={() => handleViewMore(index)}
                    >
                      View More
                    </button>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Popup */}
      <AnimatePresence>
        {selectedEvent !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-8 rounded-lg w-[500px] shadow-2xl border-4 border-[#b8987c]"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#4a3b3b]">Event Details</h2>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="bg-transparent border-none cursor-pointer hover:scale-110 transition-all"
                >
                  <FaTimes size={24} className="text-[#4a3b3b]" />
                </button>
              </div>
              <p className="text-[#4a3b3b] mb-6">{eventDescriptions[selectedEvent]}</p>
              <div className="flex gap-4">
                <button
                  className="px-6 py-2 bg-[#2196f3] text-white rounded-lg shadow-md hover:bg-[#1e88e5] transition-all hover:scale-105"
                  onClick={handleJoinAsAudience}
                >
                  Join as Audience
                </button>
<<<<<<< HEAD
                <button
=======
                <button onClick={() =>navigate("/game")}
>>>>>>> dfb3405b7783366ab20f68429619e864e7376be2
                  className="px-6 py-2 bg-[#4caf50] text-white rounded-lg shadow-md hover:bg-[#45a049] transition-all hover:scale-105"
                >
                  Join as Creator
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Terms and Conditions Popup */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white p-8 rounded-lg w-[500px] shadow-2xl border-4 border-[#b8987c]"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#4a3b3b]">Terms and Conditions</h2>
                <button
                  onClick={() => setShowTerms(false)}
                  className="bg-transparent border-none cursor-pointer hover:scale-110 transition-all"
                >
                  <FaTimes size={24} className="text-[#4a3b3b]" />
                </button>
              </div>
              <p className="text-[#4a3b3b] mb-6">
                By joining this event, you agree to the following terms and conditions:
                <ul className="list-disc pl-6 mt-2">
                  <li>You must be at least 18 years old.</li>
                  <li>You agree to follow all event rules.</li>
<<<<<<< HEAD
                  <li>You understand that your data may be collected.</li>
=======
                  <li>If You tend to leave event in middle your account will be suspended.</li>
>>>>>>> dfb3405b7783366ab20f68429619e864e7376be2
                </ul>
              </p>
              <div className="mb-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="w-5 h-5"
                  />
                  <span className="text-[#4a3b3b]">I accept the terms and conditions.</span>
                </label>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-6 py-2 bg-[#2196f3] text-white rounded-lg shadow-md hover:bg-[#1e88e5] transition-all hover:scale-105"
                  onClick={handleJoinAsViewer}
                >
                  Join as Viewer
                </button>
                <button
                  className="px-6 py-2 bg-[#4caf50] text-white rounded-lg shadow-md hover:bg-[#45a049] transition-all hover:scale-105"
<<<<<<< HEAD
                  onClick={handleJoinAsInvestor}
=======
                  // onClick={handleJoinAsInvestor}
                  onClick={() => navigate("/voting")}
>>>>>>> dfb3405b7783366ab20f68429619e864e7376be2
                >
                  Join as Investor
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;
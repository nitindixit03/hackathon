import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Masonry from "react-masonry-css";
import Pwn from "../assets/Pwn.png"; 

const images = [
  "https://picsum.photos/300/400",
  "https://picsum.photos/300/500",
  "https://picsum.photos/300/600",
  "https://picsum.photos/300/300",
  "https://picsum.photos/300/450",
  "https://picsum.photos/300/550",
];

const Marketplace = ({ isSidebarOpen }) => {
  const breakpointColumns = {
    default: 4,
    1024: 3,
    768: 2,
    480: 1,
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isSidebarOpen ? "ml-[30%] w-[70%]" : "w-full"
      } p-5 pt-17 md:pt-30 lg:pt-25`}
    >
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-8"
        columnClassName="masonry-column"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden bg-[#f0e1d6] border-4 border-[#d9b6a3] 
                rounded-[25px] shadow-[10px_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[10px_10px_40px_rgba(0,0,0,0.2)] 
                transition-all duration-500 ease-in-out p-2 mt-6"
          >
            <img
              src={src}
              alt={`img-${index}`}
              className="w-full rounded-[20px] transition-all duration-500 ease-in-out 
                group-hover:scale-110 group-hover:rotate-2 group-hover:brightness-90"
            />
          
              <div
                className={`absolute inset-0 flex items-center ${
                  isSidebarOpen ? "justify-center gap-6" : "justify-between"
                } p-6 opacity-0 
                group-hover:opacity-100 transition-all duration-500 ease-in-out 
                transform group-hover:translate-y-0 translate-y-full backdrop-blur-lg rounded-[20px]`}
              >
                <Button
                  className="flex items-center justify-center px-6 py-3 bg-[#f1b8a7] 
                 text-black font-extrabold text-lg rounded-full 
                  shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 
                  transition-all duration-300"
                >
                  👀 View
                </Button>
                <Button
                  className="flex items-center justify-center px-6 py-3 bg-[#a28c7b] 
                  text-white font-extrabold text-lg rounded-full 
                  shadow-lg hover:bg-[#f1b8a7] hover:text-black hover:scale-110 
                  active:scale-95 transition-all duration-300"
                >
                  🛒 Buy
                </Button>
              </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen overflow-y-auto bg-gradient-to-br from-[#f6e9df] to-[#dec0ac] relative">
      {/* Responsive NFT Title */}
      <h1
        className={`absolute top-4 transform -translate-x-1/2 text-3xl sm:text-5xl md:text-7xl 
            font-extrabold text-[#4a3b3b] drop-shadow-lg tracking-widest 
            px-4 sm:px-0 whitespace-nowrap transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "left-[65%]" : "left-1/2"
            }`}
      >
        <img
          src={Pwn}
          alt="Pwn Logo"
          className="inline-block w-14 h-16 md:w-20 md:h-20 lg:w-22 lg:h-26 mr-2 animate-bounce"
        />
        <span className="text-[#8A575A] font-comic">MARKETPLACE</span>
      </h1>

      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-[30%] bg-[#fff2e5]/70 
          text-black p-5 shadow-xl z-50 transition-all duration-300 
          border-r-4 border-[#b8987c] backdrop-filter backdrop-blur-lg rounded-tr-[30px] rounded-br-[30px]`}
      >
        <Button
          onClick={toggleSidebar}
          className="absolute top-7 left-8 sm:left-[70%] md:left-[70%] lg:left-[82%] w-14 h-14 flex items-center justify-center 
            rounded-full shadow-lg hover:shadow-xl transition-all duration-300 
            bg-[#f1b8a7] text-black border-4 border-[#b8987c] hover:bg-[#d89c8c]"
        >
          <FaArrowLeft size={30} />
        </Button>
        <div className="text-[#4a3b3b] mt-14 font-semibold">📜 Sidebar Content</div>
      </motion.div>

      {/* Marketplace */}
      <div className="flex-1">
        {/* Sidebar Toggle Button (Only Shows When Sidebar is Closed) */}
        {!isSidebarOpen && (
          <Button
            onClick={toggleSidebar}
            className="absolute top-7 left-[1.7%] w-18 h-12 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl 
            transition-all duration-100 bg-[#f1b8a7] text-black border-4 border-[#b8987c]
            active:scale-90 active:bg-[#d89c8c] active:shadow-md"
          >
            <FaArrowRight size={30} />
          </Button>
        )}

        <Marketplace isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
}

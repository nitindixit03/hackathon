import React from "react";
import { motion } from "framer-motion";
import Coin from "../assets/Coin.png"; 

export default function Rotating3DCoin() {
  return (
    <div className="flex justify-center items-center h-screen  bg-transparent.">
      <motion.div
        className="relative w-30 h-30 rounded-full"
        animate={{ rotateY: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          perspective: "1000px", 
        }}
      >
        {/* Coin Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat rounded-full z-10"
          style={{ backgroundImage: `url(${Coin})` }} 
        ></div>


        <div
          className="absolute inset-0 flex justify-center items-center 
          rounded-full rotateY-180 backface-hidden z-20"
        >
          <img
            src={Coin} 
            alt="Coin Back"
            className="w-full h-full object-cover rounded-full" 
          />
        </div>
      </motion.div>
    </div>
  );
}
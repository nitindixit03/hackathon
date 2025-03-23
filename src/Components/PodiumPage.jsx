import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import winner from '../assets/winner.webp';

export default function PodiumPage() {
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    // Show the effect immediately
    setShowEffect(true);

    // Toggle the effect every 5 seconds to restart the animation
    const interval = setInterval(() => {
      setShowEffect((prev) => !prev);
    }, 5000); // Adjust the interval as needed

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
  };

  const pulsateVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror',
      },
    },
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-yellow-300 to-orange-500 relative overflow-hidden">
      {/* Continuous Confetti */}
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={500}
        recycle={true} // Make confetti continuous
      />

      {/* Background Animation (Floating Stars) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* AnimatePresence with continuous restart */}
      <AnimatePresence>
        {showEffect && (
          <motion.div
            className="w-full max-w-4xl p-4 rounded-2xl bg-white shadow-2xl relative flex flex-col items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* Pulsating Image */}
            <motion.img
              src={winner}
              alt="Podium"
              className="w-full h-auto mt-40"
              style={{ maxWidth: '1200px', height: 'auto' }}
              variants={pulsateVariants}
              initial="initial"
              animate="animate"
            />

            {/* Animated Text */}
            <motion.h1
              className="text-6xl font-bold text-orange-500 mt-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, type: 'spring', stiffness: 120 }}
            >
              Congratulations!
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
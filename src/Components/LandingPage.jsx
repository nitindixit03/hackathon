import { useRef, useEffect, useState } from "react";
import Pwn from "../assets/Pwn.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const landingSectionRef = useRef(null);

  // Typewriter animation logic
  const [text, setText] = useState("PAWN");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const words = ["PAWN", "$PWN"];
    let currentWordIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        // Delete characters
        setText(currentWord.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        // Type characters
        setText(currentWord.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      // Switch between typing and deleting
      if (!isDeleting && currentCharIndex === currentWord.length) {
        setTimeout(() => (isDeleting = true), 1000); // Pause at the end of the word
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length; // Move to the next word
      }

      setTimeout(type, isDeleting ? 100 : 200); // Adjust typing speed
    };

    type();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-[#f1b8a7] overflow-x-hidden">
      {/* Landing Page Section */}
      <section
        ref={landingSectionRef}
        className="flex-1 flex items-center justify-between p-10 relative"
      >
        {/* Left Side - Text */}
        <div className="w-1/2 flex justify-center">
          <div className="max-w-md text-center">
            <h1 className="text-8xl font-bold text-[#4a3b3b] mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
              Welcome to{" "}
              <span className="inline-block relative">
                <span className="text-[#ffcc66]">{text}</span>
                <span className="absolute bottom-0 right-0 w-3 h-20 bg-[#4a3b3b] animate-blink"></span>
              </span>
            </h1>
            <p className="text-xl text-[#4a3b3b]">
              A revolutionary platform for trading and exchanging assets securely.
            </p>
          </div>
        </div>

        {/* Right Side - Pwn Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src={Pwn}
            alt="Right Image"
            className="w-full h-auto object-contain animate-float drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)]"
          />
        </div>

        {/* Continue Button */}
        <div className="absolute bottom-20 w-full flex justify-center">
          <button
            onClick={() => navigate("/home")}
            className="bg-[#efc078] text-white px-6 py-3 rounded-lg text-lg shadow-lg border-2 border-[#4a3b3b] hover:bg-[#e0a895] transition-colors"
          >
            Continue
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full flex justify-center pb-4 bg-[#f1b8a7]">
        {/* Add any footer content here if needed */}
      </footer>

      {/* Floating Animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.7s infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
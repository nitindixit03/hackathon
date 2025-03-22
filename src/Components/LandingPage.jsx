import { useRef } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import Pwn from "../assets/Pwn.png"; 

const LandingPage = () => {
  const aboutSectionRef = useRef(null);
  const landingSectionRef = useRef(null);

  const scrollToAbout = () => aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
  const scrollToTop = () => landingSectionRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="h-screen flex flex-col bg-[#f1b8a7]">
      {/* Landing Page Section */}
      <section
        ref={landingSectionRef}
        className="flex-1 flex items-center justify-between p-10 relative"
      >
        <div className="w-1/2 flex justify-center">
          <img
            src="A:/sample/hackathon/src/components/image1.png"
            alt="Left Image"
            className="w-64 h-64 object-contain"
          />
        </div>

        <div className="w-1/2 flex justify-center">
        <img
  src={Pwn}
  alt="Right Image"
  className="w-full h-auto object-contain"
/>

        </div>

        <div className="absolute bottom-4 w-full flex justify-center">
          <button onClick={scrollToAbout} className="text-gray-700">
            <ArrowDown size={40} />
          </button>
        </div>
      </section>

      <div className="flex justify-center pb-4">
        <button
          onClick={scrollToAbout}
          className="bg-[#f1b8a7] text-white px-6 py-3 rounded-lg text-lg"
        >
          Continue
        </button>
      </div>

      {/* About Project Section */}
      <section
        ref={aboutSectionRef}
        className="min-h-screen flex items-center justify-center p-10 bg-gray-100"
      >
        <h2 className="text-4xl font-semibold">About the Project</h2>
      </section>

      {/* Up Arrow in Footer */}
      <footer className="w-full flex justify-center pb-4 bg-gray-100">
        <button onClick={scrollToTop} className="text-gray-700">
          <ArrowUp size={40} />
        </button>
      </footer>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;

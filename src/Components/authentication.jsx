import { useActiveAccount } from "thirdweb/react";
import Login from "./ui/connectBUtton.jsx";
import { useEffect, useRef } from "react";
import { socket } from "../sockets/index.js";
import html2canvas from "html2canvas";

export default function Authenticate() {
  const account = useActiveAccount();
  const streamRef = useRef(null);

  // Start streaming logic
  const startStreaming = () => {
    if (streamRef.current) return;

    const streamFrame = async () => {
      if (!document.hidden) {
        try {
          // Capture the entire page including iframe
          const canvas = await html2canvas(document.body, {
            backgroundColor: null,
            logging: false,
            useCORS: true,
          });

          const frame = canvas.toDataURL("image/jpeg", 0.5); // Lower quality for better performance
          socket.emit("frame", { roomName: "12345", frame });
        } catch (error) {
          console.error("Error capturing frame:", error);
        }
      }
      streamRef.current = requestAnimationFrame(streamFrame);
    };

    streamFrame(); // Start the loop
  };

  const stopStreaming = () => {
    if (streamRef.current) {
      cancelAnimationFrame(streamRef.current);
      streamRef.current = null;
    }
  };

  useEffect(() => {
    if (account) {
      console.log("Account connected:", account);

      // Emit creator-join event
      socket.emit("creator-join", { roomName: "12345" });

      startStreaming(); // Start streaming when logged in
    } else {
      stopStreaming(); // Stop streaming when logged out
    }
  }, [account]);

  useEffect(() => {
    // Keep streaming active even when tab is not in focus
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        startStreaming();
      } else {
        stopStreaming();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <>
      <Login />
      {account && (
        <iframe
          src="http://localhost:4000/"
          height="600"
          width="800"
          title="Game Iframe"
          style={{ border: "none", marginTop: "20px" }}
        />
      )}
    </>
  );
}

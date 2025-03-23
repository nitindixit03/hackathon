import { useEffect, useRef, useState } from "react";
import { socket } from "../sockets/index.js";
import { useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

export default function Room() {
  const [isCreator, setIsCreator] = useState(false);
  const navigate = useNavigate();
  const pageRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();

    };
  }, []);

  // Function to handle joining the room
  const handleJoinRoom = () => {
    socket.emit("creator-join", { roomName: "12345" });
    setIsCreator(true);
    navigate("/login");
  };



  return (
    <div ref={pageRef}>
      <h1>Creator</h1>
      {!isCreator ? (
        <button onClick={handleJoinRoom}>Join Room and Start Streaming</button>
      ) : (
        <>
          <p>Streaming to visitors...</p>
       
        </>
      )}
      <p>This is the content of the current page.</p>
    </div>
  );
}

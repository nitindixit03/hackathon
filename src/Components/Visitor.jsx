import { useEffect, useState } from "react";
import { socket } from "../sockets/index.js";

const Visitor = () => {
  const [frame, setFrame] = useState(null);

  useEffect(() => {
    socket.connect();

    // Join the room as a visitor
    socket.emit("visitor-join", { roomName: "12345" });

    // Listen for frame updates
    socket.on("frame", (data) => {
      setFrame(data.frame);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Visitor</h1>
      {frame ? (
        <img
          src={frame}
          alt="Stream"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        />
      ) : (
        <p>Waiting for stream from the creator...</p>
      )}
    </div>
  );
};

export default Visitor;

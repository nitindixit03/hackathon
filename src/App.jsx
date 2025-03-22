import { socket } from "./sockets";

function App() {

  // Set up the event listener once when the component mounts
  socket.on("connect", () => {
    console.log("Connected to the server");
  });

  function handle() {
    socket.connect(); // Start the connection when the button is clicked
  }

  return (
    <>
      <button onClick={handle}>Click to Connect</button>
    </>
  );
}

export default App;

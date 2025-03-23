import { useActiveAccount } from "thirdweb/react";
import Login from "./ui/connectBUtton.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
  const account = useActiveAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (account) {
      const timeout = setTimeout(() => {
        navigate("/voting");
      }, 20000); // 13 seconds

      return () => clearTimeout(timeout);
    }
  }, [account, navigate]); // Include account and navigate

  return (
    <>
      <Login />
      {account && (
        <iframe
          src="http://localhost:8888/"
          height="600"
          width="800"
          title="Game Iframe"
          style={{ border: "none", marginTop: "20px" }}
        />
      )}
    </>
  );
}

import { useActiveAccount } from "thirdweb/react"
import Login from "./ui/connectBUtton.jsx"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function AUthenticate() {

    const account = useActiveAccount();
    const navigate = useNavigate();

    useEffect(() => {
        if (account) {
            return ;
        }
    }, [account, navigate])


    return (
        <>
            <Login />
            {
                account &&             <iframe
                src="http://localhost:4000/"
                height="600"
                width="800"
                title="Game Iframe"
            />
            }
        </>
    )
}
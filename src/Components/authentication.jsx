import { useActiveAccount } from "thirdweb/react"
import Login from "./ui/connectBUtton.jsx"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Authentication() {

    const account = useActiveAccount();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(account) {
            navigate("/marketplace")
        }   
    },[account, navigate])


    return (
        <>
            <Login/>
        </>
    )
}
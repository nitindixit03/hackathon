import { createWallet } from "thirdweb/wallets";
import {client} from "../../utils/thirdweb.js"
import { lightTheme } from "thirdweb/react";
import {ConnectButton} from "thirdweb/react"

const wallets = [
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
];

export default function Login() {
    return (
        <>
            <ConnectButton

client={client}
wallets={wallets}
theme={lightTheme({
    colors: {
        primaryButtonBg: "hsl(48, 96%, 53%)",
        primaryButtonText: "hsl(240, 8%, 31%)",
        separatorLine: "hsl(48, 96%, 53%)",
        borderColor: "hsl(48, 96%, 53%)",
        skeletonBg: "hsl(48, 96%, 53%)",
        tertiaryBg: "hsl(48, 96%, 53%)",
        tooltipText: "hsl(48, 96%, 53%)",
    },
})}
connectButton={{ label: "Get started with Pawn" }}
connectModal={{
    size: "compact",
    title: "Buy me a $PWN",
   
    showThirdwebBranding: false,
}}
/>

        </>
    )
}
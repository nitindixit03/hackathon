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
connectButton={{ label: "Get started with a Chai" }}
connectModal={{
    size: "compact",
    title: "Buy me a Chai",
    titleIcon:
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmYWYwMTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jb2ZmZWUiPjxwYXRoIGQ9Ik0xMCAydjIiLz48cGF0aCBkPSJNMTQgMnYyIi8+PHBhdGggZD0iTTE2IDhhMSAxIDAgMCAxIDEgMXY4YTQgNCAwIDAgMS00IDRIN2E0IDQgMCAwIDEtNC00VjlhMSAxIDAgMCAxIDEtMWgxNGE0IDQgMCAxIDEgMCA4aC0xIi8+PHBhdGggZD0iTTYgMnYyIi8+PC9zdmc+",
    showThirdwebBranding: false,
}}
/>

        </>
    )
}
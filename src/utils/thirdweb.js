import {
    createThirdwebClient,
    getContract,
} from "thirdweb";
import { defineChain } from "thirdweb/chains";

// create the client with your clientId, or secretKey if in a server environment
const client = createThirdwebClient({
    clientId: import.meta.env.VITE_CLIENT_ID
});

// connect to your contract
const contract = getContract({
    client,
    chain: defineChain(11155111),
    address: "0x8e9b6fdEBB47CD52030F6E09E022aA06834eC3a4",
});


export {contract,client}
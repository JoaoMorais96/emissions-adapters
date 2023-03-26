import adapter from "../adapters/aave/aave";
import { manualCliff } from "../adapters/manual";
import { Protocol } from "../types/adapters";

const aave: Protocol = async () => ({
  "LEND to AAVE migrator": manualCliff(1601625600, 13_000_000),
  "Ecosysten reserve": adapter(
    "0x25F2226B597E8F9514B3F68F00f494cF4f286491",
    "ethereum",
    3_000_000,
  ),
  sources: [
    "https://docs.aave.com/aavenomics/incentives-policy-and-aave-reserve",
    "https://etherscan.io/tx/0x751c299f081d1a763cb6eff46616574a822b7d3376168e406e25ba03293e17b2",
  ],
  token: "ethereum:0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
  protocolIds: ["111", "1599", "1838", "1839"],
});
export default aave;

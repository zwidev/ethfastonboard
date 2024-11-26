// src/client.ts
import { createThirdwebClient } from "thirdweb";
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID;
if (!clientId) {
  throw new Error("Missing NEXT_PUBLIC_THIRDWEB_CLIENT_ID environment variable");
}
export const client = createThirdwebClient({
  clientId: clientId as string,
  secretKey: process.env.CLIENT_SECRET // This will be undefined on the client side
});

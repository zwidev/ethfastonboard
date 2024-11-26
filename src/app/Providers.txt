"use client";

import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider } from "thirdweb/react";
import { client } from "./client";
// Create the client configuration outside the component
const clientConfig = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID ?? "",
  secretKey: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY ?? ""
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider >
      {children}
    </ThirdwebProvider>
  );
}
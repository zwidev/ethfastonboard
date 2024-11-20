"use client";
import { ConnectButton, PayEmbed } from "thirdweb/react";
import { client } from "./client";
import { inAppWallet } from "thirdweb/wallets";
import { sepolia } from "thirdweb/chains";
import { useSendTransaction } from 'thirdweb/react';
import { prepareTransaction } from 'thirdweb';
import { parseEther } from 'ethers/lib/utils';
import { SmartWalletOptions } from "thirdweb/wallets";
import { useState } from 'react';

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnection = (connected: boolean) => {
    setIsWalletConnected(connected);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="text-2xl font-bold mb-4">
        {isWalletConnected 
          ? "Now you have a wallet. Now buy PZEN with a credit or debit card"
          : "Welcome to Fastest way to Buy PZEN"
        }
      </h1>
      
      <ConnectButton 
        client={client} 
        chain={sepolia}
        onConnect={() => handleWalletConnection(true)}
        onDisconnect={() => handleWalletConnection(false)}
      />
      
      {isWalletConnected && (
        <PayEmbed 
          theme='dark'
          client={client} 
          payOptions={{
            buyWithCrypto: {
              testMode: false
            }, 
            buyWithFiat: {
              testMode: true,
            },
            metadata: {
              name: "Purchase Token",
            },
            prefillBuy: {
              token: {
                address: "0xF4F3DDd4Ed305A32960e676e22939Ced435cdd90",
                name: "Pulse Zen",
                symbol: "PZEN",
                icon: "https://ipfs.io/ipfs/QmbNiTc4QVoKZSwk9iUbmqc4JDBvoYqbg6tzhgDZ1GZtAH",
              },
              amount: "100",
              chain: sepolia,
              allowEdits: {
                amount: true,
                token: false,
                chain: false
              }
            }
          } as any}
          className="w-[400px]"
        />
      )}
    </div>
  );
}

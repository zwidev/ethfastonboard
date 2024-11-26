"use client";
import { ConnectButton, PayEmbed, PayEmbedProps } from "thirdweb/react";
import { client } from "./client";
import { mainnet } from "thirdweb/chains";
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnection = (connected: boolean) => {
    setIsWalletConnected(connected);
  };

  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-8 pt-16">
      <h1 className="text-2xl font-bold mb-4 z-10">
        {isWalletConnected 
          ? "Now you have a wallet. Buy PZEN with a credit or debit card"
          : "Welcome to Fastest way to Buy PZEN"
        }
      </h1>
      
      <div className="text-center mb-4">
        <p className="text-sm text-white">
          🔒 Secure payments powered by Zenpay
          <br/>
          ✓ Licensed and regulated crypto exchange
        </p>
      </div>
      
      <div className="z-10">
        <ConnectButton 
          client={client} 
          chain={mainnet}
          onConnect={() => handleWalletConnection(true)}
          onDisconnect={() => handleWalletConnection(false)}
          connectModal={{
            size: "compact",
            showThirdwebBranding: false,
          }}
        />
      </div>
      
      {isWalletConnected && (
        <div className="flex flex-col items-center">
          <div className="flex gap-8 mb-4">
            <div className="flex flex-col items-center">
              <Image 
                src="/secure-badge.svg" 
                alt="Security Badge" 
                width={48}
                height={48}
                className="mb-2"
              />
              <span className="text-sm text-white">Fully Secure</span>
            </div>
            <div className="flex flex-col items-center">
              <Image 
                src="/encryption-badge.svg" 
                alt="Encryption Badge" 
                width={48}
                height={48}
                className="mb-2"
              />
              <span className="text-sm text-white">Military Grade Encryption</span>
            </div>
          </div>
          
          <PayEmbed 
            theme='dark'
            client={client} 
            payOptions={{
              buyWithCrypto: {},
              buyWithFiat: {},
              metadata: {
                name: "Purchase Token",
              },
              prefillBuy: {
                token: {
                  address: "0x5a24D7129B6f3FcAd2220296df28911880AD22B0",
                  name: "Pulse Zen",
                  symbol: "PZEN",
                  icon: "https://ipfs.io/ipfs/QmbNiTc4QVoKZSwk9iUbmqc4JDBvoYqbg6tzhgDZ1GZtAH",
                },
                amount: "100000",
                chain: mainnet,
                allowEdits: {
                  amount: true,
                  token: false,
                  chain: false
                }
              }
            } satisfies PayEmbedProps['payOptions']}
            className="w-[400px] z-10"
          />
        </div>
      )}
    </div>
  );
}

import { useSendTransaction } from 'thirdweb/react';

function PurchaseButton() {
  const { mutate: sendTransaction } = useSendTransaction();

  const handlePurchase = async () => {
    await sendTransaction({
      to: '0xF4F3DDd4Ed305A32960e676e22939Ced435cdd90',
      value: '1000000000000000000', // 1 ETH
      data: '0x',
    } as any); // Type assertion as temporary fix
  };

  return <button onClick={handlePurchase}>Buy Tokens</button>;
}

// abis/orderBookAbi.ts
export const OrderBookAbi = [
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "orderId", type: "uint256" },
      { indexed: true, name: "trader", type: "address" },
      { indexed: false, name: "price", type: "uint256" },
      { indexed: false, name: "quantity", type: "uint256" },
      { indexed: false, name: "side", type: "string" },
    ],
    name: "OrderPlaced",
    type: "event",
  },
] as const;

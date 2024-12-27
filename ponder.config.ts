// ponder.config.ts
import { createConfig } from "ponder";
import { http } from "viem";
import { OrderBookAbi } from "./abis/orderBookAbi";

export default createConfig({

  database: {
    // Use your actual database URL here, e.g. PostgreSQL or SQLite
    url: process.env.DATABASE_URL || "sqlite://./indexer/db.sqlite3",
    schema: "public",  // Set the schema to "public" or your custom schema
  },
  networks: {
    mainnet: {
      chainId: 1,
      transport: http(process.env.PONDER_RPC_URL_1!), // Menggunakan environment variable
    },
  },
  contracts: {
    OrderBook: {
      network: "mainnet",
      abi: OrderBookAbi,
      address: "0xd9145CCE52D386f254917e481eB44e9943F39138", // Alamat kontrak
      startBlock: 0,
    },
  },
});

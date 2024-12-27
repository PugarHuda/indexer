// ponder.schema.ts
import { onchainTable } from "ponder";

export const orders = onchainTable("orders", (t) => ({
  orderId: t.integer().primaryKey(),
  trader: t.text().notNull(),
  price: t.bigint().notNull(),
  quantity: t.bigint().notNull(),
  side: t.text().notNull(), // "buy" atau "sell"
  timestamp: t.integer().notNull(),
}));

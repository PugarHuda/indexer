import { ponder } from "ponder:registry";
import { orders } from "../ponder.schema";
ponder.on("OrderBook:OrderPlaced", async ({ event, context }) => {
  try {
    const { args } = event;
    const { orderId, trader, price, quantity, side } = args;

    await context.db.insert(orders).values({
      orderId: Number(orderId),
      trader,
      price: BigInt(price),
      quantity: BigInt(quantity),
      side,
      timestamp: Number(event.block.timestamp),
    });

    console.log(`Order indexed: ${orderId}`);
  } catch (error) {
    console.error("Error while handling OrderPlaced event:", error);
  }
});

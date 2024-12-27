import { ponder } from "ponder:registry";
// import { orders } from "ponder:schema";
import { orders } from "../ponder.schema";  // Adjust the relative path if needed

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


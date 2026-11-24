import { Application } from "@oak/oak";
import paymentRoutes from "./routes/paymentRoutes.ts";

const app = new Application();

const port = Number(Deno.env.get("PORT") ?? 8000);

// Register payment routes
app.use(paymentRoutes.routes());
app.use(paymentRoutes.allowedMethods());

// Start server
console.log(`Backend running on http://localhost:${port}`);

await app.listen({
  hostname: "127.0.0.1",
  port,
});
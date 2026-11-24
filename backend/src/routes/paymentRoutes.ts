import { Router } from "@oak/oak";

import { createPayment } from
  "../controllers/paymentController.ts";

const router = new Router();

// Health check endpoint
router.get("/api/health", (ctx) => {
  ctx.response.body = {
    status: "ok",
  };
});

// Create payment endpoint
router.post(
  "/api/payment/create",
  createPayment,
);

export default router;
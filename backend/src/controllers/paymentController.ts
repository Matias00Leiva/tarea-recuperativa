import type { Context } from "@oak/oak";

import { createPreference } from
  "../services/mercadoPagoService.ts";

export async function createPayment(ctx: Context) {
  try {
    // Create payment preference
    const preference = await createPreference();

    // Return payment information
    ctx.response.status = 201;
    ctx.response.body = preference;

  } catch (error) {
    console.error(error);

    ctx.response.status = 500;
    ctx.response.body = {
      error: "No se pudo iniciar el pago",
    };
  }
}
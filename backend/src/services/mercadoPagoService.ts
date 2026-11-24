export async function createPreference() {
  const accessToken = Deno.env.get("MP_ACCESS_TOKEN");
  const frontendUrl = Deno.env.get("FRONTEND_URL");

  // Validate environment variables
  if (!accessToken || !frontendUrl) {
    throw new Error("Missing environment variables");
  }

  const baseUrl = frontendUrl.replace(/\/$/, "");

  // Define payment preference
  const preference = {
    items: [
      {
        id: "1",
        title: "Audífonos inalámbricos",
        quantity: 1,
        currency_id: "CLP",
        unit_price: 19990,
      },
    ],

    back_urls: {
      success: `${baseUrl}/?result=success`,
      failure: `${baseUrl}/?result=failure`,
      pending: `${baseUrl}/?result=pending`,
    },

    auto_return: "approved",
  };

  // Send preference to Mercado Pago
  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preference),
    },
  );

  const data = await response.json();

  // Validate API response
  if (!response.ok) {
    console.error("Mercado Pago error:", data);
    throw new Error("Could not create payment preference");
  }

  if (!data.init_point) {
    throw new Error("Missing checkout URL");
  }

  // Return checkout information
  return {
    id: data.id,
    checkoutUrl: data.init_point,
  };
}
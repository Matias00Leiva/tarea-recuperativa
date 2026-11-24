export async function createPayment() {
  // Request payment preference
  const response = await fetch(
    "/api/payment/create",
    {
      method: "POST",
    }
  );

  const data = await response.json();

  // Validate backend response
  if (!response.ok) {
    throw new Error(
      data.error || "Error al iniciar el pago"
    );
  }

  return data;
}
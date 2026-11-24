import { useState } from "react";
import { createPayment } from "../services/paymentService.js";

export default function Product() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handlePayment() {
    setLoading(true);
    setError("");

    try {
      // Request payment URL
      const data = await createPayment();

      // Redirect to Mercado Pago
      window.location.href = data.checkoutUrl;

    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return (
    <div className="product-card">

      <span className="test-label">
        Entorno de pruebas
      </span>

      <div className="product-image">
        <span>🎧</span>
      </div>

      <h2>Audífonos inalámbricos</h2>

      <p className="description">
        Audífonos Bluetooth con sonido estéreo.
      </p>

      <h2 className="price">$19.990</h2>

      <p>Stock disponible</p>

      <button
        className="pay-button"
        onClick={handlePayment}
        disabled={loading}
      >
        {loading
          ? "Procesando..."
          : "Pagar con Mercado Pago"}
      </button>

      {error && (
        <p className="error">{error}</p>
      )}

      <small>
        Compra simulada. No se realizarán cobros reales.
      </small>

    </div>
  );
}
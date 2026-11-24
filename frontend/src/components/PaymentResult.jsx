export default function PaymentResult({ result }) {
  const params = new URLSearchParams(
    window.location.search
  );

  // Read payment information
  const paymentId = params.get("payment_id");
  const status = params.get("status")
    || params.get("collection_status");

  const results = {
    success: {
      title: "Pago aprobado",
      message: "La compra simulada fue exitosa.",
      symbol: "✓",
    },

    failure: {
      title: "Pago no completado",
      message: "No se pudo completar la compra.",
      symbol: "✕",
    },

    pending: {
      title: "Pago pendiente",
      message: "El pago está siendo procesado.",
      symbol: "…",
    },

    unknown: {
      title: "Estado desconocido",
      message: "No se pudo determinar el resultado.",
      symbol: "?",
    },
  };

  // Determine the reported payment result
  let key = "unknown";

  if (status === "approved") {
    key = "success";
  } else if (["pending", "in_process"].includes(status)) {
    key = "pending";
  } else if (
    ["rejected", "cancelled"].includes(status)
    || result === "failure"
  ) {
    key = "failure";
  }

  const info = results[key];

  return (
    <div className="product-card">

      <div className={`result-icon ${key}`}>
        {info.symbol}
      </div>

      <h2>{info.title}</h2>

      <p>{info.message}</p>

      <p>
        Estado informado: {status || "No informado"}
      </p>

      {paymentId && paymentId !== "null" && (
        <p>ID del pago: {paymentId}</p>
      )}

      <small>
        Resultado informado por el retorno del checkout.
      </small>

      <button
        className="pay-button"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Volver a la tienda
      </button>

    </div>
  );
}
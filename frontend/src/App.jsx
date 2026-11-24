import Product from "./components/Product.jsx";
import PaymentResult from "./components/PaymentResult.jsx";

export default function App() {
  const params = new URLSearchParams(
    window.location.search
  );

  const result = params.get("result");

  return (
    <main className="container">

      <header>
        <h1>Tech Store</h1>
        <p>Integración con Mercado Pago</p>
      </header>

      {result ? (
        <PaymentResult result={result} />
      ) : (
        <Product />
      )}

      <footer>
        Desarrollo Web y Móvil
      </footer>

    </main>
  );
}
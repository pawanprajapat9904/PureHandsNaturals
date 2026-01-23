import CartList from "../components/cart/CartList";
import CartSummary from "../components/cart/CartSummary";

export default function Cart() {
  return (
    <div className="container">
      <h1>Your Cart</h1>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "24px" }}>
        <CartList />
        <CartSummary />
      </div>
    </div>
  );
}

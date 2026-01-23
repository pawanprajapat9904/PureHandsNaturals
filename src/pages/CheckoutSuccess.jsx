import { Link } from "react-router-dom";

export default function CheckoutSuccess() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>Order Sent Successfully 🎉</h1>
      <p>We have received your order on WhatsApp.</p>

      <Link to="/">
        <button style={{ marginTop: "16px" }}>Go to Home</button>
      </Link>
    </div>
  );
}

import { openWhatsApp } from "../../utils/whatsappMessage";

export default function BuyWhatsAppButton({
  cartItems,
  address,
  totalAmount
}) {
  return (
    <button
      onClick={() => openWhatsApp(cartItems, address, totalAmount)}
      style={{
        width: "100%",
        marginTop: "12px",
        backgroundColor: "#25D366", // Official WhatsApp Green
        color: "#ffffff",
        border: "none",
        padding: "14px",
        fontWeight: "600",
        fontSize: "14px",
        textTransform: "uppercase",
        borderRadius: "2px", // Matches your .buy-btn radius
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
        transition: "background 0.2s ease",
        letterSpacing: "0.5px"
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1ebe57")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
    >
      Order via WhatsApp
    </button>
  );
}
export default function QuantitySelector({ quantity, setQuantity }) {
  const buttonStyle = {
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #dbdbdb",
    background: "#fff",
    borderRadius: "50%", // Circular buttons for a modern retail look
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: "400",
    color: "#212121",
    transition: "all 0.2s ease",
    padding: 0,
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "10px 0",
    fontFamily: "Roboto, Arial, sans-serif"
  };

  const inputStyle = {
    width: "40px",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #dbdbdb",
    borderRadius: "2px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#212121",
    textAlign: "center"
  };

  return (
    <div style={containerStyle}>
      <button 
        style={buttonStyle}
        onClick={() => setQuantity(q => Math.max(1, q - 1))}
        onMouseOver={(e) => (e.currentTarget.style.borderColor = "#c2c2c2")}
        onMouseOut={(e) => (e.currentTarget.style.borderColor = "#dbdbdb")}
      >
        −
      </button>

      <div style={inputStyle}>
        {quantity}
      </div>

      <button 
        style={buttonStyle}
        onClick={() => setQuantity(q => q + 1)}
        onMouseOver={(e) => (e.currentTarget.style.borderColor = "#c2c2c2")}
        onMouseOut={(e) => (e.currentTarget.style.borderColor = "#dbdbdb")}
      >
        +
      </button>
    </div>
  );
}
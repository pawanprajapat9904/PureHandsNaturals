import formatPrice from "../../utils/formatPrice";

export default function ProductInfo({ product }) {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", color: "#1a1a1a" }}>
      {/* Product Title */}
      <h1 style={{ 
        fontSize: "28px", 
        fontWeight: "700", 
        marginBottom: "12px",
        lineHeight: "1.2" 
      }}>
        {product.name}
      </h1>

      {/* Price Section */}
      <div style={{ 
        display: "flex", 
        alignItems: "baseline", 
        gap: "10px", 
        margin: "16px 0" 
      }}>
        <span style={{ 
          fontSize: "24px", 
          fontWeight: "600", 
          color: "#3bb3b3" 
        }}>
          {formatPrice(product.price)}
        </span>
        
        {product.originalPrice && (
          <span
            style={{
              textDecoration: "line-through",
              color: "#999",
              fontSize: "16px",
              fontWeight: "400"
            }}
          >
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>

      {/* Divider for subtle separation */}
      <hr style={{ border: "0", borderTop: "1px solid #eee", margin: "20px 0" }} />

      {/* Description */}
      <p style={{ 
        fontSize: "16px", 
        lineHeight: "1.6", 
        color: "#4a4a4a",
        maxWidth: "60ch" // Limits line width for better readability
      }}>
        {product.description}
      </p>
    </div>
  );
}
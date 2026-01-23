import { Link } from "react-router-dom";
import formatPrice from "../../utils/formatPrice";
import "../../styles/product.css";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="product-image"
        />
        <h3 className="product-title">{product.name}</h3>
      </Link>

      <p className="product-price">{formatPrice(product.price)}</p>

      <Link to={`/product/${product.id}`}>
        <button className="buy-btn">View Product</button>
      </Link>
    </div>
  );
}

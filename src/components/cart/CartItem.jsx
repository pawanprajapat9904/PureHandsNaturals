import formatPrice from "../../utils/formatPrice";
import useCartHook from "../../hooks/useCart";
import "../../styles/cart.css";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCartHook();

  return (
    <div className="cart-item">
      {/* Left Side: Image & Quantity Control */}
      <div className="cart-item-left">
        <img src={item.images?.[0]} alt={item.name} className="cart-item-img" />
        
        {/* Flipkart Style Quantity Selector */}
        <div className="quantity-control">
          <button 
            className="q-btn" 
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            −
          </button>
          <input type="text" className="q-input" value={item.quantity} readOnly />
          <button 
            className="q-btn" 
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Right Side: Info & Actions */}
      <div className="cart-item-info">
        <h4 className="item-title">{item.name}</h4>
        <p className="item-seller">Seller: {item.seller || "Official Store"}</p>
        
        <div className="price-container">
          <span className="current-price">{formatPrice(item.price)}</span>
          {item.oldPrice && (
            <>
              <span className="old-price">{formatPrice(item.oldPrice)}</span>
              <span className="discount-tag">10% Off</span>
            </>
          )}
        </div>

        {/* Action Buttons (Remove) */}
        <div className="item-actions">
          <button 
            className="remove-btn" 
            onClick={() => removeFromCart(item.id)}
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}
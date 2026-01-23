import formatPrice from "../../utils/formatPrice";
import useCartHook from "../../hooks/useCart";
import { Link } from "react-router-dom";
import "../../styles/cart.css";

export default function CartSummary() {
    const { totalAmount } = useCartHook();

    return (
        <div className="cart-summary">
            <h3>Order Summary</h3>
            <p>Total: {formatPrice(totalAmount)}</p>

            <Link to="/address" style={{ textDecoration: 'none' }}>
                <button className="continue-btn">
                    CONTINUE
                </button>
            </Link>
        </div>
    );
}

import CartItem from "./CartItem";
import useCartHook from "../../hooks/useCart";

export default function CartList() {
  const { cartItems } = useCartHook();

  if (cartItems.length === 0) {
    return <p>Your cart is empty</p>;
  }

  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

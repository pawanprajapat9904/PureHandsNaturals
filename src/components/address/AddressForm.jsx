import { useNavigate } from "react-router-dom";
import { useAddress } from "../../context/AddressContext";
import useCartHook from "../../hooks/useCart";
import { openWhatsApp } from "../../utils/whatsappMessage";
import "../../styles/address.css";

export default function AddressForm() {
  const navigate = useNavigate();
  const { address, updateAddress } = useAddress();
  const { cartItems, totalAmount } = useCartHook();

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateAddress(name, value);
  };

  const handleSaveOnly = (e) => {
    e.preventDefault();
    navigate("/cart");
  };

  const handleSaveAndWhatsApp = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }
    openWhatsApp(cartItems, address, totalAmount);
  };

  return (
    <div className="address-page">
      <form className="address-form">
        <div className="address-header">
          <h2>DELIVERY ADDRESS</h2>
        </div>

        {/* Input Rows */}
        <div className="form-row">
          <input name="name" placeholder="Full Name" value={address.name} onChange={handleChange} required />
          <input name="phone" placeholder="10-digit mobile number" value={address.phone} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <input name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleChange} required />
          <input name="city" placeholder="City/District/Town" value={address.city} onChange={handleChange} required />
        </div>

        <input name="house" placeholder="House No., Building Name (Required)" value={address.house} onChange={handleChange} required />
        <input name="area" placeholder="Road Name, Area, Colony (Required)" value={address.area} onChange={handleChange} required />
        <input name="state" placeholder="State" value={address.state} onChange={handleChange} required />

        {/* Action Buttons */}
        <div className="address-actions">
          <button type="button" onClick={handleSaveOnly} className="btn-save">
            SAVE ADDRESS
          </button>

          <button type="button" onClick={handleSaveAndWhatsApp} className="btn-confirm">
            CONFIRM & ORDER ON WHATSAPP
          </button>
        </div>
      </form>
    </div>
  );
}
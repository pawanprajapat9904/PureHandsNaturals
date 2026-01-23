import { useAddress } from "../../context/AddressContext";

export default function AddressPreview() {
  const { address } = useAddress();

  return (
    <div style={{ marginTop: "16px" }}>
      <h3>Delivery Address</h3>
      <p>
        {address.name}
        <br />
        {address.house}, {address.area}
        <br />
        {address.city}, {address.state} - {address.pincode}
        <br />
        Phone: {address.phone}
      </p>
    </div>
  );
}

export default function SearchBar({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search products, colors, price..."
      style={{
        flex: 1,
        padding: "12px 30px",
        width: "100%",
        borderRadius: "999px",
        border: "1px solid #e0e0e0",
        background: "#f5f5f5",
        outline: "none",
        fontSize: "14px"
      }}
    />
  );
}

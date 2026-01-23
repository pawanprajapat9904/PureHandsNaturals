import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../search/SearchBar";
import { APP_NAME } from "../../utils/constants";
import { useSearchContext } from "../../context/SearchContext";
import logo from "../../assets/logos/logo.png";

export default function Header() {
  const { query, setQuery } = useSearchContext();
  const navigate = useNavigate();

  const handleSearchChange = (value) => {
    setQuery(value);
    navigate("/products");
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logoWrap}>
          <img src={logo} alt="Website Logo" style={styles.logoImg} />
        </Link>
        <Link to="/" style={styles.logo}>
          <span style={styles.logoText}>{APP_NAME}</span>
        </Link>

        {/* Search - Size Increased */}
        <div style={styles.searchContainer}>
          <SearchBar value={query} onChange={handleSearchChange} />
        </div>

        {/* Cart */}
        <Link to="/cart" style={styles.cart}>
          <span style={styles.cartIcon}>🛒</span>
          <span style={styles.cartText}>My Cart</span>
        </Link>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: "#ffffff",
    borderBottom: "4px solid #ccff00",
    padding: "10px 0",
    position: "sticky",
    top: 0,
    zIndex: 100,
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
    width: "100%",
    boxSizing: "border-box",
  },
  container: {
    maxWidth: "1200px",
    width: "95%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap", // 🔥 Mobile par cheezein niche shift ho jayengi
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px", 
    boxSizing: "border-box",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  logoImg: {
    height: "35px", // Mobile-friendly height
    width: "auto",
    objectFit: "contain"
  },
  logo: {
    textDecoration: "none",
  },
  logoText: {
    fontSize: "18px", // Chota kiya taaki mobile par fit ho
    fontWeight: "bold",
    color: "#2e7d32",
    whiteSpace: "nowrap",
  },
  searchContainer: {
    flex: "1 1 300px", // 🔥 Pehle 1 tha, ab '1 1 300px' hai. 
    // Iska matlab agar 300px se kam jagah bachegi toh ye niche wali line mein chala jayega.
    order: window.innerWidth < 600 ? 3 : 2, // Search ko mobile par niche dikhane ke liye logic (optional)
    maxWidth: "700px",
    margin: "5px 0", 
  },
  cart: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "6px 12px",
    backgroundColor: "#2e7d32",
    borderRadius: "6px",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "600",
    flexShrink: 0,
  },
  cartIcon: {
    fontSize: "16px",
  },
  cartText: {
    fontSize: "13px",
    // Choti screens par "Cart" text ko hide bhi kar sakte hain sirf icon rakhne ke liye
  }
};
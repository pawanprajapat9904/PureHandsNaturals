import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";

import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import QuantitySelector from "../components/product/QuantitySelector";
import BuyWhatsAppButton from "../components/product/BuyWhatsAppButton";

import useCartHook from "../hooks/useCart";
import { useAddress } from "../context/AddressContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartHook();
  const { address } = useAddress();

  if (!product) return <p style={styles.notFound}>Product not found</p>;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.mainContainer}>
        {/* Left Section: Gallery & Sticky Buttons */}
        <div style={styles.leftCol}>
          <div style={styles.stickyGallery}>
            <ProductGallery images={product.images} video={product.video} />
            
            {/* Flipkart Style Action Buttons */}
            <div style={styles.actionButtons}>
              <button onClick={handleAddToCart} style={styles.addToCartBtn}>
                <span style={{marginRight: '8px'}}>🛒</span> ADD TO CART
              </button>
              
              <div style={styles.buyNowWrapper}>
                <BuyWhatsAppButton
                  cartItems={[{ ...product, quantity }]}
                  address={address}
                  totalAmount={product.price * quantity}
                  // Is button ke andar ka text "BUY NOW" hona chahiye
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div style={styles.rightCol}>
          <div style={styles.infoContainer}>
            <ProductInfo product={product} />
            
            <div style={styles.quantitySection}>
              <span style={styles.label}>Quantity</span>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>

            {/* Baaki Offers/Details yahan aayenge */}
            <div style={styles.offersSection}>
              <p style={{color: '#2e7d32', fontWeight: 'bold', fontSize: '14px'}}>
                Special Price: Extra 10% off on this product
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageWrapper: {
    background: "#f1f3f6", // Flipkart gray background
    minHeight: "100vh",
    padding: "10px",
    boxSizing: "border-box",
  },
  mainContainer: {
    maxWidth: "1280px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap", // Mobile par niche shift ho jayega, bahar nahi jayega
    background: "#fff",
    borderRadius: "2px",
    boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
    boxSizing: "border-box",
    overflow: "hidden", // Out of bound ko prevent karne ke liye
  },
  leftCol: {
    flex: "1 1 450px", // 450px se kam screen par wrap ho jayega
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  },
  stickyGallery: {
    position: "sticky",
    top: "80px",
    width: "100%",
  },
  rightCol: {
    flex: "1 1 500px", // Content area
    padding: "24px",
    textAlign: "left",
    boxSizing: "border-box",
    borderLeft: "1px solid #f0f0f0",
  },
  // Flipkart style Pricing
  priceSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    margin: "12px 0",
  },
  priceMain: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#212121",
  },
  priceOld: {
    fontSize: "16px",
    color: "#878787",
    textDecoration: "line-through",
  },
  discountText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#388e3c", // Flipkart Green
  },
  // Sticky Action Buttons (Bottom)
  actionButtons: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
    position: "sticky",
    bottom: "0",
    background: "#fff",
    padding: "10px 0",
  },
  addToCartBtn: {
    flex: 1,
    padding: "18px",
    backgroundColor: "#ff9f00", // Flipkart Yellow/Orange
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "2px",
  },
  buyNowBtnWrapper: {
    flex: 1,
    // Note: Iske andar ka Buy Button #fb641b (Deep Orange) rakhein
  },
  quantityWrapper: {
    margin: "24px 0",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  }
};
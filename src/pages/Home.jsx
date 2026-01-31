import BannerSlider from "../components/banner/BannerSlider";
import ProductCard from "../components/product/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";

export default function Home() {
  // 🔥 sirf featured products (first 4)
  const featuredProducts = products.slice(1,6);

  return (
    <>
      <BannerSlider />

      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px"
          }}
        >
          <h2>Featured Products</h2>

          {/* View All */}
          <Link
            to="/products"
            style={{
              color: "#2e7d32",
              fontWeight: "600",
              fontSize: "14px"
            }}
          >
            View All →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

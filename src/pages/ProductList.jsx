import products from "../data/products";
import ProductCard from "../components/product/ProductCard";
import { useSearchContext } from "../context/SearchContext";

export default function ProductList() {
  const { query } = useSearchContext();

  const filteredProducts = products.filter((product) => {
    const q = query.toLowerCase();

    return (
      product.name.toLowerCase().includes(q) ||
      product.color.toLowerCase().includes(q) ||
      product.price.toString().includes(q)
    );
  });

  return (
    <div className="container">
      <h1>All Products</h1>

      <div className="product-grid" style={{ marginTop: "16px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

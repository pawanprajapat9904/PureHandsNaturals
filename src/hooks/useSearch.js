import { useState, useMemo } from "react";

export default function useSearch(products = []) {
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query) return products;

    return products.filter((product) => {
      const q = query.toLowerCase();

      return (
        product.name.toLowerCase().includes(q) ||
        product.color.toLowerCase().includes(q) ||
        product.price.toString().includes(q)
      );
    });
  }, [query, products]);

  return {
    query,
    setQuery,
    filteredProducts
  };
}

// ===== IMPORT IMAGES =====

// Jasmine
import jasmine1 from "../assets/products/jasmine1.jpeg";
import jasmine2 from "../assets/products/jasmine2.jpeg";
import jasmine3 from "../assets/products/jasmine3.jpeg";

// Tea Tree & Lemongrass
import ttl1 from "../assets/products/ttl1.jpeg";
import ttl2 from "../assets/products/ttl2.jpeg";
import ttl3 from "../assets/products/ttl3.jpeg";

// Charcoal Detox
import cds1 from "../assets/products/cds1.jpeg";
import cds2 from "../assets/products/cds2.jpeg";
import cds3 from "../assets/products/cds3.jpeg";

// Videos
import video1 from "../assets/products/product-1/video.mp4";
import video2 from "../assets/products/product-2/video.mp4";

// ===== PRODUCTS DATA =====

const products = [
  {
    id: "product-1",
    name: "JASMINE SOAP 🌼",
    price: 99,
    originalPrice: 159,
    color: "yellow",
    category: "soap",
    description:
      "Soft floral freshness 🌼 with the purity of nature 🤍 A gentle handmade soap that calms your skin and senses ✨",
    images: [jasmine1, jasmine2, jasmine3],
    video: video1,
    inStock: true
  },
  {
    id: "product-2",
    name: "Tea Tree & Lemongrass Soap",
    price: 249,
    originalPrice: 349,
    color: "green",
    category: "soap",
    description:
      "Refreshing soap with tea tree oil and lemongrass for acne-free skin.",
    images: [ttl1, ttl2, ttl3],
    video: video2,
    inStock: true
  },
  {
    id: "product-3",
    name: "Charcoal Detox Soap",
    price: 279,
    originalPrice: 379,
    color: "black",
    category: "soap",
    description:
      "Activated charcoal soap for deep cleansing and detoxification.",
    images: [cds1, cds2, cds3],
    video: "",
    inStock: true
  }
];

export default products;

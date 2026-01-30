// ===== IMPORT IMAGES =====

// Jasmine
import jasmine1 from "../assets/products/jasmine1.png";
import jasmine2 from "../assets/products/jasmine2.png";

// Rose
import rose1 from "../assets/products/Rose1.png";
import rose2 from "../assets/products/Rose2.png";

// sandalwood
import sandalwood1 from "../assets/products/Sandalwood1.png";
import sandalwood2 from "../assets/products/Sandalwood2.png";

//Sets

import set1 from "../assets/products/Set1.png";
import set2 from "../assets/products/Set2.png";
import set3 from "../assets/products/Set3.png";
import set4 from "../assets/products/Set4.png";




// Videos


// ===== PRODUCTS DATA =====

const products = [
  {
    id: "product-1",
    name: "JASMINE SOAP 🌼",
    price: 50,
    originalPrice: 80,
    color: "yellow",
    category: "soap",
    description: [
      "Brand: PureHands Naturals",
      "Product Type: Handmade Natural Soap",
      "Variant: Jasmine",
      "Net Weight: 95-100 g",
      "Skin Type: All skin types"
    ],
    images: [jasmine1, jasmine2],
    video: "",
    inStock: true
  },
 {
  id: "product-2",
  name: "Rose Soap 🌹",
  price: 50,
  originalPrice: 80,
  color: "pink",
  category: "soap",
  description: [
    "Brand: PureHands Naturals",
    "Product Type: Handmade Natural Soap",
    "Variant: Rose",
    "Net Weight: 90-100 g",
    "Skin Type: All skin types"
  ],
  images: [rose1, rose2], // change if different
  video: "",
  inStock: true
},
  {
  id: "product-3",
  name: "Sandalwood Soap 🌿",
  price: 50,
  originalPrice: 80,
  color: "purple",
  category: "soap",
  description: [
    "Brand: PureHands Naturals",
    "Product Type: Handmade Natural Soap",
    "Variant: Sandalwood",
    "Net Weight: 95-100 g",
    "Skin Type: All skin types"
  ],
  images: [sandalwood1, sandalwood2], // update if needed
  video: "",
  inStock: true
},
{
  id: "product-4",
  name: "PureHands Naturals Floral & Herbal Soap Set 🌸🌿",
  price: 150,
  originalPrice: 180,
  color: ["pink", "purple", "yellow"],
  category: "soap",
  description: [
    "Brand: PureHands Naturals",
    "Product Type: Handmade Natural Soap",
    "Variant: Rose, Sandalwood, Jasmine",
    "Net Weight: 270-300 g",
    "Skin Type: All skin types"
  ],
  images: [set1, set2, set3, set4], // update as needed
  video: "",
  inStock: true
}

];

export default products;

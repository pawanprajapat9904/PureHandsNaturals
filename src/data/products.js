// ===== IMPORT IMAGES =====

// Jasmine
import jasmine1 from "../assets/products/jasmine-1.png";
import jasmine2 from "../assets/products/jasmine-2.png";

// Rose
import rose1 from "../assets/products/rose-1.png";
import rose2 from "../assets/products/rose-2.png";

// Sandalwood
import sandalwood1 from "../assets/products/sandalwood-1.png";
import sandalwood2 from "../assets/products/sandalwood-2.png";

// Sets
import set1 from "../assets/products/set-1.png";
import set2 from "../assets/products/set-2.png";
import set3 from "../assets/products/set-3.png";
import set4 from "../assets/products/set-4.png";

// Rose Grape
import rosegrape1 from "../assets/products/rosegrape-1.png";
import rosegrape2 from "../assets/products/rosegrape-2.png";
import rosegrape3 from "../assets/products/rosegrape-3.png";


// Jasmine Grape
import jasminegrape1 from "../assets/products/jasminegrape-1.png";
import jasminegrape2 from "../assets/products/jasminegrape-2.png";
import jasminegrape3 from "../assets/products/jasminegrape-3.png";

// Sandalwood Grape
import sandalwoodgrape1 from "../assets/products/sandalwoodgrape-1.png";
import sandalwoodgrape2 from "../assets/products/sandalwoodgrape-2.png";
import sandalwoodgrape3 from "../assets/products/sandalwoodgrape-3.png";



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
  color: "purple ",
  category: "soap ",
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
  color: `"pink ", "purple ", "yellow "`,
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
},
{
  id: "product-5",
  name: "PureHands Naturals Rose Grape Soap 🌹🍇",
  price: 150,
  originalPrice: 250,
  color: "pink",
  category: `"hand ", "wash ", "soap "`,
  description: [
    "Brand: PureHands Naturals",
    "Product Type: Handmade Natural Grape Soap",
    "Variant: Rose",
    "Net Weight: 250-300 g",
    "Best For: Gifting"
  ],
  images: [rosegrape1, rosegrape2, rosegrape3], 
  video: "",
  inStock: true
},
{
  id: "product-jasmine-grape-soap",
  name: "PureHands Naturals Jasmine Grape Soap 🌼🍇",
  price: 150,
  originalPrice: 250,
  color: "purple",
  category: `"hand ", "wash ", "soap "`,
  description: [
    "Brand: PureHands Naturals",
    "Product Type: Handmade Natural Grape Soap",
    "Variant: Jasmine",
    "Net Weight: 250-300 g",
    "Best For: Gifting"
  ],
  images: [jasminegrape1, jasminegrape2,jasminegrape3], // update with actual image imports
  video: "",
  inStock: true
},
{
  id: "product-sandalwood-grape-soap",
  name: "PureHands Naturals Sandalwood Grape Soap 🌿🍇",
  price: 150,
  originalPrice: 250,
  color: "yellow",
  category: `"hand ", "wash ", "soap "`,
  description: [
    "Brand: PureHands Naturals",
    "Product Type: Handmade Natural Grape Soap",
    "Variant: Sandalwood",
    "Net Weight: 250-300 g",
    "Best For: Gifting"
  ],
  images: [sandalwoodgrape1, sandalwoodgrape2,sandalwoodgrape3], // update with actual image imports
  video: "",
  inStock: true
}




];

export default products;

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import "./styles/global.css";

import { CartProvider } from "./context/CartContext";
import { AddressProvider } from "./context/AddressContext";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <AddressProvider>
        <SearchProvider>
          <RouterProvider router={router} />
        </SearchProvider>
      </AddressProvider>
    </CartProvider>
  </React.StrictMode>
);

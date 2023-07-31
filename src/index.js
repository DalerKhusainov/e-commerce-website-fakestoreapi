import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// PRODUCT PROVIDER
import ProductProvider from "./contexts/ProductContext";
// SIDEBAR PROVIDER
import SidebarProvider from "./contexts/SidebarContext";
// CART PROVIDER
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <ProductProvider>
      <SidebarProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SidebarProvider>
    </ProductProvider>
  </CartProvider>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import SideCart from "./components/SideCart.jsx";
import SideCartButton from "./components/SideCartButton.jsx";

function RootLayout() {
  const { cartOpen, closeCart } = useCart();

  return (
    <>
      <Navbar />
      <App />
      <Footer />
      {cartOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/50 transition-opacity duration-500 z-40"
        />
      )}
      <SideCartButton />
      <SideCart />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <RootLayout />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);

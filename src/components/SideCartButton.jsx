import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

function SideCartButton() {
  const { openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className="fixed bottom-10 right-10 bg-white text-black p-3 rounded-full shadow-lg"
    >
      <ShoppingCart className="h-6 w-6 text-gray-700" />
    </button>
  );
}

export default SideCartButton;

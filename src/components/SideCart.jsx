import { useCart } from "../context/CartContext";
// import { X } from "lucide-react";

function SideCart({ isOpen, onClose }) {
  const { cart, removeFromCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white text-black shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose}>
          X{/* <X className="h-6 w-6 text-gray-600" /> */}
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty.</p>
        ) : (
          cart.map((item, i) => (
            <div key={i} className="flex justify-between items-center">
              <span>{item.name}</span>
              <div className="flex items-center gap-3">
                <span className="font-bold">${item.price.toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(i)}
                  className="text-red-500 hover:text-red-700"
                >
                  {/* <X className="h-4 w-4" /> */}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between mb-4 text-lg font-bold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default SideCart;

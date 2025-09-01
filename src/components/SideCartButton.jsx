import { useState } from "react";
import SideCart from "./SideCart";
// import { ShoppingCart } from "lucide-react";

function SideCartButton() {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <button onClick={() => setCartOpen(true)} className="fixed bottom-10 right-10 bg-white text-black p-3 rounded-2xl">
                BTN{/* <ShoppingCart className="h-6 w-6 text-gray-700" /> */}
            </button>
            <SideCart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    );
}

export default SideCartButton;

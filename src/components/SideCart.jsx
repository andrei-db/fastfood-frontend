import { useCart } from "../context/CartContext";
import { X, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
function SideCart() {
    const { cartOpen, closeCart, cartItems, removeFromCart } = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
        <div
            className={`fixed top-0 right-0 w-80 h-full bg-white  text-black shadow-lg transform transition-transform duration-300 z-50 ${cartOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <button onClick={closeCart} className="absolute left-0 top-0 p-4">
                <X />
            </button>
            <div className="flex justify-center items-center py-4">
                <ShoppingCart />
                <span className="ms-2">Cart</span>
            </div>

            <div className="p-4">
                {cartItems.length === 0 ? (
                    <p className="text-center">Your cart is empty</p>
                ) : (
                    <div>

                        {cartItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 rounded-xl flex justify-between items-center mb-4"
                            >

                                <div className="p-2">
                                    <img className="w-15 h-15" src={item.image} />
                                </div>
                                <div>
                                    <span>{item.name}</span>
                                    <div>
                                        1 X {item.price.toFixed(2)}$ = {item.price.toFixed(2)}$
                                    </div>
                                </div>

                                <div className="p-2">

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 p-1 bg-white rounded font-bold me-3"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )
                }

            </div>
            <div className="w-full mb-4 absolute bottom-0 flex-col">
                {cartItems.length > 0 && (
                    <div className="p-4 text-2xl flex justify-between">
                        <span>Subtotal:</span>
                        <span>{total}$</span>
                    </div>
                )}

                <div className="flex justify-center items-center">
                    <Link to="/cart" className="bg-black text-white text-center px-10 py-3 rounded-md">Check cart</Link>
                </div>
            </div>
        </div>
    );
}

export default SideCart;

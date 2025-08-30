import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
function CartPage() {
    const { cart, removeFromCart, clearCart } = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 text-black">
                <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

                {cart.length === 0 ? (
                    <div className="text-center">
                        <p className="mb-4">Your cart is empty.</p>
                        <Link
                            to="/order"
                            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            Go to Order
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="flex">
                            <table className="grow me-10 text-center rounded-xl bg-gray-100">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className="p-2">Product</th>
                                        <th className="p-2">Price</th>
                                        <th className="p-2">Quantity</th>
                                        <th className="p-2">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="bg-gray-100 rounded-xl"
                                        >
                                            <td className="p-2">
                                                <button
                                                    onClick={() => removeFromCart(index)}
                                                    className="text-red-500 p-2 bg-white rounded font-bold me-3"
                                                >
                                                    x
                                                </button>
                                            </td>
                                            <td className="p-2">
                                                <img className="w-20 h-20" src={item.image} />
                                            </td>
                                            <td>
                                                <span>{item.name}</span>
                                            </td>


                                            <td> <span className="font-bold">${item.price.toFixed(2)}</span></td>
                                            <td> <input type="number" className="text-center rounded bg-gray-400 font-bold w-10" defaultValue={1} min={1} /></td>
                                            <td> <span className="font-bold">${item.price.toFixed(2)}</span></td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="sticky">
                                <div className="mt-6 flex justify-between items-center text-xl font-bold">
                                    <span>Subtotal:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="mt-6 flex justify-between items-center text-xl font-bold">
                                    <span>Total:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <button
                                        onClick={clearCart}
                                        className="px-6 py-3 bg-gray-300 rounded-lg hover:bg-gray-400"
                                    >
                                        Clear Cart
                                    </button>
                                    <Link
                                        to="/checkout"
                                        className="flex-1 px-6 py-3 bg-green-600 text-white text-center rounded-lg hover:bg-green-700"
                                    >
                                        Proceed to Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <Footer />
        </>
    );
}

export default CartPage;
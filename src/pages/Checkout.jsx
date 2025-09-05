import { useState } from "react"
import { useCart } from "../context/CartContext"
export default function Checkout() {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [paymentMethod, setPaymentMethod] = useState("cash")
    const [success, setSuccess] = useState(false)
    const { cartItems, clearCart } = useCart();

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const deliveryFee = 10
    const total = subtotal + deliveryFee

    const handleSubmit = async (e) => {
        e.preventDefault()

        const order = {
            name,
            phone,
            address,
            paymentMethod,
            items: cartItems.map(item => ({
                productId: item._id,
                name: item.name,
                price: Number(item.price),
                quantity: item.quantity
            })),
            subtotal: Number(subtotal),
            deliveryFee: Number(deliveryFee),
            total: Number(total),
            status: "pending",
        };

        try {
            const res = await fetch("http://localhost:5000/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(order),
            })

            if (res.ok) {
                clearCart();
                setSuccess(true)
            }
        } catch (err) {
            console.error("Error placing order", err)
        }
    }

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-2xl font-bold text-green-600">Your order has been placed</h1>
                <p className="mt-2">We will deliver your order as fast as posible 🚀</p>
            </div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto p-6 text-gray-700">
            <h1 className="text-2xl font-bold mb-6">Checkout</h1>

            <div className="grid md:grid-cols-2 gap-6">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-4 rounded shadow">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="p-2 rounded bg-gray-100"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="p-2 bg-gray-100 rounded"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        className="p-2 bg-gray-100 rounded"
                    />

                    <div>
                        <label className="block mb-2 font-semibold">Payment methods</label>
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="p-2 bg-gray-200 rounded w-full"
                        >
                            <option value="cash">Cash on delivery</option>
                            <option value="card">Card</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded"
                    >
                        Place order
                    </button>
                </form>

                <div className="bg-gray-50 p-4 rounded shadow">
                    <h2 className="text-xl font-semibold mb-4">Order summary</h2>
                    <ul className="divide-y">
                        {cartItems.map((item) => (
                            <li key={item.productId} className="py-2 flex justify-between">
                                <span>
                                    {item.name} x {item.quantity}
                                </span>
                                <span>{item.price * item.quantity} $</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 flex justify-between font-semibold">
                        <span>Subtotal</span>
                        <span>{subtotal} $</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery VAT</span>
                        <span>{deliveryFee} $</span>
                    </div>
                    <div className="mt-2 flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{total} $</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

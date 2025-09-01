import { useParams } from "react-router-dom"
import products from "../data/products"
import { useCart } from "../context/CartContext"
function ProductPage() {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
        <>
        <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-10">
            <img
                src={product.image}
                alt={product.name}
                className="w-full md:w-1/2 rounded-xl object-cover"
            />

            <div className="flex-1 space-y-4">
                <h1 className="text-black text-3xl font-bold">{product.name}</h1>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-black text-2xl font-bold">${product.price}</p>

                <button
                    onClick={() => addToCart(product)}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
        </>
    );
}

export default ProductPage;
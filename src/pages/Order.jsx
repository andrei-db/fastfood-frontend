import { useState, useEffect } from "react"
import MenuItemCard from "../components/MenuItemCard"
function Order() {
  const [filter, setFilter] = useState("all");
  const [products, setProducts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);
  return (
    <>
      <div className="p-10">

        <div className="flex justify-center gap-4 mb-8">
          {["all", "burgers", "sides", "drinks"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg ${filter === cat ? "bg-black text-white" : "bg-gray-500"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <MenuItemCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
export default Order;

import { useState } from "react";
import products from "../data/products";
import MenuItemCard from "../components/MenuItemCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Order() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <>
    <Navbar />
    <div className="p-6 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#242424]"></h1>

      <div className="flex justify-center gap-4 mb-8">
        {["all", "burgers", "sides", "drinks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg ${
              filter === cat ? "bg-red-500 text-white" : "bg-gray-200"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <MenuItemCard key={product.id} {...product} />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Order;

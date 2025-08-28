import { useCart } from "../context/CartContext";

function MenuItemCard({ id, name, price, description, image }) {
  const { addToCart } = useCart();

  return (
    <div className="p-4 bg-white text-black rounded-2xl flex flex-col items-center justify-center">
      <img src={image} alt={name} className="h-50 w-60 object-cover rounded-xl mb-3" />
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      
        <span className="font-bold">${price}</span>
        <button
          onClick={() => addToCart({ id, name, price })}
          className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Add
        </button>

    </div>
  );
}

export default MenuItemCard;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function MenuItemCard({ id, name, price, description, image }) {
    const { addToCart } = useCart();

    return (
        <Link to={`/order/${id}`}>
        <div className=" bg-white text-black rounded-2xl flex flex-col items-center justify-center">
            <img src={image} alt={name} className="h-55 w-60 object-cover rounded-xl mb-3" />
            <h3 className="text-lg font-bold">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <span className="font-bold">${price}</span>
        </div>
        </Link>
    );
}

export default MenuItemCard;

import { Link } from "react-router-dom";
function Navbar() {
    
    return (
        <>
            <nav className={`shadow w-full z-50 bg-white text-black`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="hidden md:flex gap-8 text-gray-700 font-bold">
                        <Link to="/" className="hover:text-red-500">Home</Link>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/menus" className="hover:text-red-500">Menus</Link>
                    </div>



                    <div className="hidden md:flex gap-8 text-gray-700 font-bold">
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                        <Link to="/order" className="hover:text-red-500">Order</Link>
                        <Link to="/cart" className="hover:text-red-500">Cart</Link>
                    </div>

                    <button className="md:hidden p-2 border rounded-lg">
                        ☰
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
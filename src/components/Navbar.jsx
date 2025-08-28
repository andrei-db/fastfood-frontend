import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="fixed top-5 left-0 w-full z-50 text-black">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="hidden md:flex gap-8 text-gray-700 font-bold">
                        <Link to="/" className="hover:text-red-500">Home</Link>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/menus" className="hover:text-red-500">Menus</Link>
                    </div>

                    <Link to="/" className="text-xl font-bold">
                        Burgerino
                    </Link>

                    <div className="hidden md:flex gap-8 text-gray-700 font-bold">
                        <Link to="/order" className="hover:text-red-500">Order</Link>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>

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
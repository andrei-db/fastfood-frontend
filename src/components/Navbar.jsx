import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="fixed top-5 left-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="hidden md:flex gap-6 text-gray-700 font-bold">
                        <Link to="/" className="hover:text-red-500">Home</Link>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/menus" className="hover:text-red-500">Menus</Link>
                    </div>

                    <Link to="/" className="text-5xl font-bold text-red-500">
                        FlavorTown
                    </Link>

                    <div className="hidden md:flex gap-6 text-gray-700 font-bold">
                        <Link to="/" className="hover:text-red-500">Order</Link>
                        <Link to="/menu" className="hover:text-red-500">Contact</Link>

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
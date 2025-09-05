import { Link } from "react-router-dom";
import { Phone, Facebook, Instagram, Youtube, MapPin, CalendarClock } from "lucide-react"
function Navbar() {

    return (
        <>
            <nav className={`shadow w-full z-50 bg-white text-black`}>
                <div className="max-w-full mx-auto bg-green-900 text-gray-200 px-10 py-2 flex justify-between items-center">
                    <div className="flex text-sm font-light">
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 text-red-300"/>
                            <span className="ms-1">30 Lionel Messi, Miami, USA</span>
                        </div>
                        
                        <div className="flex items-center ms-10">
                            <CalendarClock className="w-4 h-4 text-red-300"/>
                            <span className="ms-1">Opening Hour: Mon to Sat - 9am to 5pm</span>
                        </div>
 
 
                    </div>
                    <div className="flex text-sm font-light">
                        <div className="flex items-center me-3">
                            <Phone className="w-4 h-4 text-red-300" />
                            <span className="ms-2">+40792534543634</span>
                        </div>
                        |
                        <div className="ms-3 flex gap-2">
                            <div className="">
                                <Facebook className="cursor-pointer text-white border rounded-full p-1
                                 hover:bg-white hover:text-black" />
                            </div>
                            <div className="">
                                <Instagram className="text-white border rounded-full p-1
                                hover:bg-white hover:text-black" />
                            </div>
                            <div className="">
                                <Youtube className="text-white border rounded-full p-1
                                hover:bg-white hover:text-black" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-full mx-auto px-10 py-4 flex justify-between items-center">
                    <div className="hidden md:flex gap-8 text-gray-700 font-bold">
                        <Link to="/" className="hover:text-red-500">Home</Link>
                        <Link to="/about" className="hover:text-red-500">About</Link>
                        <Link to="/contact" className="hover:text-red-500">Contact</Link>
                    </div>
                    <div className="hidden md:flex gap-8 text-gray-700 font-bold">
                        <Link to="/order" className="text-red-500 hover:text-red-700">Order Online</Link>
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
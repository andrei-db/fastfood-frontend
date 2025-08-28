import { Link } from "react-router-dom";
function Footer() {
    return (
        <>
            <footer className="py-15">
                <div className="flex flex-col justify-center items-center mb-20">
                    <h2 className="flex text-3xl border-b-3 mb-10">Subscribe Now</h2>
                    <div className="flex justify-center">
                        <p className="text-xl w-70 me-5">Subscribe now to receive fresh deals & offers by email.</p>
                        <div className="flex">
                            <input className="bg-gray-500 w-md rounded me-2" type="email"></input>
                            <button>Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-4">Burgerino</h2>
                        <p className="text-sm">
                            Serving delicious food made with love ❤️.
                            Come taste the difference today!
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-red-400">Home</Link></li>
                            <li><Link to="/menus" className="hover:text-red-400">Menus</Link></li>
                            <li><Link to="/about" className="hover:text-red-400">About</Link></li>
                            <li><Link to="/contact" className="hover:text-red-400">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
                        <p>123 Burger Street, Food City</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: hello@burgerino.com</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                   © {new Date().getFullYear()} andreidb. All rights reserved.
                </div>
            </footer>
        </>
    );
}
export default Footer;
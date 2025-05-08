import { Link } from "@inertiajs/react";
import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-white text-gray-800 border-t overflow-hidden">
            {/* Main Footer Content */}
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_1fr_1.5fr] gap-8">
                {/* Brand */}
                <div>
                    <img
                        src="/images/logo-color.svg"
                        className="h-6 mb-4"
                        alt="Logo"
                    />
                    <div className="flex gap-3 text-black text-lg mb-3">
                        <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors duration-300" size={18} />
                        <FaTwitter className="cursor-pointer hover:text-sky-500 transition-colors duration-300" size={18} />
                        <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors duration-300" size={18} />
                        <FaYoutube className="cursor-pointer hover:text-red-500 transition-colors duration-300" size={18} />
                    </div>
                    <p className="text-sm text-gray-500">Kreavoks Digital Agency since 2024</p>
                </div>

                {/* Address */}
                <div className="text-sm break-words">
                    <p className="font-semibold mb-3">Alamat</p>
                    <p className="text-gray-500">Gedung Wisma Mulia 2</p>
                    <p className="text-gray-500">Gatot Soebroto Jakarta Selatan</p>
                    <div className="flex items-center gap-2 mt-2 text-gray-500">
                        <Mail size={16} /> <span>lorem@ipsum.io</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-gray-500">
                        <Phone size={16} /> <span>+62 00000000</span>
                    </div>
                </div>

                {/* Menu */}
                <div className="text-sm">
                    <p className="font-semibold mb-3">Menu</p>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">Home</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">Program</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">About us</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Link */}
                <div className="text-sm">
                    <p className="font-semibold mb-3">Link</p>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">Privacy & Policy</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">Term & Service</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">Help Center</Link>
                        </li>
                        <li>
                            <Link href="#" className="text-gray-500 hover:text-blue-500">Testimonial</Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="text-sm">
                    <p className="font-semibold mb-3">Subscribe For Newsletter</p>
                    <form className="flex flex-wrap items-center gap-2 bg-gray-100 px-3 py-2 rounded-full w-full max-w-full">
                        <Mail size={16} className="text-gray-500" />
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="flex-1 min-w-0 bg-transparent text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 cursor-pointer rounded-full text-sm whitespace-nowrap"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="bg-blue-500 text-white text-center p-3 text-sm">
                Copyright <span>{new Date().getFullYear()}</span> ©kreavoks official | Powered by kreavoks official
            </div>
        </footer>
    );
}

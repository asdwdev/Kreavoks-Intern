import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white px-6 md:px-10 py-6 flex justify-between items-center fixed top-0 w-full z-50">
            {/* Logo */}
            <Link href="/" >
                <img src="images/logo-color.svg" className="h-5 md:h-6" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-16">
                <Link href="/" className={`text-lg hover:text-blue-400 ${url === "/" ? "text-blue-400" : "text-gray-800"}`}>Home</Link>
                <Link href="/event" className={`text-lg hover:text-blue-400 ${url === "/event" ? "text-blue-400" : "text-gray-800"}`}>Event</Link>
                <Link href="/services" className={`text-lg hover:text-blue-400 ${url === "/services" ? "text-blue-400" : "text-gray-800"}`}>Services</Link>
                <Link href="/about" className={`text-lg hover:text-blue-400 ${url === "/about" ? "text-blue-400" : "text-gray-800"}`}>About</Link>
                <Link href="/contact" className={`text-lg hover:text-blue-400 ${url === "/contact" ? "text-blue-400" : "text-gray-800"}`}>Contact</Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button onClick={toggleMenu} className="md:hidden text-xl text-gray-500">
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50"
                    onClick={toggleMenu}
                ></div>
            )}

            {/* Mobile Sidebar (bisa discroll) */}
            <div className={`fixed inset-y-0 right-0 w-5/6 bg-[#090c10] shadow-lg transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} overflow-y-auto max-h-screen`}>
                {/* Close Button */}
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu} className="text-white text-xl">
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="flex flex-col items-start space-y-4 px-6 pb-6">
                    <Link href="/" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>Home</Link>
                    <Link href="/event" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/event" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>Event</Link>
                    <Link href="/services" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/services" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>Services</Link>
                    <Link href="/about" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/about" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>About</Link>
                    <Link href="/contact" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/contact" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

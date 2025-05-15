import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`px-5 md:px-8 py-5 flex justify-between items-center sticky top-0 w-full z-50 shadow-none transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-gradient-to-r from-white to-transparent"}`}>
            {/* Logo */}
            <Link href="/" >
                <img src="images/logo-color.svg" className="h-5 md:h-6" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
                <Link href="/" className={`px-4 py-1 rounded-full hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${url === "/" ? "text-blue-500 font-semibold bg-blue-50" : "text-gray-800"}`}>
                    Home
                </Link>
                <Link href="/program" className={`px-4 py-1 rounded-full hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${url === "/program" ? "text-blue-500 font-semibold bg-blue-50" : "text-gray-800"}`}>
                    Program
                </Link>
                <Link href="/portfolio" className={`px-4 py-1 rounded-full hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${url === "/portfolio" ? "text-blue-500 font-semibold bg-blue-50" : "text-gray-800"}`}>
                    Portfolio
                </Link>
                <Link href="/about" className={`px-4 py-1 rounded-full hover:text-blue-500 hover:font-semibold hover:bg-blue-50 ${url === "/about" ? "text-blue-500 font-semibold bg-blue-50" : "text-gray-800"}`}>
                    About us
                </Link>
            </div>

            {/* Languange & Auth */}
            <div className="hidden lg:flex space-x-4">
                {/* Language Selector */}
                <div className="flex items-center space-x-2">
                    <i className="fa-solid fa-language"></i>
                    <span className="text-sm text-gray-600">EN</span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center p-2 space-x-1 bg-blue-50 inset-shadow-sm inset-shadow-gray-400/80 rounded-full">
                    <Link href="#" className="px-3 py-1 rounded-full font-medium text-blue-500 hover:bg-white">
                        Sign up
                    </Link>
                    <Link href="#" className="px-3 py-1 rounded-full font-medium text-white bg-blue-500 hover:bg-blue-600">
                        Sign in
                    </Link>
                </div>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button onClick={toggleMenu} className="lg:hidden text-xl text-gray-500">
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
                    <Link href="/" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>
                        Home
                    </Link>
                    <Link href="/program" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/event" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>
                        Program
                    </Link>
                    <Link href="/portfolio" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/contact" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>
                        Portfolio
                    </Link>
                    <Link href="about" className={`w-full px-2 py-3 text-base hover:text-blue-400 border-b border-white/10 ${url === "/about" ? "text-blue-400" : "text-white"}`} onClick={toggleMenu}>
                        About
                    </Link>
                    
                </div>
            </div>
        </nav>
    );
}

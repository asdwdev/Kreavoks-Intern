import { Link, usePage } from "@inertiajs/react";

export function Footer() {
    const { url } = usePage();
    return (
        <footer className="grid grid-cols-4 space-x-8 px-10 py-6 bg-white">
            {/* Brand */}
            <div>
                <img src="images/logo-color.svg" className="h-5 md:h-6 mb-7" />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-3">
                <p className="text-base md:text-lg font-bold text-gray-800">Quick Links</p>
                <Link href="/" className={`text-lg hover:text-blue-400 ${url === "/" ? "text-blue-400" : "text-gray-800"}`}>Home</Link>
                <Link href="/event" className={`text-lg hover:text-blue-400 ${url === "/event" ? "text-blue-400" : "text-gray-800"}`}>Event</Link>
                <Link href="/services" className={`text-lg hover:text-blue-400 ${url === "/services" ? "text-blue-400" : "text-gray-800"}`}>Services</Link>
                <Link href="/contact" className={`text-lg hover:text-blue-400 ${url === "/contact" ? "text-blue-400" : "text-gray-800"}`}>Contact</Link>
            </div>

            {/* Information */}
            <div className="flex flex-col space-y-3">
                <p className="text-base md:text-lg font-bold text-gray-800">Information</p>
                <Link href="#" className={`text-lg hover:text-blue-400 ${url === "/" ? "text-blue-400" : "text-gray-800"}`}>Privacy & Policy</Link>
                <Link href="#" className={`text-lg hover:text-blue-400 ${url === "/event" ? "text-blue-400" : "text-gray-800"}`}>Term & Conditions</Link>
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-3">
                <p className="text-base md:text-lg font-bold text-gray-800">Social Links</p>
                <Link href="#" className="flex items-center justify-center bg-blue-500 hover:bg-blue-400 w-9 h-9 rounded-full">
                    <i className="fa-brands fa-instagram text-lg text-white"></i>
                </Link>
            </div>
        </footer>
    )
}
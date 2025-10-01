import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Arusha Networks</h2>
          <p className="text-sm mt-2">
            Reliable network setup and security solutions for homes and businesses in Arusha.
          </p>
        </div>

        {/* Quick Links */}
        <div>
      <h2 className="text-lg font-semibold">Quick Links</h2>
      <ul className="mt-2 space-y-2 text-sm">
        <li>
          <Link href="/" className="hover:text-yellow-400">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-400">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-yellow-400">
            Services
          </Link>
        </li>
      </ul>
    </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="text-sm mt-2">📞 +255 758 100 137</p>
          <p className="text-sm">✉️ arushanetworks@gmail.com</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-yellow-400">🌐</a>
            <a href="#" className="hover:text-yellow-400">📘</a>
            <a href="#" className="hover:text-yellow-400">🐦</a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-300 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Arusha Networks. All rights reserved.
      </div>
    </footer>
  );
}

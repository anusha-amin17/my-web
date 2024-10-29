import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h3 className="text-white text-lg font-semibold"></h3>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-400">HOME</Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-400">ABOUT</Link>
          </li>
          <li>
            <Link href="/testimonials" className="text-white hover:text-gray-400">TESTIMONIALS</Link>
          </li>
          <li>
            <Link href="/products" className="text-white hover:text-gray-400">PRODUCTS</Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-400">CONTACT US</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Pages where floating buttons should be hidden
  const hideFloating = ["/register", "/coach"];

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur shadow-sm border-b border-gray-200"
            : "bg-transparent backdrop-blur"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-emerald-400 
                            flex items-center justify-center text-white font-bold">
              MC
            </div>
            <div>
              <h1 className="text-lg font-semibold">Modern Clinic</h1>
              <p className="text-xs text-gray-500 -mt-1">Doctor-Guided Hair Regrowth</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/doctor" className="hover:text-indigo-600 transition">About Dr.</Link>
            <Link href="/register" className="hover:text-indigo-600 transition">Book Assessment</Link>
            <Link href="/testimonials" className="hover:text-indigo-600 transition">Testimonials</Link>
            <Link href="/faq" className="hover:text-indigo-600 transition">FAQ</Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
            <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
              <Link href="/doctor" onClick={() => setOpen(false)} className="hover:text-indigo-600">About Dr.</Link>
              <Link href="/register" onClick={() => setOpen(false)} className="hover:text-indigo-600">Book Assessment</Link>
              <Link href="/testimonials" onClick={() => setOpen(false)} className="hover:text-indigo-600">Testimonials</Link>
              <Link href="/faq" onClick={() => setOpen(false)} className="hover:text-indigo-600">FAQ</Link>
            </div>
          </div>
        )}
      </header>

      {/* FLOATING CTA BUTTON — hidden on register & coach */}
      {!hideFloating.includes(pathname) && (
        <Link
          href="/register"
          className="
            fixed bottom-6 left-1/2 -translate-x-1/2 z-50
            bg-gradient-to-br from-indigo-600 to-emerald-500
            text-white font-semibold shadow-xl hover:shadow-2xl transition
            px-6 py-2 text-sm md:px-10 md:py-3 md:text-xl rounded-full
          "
        >
          Book Consultation
        </Link>
      )}

      {/* WHATSAPP BUTTON — hidden on register & coach */}
      {!hideFloating.includes(pathname) && (
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="
            fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full 
            shadow-xl hover:shadow-2xl transition
          "
        >
          <FaWhatsapp size={26} />
        </a>
      )}
    </>
  );
}

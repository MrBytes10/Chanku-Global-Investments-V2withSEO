// B:\mytestProjects\ChankuConstructionsV2\src\components\Navbar.js

"use client"; // Mark the component as a Client Component
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Use `usePathname` instead of `useLocation`

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/projects", label: "Projects" },
    { path: "/clients", label: "Clients" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="text-white relative z-50">
      {/* Desktop menu */}
      <div className="hidden md:flex items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path} // Use `href` instead of `to`
            className={`px-3 py-2 rounded-md text-sm font-medium
              ${
                pathname === item.path // Use `pathname` instead of `location.pathname`
                  ? "bg-[#01aaeb] text-white"
                  : "hover:bg-[#01aaeb] hover:text-white"
              }`}>
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#01aaeb]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-0 w-screen bg-[#020406] z-50">
          <div className="px-12 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path} // Use `href` instead of `to`
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${
                    pathname === item.path // Use `pathname` instead of `location.pathname`
                      ? "bg-[#01aaeb] text-white"
                      : "hover:bg-[#01aaeb] hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

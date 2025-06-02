// B:\mytestProjects\ChankuConstructionsV2\src\components\Footer.js
import React from "react";
//import { Link } from "react-router-dom";
import Link from "next/link";
//import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ChankuGlobal Ltd.</h3>
            <p className="text-gray-400">
              Your trusted partner in quality construction and engineering
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#fed135]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#fed135]">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-[#fed135]">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#fed135]">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/terms" className="text-gray-400 hover:text-[#fed135]">
                  Terms of Service
                </Link>
              </li> */}

              <li>
                <Link
                  href="/privacypolicy"
                  className="text-gray-400 hover:text-[#fed135]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/help-center"
                  className="text-gray-400 hover:text-[#fed135]">
                  Help Center
                </Link>
              </li>
              {/* <li>
                <a href="#" className="text-gray-400 hover:text-[#fed135]">
                  FAQ
                </a>
              </li> */}
            </ul>
          </div>

          {/* Social Media */}
          {/* <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-[#fed135]">
                <Facebook />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-[#fed135]">
                <Twitter />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-[#fed135]">
                <Instagram />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 hover:text-[#fed135]">
                <Youtube />
              </a>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ChankuGlobal Ltd.. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

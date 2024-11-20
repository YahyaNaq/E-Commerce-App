import React from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={cn("w-screen bg-gray-900 text-gray-200 py-8 mt-10", className)}>
      <div className="container mx-auto px-6 space-y-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-white">YourBrand</h2>
            <p className="text-sm">Empowering your journey through technology.</p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Accessibility
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Product</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Subscribe</h3>
            <p className="mt-4 text-sm">
              Get the latest updates and offers.
            </p>
            <div className="mt-4 flex">
              <Input
                type="email"
                placeholder="Your e-mail"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-none !rounded-s-md text-gray-200 focus:outline-none"
              />
              <Button variant="theme" className="rounded-none rounded-e-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2024 YourBrand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

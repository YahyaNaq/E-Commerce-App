import { Button } from "@/components/ui/button"; // ShadCN Button
import { Menu } from "lucide-react"; // Icons for styling
import SearchBar from "@/components/custom/SearchBar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="fixed z-10 w-full bg-teal-700">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Branding / Logo */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="p-2 lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">BrandName</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a href="/" className="hover:scale-105 p-1">
            Home
          </a>
          <a href="/about" className="hover:scale-105 p-1">
            About
          </a>
          <a href="/services" className="hover:scale-105 p-1">
            Services
          </a>
          <a href="/contact" className="hover:scale-105 p-1">
            Contact
          </a>
        </nav>

        {/* Search & Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <SearchBar
            onChange={() => console.log('global search')}
            inputClassname="bg-slate-100"
            placeholder="Search the world"
          />
          {/* Profile Menu */}
          <a className="rounded-full">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" className="h-8 w-8 rounded-full" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

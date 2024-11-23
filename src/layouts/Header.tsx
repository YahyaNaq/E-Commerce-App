import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import CartSheet from "@/components/custom/CartSheet";
import { Sheet } from "@/components/ui/sheet";
import SearchBar from "@/components/custom/SearchBar";

const Header: React.FC<{ sidebarTrigger?: React.ReactNode }> = ({ sidebarTrigger }) => {
	return (
		<header className="fixed z-10 w-full bg-teal-700">
			<div className="container mx-auto flex flex-wrap items-center justify-between p-4 gap-y-2">
				{/* Branding / Logo */}
				<div className="flex items-center space-x-4 order-1">
					<a href="/">
						<h1 className="text-lg sm:text-xl font-bold text-white">BrandName</h1>
					</a>
				</div>

				{/* Navigation */}
				<nav className="flex space-x-8 mx-0 order-4 sm:order-2 text-sm sm:text-base overflow-x-auto">
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

				{/* Search Bar */}
				<div className="order-3 sm:order-3 w-full sm:w-auto">
					<SearchBar
						onChange={() => console.log('global search')}
						inputClassname="bg-slate-100 order-2"
						placeholder="Search the world"
					/>
				</div>

				{/* Search & Profile */}
				<div className="flex flex- items-center gap-x-4 order-2 sm:order-4">
					<div className="order-4 sm:order-1">
						{sidebarTrigger}
					</div>
					<div className="order-3">
						<Sheet>
							<CartSheet />
						</Sheet>
					</div>
					{/* Profile Menu */}
					<a className="rounded-full order-3 sm:order-4">
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

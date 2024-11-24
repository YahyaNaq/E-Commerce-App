import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import CartSheet from "@/components/custom/CartSheet";
import { Sheet } from "@/components/ui/sheet";
import SearchBar from "@/components/custom/SearchBar";
import NavBar from "./NavBar";

const Header: React.FC<{ sidebarTrigger?: React.ReactNode }> = ({ sidebarTrigger }) => {
	return (
		<>
			<header className="fixed z-10 w-full bg-teal-800">
				<div className="container mx-auto flex flex-wrap items-center justify-between px-2 xs:px-3 py-2.5 gap-y-2">
					{/* Branding / Logo */}
					<div className="flex items-center space-x-4 order-1">
						<a href="/">
							<h1 className="text-lg md:text-xl font-bold text-white">BrandName</h1>
						</a>
					</div>

					{/* Search Bar */}
					<div className="order-3 sm:order-2 lg:order-3 w-full sm:w-auto min-w-72 xl:w-[30rem]">
						<SearchBar
							onChange={() => console.log('global search')}
							inputClassname="bg-slate-100 order-2"
							placeholder="Search the world"
						/>
					</div>

					{/* Search & Profile */}
					<div className="flex flex- items-center gap-x-4 order-2 lg:order-4">
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
				<NavBar />
			</header>
		</>
	);
};

export default Header;

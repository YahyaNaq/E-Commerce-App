import React from "react";

const NavBar: React.FC = () => {
	return (
		<nav className="container mx-auto flex space-x-8 pt-1 pb-2 px-3 text-sm md:text-base overflow-x-auto ">
			<a href="/about" className="hover:scale-105 font-normal">
				About
			</a>
			<a href="/services" className="hover:scale-105 font-normal">
				Services
			</a>
			<a href="/contact" className="hover:scale-105 font-normal">
				Contact
			</a>
		</nav>
	);
};

export default NavBar;

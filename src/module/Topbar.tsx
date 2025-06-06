import Link from "next/link";
import React from "react";

const Topbar = () => {
	return (
		<div className="w-screen flex items-center justify-between py-5 px-8 bg-white bg-opacity-50 backdrop-blur-xl">
			<div className="text-2xl font-bold cursor-pointer">Portfolio 🐶</div>

			<div className="flex items-center gap-10">
				{navs.map((nav) => (
					<Link key={nav.name} href={nav.href} className="hover:text-blue-500 transition-all font-medium relative group">
						{nav.name}
                        <span className="group-hover:w-full w-0 transition-all h-[2px] bg-blue-400 absolute -bottom-1 left-0"></span>
					</Link>
				))}
			</div>
		</div>
	);
};

const navs: { name: string; href: string }[] = [
	{ name: "Top", href: "/" },
	{ name: "About", href: "/#about" },
	{ name: "Skills", href: "/#skills" },
	{ name: "Product", href: "/#projects" },
	{ name: "Gallery", href: "/#gallery" },
	{ name: "Contact", href: "/#contact" },
];

export default Topbar;

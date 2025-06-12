import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Topbar = () => {
	return (
		<div className="w-screen flex items-center justify-between py-5 px-8 bg-white bg-opacity-70 backdrop-blur-xl">
			<div className="text-2xl font-bold cursor-pointer">
				Portfolio 🐶
			</div>

			<div className="flex items-center gap-10">
				{navs.map((nav) => (
					<Link
						key={nav.name}
						href={nav.href}
						className="hover:text-blue-500 transition-all font-medium relative group"
					>
						<span>{nav.name}</span>
						<span className="group-hover:w-full w-0 transition-all h-[2px] bg-blue-400 absolute -bottom-1 left-0" />
					</Link>
				))}

				<Link
					href={"https://github.com/namdang0219"}
					target="_blank"
					className="hover:text-blue-500 transition-all font-medium relative hover:scale-105"
				>
					<FaGithub size={35} />
				</Link>
			</div>
		</div>
	);
};

export const navs: { name: string; href: string }[] = [
	{ name: "Top", href: "#header" },
	{ name: "About", href: "#about" },
	{ name: "Products", href: "#products" },
	{ name: "Skills", href: "#skills" },
	// { name: "Gallery", href: "#gallery" },
	{ name: "Contact", href: "#contact" },
];

export default Topbar;

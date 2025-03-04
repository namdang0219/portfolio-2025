import Link from "next/link";
import React, { Fragment, ReactNode } from "react";
import { IoHome } from "react-icons/io5";

const Navigation = () => {
	return (
		<div className="fixed h-10 top-0 z-[1000] w-fit left-1/2 -translate-x-1/2 transition-all rounded-bl-3xl rounded-br-3xl text-slate-100 bg-slate-950 px-8 py-6 flex items-center justify-center gap-6">
			{navigations.map((item) => (
				<Fragment key={item.name}>
					<Link
						href={item.href}
						className="hover:text-pink-500 transition-all"
					>
						{item.name !== "Home" ? item.name : item.icon}
					</Link>
				</Fragment>
			))}
		</div>
	);
};

const navigations: {
	name: string;
	href: string;
	icon?: ReactNode;
}[] = [
	{ name: "About", href: "#about" },
	{ name: "Service", href: "#service" },
	{
		name: "Home",
		href: "/",
		icon: <IoHome size={30} className="text-slate-100" />,
	},
	{ name: "Product", href: "#product" },
	{ name: "Contact", href: "#contact" },
];

export default Navigation;

import Link from "next/link";
import React from "react";

const Topbar = () => {
	return (
		<div className="w-screen flex items-center justify-between py-5 px-8 bg-white bg-opacity-80 backdrop-blur-md">
			<div className="text-2xl font-bold">Portfolio 🐶</div>

			<div className="flex items-center gap-10">
				{navs.map((nav) => (
					<Link key={nav.name} href={nav.href}>
						{nav.name}
					</Link>
				))}
			</div>
		</div>
	);
};

const navs: { name: string; href: string }[] = [
	{ name: "トップ", href: "/" },
	{ name: "私について", href: "/#about" },
	{ name: "スキル", href: "/#skills" },
	{ name: "作品", href: "/#projects" },
	{ name: "連絡", href: "/#contact" },
];

export default Topbar;

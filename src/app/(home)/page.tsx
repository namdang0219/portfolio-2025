import About from "@/module/home/About";
import Header from "@/module/home/Header";
import Product from "@/module/home/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = () => {
	return (
		<div className="relative">
			{/* topbar  */}
			<div className="flex gap-2 items-center h-fit fixed left-10 top-10 z-50">
				<div className="relative w-[72px] h-fit aspect-square">
					<Image
						src="/logo.png"
						alt="logo"
						fill
						sizes="72"
						priority
						className="w-full h-full object-center object-contain"
					/>
				</div>
				<div className="uppercase font-light">
					nam
					<br />
					dang
				</div>
			</div>

			<div className="font-light flex flex-col fixed right-10 top-10 gap-4 transition-all z-50">
				{navigations.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className="block text-right tracking-widest"
					>
						<div className="w-[150px] flex items-center gap-2 group">
							<div className="h-[1px] flex-1 bg-gray-800 group-hover:bg-primary opacity-0 group-hover:opacity-100" />

							<span className="group-hover:text-primary">
								{item.label}
							</span>
						</div>
					</Link>
				))}
			</div>

			{/* header  */}
			<Header />

			<main className="flex flex-col gap-24">
				<Product />

				<About />

				<div className="min-h-screen" />
			</main>
		</div>
	);
};

const navigations: { label: string; href: string }[] = [
	{
		label: "トップ",
		href: "#",
	},
	{
		label: "作品",
		href: "#product",
	},
	{
		label: "技術",
		href: "#tech",
	},
	{
		label: "私について",
		href: "#about",
	},
	{
		label: "コンタクト",
		href: "#contact",
	},
];

export default HomePage;

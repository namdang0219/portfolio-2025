import Footer from "@/module/Footer";
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
						className="block ml-auto w-fit tracking-widest relative group"
					>
						<span className="">{item.label}</span>

						<div className="absolute w-0 bg-gray-500 -bottom-1 transition-all duration-300 left-0 h-[1px] group-hover:w-full"></div>
					</Link>
				))}
			</div>

			{/* header  */}
			<Header />

			<main className="flex flex-col gap-24">
				<Product />

				<About />

				<Footer />

				{/* <div className="min-h-screen" /> */}
			</main>
		</div>
	);
};

const navigations: { label: string; href: string }[] = [
	{
		label: "トップ",
		href: "#top",
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

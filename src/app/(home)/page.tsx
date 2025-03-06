import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import HeaderNavigation from "@/module/HeaderNavigation";
import About from "@/module/home/About";
import Header from "@/module/home/Header";
import Product from "@/module/home/Product";
import React from "react";

const HomePage = () => {
	return (
		<div className="relative">
			{/* topbar - ele is fixed  */}
			<HeaderLogo />
			<HeaderNavigation navigations={navigations} />

			{/* header  */}
			<Header />

			<main className="flex flex-col gap-24">
				<Product />
				<About />

				<div id="contact">
					<Footer />
				</div>
			</main>
		</div>
	);
};

const navigations: { label: string; href: string }[] = [
	{
		label: "トップ",
		href: "/#top",
	},
	{
		label: "作品",
		href: "/#product",
	},
	{
		label: "私について",
		href: "/#about",
	},
	{
		label: "コンタクト",
		href: "/#contact",
	},
];

export default HomePage;

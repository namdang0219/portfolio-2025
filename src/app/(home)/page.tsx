import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import React from "react";
import ProductSection from "./ProductSection";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";
import Navigations from "@/components/Navigations";

const HomePage = () => {
	return (
		<div id="#" className="relative">
			{/* topbar - ele is fixed  */}
			<HeaderLogo />
			<Navigations navigations={navigations} />

			{/* first view */}
			<HeroSection />

			<main className="flex flex-col gap-24">
				<ProductSection />

				<AboutSection />

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

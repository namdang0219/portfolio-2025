"use client";
import About from "@/module/home/About";
import Contact from "@/module/home/Contact";
import Product from "@/module/home/Product";
import Service from "@/module/home/Service";
import Topbar from "@/module/home/Topbar";
import Navigation from "@/module/Navigation";
import React from "react";


const HomePage = () => {
	return (
		<div className="relative font-inter">
			{/* center navigation  */}
			<Navigation />

			<div>
				{/* header  */}
				<div className="min-h-screen relative">
					{/* topbar  */}
					<Topbar />

					{/* main content  */}
				</div>
				<main className="min-h-screen">
					<About />

					<Service />

					<Product />

					<Contact />
				</main>
			</div>
		</div>
	);
};

export default HomePage;

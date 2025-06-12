"use client";
import React from "react";
import Topbar from "../../module/Topbar";
import HomeHeader from "@/module/HomeHeader";
import HomeAbout from "@/module/HomeAbout";
import HomeProducts from "@/module/HomeProducts";
import Footer from "@/module/Footer";
import ProductPage from "./ProductPage";
import HomeSkills from "@/module/HomeSkills";
// import HomeGallery from "@/module/HomeGallery";
import HomeContact from "@/module/HomeContact";
import { DATA, Product } from "@/data/DATA";

const HomePage = () => {
	const [showDetail, setShowDetail] = React.useState(false);
	const [currentProduct, setCurrentProduct] = React.useState<Product>(
		DATA.PRODUCTS[0]
	);

	return (
		<div className="h-screen w-screen overflow-hidden relative">
			<div className="relative pt-16 flex flex-col gap-40 h-screen overflow-y-scroll">
				<div className="fixed top-0 left-0 w-full z-50">
					<Topbar />
				</div>

				<HomeHeader />

				<HomeAbout />

				<HomeProducts
					setShowDetail={setShowDetail}
					setCurrentProduct={setCurrentProduct}
				/>

				<HomeSkills />

				{/* <HomeGallery /> */}

				<HomeContact />

				<Footer />
			</div>

			{/* bottom sheet */}
			{currentProduct && (
				<div
					className="absolute w-screen h-screen left-0 bg-white z-50 transition-all duration-300"
					style={{ bottom: showDetail ? "0" : "-100%" }}
				>
					<ProductPage
						setShow={setShowDetail}
						product={currentProduct}
					/>
				</div>
			)}
		</div>
	);
};

export default HomePage;

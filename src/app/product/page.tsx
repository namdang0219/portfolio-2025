/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import ProductList from "@/components/list/ProductList";
import SectionTitle from "@/components/SectionTitle";
import { products } from "@/data/products";
import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import { ProductType } from "@/types/ProductType";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

// const navigations: NavigationType[] = [
// 	{
// 		label: "フロントエンド",
// 		href: "/product/#frontend",
// 	},
// 	{
// 		label: "モバイルアプリ",
// 		href: "/product/#mobileapp",
// 	},
// 	{
// 		label: "バックエンド",
// 		href: "/product/#backend",
// 	},
// ];

const ProductPage = () => {
	const [currentType, setCurrentType] =
		useState<ProductType["type"]>("frontend");
	const { push } = useRouter();

	useEffect(() => {
		switch (currentType) {
			case "frontend":
				push("/product/#frontend");
				break;
			case "mobile":
				push("/product/#mobileapp");
				break;
			case "backend":
				push("/product/#backend");
				break;
			default:
				break;
		}
	}, [currentType, push]);

	const renderCategoryContent = (type: ProductType["type"] | "all") => {
		switch (type) {
			case "frontend":
				return "フロントエンド";
			case "mobile":
				return "モバイル";
			case "backend":
				return "バックエンド";
			default:
				break;
		}
	};

	return (
		<div className="relative">
			<HeaderLogo canGoBack />
			{/* <Navigations navigations={navigations} /> */}

			<main className="flex flex-col">
				<div className="pt-[100px] container relative">
					{/* pick category  */}
					<div className="flex items-center gap-2 fixed left-1/2 -translate-x-1/2 top-12 px-4 rounded-full z-10 w-fit bg-background bg-opacity-40 backdrop-blur-xl py-2">
						{["frontend", "backend", "mobile"].map((t, idx) => (
							<button
								key={idx}
								onClick={() => setCurrentType(t as any)}
								className={`${
									currentType === t
										? "text-white bg-primary"
										: "text-slate-400 bg-transparent transition-all hover:bg-slate-100"
								} px-4 py-2 rounded-md`}
							>
								{renderCategoryContent(t as any)}
							</button>
						))}
					</div>

					<div className="flex flex-col gap-28 mt-14">
						<div id="frontend" className="scroll-m-32">
							<SectionTitle
								title="フロントエンド"
								subTitle="Frontend"
							/>

							<ProductList
								products={products.filter(
									(p) => p.type === "frontend"
								)}
							/>
						</div>

						<div id="mobileapp" className="scroll-m-32">
							<SectionTitle
								title="モバイルアプリ"
								subTitle="Mobile App"
							/>

							<ProductList
								products={products.filter(
									(p) => p.type === "mobile"
								)}
							/>
						</div>

						<div id="backend" className="scroll-m-32">
							<SectionTitle
								title="バックエンド"
								subTitle="Backend"
							/>

							<ProductList
								products={products.filter(
									(p) => p.type === "backend"
								)}
							/>
						</div>
					</div>
				</div>

				{/* <Spacer /> */}

				<div id="contact" className="mt-28">
					<Footer />
				</div>
			</main>
		</div>
	);
};

export default ProductPage;

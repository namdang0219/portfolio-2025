"use client";

import ProductList from "@/components/list/ProductList";
import Navigations from "@/components/Navigations";
import SectionTitle from "@/components/SectionTitle";
// import Spacer from "@/components/Spacer";
import Footer from "@/module/Footer";
import HeaderLogo from "@/module/HeaderLogo";
import { NavigationType } from "@/types/NavigationType";
import React, { useState } from "react";

const navigations: NavigationType[] = [
	{
		label: "フロントエンド",
		href: "/product/#frontend",
	},
	{
		label: "モバイルアプリ",
		href: "/product/#mobileapp",
	},
	{
		label: "バックエンド",
		href: "/product/#backend",
	},
];

export const categories = [
	"all",
	"lesson",
	"work",
	"project",
	"training",
] as const;


const ProductPage = () => {
	const [currentCategory, setCurrentCategory] =
		useState<(typeof categories)[number]>("all");

	const renderCategoryContent = (category: string) => {
		switch (category) {
			case "all":
				return "すべて";
			case "lesson":
				return "学校の授業";
			case "work":
				return "学校の作品";
			case "project":
				return "自分の作品";
			case "training":
				return "自分の練習";

			default:
				break;
		}
	};

	return (
		<div className="relative">
			<HeaderLogo canGoBack />
			<Navigations navigations={navigations} />

			<main className="flex flex-col">
				<div className="pt-[100px] container relative">
					{/* pick category  */}
					<div className="flex items-center gap-2 fixed left-1/2 -translate-x-1/2 top-12 px-4 rounded-full z-10 w-fit bg-background bg-opacity-40 backdrop-blur-xl py-2">
						{categories.map((c, idx) => (
							<button
								key={idx}
								onClick={() => setCurrentCategory(c)}
								className={`${
									currentCategory === c
										? "text-white bg-primary"
										: "text-slate-400 bg-transparent transition-all hover:bg-slate-100"
								} px-4 py-2 rounded-md`}
							>
								{renderCategoryContent(c)}
							</button>
						))}
					</div>

					<div className="flex flex-col gap-28 mt-14">
						<div id="frontend" className="scroll-m-32">
							<SectionTitle
								title="フロントエンド"
								subTitle="Frontend"
							/>

							<ProductList products={Array(4).fill(null)} />
						</div>

						<div id="mobileapp" className="scroll-m-32">
							<SectionTitle
								title="モバイルアプリ"
								subTitle="Mobile App"
							/>

							<ProductList products={Array(3).fill(null)} />
						</div>

						<div id="backend" className="scroll-m-32">
							<SectionTitle
								title="バックエンド"
								subTitle="Backend"
							/>

							<ProductList products={Array(1).fill(null)} />
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

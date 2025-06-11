import RevealOnScroll from "@/components/RevealOnScroll";
import { DATA, Product } from "@/data/DATA";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const HomeProducts = ({
	setShowDetail,
	setCurrentProduct,
}: {
	setShowDetail: Dispatch<SetStateAction<boolean>>;
	setCurrentProduct: Dispatch<SetStateAction<Product>>;
}) => {
	return (
		<div
			id="products"
			className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5 scroll-m-24 cursor-pointer"
		>
			<h2 className="text-4xl font-semibold">Products</h2>
			<div className="grid grid-cols-2 gap-4">
				{DATA.PRODUCTS.map((product, index) => (
					<RevealOnScroll
						key={product.id}
						// delay={index < 3 ? index * 0.2 : index * 0.1}
						delay={index * 0.2}
					>
						<div
							onClick={() => {
								setShowDetail(true);
								setCurrentProduct(product);
							}}
							className="bg-white p-3 flex flex-col justify-between shadow-md w-full h-full rounded-3xl cursor-pointer group"
						>
							<div>
								<div className="relative w-full aspect-video mb-4 overflow-hidden rounded-xl">
									<Image
										src={
											product.image ||
											"https://i.pinimg.com/736x/3b/78/6f/3b786fa79282a6465379cb97a9ba4060.jpg"
										}
										alt="product-cover"
										fill
										className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 ease-in-out"
									/>
								</div>
								<div className="flex flex-col gap-2 px-2 mb-2">
									<h3 className="text-xl font-medium">
										{product.title || "Placeholder Title"}
									</h3>
									<p className="text-gray-400 line-clamp-2">
										{product.short_description ||
											"Placeholder Desc"}
									</p>
								</div>
								<div className="flex items-center gap-2 flex-wrap px-2">
									<span className="text-blue-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width={20}
											height={20}
											viewBox="0 0 24 24"
										>
											<path
												fill="currentColor"
												d="M11.172 2a3 3 0 0 1 2.121.879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1-4.822 0l-7.71-7.71A3 3 0 0 1 2 11.172V6a4 4 0 0 1 4-4zM7.5 5.5a2 2 0 0 0-1.995 1.85L5.5 7.5a2 2 0 1 0 2-2"
											></path>
										</svg>
									</span>
									{product.tags.length > 0 &&
										product.tags.map((tag) => (
											<div
												key={tag}
												className="text-sm px-4 py-2 bg-gray-100 rounded-md"
											>
												{tag}
											</div>
										))}
								</div>
							</div>
						</div>
					</RevealOnScroll>
				))}
			</div>
		</div>
	);
};

export default HomeProducts;

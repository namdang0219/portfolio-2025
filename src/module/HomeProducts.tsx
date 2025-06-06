import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

const HomeProducts = ({
	setShowDetail,
}: {
	setShowDetail: Dispatch<SetStateAction<boolean>>;
}) => {
	return (
		<div
			id="products"
			className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5 scroll-m-24"
		>
			<h2 className="text-4xl font-semibold">Products</h2>
			<div className="grid grid-cols-3 gap-4">
				{Array.from({ length: 6 }).map((_, index) => (
					<RevealOnScroll
						key={index}
						// delay={index < 3 ? index * 0.2 : index * 0.1}
						delay={index * 0.2}
					>
						<div
							onClick={() => setShowDetail(true)}
							className="bg-white p-3 shadow-md rounded-3xl"
						>
							<div className="relative w-full aspect-square mb-4">
								<Image
									src={
										"https://i.pinimg.com/736x/3b/78/6f/3b786fa79282a6465379cb97a9ba4060.jpg"
									}
									alt="product-cover"
									fill
									className="w-full h-full object-cover object-center rounded-xl"
								/>
							</div>
							<div className="flex flex-col gap-2 px-2">
								<h3 className="text-xl font-medium">
									Example Product Title
								</h3>
								<p className="text-gray-400 line-clamp-2">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam, voluptatum.
								</p>
								<div className="flex items-center gap-2 flex-wrap">
									{["React", "Next.js", "Tailwind CSS"].map(
										(tag) => (
											<div
												key={tag}
												className="text-sm px-4 py-2 bg-gray-100 rounded-md"
											>
												{tag}
											</div>
										)
									)}
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

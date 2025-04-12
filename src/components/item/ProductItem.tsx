"use client";

import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductItem = ({ item }: { item: ProductType }) => {
	const route = useRouter();

	return (
		<div
			onClick={() => route.push(`/product/${item?.product_id}`)}
			className="transition-all duration-500 shadow-2xl cursor-pointer group shadow-slate-200 hover:shadow-slate-300 hover:scale-105"
		>
			<div className="relative w-full aspect-[3/2] overflow-hidden">
				<Image
					src={item?.banner}
					alt="product-img"
					fill
					className="object-cover object-center w-full h-full"
				/>

				<div className="absolute bottom-0 px-6 py-3 text-sm font-light duration-300 delay-75 -translate-x-1/2 bg-white rounded-full shadow-xl opacity-0 scale-65 group-hover:bottom-4 group-hover:opacity-100 group-hover:scale-100 left-1/2">
					{`${item?.when}・${item?.time}`}
				</div>
			</div>

			<div className="px-5 py-3">
				<div className="text-sm mb-2">
					<span className="mr-4 font-light text-primary">
						{item?.teamsize === "1人"
							? "個人制作"
							: `${item?.teamsize}のチーム制作`}
					</span>
					<span className="text-gray-400 font-extralight">
						{item?.role}
					</span>
				</div>

				<p className="text-lg font-medium transition-all leading-relaxed text-slate-700 w-fit">
					{item?.title}
				</p>

				{/* tech  */}
				<div className="mt-1 text-sm font-light text-gray-400 line-clamp-1">
					{item?.techs.join(", ")}
				</div>
			</div>
		</div>
	);
};

export default ProductItem;

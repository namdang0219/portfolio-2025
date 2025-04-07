'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ProductItem = () => {
	const route = useRouter()

	return (
		<div onClick={() => route.push('/product/124')} className="transition-all duration-500 shadow-2xl cursor-pointer group shadow-slate-200 hover:shadow-slate-300 hover:scale-105">
			<div className="relative w-full aspect-[3/2] overflow-hidden">
				<Image
					src="https://i.pinimg.com/736x/35/ce/16/35ce16a0c4c1e9632907dc6dfc97187e.jpg"
					alt="product-img"
					fill
					className="object-cover object-center w-full h-full"
				/>

				<div className="absolute bottom-0 px-6 py-3 text-sm font-light duration-300 delay-75 -translate-x-1/2 bg-white rounded-full shadow-xl opacity-0 scale-65 group-hover:bottom-4 group-hover:opacity-100 group-hover:scale-100 left-1/2">
					一年生の前期・2ヶ月
				</div>
			</div>

			<div className="px-5 py-3">
				<div className="text-sm">
					<span className="mr-4 font-light text-primary">
						チーム制作
					</span>
					<span className="text-gray-400 font-extralight">
						{["coding", "design"].join(" / ")}
					</span>
				</div>

				<p className="text-lg font-medium transition-all text-slate-700 w-fit">
					Venus Cinema Dashboard
				</p>

				{/* tech  */}
				<div className="mt-1 text-sm font-light text-gray-400">
					{["React", "React Native", "Firebase"].join(", ")}
				</div>
			</div>
		</div>
	);
};

export default ProductItem;

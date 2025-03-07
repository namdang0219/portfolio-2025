import Button from "@/components/Button";
import Magnet from "@/components/Magnet";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";
import React from "react";

const ProductSection = () => {
	return (
		<div id="product" className="scroll-m-10 container">
			<SectionTitle title="作成したもの" subTitle="Product" />

			{/* product list  */}
			<div className="flex flex-wrap gap-14">
				{Array(4)
					.fill(null)
					.map((_, index) => (
						<div
							key={index}
							className="flex-grow w-[calc(50%-56px)] group shadow-2xl shadow-slate-200 hover:shadow-slate-300 transition-all hover:scale-105 cursor-pointer duration-500"
						>
							<div className="relative w-full aspect-[3/2] overflow-hidden">
								<Image
									src="https://i.pinimg.com/736x/35/ce/16/35ce16a0c4c1e9632907dc6dfc97187e.jpg"
									alt="product-img"
									fill
									className="w-full h-full object-cover object-center"
								/>

								<div className="absolute bottom-0 scale-65 delay-75 opacity-0 group-hover:bottom-4 group-hover:opacity-100 group-hover:scale-100 left-1/2 -translate-x-1/2 px-6 py-3 bg-white rounded-full font-light text-sm duration-300 shadow-xl">
									一年生の前期・2ヶ月
								</div>
							</div>

							<div className="px-5 py-3">
								<div className="text-sm">
									<span className="font-light text-primary mr-4">
										チーム制作
									</span>
									<span className="text-gray-400 font-extralight">
										{["coding", "design"].join(" / ")}
									</span>
								</div>

								<p className="text-lg text-slate-700 w-fit transition-all font-medium">
									Venus Cinema Dashboard
								</p>

								{/* tech  */}
								<div className="text-gray-400 font-light text-sm mt-1">
									{["React", "React Native", "Firebase"].join(
										", "
									)}
								</div>
							</div>
						</div>
					))}
			</div>

			<div className="mt-24 flex justify-center">
				<Magnet>
					<Button text="すべてみる" />
				</Magnet>
			</div>
		</div>
	);
};

export default ProductSection;

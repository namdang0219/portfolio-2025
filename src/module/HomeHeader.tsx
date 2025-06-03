import Image from "next/image";
import React from "react";

const HomeHeader = () => {
	return (
		<div className="p-5">
			<div className="bg-blue-300 rounded-3xl p-10 flex items-center justify-between gap-28">
				<div className="flex flex-col gap-8">
					<h1 className="text-3xl font-semibold text-white">
						Welcome to my portfolio 🐶
					</h1>
					<p className="text-lg text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ea in placeat quasi, sapiente eius rerum, vitae
						explicabo, officiis fugit provident fuga doloribus
						tenetur laboriosam reiciendis saepe. Minus quae tempore
						rem tenetur debitis optio dolorem sequi velit modi et.
						Labore doloribus facere consectetur iste velit soluta
						fuga, consequatur in amet, ut impedit tenetur debitis
						illo ea enim.
					</p>
					<div className="flex items-center gap-6">
						{["View Projects", "Contact Me"].map((item) => (
							<div key={item}>
								<button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
									{item}
								</button>
							</div>
						))}
					</div>
				</div>

				<div className="w-[700px] h-[600px] relative shrink-0">
					<Image
						src={
							"https://i.pinimg.com/736x/c4/e8/4f/c4e84f84f3dc134c22be664f698fb960.jpg"
						}
						alt="hero-img"
						fill
						className="rounded-2xl object-cover object-center w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeHeader;

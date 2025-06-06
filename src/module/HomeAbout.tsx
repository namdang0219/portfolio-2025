import Image from "next/image";
import React from "react";

const HomeAbout = () => {
	return (
		<div
			id="about"
			className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5"
		>
			<h2 className="text-4xl font-semibold">About</h2>
			<div className="flex items-center gap-28">
				<div className="flex flex-col gap-8">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Culpa aperiam aliquid quisquam tempora temporibus ut
						deleniti rerum a, sint ex repellat numquam consequuntur
						iusto explicabo consequatur unde harum eligendi suscipit
						asperiores dolorum nobis blanditiis aspernatur. Porro
						molestiae unde sunt nemo fuga, ab accusamus, officiis,
						expedita suscipit aut itaque explicabo culpa!
					</p>
					<div className="flex items-center gap-6">
						{["詳しく見る", "Githubへ"].map((item) => (
							<div key={item}>
								<button className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
									{item}
								</button>
							</div>
						))}
					</div>
				</div>

				<div className="relative w-[500px] h-[400px] shrink-0">
					<Image
						src={
							"https://i.pinimg.com/736x/35/1a/95/351a951944b5a9c0ce5de0e716f1f6ae.jpg"
						}
						alt="about-img"
						fill
						className="w-full h-full object-cover object-center rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
};

export default HomeAbout;

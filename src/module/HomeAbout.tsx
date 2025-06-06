import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import React from "react";

const HomeAbout = () => {
	return (
		<div
			id="about"
			className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5  scroll-m-24"
		>
			<h2 className="text-4xl font-semibold">About</h2>

			{/* Content */}
			<div className="flex items-center gap-28 mt-5">
				{/* Left container */}
				<RevealOnScroll>
					<div className="flex flex-col gap-8 translate-y-2">
						<h1 className="uppercase text-3xl font-medium px-3 border-l-4 border-l-blue-400">
							Dang xuan nam
						</h1>
						<div className="flex flex-col gap-3 text-justify">
							<p>
								✅
								2001年生まれ、ベトナム出身。現在、ECCコンピュータ専門学校に在学中です。
							</p>
							<p>
								✅
								ベトナム出身、現在24歳で、ECC専門学校に通っています。
								旅行や新しいことを学ぶのが好きです。
							</p>
							<p>
								✅ 主に使用している言語・技術は、
								Web開発ではReactとTypeScript、 モバイル開発ではReact
								NativeとSwiftです。 よろしくお願いします！
							</p>
						</div>
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
				</RevealOnScroll>

				{/* Right Container */}
				<RevealOnScroll delay={0.6}>
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
				</RevealOnScroll>
			</div>
		</div>
	);
};

export default HomeAbout;

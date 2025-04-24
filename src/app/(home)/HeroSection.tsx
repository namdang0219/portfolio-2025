import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import RotatingText from "@/components/RotatingText";
import Button from "@/components/Button";
import Magnet from "@/components/Magnet";

const TOKAngleFont = localFont({ src: "./TOKAngleFREE-VariableVF.ttf" });

const HeroSection = () => {
	return (
		<div
			id="top"
			className="h-screen sm:h-auto flex items-center justify-center flex-col relative"
		>
			{/* image  */}
			<div className="relative rounded-3xl overflow-hidden group">
				{/* <Image /> */}
				<div className="relative rounded-3xl scale-100 aspect-[2/1] header-img-container overflow-hidden group group-hover:scale-105 transition-all duration-500">
					<Image
						src={"/assets/homePage/header.jpg"}
						alt="header-banner"
						fill
						className="w-full h-full object-center object-cover scale-105 group-hover:scale-100 transition-all duration-700"
					/>
				</div>

				<div className="absolute sm:hidden group-hover:opacity-100 duration-500 transition-all opacity-0 bg-opacity-10 inset-0 bg-black flex items-center justify-center">
					<Magnet>
						<Button
							href="/#about"
							text="私について"
							containerClassName="origin-left"
						/>
					</Magnet>
				</div>
			</div>

			{/* large text  */}
			<p
				className={`text-[150px] sm:text-[60px] ${TOKAngleFont.className} flex items-center gap-2 -mt-6`}
			>
				<span>ナム</span>
				<span className="mt-5">
					<Image
						src="/no-moji.png"
						width={50}
						height={50}
						className="sm:scale-50 sm:-mt-3"
						alt="no-moji"
					/>
				</span>
				{/* <br /> */}
				<span>ポートフォリオ</span>
			</p>
			{/* sub text  */}
			<div className="flex flex-col items-center -mt-6">
				<div className="flex items-center gap-4 sm:flex-col">
					<p className="text-xl font-extralight text-slate-800">
						Frontend Engineer with
					</p>
					<div>
						<RotatingText
							texts={["React JS", "React Native"]}
							mainClassName="px-4 bg-cyan-400 w-fit text-white text-2xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg transition-all"
							staggerFrom={"first"}
							initial={{ y: "100%" }}
							animate={{ y: 0 }}
							exit={{ y: "-120%" }}
							staggerDuration={0.025}
							splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
							transition={{
								type: "spring",
								damping: 50,
								stiffness: 1000,
							}}
							rotationInterval={2000}
							animatePresenceMode="wait"
							animatePresenceInitial={false}
						/>
					</div>
				</div>

				<Magnet>
					<div className="mt-8">
						<Button text="作品を見る" href="#product" />
					</div>
				</Magnet>
			</div>

			{/* scroll down  */}
			{/* <div className="scroll-down-button absolute bottom-20 right-16" /> */}

			{/* image  */}
			{/* <div className="absolute bottom-0 right-[200px]">
				<Image
					src="/assets/header/header_01.JPG"
					alt="header-01"
					width={400}
					height={400}
					className="w-[300px] aspect-square"
				/>
			</div> */}
		</div>
	);
};

export default HeroSection;

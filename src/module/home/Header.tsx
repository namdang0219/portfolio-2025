import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import RotatingText from "@/components/RotatingText";
import Button from "@/components/Button";

const TOKAngleFont = localFont({ src: "./TOKAngleFREE-VariableVF.ttf" });

const Header = () => {
	return (
		<div className="h-screen flex items-center justify-center flex-col relative">
			{/* image  */}
			<div className="relative"> 
				{/* <Image /> */}
			</div>

			{/* large text  */}
			<p
				className={`text-[150px] ${TOKAngleFont.className} flex items-center gap-2`}
			>
				<span>ナム</span>
				<span className="mt-5">
					<Image
						src="/no-moji.png"
						width={50}
						height={50}
						alt="no-moji"
					/>
				</span>
				{/* <br /> */}
				<span>ポートフォリオ</span>
			</p>
			{/* sub text  */}
			<div className="flex flex-col items-center -mt-5">
				<div className="flex items-center gap-4">
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

				<div className="mt-8">
					<Button text="作品を見る" href="#product" />
				</div>
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

export default Header;

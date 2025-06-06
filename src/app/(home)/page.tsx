"use client";

import React from "react";
import Topbar from "../../module/Topbar";
import HomeHeader from "@/module/HomeHeader";
import HomeAbout from "@/module/HomeAbout";
import HomeProducts from "@/module/HomeProducts";
import Image from "next/image";
import Footer from "@/module/Footer";
import ProductPage from "./ProductPage";

const HomePage = () => {
	const [showDetail, setShowDetail] = React.useState(false);

	return (
		<div className="h-screen w-screen overflow-hidden relative">
			<div className="relative pt-16 flex flex-col gap-40 h-screen overflow-y-scroll">
				<div className="fixed top-0 left-0 w-full z-50">
					<Topbar />
				</div>
				{/* header */}
				<HomeHeader />
				{/* about */}
				<HomeAbout />
				{/* products */}
				<HomeProducts />
				<div
					id="about"
					className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5"
				>
					<h2 className="text-4xl font-semibold">Skill</h2>
					<div className="bg-white shadow-xl rounded-xl p-8">
						<div className="grid grid-cols-2 gap-10">
							{skills.map((skill, index) => (
								<div
									key={index}
									className={`flex rounded-lg overflow-hidden border bg-${skill.color}`}
									onClick={() => setShowDetail(true)}
								>
									<div
										className={`flex items-center justify-center h-12 w-32 text-white font-medium ${skill.color}`}
									>
										{skill.name}
									</div>
									<div className="flex-1 relative bg-white">
										<div
											className={`h-12 bg-${skill.color} bg-opacity-85`}
											style={{
												width: `${skill.percentage}%`,
											}}
										></div>
										<span className="absolute right-5 text-black top-1/2 -translate-y-1/2">
											{skill.percentage}%
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				{/* gallery */}
				<div id="about" className="flex flex-col gap-10">
					<h2 className="text-4xl font-semibold text-center">
						Gallery
					</h2>
					<div className="slider-container">
						<div className="grid grid-cols-8 grid-rows-4 gap-2 h-[560px] w-[200vw] slider-track">
							<div className="col-span-2 row-span-2 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="row-span-2 col-start-3 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="row-span-2 col-start-1 row-start-3 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="col-span-2 row-span-2 col-start-2 row-start-3 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="row-span-2 col-start-4 row-start-1 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="col-span-2 row-span-2 col-start-4 row-start-3 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="row-span-2 col-start-5 row-start-1 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="col-span-2 row-span-2 col-start-6 row-start-1 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="row-span-2 col-start-6 row-start-3 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="col-span-2 row-span-2 col-start-7 row-start-3 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
							<div className="row-span-2 col-start-8 row-start-1 relative gridItem">
								<Image
									src={
										"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
									}
									alt="gallery-item"
									fill
									className="w-full h-full object-center object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* contact */}
				<div
					id="about"
					className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5"
				>
					<h2 className="text-4xl text-center font-semibold">
						Contact
					</h2>
					<div className="w-full max-w-[1000px] mx-auto flex  items-start gap-12 mt-10">
						<div className="relative w-[250px] aspect-square mt-8">
							<Image
								src={
									"https://i.pinimg.com/736x/e5/83/1b/e5831b6ce2a22e0682aa54eb3f15d43d.jpg"
								}
								alt="contact-img"
								fill
								className="w-full h-full object-center object-cover rounded-full"
							/>
						</div>
						<div className="flex-1">
							<div className="text-2xl text-gray-700 p-6 bg-white w-fit rounded-2xl shadow-lg relative">
								Please contact me if you have any questionns 🌟
								<div className="border-solid border-t-white border-t-[28px] border-x-transparent border-x-[10px] border-b-0 w-3 h-3 absolute -bottom-4 left-0 rotate-45"></div>
							</div>
							<div className="flex flex-col gap-6 mt-14">
								{/* name */}
								<div className="flex flex-col gap-2">
									<label className="text-gray-700 text-xl font-bold">
										Name
									</label>
									<input
										type="text"
										placeholder="Your Name"
										className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								{/* mail */}
								<div className="flex flex-col gap-2">
									<label className="text-gray-700 text-xl font-bold">
										Email
									</label>
									<input
										type="text"
										placeholder="Email"
										className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								{/* mail */}
								<div className="flex flex-col gap-2">
									<label className="text-gray-700 text-xl font-bold">
										Message
									</label>
									<textarea
										placeholder="Message"
										className="border border-gray-300 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
									/>
								</div>
								<button className="px-8 w-fit py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
									送信
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* footer */}
				<Footer />
			</div>

			{/* bottom sheet */}
			<div
				className="absolute w-screen h-screen left-0 bg-white z-50 transition-all"
				style={{ bottom: showDetail ? "0" : "-100%" }}
			>
				<ProductPage setShow={setShowDetail} />
			</div>
		</div>
	);
};

const skills: {
	name: string;
	percentage: number;
	color: string;
}[] = [
	{ name: "HTML", percentage: 80, color: "red-500" },
	{ name: "CSS", percentage: 70, color: "blue-500" },
	{ name: "JavaScript", percentage: 60, color: "yellow-500" },
	{ name: "React", percentage: 85, color: "cyan-500" },
	{ name: "Redux", percentage: 45, color: "violet-500" },
	{ name: "Next.js", percentage: 50, color: "gray-500" },
	{ name: "React Native", percentage: 75, color: "cyan-500" },
	{ name: "TypeScript", percentage: 40, color: "blue-500" },
	{ name: "Tailwind CSS", percentage: 85, color: "teal-500" },
	{ name: "Firebase", percentage: 45, color: "orange-500" },
	{ name: "Swift UI", percentage: 35, color: "orange-500" },
	{ name: "Express JS", percentage: 20, color: "green-500" },
	{ name: "Git Flow", percentage: 50, color: "cyan-500" },
	{ name: "PHP", percentage: 35, color: "blue-500" },
];

export default HomePage;

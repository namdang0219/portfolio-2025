import Image from "next/image";
import React from "react";

const HomeGallery = () => {
	return (
		<div id="gallery" className="flex flex-col gap-10 scroll-m-24">
			<h2 className="text-4xl font-semibold text-center">Gallery</h2>
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
	);
};

export default HomeGallery;

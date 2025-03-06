import Magnet from "@/components/Magnet";
import TiltedCard from "@/components/TiltedCard";
import Link from "next/link";
import React, { ReactNode } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Tooltip } from "antd";
import { GrFacebookOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { colors } from "@/utils/colors";

const Footer = () => {
	return (
		<>
			<div className="py-16 mt-10 flex">
				<div className="flex-1 flex items-center container justify-center flex-col">
					{/* <div className="relative w-[120px] aspect-square mb-4">
						<Image
							src="/logo.png"
							alt="logo"
							fill
							className="w-full h-full object-contain object-center"
						/>
					</div> */}

					<TiltedCard
						imageSrc="/logo.png"
						altText="Kendrick Lamar - GNX Album Cover"
						captionText="Welcome to my portfolio ! 🙋🏻‍♂️"
						containerHeight="200px"
						containerWidth="200px"
						imageHeight="150px"
						imageWidth="150px"
						rotateAmplitude={12}
						scaleOnHover={1.15}
						showMobileWarning={false}
						showTooltip={true}
					/>

					<p className="text-gray-800 font-light text-lg">
						ご覧いただきありがとうございます！
					</p>

					{/* email */}
					<Magnet padding={10} magnetStrength={10}>
						<Link
							href={
								"https://mail.google.com/mail/?view=cm&amp;to=namdang.contact@gmail.com"
							}
							target="_blank"
							className="px-6 py-3 bg-white border block scale-100 transition-all hover:scale-105 border-primary rounded-full hover:bg-primary text-primary hover:text-white mt-5"
						>
							<div className="flex items-center gap-2">
								<IoMailOutline size={24} />
								<span>{"namdang.contact@gmail.com"}</span>
							</div>
						</Link>
					</Magnet>

					{/* sns */}
					<div className="flex items-center gap-4 mt-6">
						{socials.map((s) => (
							<Tooltip
								key={s.label}
								placement="bottom"
								title={s.label}
								color={colors.primary}
								className="scale-100 hover:scale-110 transition-all duration-300"
							>
								<Link href={s.href} className="block">
									<div className="w-14 aspect-square rounded-full flex items-center justify-center border border-primary hover:bg-primary text-primary hover:text-white bg-white">
										{s.icon}
									</div>
								</Link>
							</Tooltip>
						))}
					</div>
				</div>
			</div>
			<small className="text-xs block font-light text-gray-400 text-center my-4">
				&copy; 2025 Dang Xuan Nam. All rights reserved
			</small>
		</>
	);
};

const socials: { label: string; icon: ReactNode; href: string }[] = [
	{
		label: "Github",
		icon: <FaGithub size={28} />,
		href: "/#about",
	},
	{
		label: "Facebook",
		icon: <GrFacebookOption size={28} />,
		href: "/#about",
	},
];

export default Footer;

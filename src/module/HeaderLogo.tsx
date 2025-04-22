"use client";

import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { BsArrowLeft } from "react-icons/bs";

type HeaderLogoProps = {
	canGoBack?: boolean;
};

const HeaderLogo: FC<HeaderLogoProps> = ({ canGoBack }) => {
	return (
		<div className="h-fit fixed left-10 top-10 z-50">
			{!canGoBack ? (
				<Link
					className="flex gap-2 items-center cursor-pointer"
					href={"#"}
				>
					<div className="relative w-[64px] h-fit aspect-square">
						<Image
							src="/logo.png"
							alt="logo"
							fill
							sizes="72"
							priority
							className="w-full h-full object-center object-contain"
						/>
					</div>
					<div className="uppercase tracking-widest font-serif text-sm font-light">
						nam dang
						<br />
						portfolio
					</div>
				</Link>
			) : (
				<Button text="戻る" icon={<BsArrowLeft size={28} />} href="/" />
			)}
		</div>
	);
};

export default HeaderLogo;

"use client";

import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

type ButtonProps = {
	text?: string;
	icon?: React.ReactNode;
	href?: string;
	containerClassName?: string;
};

const Button: React.FC<ButtonProps> = ({
	text = "サンプル",
	icon = <BsArrowRight size={28} />,
	href = "#",
	containerClassName = "",
}) => {
	const ButtonContent = () => {
		return (
			<div
				className={`flex items-center cursor-pointer text-primary gap-4 hover:scale-105 transition-all ${containerClassName}`}
			>
				<div className="w-24 aspect-square rounded-full border border-primary flex items-center justify-center">
					{icon}
				</div>
				<span className="font-light">{text}</span>
			</div>
		);
	};

	return (
		<Link href={href} className={`block`}>
			<ButtonContent />
		</Link>
	);
};

export default Button;

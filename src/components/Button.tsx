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
	return (
		<Link
			href={href}
			className={`block hover:scale-105 transition-all ${containerClassName}`}
		>
			<div className="flex items-center text-primary  gap-4">
				<div className="w-24 aspect-square rounded-full border border-primary flex items-center justify-center">
					{icon}
				</div>
				<span className="font-light">{text}</span>
			</div>
		</Link>
	);
};

export default Button;

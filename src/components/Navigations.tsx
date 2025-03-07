import Link from "next/link";
import React, { FC } from "react";
import { NavigationType } from "../types/NavigationType";

type HeaderNavigationProps = {
	navigations: NavigationType[];
};

const Navigations: FC<HeaderNavigationProps> = ({ navigations }) => {
	return (
		<div className="font-light flex flex-col fixed right-10 top-10 gap-4 transition-all z-50">
			{navigations.map((item, index) => (
				<Link
					key={index}
					href={item.href}
					className="block ml-auto w-fit tracking-widest relative group"
				>
					<span className="">{item.label}</span>

					<div className="absolute w-0 bg-gray-500 -bottom-1 transition-all duration-300 left-0 h-[1px] group-hover:w-full"></div>
				</Link>
			))}
		</div>
	);
};

export default Navigations;

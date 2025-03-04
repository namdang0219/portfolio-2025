import { Tooltip } from "antd";
import Link from "next/link";
import React, { Fragment, ReactNode } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Topbar = () => {
	return (
		<div className="flex items-center z-[100] justify-between absolute container py-2 top-0 left-1/2 -translate-x-1/2">
			{/* logo  */}
			<div className="text-2xl font-bold">
				Persional
				<br />
				Portfolio
			</div>
			{/* right contact  */}
			<div className="flex items-center gap-4">
				{contacts.map((item, index) => (
					<Fragment key={item.name}>
						<Tooltip
							placement={
								index === contacts.length - 1
									? "bottomRight"
									: index === 0
									? "bottomLeft"
									: "bottom"
							}
							title={item.name}
						>
							<Link target="_blank" href={item.href}>
								{item.icon}
							</Link>
						</Tooltip>
					</Fragment>
				))}
			</div>
		</div>
	);
};

const contacts: {
	name: string;
	href: string;
	icon: ReactNode;
}[] = [
	{
		name: "Github",
		href: "https://github.com/namdang0219",
		icon: <FaGithub size={32} />,
	},
	{
		name: "Facebook",
		href: "https://github.com/namdang0219",
		icon: <FaFacebook size={32} />,
	},
	{
		name: "Instagram",
		href: "https://github.com/namdang0219",
		icon: <FaInstagram size={36} />,
	},
];

export default Topbar;

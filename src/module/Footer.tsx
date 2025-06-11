import Link from "next/link";
import React from "react";
import { navs } from "./Topbar";

const Footer = () => {
	return (
		<div className="bg-slate-100 px-20">
			<div className="py-8 flex mx-auto gap-20">
				<div className="flex flex-col gap-2">
					<p className="font-semibold text-2xl">Site map</p>

					<ul className="flex flex-col gap-2">
						{navs.map((item) => (
							<Link key={item.name} href={item.href} className="hover:underline">
								{item.name}
							</Link>
						))}
					</ul>
				</div>

				<div className="flex flex-col gap-2">
					<p className="font-semibold text-2xl">SNS</p>

					<ul className="flex flex-col gap-2">
						{socials.map(item => <Link key={item.name} href={item.href} target="_blank" className="hover:underline">{item.name}</Link>)}
					</ul>
				</div>
			</div>

			<div className="text-sm text-gray-500 py-4">
				<p>© 2025. All rights reserved.</p>
				<p className="text-gray-400">Designed by Nam Dang</p>
			</div>
		</div>
	);
};

const socials = [
	{
		href: "https://github.com/namdang0219",
		name: "Github"
	},
	{
		href: "https://mail.google.com/mail/?view=cm&fs=1&to=namdang.contact@gmail.com",
		name: "Email"
	},
]

export default Footer;

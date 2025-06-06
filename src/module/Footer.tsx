import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<div className="bg-slate-100 px-20">
			<div className="py-8 flex mx-auto gap-20">
				<div className="flex flex-col gap-2">
					<p className="font-semibold text-2xl">Site map</p>

					<ul className="flex flex-col gap-2">
						<li>
							<Link href="/">Top</Link>
						</li>
						<li>
							<Link href="/#about">About</Link>
						</li>
						<li>
							<Link href="/#skills">Skill</Link>
						</li>
						<li>
							<Link href="/#projects">Products</Link>
						</li>
						<li>
							<Link href="/#contact">Contact</Link>
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-2">
					<p className="font-semibold text-2xl">SNS</p>

					<ul className="flex flex-col gap-2">
						<li>
							<Link href="/">Github</Link>
						</li>
						<li>
							<Link href="/#about">Email</Link>
						</li>
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

export default Footer;

import Button from "@/components/Button";
import Image from "next/image";
import React, { FC } from "react";
import { BsArrowLeft } from "react-icons/bs";

type HeaderLogoProps = {
	canGoBack?: boolean;
};

const HeaderLogo: FC<HeaderLogoProps> = ({ canGoBack }) => {
	return (
		<div className="flex gap-2 items-center h-fit fixed left-10 top-10 z-50">
			{!canGoBack ? (
				<>
					<div className="relative w-[72px] h-fit aspect-square">
						<Image
							src="/logo.png"
							alt="logo"
							fill
							sizes="72"
							priority
							className="w-full h-full object-center object-contain"
						/>
					</div>
					<div className="uppercase font-light">
						nam
						<br />
						dang
					</div>
				</>
			) : (
				<Button
					text="戻る"
					icon={<BsArrowLeft size={28} />}
					href="/"
				/>
			)}
		</div>
	);
};

export default HeaderLogo;

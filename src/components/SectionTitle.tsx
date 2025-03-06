import React from "react";
// import ScrollFloat from "./ScrollFloat";

type SectionTitleProps = {
	title?: string;
	subTitle?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
	return (
		<div className="mb-12">
			<span className="text-sm text-primary">{`#${subTitle}`}</span>
			{/* <div className="mt-2 text-[40px]">
				<ScrollFloat>{title}</ScrollFloat>
			</div> */}
			<h2 className="mt-2 text-[40px]">{title}</h2>
		</div>
	);
};

export default SectionTitle;

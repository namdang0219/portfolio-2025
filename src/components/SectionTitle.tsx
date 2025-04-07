import React from "react";
// import ScrollFloat from "./ScrollFloat";

type SectionTitleProps = {
	title?: string;
	subTitle?: string;
	containerClassName?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle, containerClassName }) => {
	return (
		<div className={`mb-12 ${containerClassName}`}>
			<span className="text-sm text-primary">{`#${subTitle}`}</span>
			{/* <div className="mt-2 text-[40px]">
				<ScrollFloat>{title}</ScrollFloat>
			</div> */}
			<h2 className="mt-2 text-[40px]">{title}</h2>
		</div>
	);
};

export default SectionTitle;

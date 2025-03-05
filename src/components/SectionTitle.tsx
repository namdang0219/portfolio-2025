import React from "react";

type SectionTitleProps = {
	title?: string;
	subTitle?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subTitle }) => {
	return (
		<div className="mb-12">
			<span className="text-sm text-primary">{`${subTitle}`}</span>
			<h2 className="mt-2 text-[40px]">{title}</h2>
		</div>
	);
};

export default SectionTitle;

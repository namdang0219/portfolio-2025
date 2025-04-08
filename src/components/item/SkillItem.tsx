import { SkillType } from "@/types/SkillType";
import React from "react";

export type SkillDataType = SkillType["skillList"][number];

const SkillItem = ({
	skillData,
	isLastItem,
	canClick = true,
}: {
	skillData: SkillDataType;
	isLastItem: boolean;
	canClick?: boolean;
}) => {
	return (
		<div className="flex items-center select-none">
			<div
				className={`flex items-center gap-1.5 transition-all hover:bg-slate-100 rounded-lg px-3 py-1 ${
					canClick ? "cursor-pointer" : ""
				}`}
			>
				<span className="text-[30px] leading-none mt-1">
					{skillData.icon}
				</span>
				<span className="text-lg font-light">{skillData.name}</span>
			</div>
			{!isLastItem && (
				<span className="mx-2 font-thin text-slate-600 text-2xl leading-none -mt-0.5">
					/
				</span>
			)}
		</div>
	);
};

export default SkillItem;

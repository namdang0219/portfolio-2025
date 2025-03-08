import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/data/skills";
import { SkillType } from "@/types/SkillType";
import React, { Fragment, useState } from "react";
import { useCollapse } from "react-collapsed";

const SkillSection = () => {
	return (
		<div id="skill" className="py-14 container mt-10">
			<SectionTitle title="スキル" subTitle="Skill" />

			<div>
				{skills.map((s, index) => (
					<Fragment key={index}>
						<SkillListItem
							skillData={s}
							isLastItem={index === skills.length - 1}
						/>	
					</Fragment>
				))}
			</div>
		</div>
	);
};

const SkillListItem = ({
	skillData,
	isLastItem,
}: {
	skillData: SkillType;
	isLastItem: boolean;
}) => {
	const [isExpanded, setExpanded] = useState<boolean>(false);
	const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

	return (
		<div
			className={`py-8 border-b flex gap-10 ${
				isLastItem ? "border-b-transparent" : "border-b-slate-200"
			}`}
		>
			<span className="text-primary w-[200px] mt-3">
				{skillData.category}
			</span>
			<div className="flex-1">
				<div className="flex flex-wrap flex-1">
					{skillData.skillList.map((item, idx) => (
						<div
							key={idx}
							{...getToggleProps({
								onClick: () =>
									setExpanded(
										(prevExpanded) => !prevExpanded
									),
							})}
						>
							<SkillItem
								skillData={item}
								isLastItem={
									idx === skillData.skillList.length - 1
								}
							/>
						</div>
					))}
				</div>

				<div
					{...getCollapseProps()}
					className={`px-2 transition-all delay-300 ${
						isExpanded ? "mt-2" : "mt-0"
					}`}
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Tempora omnis temporibus aliquam laudantium quo distinctio
					voluptate tenetur. Ducimus, eligendi molestias.
				</div>
			</div>
		</div>
	);
};

const SkillItem = ({
	skillData,
	isLastItem,
}: {
	skillData: SkillType["skillList"][number];
	isLastItem: boolean;
}) => {
	return (
		<div className="flex items-center select-none">
			<div className="flex items-center gap-1.5 transition-all hover:bg-slate-100 rounded-lg cursor-pointer px-3 py-1">
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

export default SkillSection;

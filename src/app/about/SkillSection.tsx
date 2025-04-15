import SkillItem from "@/components/item/SkillItem";
import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/data/skills";
import { SkillType } from "@/types/SkillType";
import React, { Fragment } from "react";

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
	// const [isExpanded, setExpanded] = useState<boolean>(false);
	// const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

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
							// {...getToggleProps({
							// 	onClick: () =>
							// 		setExpanded(
							// 			(prevExpanded) => !prevExpanded
							// 		),
							// })}
						>
							<SkillItem
								skillData={item}
								canClick={false}
								isLastItem={
									idx === skillData.skillList.length - 1
								}
							/>
						</div>
					))}
				</div>

				{/* <div
					{...getCollapseProps()}
					className={`px-2 transition-all delay-300 ${
						isExpanded ? "mt-2" : "mt-0"
					}`}
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Tempora omnis temporibus aliquam laudantium quo distinctio
					voluptate tenetur. Ducimus, eligendi molestias.
				</div> */}
			</div>
		</div>
	);
};

export default SkillSection;

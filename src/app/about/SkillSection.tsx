import SectionTitle from "@/components/SectionTitle";
import { skills } from "@/data/skills";
import React from "react";

const SkillSection = () => {
	return (
		<div id="skill" className="py-14 container mt-10">
			<SectionTitle title="スキル" subTitle="Skill" />

			{/* collapse example */}
			<div>
				{/* <button {...getToggleProps()}>
							{isExpanded ? "Collapse" : "Expand"}
						</button>
						<section {...getCollapseProps()}>
							Collapsed content 🙈
						</section> */}
			</div>

			<div>
				{skills.map((s, index) => (
					<div
						key={index}
						className={`flex gap-10 py-8 border-b ${
							index === skills.length - 1
								? "border-b-transparent"
								: "border-b-slate-200"
						}`}
					>
						<span className="text-primary w-[200px] mt-3">
							{s.category}
						</span>

						<div className="flex flex-wrap flex-1">
							{s.skillList.map((item, idx) => (
								<div key={idx} className={`inline-block`}>
									<div className="flex items-center">
										<div className="flex items-center gap-1.5 transition-all hover:bg-slate-100 rounded-lg cursor-pointer px-3 py-1">
											<span className="text-[30px] leading-none mt-1">
												{item.icon}
											</span>
											<span className="text-lg font-light">
												{item.name}
											</span>
										</div>
										{idx !== s.skillList.length - 1 && (
											<span className="mx-2 font-thin text-slate-600 text-2xl leading-none -mt-0.5">
												/
											</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillSection;

import SectionTitle from "@/components/SectionTitle";
import { experiences } from "@/data/experiences";
import React from "react";

const ExperienceSection = () => {
	return (
		<div id="experience" className="bg-slate-50 py-14">
			<div className="container">
				<SectionTitle title="学歴と開発経験" subTitle="Experience" />

				{/* experience main container  */}
				<div>
					{experiences.map((e, index) => (
						<div
							key={index}
							className={`flex py-8 border-b ${
								index === experiences.length - 1
									? "border-b-transparent"
									: "border-b-slate-200"
							}
                                
										`}
						>
							<div className="w-[200px] text-primary">
								{`${e.year}.${String(e.month).padStart(
									2,
									"0"
								)}`}
							</div>

							<div className="flex-1">
								<div className="flex items-end mb-6">
									<h4 className="text-xl font-medium tracking-wider flex-1 text-slate-800">
										{e.title}{" "}
									</h4>
									<span className="text-base font-light ml-2 text-slate-400">
										{e.subtitle}
									</span>
								</div>
								<p className="tracking-[0.2em] text-slate-400 font-light leading-relaxed text-justify">
									{e.content}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;

import React from "react";

const HomeSkills = () => {
	return (
		<div
			id="skills"
			className="flex flex-col gap-10 w-full max-w-[1200px] mx-auto px-5 scroll-m-24"
		>
			<h2 className="text-4xl font-semibold">Skill</h2>
			<div className="bg-white shadow-xl rounded-xl p-8">
				<div className="grid grid-cols-2 gap-10">
					{skills.map((skill, index) => (
						<div
							key={index}
							className={`flex rounded-lg overflow-hidden border bg-${skill.color}`}
						>
							<div
								className={`flex items-center justify-center h-12 w-32 text-white font-medium`}
								style={{ backgroundColor: skill.color }}
							>
								{skill.name}
							</div>
							<div className="flex-1 relative bg-white">
								<div
									className={`h-12`}
									style={{
										width: `${skill.percentage}%`,
										backgroundColor: skill.color,
										opacity: 0.8,
									}}
								></div>
								<span className="absolute right-5 text-black top-1/2 -translate-y-1/2">
									{skill.percentage}%
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

const skills: {
	name: string;
	percentage: number;
	color: string;
}[] = [
	{ name: "HTML", percentage: 80, color: "#EF4444" },
	{ name: "CSS", percentage: 70, color: "#3B82F6" },
	{ name: "JavaScript", percentage: 60, color: "#F59E0B" },
	{ name: "React", percentage: 85, color: "#06b6d4" },
	{ name: "Redux", percentage: 45, color: "#8b5cf6" },
	{ name: "Next.js", percentage: 50, color: "#6b7280" },
	{ name: "React Native", percentage: 75, color: "#06b6d4" },
	{ name: "TypeScript", percentage: 40, color: "#3B82F6" },
	{ name: "Tailwind CSS", percentage: 85, color: "#14b8a6" },
	{ name: "Firebase", percentage: 45, color: "#f97316" },
	{ name: "Swift UI", percentage: 30, color: "#f97316" },
	{ name: "Express JS", percentage: 20, color: "#22c55e" },
	{ name: "Git Flow", percentage: 50, color: "#06b6d4" },
	{ name: "PHP", percentage: 35, color: "#3B82F6" },
];

export default HomeSkills;
